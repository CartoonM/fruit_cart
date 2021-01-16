import cloneDeep from 'lodash.clonedeep';
import {SEND_TO_CART, REMOVE_FROM_CART} from '../actions/actionTypes';

const initialState = {}

export default function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
      case SEND_TO_CART:
        return {...state, [action.productId]: action.product};
      case REMOVE_FROM_CART:
        return removePosition(state, action.productId);
      default:
        return state;
    }
}

function removePosition(state, productId) {
  const updatedState = cloneDeep(state);
  delete updatedState[productId];
  return updatedState;
}
