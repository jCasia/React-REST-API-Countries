import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [selected, setSelected] = useState('');
  const [searchTerm, setSearchTerm] = useState('a');
  const [fetchedData, setFetchedData] = useState([]);

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
        searchTerm,
        setSearchTerm,
        fetchedData,
        setFetchedData,
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
