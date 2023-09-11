import { useContext, useReducer, useEffect, createContext } from 'react';

const AppContext = createContext();

// 1.
const reducer = (state, action) => {
  return state;
};

// 2.
const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  //
  const [] = useReducer(reducer, initialState);
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
