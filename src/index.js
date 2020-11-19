import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './global-styles';
import * as serviceWorker from './serviceWorker';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
