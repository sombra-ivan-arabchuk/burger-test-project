import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BuildControls from './BuildControls';
import { IngredientProps } from '../../screens/BurgerBuilder/BurgerBuilder';

export interface SetupProps {
  container: HTMLElement;
  utils: RenderResult;
}

const setup = (
  addIngredients: (type: string) => void,
  removeIngredients: (type: string) => void,
): SetupProps => {
  const utils = render(
    <BuildControls
      addIngredient={addIngredients}
      removeIngredient={removeIngredients}
    />,
  );
  return {
    container: utils.container,
    utils,
  };
};

describe('Catalog', () => {
  it('check displaying build controls', async () => {
    const { utils } = setup(
      () => 'test',
      () => 'test',
    );
    const { getByText } = utils;
    // just check for existence
    await waitForElement(() => getByText('Salad'));
    await waitForElement(() => getByText('Bacon'));
    await waitForElement(() => getByText('Cheese'));
    await waitForElement(() => getByText('Meat'));
  });

  it('check controls buttons from functionality perspectives', async () => {
    const ingredients: IngredientProps = {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    };
    const addIngredient = (type: string): void => {
      ingredients[type] = ingredients[type] + 1;
    };
    const removeIngredient = (type: string): void => {
      ingredients[type] = ingredients[type] - 1;
    };
    const { utils } = setup(addIngredient, removeIngredient);
    const saladMoreButton = await waitForElement(() =>
      utils.findByTestId('Salad-more'),
    );
    const baconMoreButton = await waitForElement(() =>
      utils.findByTestId('Bacon-more'),
    );
    const saladLessButton = await waitForElement(() =>
      utils.findByTestId('Salad-less'),
    );
    const baconLessButton = await waitForElement(() =>
      utils.findByTestId('Bacon-less'),
    );
    fireEvent.click(saladMoreButton);
    fireEvent.click(baconMoreButton);

    expect(ingredients.salad).toBe(1);
    expect(ingredients.salad).toBe(1);

    fireEvent.click(saladLessButton);
    fireEvent.click(baconLessButton);

    expect(ingredients.salad).toBe(0);
    expect(ingredients.salad).toBe(0);
  });
});
