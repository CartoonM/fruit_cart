import {combineReducers} from 'redux';
import productListReducer from './productList';
import shoppingCartReducer from './shoppingCart';

export default combineReducers({
    productList: productListReducer,
    shoppingCart: shoppingCartReducer
})
