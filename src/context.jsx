import { useState, createContext, useContext, useEffect } from 'react';

const url = 'https://restcountries.com/v3.1/all';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //DarkTheme
  const [darkTheme, setDarkTheme] = useState(false);
  const [selected, setSelected] = useState('');

  const darkThemeToggle = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
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
