import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
import { createLogger } from 'redux-logger';
 
const logger = createLogger();

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
    applyMiddleware(logger)
  )
);
