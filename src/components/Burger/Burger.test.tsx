import React from 'react';
import {
  render,
  RenderResult,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Burger from './Burger';

export interface SetupProps {
  container: HTMLElement;
  utils: RenderResult;
}

jest.mock('../../hooks', () => ({ useAuth: (): object => ({}) }));

const data = { bacon: 2, cheese: 2, meat: 2, salad: 2 };

const setup = (): SetupProps => {
  // eslint-disable-next-line no-undef
  const utils = render(
    <Burger ingredients={data} name={'test burger'} isEditing={false} />,
  );
  return {
    container: utils.container,
    utils,
  };
};

describe('Catalog', () => {
  it('check for displaying burger name in not editing mode', async () => {
    const { utils } = setup();
    // I assume we will get this element because it is not editing mode
    const nameComponent = await waitForElement(() =>
      utils.findByText('test burger'),
    );
    expect(nameComponent).toHaveStyle('font-weight: bold');
  });
});
