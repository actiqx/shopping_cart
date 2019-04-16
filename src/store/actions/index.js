import { LOAD_CART, REMOVE_PRODUCT } from '../constants/actiontypes';
import shop from '../api/shopping';

export const loadCart = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

const receiveProducts = products => ({
  type: LOAD_CART,
  payload: products
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});
