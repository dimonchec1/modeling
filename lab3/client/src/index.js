import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import DishStore from './store/DishStore';
import DishOrderStore from './store/DishOrderStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      user: new UserStore(),
      dish: new DishStore(),
      orders: new DishOrderStore()
    }}>
      <App />
    </Context.Provider>
);

