import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from '../actionTypes/index';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      // {
        // products: []
        // category: []
      // }
      // const products = action.payload.products;
      // const categories = action.payload.categories
      const { product } = action.payload;
      return {
        ...state,
        // products: products
        products: [ ...state.products, product ]
      }
    }
    case REMOVE_FROM_CART: {
      const { product } = action.payload;
      const filteredArray = state.products.filter(p => p.id !== product.id);
      return {
        ...state,
        products: filteredArray
      }
    }
    case RESET_CART: {
      return {
        ...state,
        products: []
      }
    }
    default: {
      return state;
    }
  }
}