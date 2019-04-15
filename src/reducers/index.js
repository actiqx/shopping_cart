import { combineReducers } from 'redux';
import cart from './cart_reducer';
import products from './product_reducer';
const rootReducer = combineReducers({
  cart,
  products
});

export default rootReducer;
