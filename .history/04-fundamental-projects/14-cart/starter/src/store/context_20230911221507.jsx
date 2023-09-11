import { useContext, useReducer, useEffect, createContext } from 'react';

const AppContext = createContext();

const reducer = state,action => {}

export const AppProvider = ({ children }) => {
    const [] = useReducer();
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
