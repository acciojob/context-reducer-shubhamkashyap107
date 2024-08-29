// App.js
import React, { useContext, useState } from 'react';
import { AppContext, AppProvider } from './Context';

const App = () => {
  const { isAuthenticated, login, signout, items, addItem, removeItem, clearList } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addItem(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <button id="login-btn" onClick={login}>Login</button>
      <button id="signout" onClick={signout}>Sign Out</button>
      <div id="current-user">
        Current user: rohan, isAuthenticated: {isAuthenticated ? 'Yes' : 'No'}
      </div>
      <input
        id="shopping-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button id="clear-list" onClick={clearList}>Clear List</button>
      <ul>
        {items.map((item) => (
          <li key={item} id={`item-${item}`}>
            {item}
            <button id={`remove-${item}`} onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Wrap your App component with the provider
const MainApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default MainApp;
