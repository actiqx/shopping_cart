import shop from '../api/shopping';
import {
  RECEIVE_PRODUCTS,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from '../constants/actiontypes';

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
