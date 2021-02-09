import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Landing from './Landing'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
