import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

export interface BurgerIngredients {
  [key: string]: number;
}

export interface BurgerProps {
  ingredients: BurgerIngredients;
}

const Burger = ({ ingredients }: BurgerProps): React.ReactElement => {
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
  height: 250px;
  text-align: center;
  font-weight: bold;
  fontsize: 1.2rem;

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

export default Burger;
