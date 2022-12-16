import { ADD_USER, FETCH_SEARCH_BY_ID } from '../actionTypes/index';

const initialState = {
  users: [],
  mealById: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_BY_ID: {
      const { mealById } = action.payload;
      return {
        ...state,
        mealById
      }
    }
    case ADD_USER: {
      const { username, pass } = action.payload;
      return {
        ...state,
        users: [ ...state.users, {username, pass} ]
      }
    }
    default: {
      return state;
    }
  }
}