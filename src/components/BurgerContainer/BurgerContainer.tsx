import React, { FC } from 'react';
import Burger from '../Burger/Burger';
import CustomButton from '../CustomButton/CustomButton';
import styled from 'styled-components';
import { BurgerProps } from '../../screens/Catalog/Catalog';

type ContainerProps = {
  burger: BurgerProps;
  onEdit: (burger: BurgerProps) => void;
  onDelete: (id?: string) => void;
};

const BurgerContainer: FC<ContainerProps> = ({ burger, onEdit, onDelete }) => {
  const { ingredients, name, id } = burger;
  return (
    <BurgerWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
        }}
      >
        <Burger ingredients={ingredients} name={name} data-testid={name} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <CustomButton
            style={{ marginBottom: '10px' }}
            testId={`${name}-update`}
            isDisabled={false}
            onClick={(): void => onEdit(burger)}
          >
            Edit
          </CustomButton>
          <CustomButton
            testId={`${name}-delete`}
            isDisabled={false}
            onClick={(): void => onDelete(id)}
          >
            remove
          </CustomButton>
        </div>
      </div>
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled.div`
  -webkit-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);
  margin: 10px;

  height: 300px;
  text-align: center;
  font-weight: bold;
  fontsize: 1.2rem;
  max-width: 450px;
`;

export default BurgerContainer;
