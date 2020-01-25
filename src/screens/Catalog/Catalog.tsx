import React, { useEffect } from 'react';

import { getIngredientById } from '../../utils/burger-api';
import { getBurgers } from '../../utils/firebase';
import Burger from '../../components/Burger/Burger';

export interface IngredientProps {
  [key: string]: string;
}

export interface BurgerIngredients {
  [key: string]: number;
}

export interface BurgerProps {
  ingredients: BurgerIngredients;
}

const Catalog = (): React.ReactElement => {
  const [ingredients] = React.useState<IngredientProps>({
    salad: '5da6c2339094e13219339f14',
    meat: '561e795169fc03824d08345e',
    cheese: '5976643fa690431a53463b05',
    bacon: '561e6c16c265794042cb5f20',
  });
  const [burgers, setBurgers] = React.useState<any>([]);
  useEffect(() => {
    Promise.all(
      Object.keys(ingredients).map(async (key: string) => {
        const { data } = await getIngredientById(ingredients[key]);
        return { key, data };
      }),
    ).then(res => {
      console.log(res);
    });

    getBurgers().then(({ data }) => {
      const mappedData = Object.keys(data).map(key => data[key]);
      setBurgers(mappedData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {burgers.map(({ ingredients }: BurgerProps) => (
        <Burger ingredients={ingredients} />
      ))}
    </>
  );
};

export default Catalog;
