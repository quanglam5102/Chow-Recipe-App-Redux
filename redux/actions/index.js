import {
  ADD_USER, FETCH_SEARCH_BY_ID,
} from '../actionTypes/index';

export const fetchSearchById = (dispatch,mealId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(result => {
      if (result.meals == null) {
        dispatch({
          type: FETCH_SEARCH_BY_ID,
          payload: {
            mealById: []
          }
        })
      }
      else {
        dispatch({
          type: FETCH_SEARCH_BY_ID,
          payload: {
            mealById: result.meals
          }
        })
        
      }

    })

};

export const addUser = (username, pass) => {
  return {
    type: ADD_USER,
    payload: {
      username, pass
    }
  }
};