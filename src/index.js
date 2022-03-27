import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// styles
import './index.css';
// context
// import { State } from './context/Context';
import { State } from './context/context'

ReactDOM.render(
  <React.StrictMode>
    <State>
      <App />
    </State>
  </React.StrictMode>,
  document.getElementById('root')
);
