import { useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const greeting = 'hello';
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
