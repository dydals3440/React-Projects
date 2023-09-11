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
    // Mutate 때문에 새 인스턴스를 만듬. 이전 카트를 참조하지 않음 이제
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    // ...state는 기존값을 복사하고 덮어씀
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    // Mutate 방지 새 객체 만듬
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    console.log(item);
    return { ...state, cart: newCart };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
