import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
