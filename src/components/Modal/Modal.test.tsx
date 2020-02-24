import React from 'react';
import { render, RenderResult, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomModal from './Modal';

export interface SetupProps {
  container: HTMLElement;
  utils: RenderResult;
}

const setup = (isOpened: boolean): SetupProps => {
  const utils = render(
    <CustomModal isOpen={isOpened} label={'test'}>
      <div>test text</div>
    </CustomModal>,
  );
  return {
    container: utils.container,
    utils,
  };
};

describe('Catalog', () => {
   it('check if modal is shown', async () => {
    const { utils } = setup(true);
    const { getByText } = utils;
    await waitForElement(() => getByText('test text'));
  });
});
