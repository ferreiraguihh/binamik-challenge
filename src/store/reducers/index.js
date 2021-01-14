import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { actionsTypes } from "../action/actionsTypes/index";

const INITIAL_STATE = {
  persons: [],
};

function persons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.GET_PERSONS:
      return { ...state, persons: action.data };
      case actionsTypes.FILTER_PERSONS:
        return { ...state, persons: action.data };
    default:
      return state;
  }
}

const store = createStore(persons, applyMiddleware(thunk));

export default store;
