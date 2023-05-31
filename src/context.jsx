import { useState, createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [countryName, setCountryName] = useState('');

  const darkThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        countryName,
        setCountryName,
        darkThemeToggle,
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
