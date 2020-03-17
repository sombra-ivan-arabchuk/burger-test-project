import {
  ADD_BURGER_ITEM,
  REMOVE_BURGER_ITEM,
  SET_BURGERS,
  UPDATE_BURGER_ITEM,
  UPDATE_BURGERS_LIST,
} from '../actions/actionTypes';
import { BurgerProps } from '../../screens/Catalog/Catalog';

const initialState = {
  burgers: [],
};

type ActionTypes = {
  type: string;
  burgers?: BurgerProps[];
  burger?: BurgerProps;
  id?: string;
};

const burgerReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_BURGERS_LIST:
      return {
        ...state,
        burgers: action.burgers,
      };
    case ADD_BURGER_ITEM:
      return {
        ...state,
        burgers: [...state.burgers, action.burger],
      };
    case REMOVE_BURGER_ITEM:
      return {
        ...state,
        burgers: state.burgers.filter(
          (burger: BurgerProps) => burger.id !== action.id,
        ),
      };
    case UPDATE_BURGER_ITEM:
      return {
        ...state,
        burgers: state.burgers.map((burgerItem: BurgerProps) => {
          if (action.burger && burgerItem.id === action.burger.id) {
            return action.burger;
          }
          return burgerItem;
        }),
      };
    case SET_BURGERS:
      return {
        ...state,
        burgers: action.burgers,
      };
  }
  return state;
};

export default burgerReducer;
