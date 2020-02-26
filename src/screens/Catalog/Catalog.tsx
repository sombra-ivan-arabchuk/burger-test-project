import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { deleteBurger, getBurgers } from '../../utils/firebase';
import Burger from '../../components/Burger/Burger';
import CustomModal from '../../components/Modal/Modal';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import CustomButton from '../../components/CustomButton/CustomButton';
import BurgerDetailsTable from '../../components/BurgerDetailsTable/BurgerDetailsTable';
import { Grid } from '@material-ui/core';
import { useNetwork } from '../../hooks';

export interface BurgerIngredients {
  [key: string]: number;
}

export interface BurgerProps {
  ingredients: BurgerIngredients;
  name?: string;
  id?: string;
}

const Catalog = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isOnline } = useNetwork();
  const [burgers, setBurgers] = React.useState<Array<BurgerProps>>([]);
  const [
    selectedBurger,
    setSelectedBurger,
  ] = React.useState<BurgerProps | null>(null);
  useEffect((): (() => void) => {
    const interval = setInterval(
      () => {
        getBurgers()
          .then(({ data = {} }) => {
            const resData = data || {};

            const mappedData = Object.keys(resData)
              .filter(key => !burgers.some(burger => burger.id === key))
              .map(key => ({
                ...data[key],
                id: key,
              }));
            setBurgers(burgers.concat(mappedData));
          })
          .catch(err => console.log(err));
      },
      burgers.length === 0 ? 1000 : 5000,
    );

    return (): void => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline, burgers]);

  useEffect(() => {
    // set burgers into local storage when we got offline
    if (!isOnline) {
      const storedBurgers = localStorage.getItem('burgers') || '[]';
      localStorage.setItem('burgers', JSON.stringify(burgers));
      setBurgers(JSON.parse(storedBurgers));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  const addNewBurger = (burger: BurgerProps): void => {
    setBurgers([...burgers, burger]);
    setIsModalOpen(false);
    setSelectedBurger(null);
  };

  const removeBurger = (id: string | undefined): void => {
    deleteBurger(id).then(() => {
      const filteredBurgers = burgers.filter(burger => burger.id !== id);
      setBurgers(filteredBurgers);
    });
  };

  const updateBurger = (updatedBurger: BurgerProps): void => {
    const slicedBurgers = burgers.filter(
      burger => burger.id !== selectedBurger?.id,
    );
    setBurgers([
      ...slicedBurgers,
      { ...updatedBurger, id: selectedBurger?.id },
    ]);
    setSelectedBurger(null);
    setIsModalOpen(false);
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
            addBurger={addNewBurger}
            updateBurger={updateBurger}
            ingredientsSet={selectedBurger?.ingredients}
            burgerName={selectedBurger?.name}
            id={selectedBurger?.id}
          />
        </div>
      </CustomModal>

      {burgers.map((burger: BurgerProps) => {
        const { ingredients, name, id } = burger;
        return (
          <Grid container>
            <Grid item xs={12} sm={6}>
              <BurgerWrapper>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                  }}
                >
                  <Burger
                    ingredients={ingredients}
                    name={name}
                    data-testid={name}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CustomButton
                      style={{ marginBottom: '10px' }}
                      testId={`${name}-update`}
                      isDisabled={false}
                      onClick={(): void => {
                        setSelectedBurger(burger);
                        setIsModalOpen(true);
                      }}
                    >
                      Edit
                    </CustomButton>
                    <CustomButton
                      testId={`${name}-delete`}
                      isDisabled={false}
                      onClick={(): void => {
                        removeBurger(id);
                      }}
                    >
                      remove
                    </CustomButton>
                  </div>
                </div>
              </BurgerWrapper>
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

const BurgerWrapper = styled.div`
  -webkit-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);
  margin: 10px;

  height: 300px;
  text-align: center;
  font-weight: bold;
  fontsize: 1.2rem;
  max-width: 450px;
`;

export default Catalog;
