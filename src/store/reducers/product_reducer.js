import * as types from '../constants/actiontypes';

const INITIAL_STATE = {
  products: [],
  total: 0
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOAD_CART:
      return {
        ...state,
        products: action.payload,
        total: action.payload.length
      };
    case types.REMOVE_PRODUCT:
      return { ...state, productToRemove: { ...action.payload } };
    default:
      return state;
  }
};
