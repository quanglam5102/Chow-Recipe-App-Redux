import { combineReducers } from 'redux';
import productsReducer from './products';

// state.productsReducer.products
// const state = {
//   productsReducer: {
//     products: []
//   },
//   cartReducer: {
//     products: []
//   }
// }
export default combineReducers({ productsReducer });