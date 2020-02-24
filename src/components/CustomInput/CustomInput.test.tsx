import React from 'react';
import { render, RenderResult, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomInput from './CustomInput';

export interface SetupProps {
  container: HTMLElement;
  utils: RenderResult;
}

const setup = (): SetupProps => {
  let value = 'some text';
  // eslint-disable-next-line no-undef
  const utils = render(
    <CustomInput
      value={value}
      onChange={(e): void => {
        value = e.target.value;
      }}
      label={''}
    />,
  );
  return {
    container: utils.container,
    utils,
  };
};

describe('Catalog', () => {
  it('renders', async () => {
    const { container } = setup();
    await waitForElement(() => container);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('check if component renders correct type of ingredient', async () => {
    const { container } = setup();

    const { firstChild } = container;
    console.log(firstChild.childNodes[0]);
  });
});
