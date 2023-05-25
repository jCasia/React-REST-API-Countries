import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
