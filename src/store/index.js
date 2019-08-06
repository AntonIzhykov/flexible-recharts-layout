import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

const redux_devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const history = createBrowserHistory();

const configureStore = () => createStore(
  createRootReducer(),
  compose(
    applyMiddleware(
      thunk,
    ),
    redux_devtools
  )
);

export default configureStore;
