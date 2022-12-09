import { FETCH_PRODUCTS, ADD_PRODUCTS } from '../actionTypes/index';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS: {
      // {
        // products: []
        // category: []
      // }
      // const products = action.payload.products;
      // const categories = action.payload.categories
      const { products } = action.payload;
      return {
        ...state,
        // products: products
        products
      }
    }
    default: {
      return state;
    }
  }
}