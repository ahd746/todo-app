import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import TodosContextProvider from './contexts/TodosContext'
import ThemeContextProvider from './contexts/ThemeContext'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <TodosContextProvider>
          <App />
        </TodosContextProvider>
      </ThemeContextProvider >
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


