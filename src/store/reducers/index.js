import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { actionsTypes } from "../action/actionsTypes/index";

const INITIAL_STATE = {
  persons: [],
  loading: true,
};

function persons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.GET_PERSONS:
      return { ...state, persons: action.data };
    case actionsTypes.FILTER_PERSONS:
      return { ...state, persons: action.data };
    case actionsTypes.IS_LOADING:
      return { ...state, loading: action.loading };
    
    default:
      return state;
  }
}

const store = createStore(persons, applyMiddleware(thunk));

export default store;
