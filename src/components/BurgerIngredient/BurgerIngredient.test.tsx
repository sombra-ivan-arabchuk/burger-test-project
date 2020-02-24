import React from 'react';
import { render, RenderResult, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BurgerIngredient from './BurgerIngredient';

export interface SetupProps {
  container: HTMLElement;
  utils: RenderResult;
}

const setup = (types: Array<string>): SetupProps => {
  // eslint-disable-next-line no-undef
  const utils = render(
    <div>
      {types.map(type => (
        <BurgerIngredient type={type} />
      ))}
    </div>,
  );
  return {
    container: utils.container,
    utils,
  };
};

describe('Catalog', () => {
  it('check if component renders correct type of ingredient', async () => {
    const { container } = setup(['meat', 'salad']);

    const { firstChild } = container;
    const [meat, salad] = firstChild.children;
    // meat background color
    expect(meat).toHaveStyle('background: linear-gradient(#7f3608, #702e05)');
    // salad background color
    expect(salad).toHaveStyle('background: linear-gradient(#228c1d, #91ce50)');
  });
});
