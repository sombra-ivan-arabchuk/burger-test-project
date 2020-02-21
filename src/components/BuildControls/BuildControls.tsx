import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

interface BuildControlsProps {
  addIngredient: Function;
  removeIngredient: Function;
}

const BuildControls: FunctionComponent<BuildControlsProps> = ({
  addIngredient,
  removeIngredient,
}) => {
  return (
    <ControlsContainer>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          addIngredient={(): void => addIngredient(control.type)}
          removeIngredient={(): void => removeIngredient(control.type)}
        />
      ))}
    </ControlsContainer>
  );
};

const ControlsContainer = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px;
`;

export default BuildControls;
