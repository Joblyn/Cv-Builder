import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

const reducer = storage.reducer(rootReducer);

const engine = createEngine('my-save-key');

const middleware = [storage.createMiddleware(engine), thunk];

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

const load = storage.createLoader(engine);
load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));
export default store;