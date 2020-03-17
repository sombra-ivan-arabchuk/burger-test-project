import React, { FC, useEffect, useState } from 'react';
import CustomModal from '../../components/Modal/Modal';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import CustomButton from '../../components/CustomButton/CustomButton';
import BurgerDetailsTable from '../../components/BurgerDetailsTable/BurgerDetailsTable';
import { Grid } from '@material-ui/core';
import { useNetwork } from '../../hooks';
import BurgerContainer from '../../components/BurgerContainer/BurgerContainer';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeBurger,
  setBurgers,
  storeBurgers,
} from '../../store/actions/burger';

export interface BurgerIngredients {
  [key: string]: number;
}

export interface BurgerProps {
  ingredients: BurgerIngredients;
  name?: string;
  id?: string;
}

const Catalog: FC = (): React.ReactElement => {
  const burgers = useSelector(
    (state: { brg: { burgers: BurgerProps[] } }) => state.brg.burgers,
  );
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isOnline } = useNetwork();
  const [
    selectedBurger,
    setSelectedBurger,
  ] = React.useState<BurgerProps | null>(null);
  useEffect((): (() => void) => {
    const interval = setInterval(
      () => {
        dispatch(storeBurgers());
      },
      burgers.length === 0 ? 1000 : 5000,
    );

    return (): void => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline, burgers]);

  useEffect(() => {
    if (burgers.length > 0) {
      localStorage.setItem('burgers', JSON.stringify(burgers));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [burgers]);

  useEffect(() => {
    if (!isOnline) {
      dispatch(setBurgers(JSON.parse(localStorage.getItem('burgers') || '[]')));
    }
  }, [isOnline]);

  const deleteBurger = (id: string | undefined): void => {
    dispatch(removeBurger(id));
  };

  const onEditBurger = (burger: BurgerProps): void => {
    setSelectedBurger(burger);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBurger(null);
  };

  return (
    <>
      <CustomModal isOpen={isModalOpen} label="Burger Builder">
        <div>
          <div
            onClick={(): void => {
              setIsModalOpen(false);
              setSelectedBurger(null);
            }}
          >
            close
          </div>
          <BurgerBuilder
            ingredientsSet={selectedBurger?.ingredients}
            burgerName={selectedBurger?.name}
            id={selectedBurger?.id}
            closeModal={closeModal}
          />
        </div>
      </CustomModal>

      {burgers.map((burger: BurgerProps) => {
        const { ingredients, id } = burger;
        return (
          <Grid container>
            <Grid item xs={12} sm={6}>
              <BurgerContainer
                burger={burger}
                key={id}
                onEdit={onEditBurger}
                onDelete={(): void => {
                  deleteBurger(id);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: '10px' }}>
                <BurgerDetailsTable ingredients={ingredients} />
              </div>
            </Grid>
          </Grid>
        );
      })}

      <div style={{ position: 'fixed', bottom: '5%', right: '10%' }}>
        <CustomButton
          testId={'openBuilder'}
          onClick={(): void => setIsModalOpen(true)}
          isDisabled={false}
        >
          open builder
        </CustomButton>
      </div>
    </>
  );
};

export default Catalog;
