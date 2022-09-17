import React from 'react';
import ReactDOM from 'react-dom/client';
import {StateContext} from './Context/StateContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContext>
      <App/>
    </StateContext>
  </React.StrictMode>
);

