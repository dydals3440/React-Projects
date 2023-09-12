import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import cartItems from '../data';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
import { getTotals } from '../utils/utils';

const AppContext = createContext();

// // 1. reducer 파일에 로직 분리
// const reducer = (state, action) => {
//   return state;
// };

// 2.
const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  // 초기상태 뿐만 아니라, reducer를 사용해서 상태를 변경할 수 있음.
  const [state, dispatch] = useReducer(reducer, initialState);
  //   total
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
