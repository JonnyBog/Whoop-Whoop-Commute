import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  apiHelper,
  environmentsHelper,
  observableToPromiseMiddleware
} from 'lib';
import combineEpics from 'combine-epics';
import combineReducers from 'combine-reducers';

const epicMiddleware = createEpicMiddleware(combineEpics, {
  dependencies: {
    apiHelper
  }
});

let middleware;

if (environmentsHelper.IS_CLIENT) {
  middleware = () =>
    composeWithDevTools(
      applyMiddleware(
        epicMiddleware
      )
    );
} else {
  global.window = {};

  middleware = () =>
    applyMiddleware(
      epicMiddleware,
      observableToPromiseMiddleware
    );
}

const configureStore = preloadedState => createStore(
  combineReducers,
  preloadedState,
  middleware()
);

export default configureStore;
