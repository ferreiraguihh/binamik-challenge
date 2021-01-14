import { actionsTypes } from "./actionsTypes/index";
import axios from "axios";
export const getPersons = (page) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    dispatch({ type: actionsTypes.GET_PERSONS, data });
  };
};

export const filterPersons = (text, page) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/people/?search=${text}&page=${page}`
      );
      dispatch({ type: actionsTypes.FILTER_PERSONS, data });
    } catch {
      
    }
  };
};
