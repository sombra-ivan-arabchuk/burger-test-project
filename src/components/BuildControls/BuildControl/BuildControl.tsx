import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface BuildControlProps {
  label: string;
  addIngredient: Function;
  removeIngredient: Function
}

const BuildControl: FunctionComponent<BuildControlProps> = ({
  label,
  addIngredient,
  removeIngredient,
}) => {
  return (
    <ControlContainer>
      <Label>{label}</Label>
      <Button buttonType="less" onClick={() => removeIngredient()}>
        less
      </Button>
      <Button buttonType="more" onClick={() => addIngredient()}>
        more
      </Button>
    </ControlContainer>
  );
};

const ControlContainer = styled.div`
  background-color: #cf8f2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;

const Button = styled.button`
  display: block,
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #AA6817;
  cursor: pointer;
  outline: none;
  
  &::disabled {
  background-color: #AC9980;
  border: 1px solid #7E7365;
  color: #ccc;
  cursor: default;
  }
  
  &::hover:disabled {
  background-color: #AC9980;
  color: #ccc;
  cursor: not-allowed;
  }
  
  ${({ buttonType }: { buttonType: string }): string =>
    buttonType === 'less'
      ? `
  background-color: #D39952;
  color: white;
  :hover, :active {
  background-color: #DAA972;
  color: white;
  }
  `
      : `
  background-color: #8F5E1E;
  color: white;
  :hover, :active {
  background-color: #99703F;
  color: white;
  }
  `}
  
`;

const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;
export default BuildControl;
