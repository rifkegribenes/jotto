import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(ReduxThunk);

// these two lines are for storeFactory in testUtils
export const middlewares = [ReduxThunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStore(
  rootReducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;