import { createStore } from 'redux';
import { cakeReducer } from './cake/cakeReducer';

const store = createStore(cakeReducer); {/*it takes a reducer */}

export default store;