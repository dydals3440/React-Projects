import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';

const AppContext = createContext();

// // 1. reducer 파일에 로직 분리
// const reducer = (state, action) => {
//   return state;
// };

// 2.
const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  // 초기상태 뿐만 아니라, reducer를 사용해서 상태를 변경할 수 있음.
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
