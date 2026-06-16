import { createContext, useState, useContext } from 'react';

export const HeaderContext = createContext(null);

export const HeaderProvider = ({ children }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => setIsSearchVisible((prev) => !prev);

  return (
    <HeaderContext.Provider value={{ isSearchVisible, toggleSearch }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
