import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer); {/*it takes a reducer */ }

export default store;