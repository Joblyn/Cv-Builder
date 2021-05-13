import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import "normalize.css";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import store from './store';
// import "../public/tools/imageOptimizer";
// import "../public/tools/lazyLoader";

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();