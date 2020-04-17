import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger)); {/*it takes a reducer */ }

export default store;