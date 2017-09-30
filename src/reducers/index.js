import { combineReducers } from 'redux';
import cart from './cart.reducers.js';

const rootReducer = combineReducers({
  cart,
});

export default rootReducer;