import { useState, createContext, useContext, useEffect } from 'react';

const url = 'https://restcountries.com/v3.1/all';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //DarkTheme
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selected, setSelected] = useState('');

  const darkThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        darkThemeToggle,
        selected,
        setSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
