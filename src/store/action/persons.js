import { actionsTypes } from "./actionsTypes/index";
import axios from "axios";
export const getPersons = (page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionsTypes.IS_LOADING, loading: true });
      const { data } = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );
      dispatch({ type: actionsTypes.GET_PERSONS, data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: actionsTypes.IS_LOADING, loading: false });
    }
  };
};

export const filterPersons = (text, page) => {
  return async (dispatch) => {
    dispatch({ type: actionsTypes.IS_LOADING, loading: true });
    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/people/?search=${text}&page=${page}`
      );
      dispatch({ type: actionsTypes.FILTER_PERSONS, data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: actionsTypes.IS_LOADING, loading: false });
    }
  };
};
