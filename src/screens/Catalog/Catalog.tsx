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
  useEffect(() => {
    getBurgers().then(({ data }) => {
      const mappedData = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }));
      setBurgers(mappedData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  const addNewBurger = (burger: BurgerProps): void => {
    setBurgers([...burgers, burger]);
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
  };

  return (
    <>
      <CustomModal isOpen={isModalOpen} label="Burger Builder">
        <div>
          <div onClick={(): void => setIsModalOpen(false)}>close</div>
          <BurgerBuilder
            addBurger={addNewBurger}
            updateBurger={updateBurger}
            ingredientsSet={selectedBurger?.ingredients}
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
                  <Burger ingredients={ingredients} name={name} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CustomButton
                      isDisabled={false}
                      onClick={() => {
                        setSelectedBurger(burger);
                        setIsModalOpen(true);
                      }}
                    >
                      Edit
                    </CustomButton>
                    <CustomButton
                      isDisabled={false}
                      onClick={() => {
                        removeBurger(id);
                      }}
                    >
                      remove
                    </CustomButton>
                  </div>
                </div>
              </BurgerWrapper>
            </Grid>

            <Grid xs={12} sm={6}>
              <div>
                <BurgerDetailsTable ingredients={ingredients} />
              </div>
            </Grid>
          </Grid>
        );
      })}

      <div style={{ position: 'fixed', bottom: '5%', right: '10%' }}>
        <CustomButton
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
