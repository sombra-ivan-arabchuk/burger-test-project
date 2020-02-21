import React, { FunctionComponent, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { editBurger, saveBurger } from '../../utils/firebase';
import { BurgerProps } from '../Catalog/Catalog';

type BurgerBuilderProps = {
  addBurger: (burger: BurgerProps) => void;
  updateBurger: (burger: BurgerProps) => void;
  ingredientsSet?: IngredientProps;
  burgerName?: string;
  id?: string;
};

export type IngredientProps = {
  [key: string]: number;
};

const BurgerBuilder: FunctionComponent<BurgerBuilderProps> = ({
  addBurger,
  updateBurger,
  ingredientsSet,
  burgerName,
  id,
}) => {
  const [isEditing] = useState(burgerName !== '');
  const [name, setName] = useState(burgerName || '');
  const [ingredients, setIngredients] = useState<IngredientProps>(
    ingredientsSet || {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
  );

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setName(event.target.value);
  };

  const addIngredient = (type: string): void => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedingredients = {
      ...ingredients,
    };
    updatedingredients[type] = updatedCount;
    setIngredients(updatedingredients);
  };

  const saveNewBurger = (): void => {
    const newBurger = {
      ingredients: ingredients,
      name: name,
    };
    saveBurger(newBurger).then(({ data }) => {
      const { name } = data;
      addBurger({ ...newBurger, id: name });
    });
  };

  const changeBurger = (): void => {
    const newBurger = {
      ingredients: ingredients,
      name: name,
    };
    editBurger(id, newBurger).then(() => {
      updateBurger(newBurger);
    });
  };

  const removeIngredient = (type: string): void => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);
  };

  return (
    <div style={{ height: '400px' }}>
      <div style={{ margin: '50px 0' }}>
        <CustomInput
          value={name}
          onChange={handleNameChange}
          label={'Burger Name'}
        />
      </div>
      <Burger ingredients={ingredients} name={name} isEditing={isEditing}/>
      <BuildControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
      {!id ? (
        <CustomButton isDisabled={false} onClick={saveNewBurger}>
          save
        </CustomButton>
      ) : (
        <CustomButton isDisabled={false} onClick={changeBurger}>
          edit
        </CustomButton>
      )}
    </div>
  );
};

export default BurgerBuilder;
