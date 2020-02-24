import React from 'react';
import { render, RenderResult, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

export interface SetupProps {
  container: HTMLElement;
  utils: RenderResult;
}

jest.mock('../../hooks', () => ({
  useAuth: (): object => ({ user: { name: 'test' } }),
}));

const setup = (): SetupProps => {
  // eslint-disable-next-line no-undef
  const history = createMemoryHistory();
  const utils = render(
    <Router history={history}>
      <NavBar />
    </Router>,
  );
  return {
    container: utils.container,
    utils,
  };
};

describe('Catalog', () => {
  it('check if Login button exists', async () => {
    const { utils } = setup();
    const { getAllByText } = utils;
    await waitForElement(() => getAllByText('Login'));
  });
});
