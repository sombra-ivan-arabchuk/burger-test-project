import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

export interface BurgerIngredients {
  [key: string]: number;
}

export interface BurgerProps {
  ingredients: BurgerIngredients;
  name?: string;
}

const Burger: FunctionComponent<BurgerProps> = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map((igKey: string) => {
      return [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients.push(<p>please start adding ingredients</p>);
  }
  return (
    <BurgerContainer>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
  text-align: center;
  font-weight: bold;
  fontsize: 1.2rem;
`;

export default Burger;
