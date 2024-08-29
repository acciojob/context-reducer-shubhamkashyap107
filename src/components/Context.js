// Context.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setItems] = useState([]);

  const login = () => setIsAuthenticated(true);
  const signout = () => setIsAuthenticated(false);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter(i => i !== item));
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <AppContext.Provider value={{ isAuthenticated, login, signout, items, addItem, removeItem, clearList }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
