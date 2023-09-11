import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    const targetCart = newCart.filter(state.cart.id !== action.payload.id);
    // newCart.delete(action.payload.id);
    return { ...state, cart: targetCart };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
