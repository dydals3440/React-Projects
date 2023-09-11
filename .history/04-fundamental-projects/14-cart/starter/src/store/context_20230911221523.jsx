import { useContext, useReducer, useEffect, createContext } from 'react';

const AppContext = createContext();

// 1.
const reducer = (state, action) => {
  return state;
};

export const AppProvider = ({ children }) => {
  const [] = useReducer();
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
