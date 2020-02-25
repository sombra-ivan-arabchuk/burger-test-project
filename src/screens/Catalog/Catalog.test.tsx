import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Catalog from './Catalog';
import * as burgerAPI from '../../utils/burger-api';

import * as firebase from '../../utils/firebase';

export interface SetupProps {
  container: HTMLElement;
  utils: RenderResult;
}

const setup = (): SetupProps => {
  const utils = render(<Catalog />);
  return {
    container: utils.container,
    utils,
  };
};

describe('Catalog', () => {
  it('renders', async () => {
    jest.spyOn(firebase, 'getBurgers').mockImplementation((): any => {
      return Promise.resolve({
        data: {
          LvUY46VP3TPsyNKdHgN: {
            customer: {},
            deliveryMethod: 'fastest',
            ingredients: { bacon: 2, cheese: 2, meat: 2, salad: 2 },
            bacon: 2,
            cheese: 2,
            meat: 2,
            salad: 2,
            price: 5.8,
          },
        },
      });
    });

    jest.spyOn(burgerAPI, 'getIngredientById').mockImplementation((): any => {
      return Promise.resolve([
        {
          LvUY46VP3TPsyNKdHgN: {
            customer: {},
            deliveryMethod: 'fastest',
            ingredients: { bacon: 2, cheese: 2, meat: 2, salad: 2 },
            bacon: 2,
            cheese: 2,
            meat: 2,
            salad: 2,
            price: 5.8,
          },
        },
      ]);
    });
  });
});
