import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { actionTypes } from './action.type';

const initialState = {
  cart: [],
  numOfProductsInCart: 0,
  isLoggedin: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.add_cart_item:
      return {
        ...state,
        numOfProductsInCart: (state.numOfProductsInCart + 1) <= 0 ? 0 : (state.numOfProductsInCart + 1),
      };
    case actionTypes.remove_cart_item:
      return {
        ...state,
        cart: state.cart.filter((e) => e.id !== action.payload),
        numOfProductsInCart: (state.numOfProductsInCart - 1) <= 0 ? 0 : (state.numOfProductsInCart - 1),
      };

    case actionTypes.update_cart_item:
      const newCard = state.cart.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: newCard,
      };

    case actionTypes.set_user:
      return {
        ...state,
        isLoggedin: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
