import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Contexts/MainContext';

ReactDOM.render(
  <Context>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context>,
  document.getElementById('root')
);
