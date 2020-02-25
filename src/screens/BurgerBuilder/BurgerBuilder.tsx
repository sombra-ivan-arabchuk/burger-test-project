import React, { FunctionComponent, ReactNode, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { editBurger, saveBurger } from '../../utils/firebase';
import { BurgerProps } from '../Catalog/Catalog';
import { Form, Formik } from 'formik';
import burgerBuilderValidationSchema from './burger-builder-validation';

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
  const [name] = useState(burgerName || '');
  const [ingredients, setIngredients] = useState<IngredientProps>(
    ingredientsSet || {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
  );

  const addIngredient = (type: string): void => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedingredients = {
      ...ingredients,
    };
    updatedingredients[type] = updatedCount;
    setIngredients(updatedingredients);
  };

  const saveNewBurger = (name: string): void => {
    const newBurger = {
      ingredients: ingredients,
      name: name,
    };
    saveBurger(newBurger).then(({ data }) => {
      const { name } = data;
      addBurger({ ...newBurger, id: name });
    });
  };

  const changeBurger = (name: string): void => {
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

  const isSubmitButtonDisabled = (errors: object): boolean =>
    Object.keys(errors).length > 0 ||
    !Object.keys(ingredients).some(key => ingredients[key] > 0);

  return (
    <div style={{ height: '400px' }}>
      <Formik
        initialValues={{ name: name }}
        validationSchema={burgerBuilderValidationSchema}
        onSubmit={({ name: newName }): void =>
          isEditing && name !== ''
            ? changeBurger(newName)
            : saveNewBurger(newName)
        }
      >
        {({ errors, handleChange, touched, values }): ReactNode => {
          return (
            <Form style={{ height: '100%' }}>
              <div style={{ margin: '50px 0' }}>
                <CustomInput
                  value={values.name}
                  onChange={handleChange('name')}
                  label="Burger Name"
                />
                {errors.name && touched.name ? (
                  <div style={{ color: 'red' }}>{errors.name}</div>
                ) : null}
              </div>
              <Burger
                ingredients={ingredients}
                name={name}
                isEditing={isEditing}
              />
              <BuildControls
                addIngredient={addIngredient}
                removeIngredient={removeIngredient}
              />
              {!id ? (
                <CustomButton
                  type="submit"
                  testId="saveBurger"
                  isDisabled={isSubmitButtonDisabled(errors)}
                >
                  save
                </CustomButton>
              ) : (
                <CustomButton
                  type="submit"
                  testId="editBurger"
                  isDisabled={isSubmitButtonDisabled(errors)}
                >
                  edit
                </CustomButton>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BurgerBuilder;
