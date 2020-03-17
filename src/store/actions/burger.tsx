import {
  ADD_BURGER_ITEM,
  REMOVE_BURGER_ITEM,
  SET_BURGERS,
  UPDATE_BURGER_ITEM,
  UPDATE_BURGERS_LIST,
} from './actionTypes';
import { BurgerProps } from '../../screens/Catalog/Catalog';
import {
  deleteBurger,
  editBurger,
  getBurgers,
  saveBurger,
} from '../../utils/firebase';

export type UpdateBurgersActionProps = {
  type: string;
  burgers: Array<BurgerProps>;
};

export type UpdateBurgerActionProps = {
  type: string;
  burger: BurgerProps;
};

export type AddBurgerActionProps = {
  type: string;
  burger: BurgerProps;
};

export type RemoveBurgerProps = {
  type: string;
  id?: string;
};

const updateBurgers = (
  burgers: Array<BurgerProps>,
): UpdateBurgersActionProps => ({
  type: UPDATE_BURGERS_LIST,
  burgers,
});

const replaceBurgers = (
  burgers: Array<BurgerProps>,
): UpdateBurgersActionProps => ({
  type: SET_BURGERS,
  burgers,
});

const throwBurger = (id: string | undefined): RemoveBurgerProps => ({
  type: REMOVE_BURGER_ITEM,
  id,
});

const updateBurger = (burger: BurgerProps): UpdateBurgerActionProps => ({
  type: UPDATE_BURGER_ITEM,
  burger,
});

export const setBurgers = (burgers: Array<BurgerProps>) => (dispatch: Function) => {
  dispatch(replaceBurgers(burgers));
};

const addBurger = (burger: BurgerProps): AddBurgerActionProps => ({
  type: ADD_BURGER_ITEM,
  burger,
});

export const storeBurgers = () => (dispatch: Function, getState: Function) => {
  const existedBurgers = getState().brg.burgers;
  getBurgers()
    .then(({ data = {} }) => {
      const resData = data || {};

      const mappedData = Object.keys(resData)
        .filter(
          key =>
            !existedBurgers.some(
              (burgerItem: BurgerProps) => burgerItem.id === key,
            ),
        )
        .map(key => ({
          ...data[key],
          id: key,
        }));
      dispatch(updateBurgers(existedBurgers.concat(mappedData)));
    })
    .catch(err => console.log(err));
};

export const createBurger = (burger: BurgerProps) => (dispatch: Function) => {
  saveBurger(burger).then(({ data }) => {
    const { name } = data;
    dispatch(addBurger({ ...burger, id: name }));
  });
};

export const changeBurger = (id: string | undefined, burger: BurgerProps) => (
  dispatch: Function,
) => {
  editBurger(id, burger).then(() => {
    dispatch(updateBurger({ ...burger, id }));
  });
};

export const removeBurger = (id: string | undefined) => (
  dispatch: Function,
) => {
  deleteBurger(id).then(() => {
    dispatch(throwBurger(id));
  });
};
