import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';

// state.productsReducer.products
// const state = {
//   productsReducer: {
//     products: []
//   },
//   cartReducer: {
//     products: []
//   }
// }
export default combineReducers({ productsReducer: productsReducer, cartReducer: cartReducer });