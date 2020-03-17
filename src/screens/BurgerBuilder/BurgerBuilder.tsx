import React, { FunctionComponent, ReactNode, useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { Form, Formik } from 'formik';
import burgerBuilderValidationSchema from './burger-builder-validation';
import { changeBurger, createBurger } from '../../store/actions/burger';
import { useDispatch } from 'react-redux';

type BurgerBuilderProps = {
  ingredientsSet?: IngredientProps;
  burgerName?: string;
  id?: string;
  closeModal: () => void;
};

export type IngredientProps = {
  [key: string]: number;
};

const BurgerBuilder: FunctionComponent<BurgerBuilderProps> = ({
  ingredientsSet,
  burgerName,
  id,
  closeModal,
}) => {
  const [isEditing] = useState(burgerName !== '');
  const [name] = useState(burgerName || '');
  const dispatch = useDispatch();
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
    dispatch(createBurger(newBurger));
    closeModal();
  };

  const editBurger = (name: string): void => {
    const newBurger = {
      ingredients: ingredients,
      name: name,
    };
    dispatch(changeBurger(id, newBurger));
    closeModal();
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
            ? editBurger(newName)
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
