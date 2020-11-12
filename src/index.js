import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './global-styles';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
serviceWorker.unregister();
