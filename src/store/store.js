import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { actionTypes } from './action.type';

const initialState = {
  cart: [],
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle actions
    case actionTypes.add_cart_item:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      break;
    case actionTypes.remove_cart_item:
      return {
        ...state,
        cart: state.cart.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
