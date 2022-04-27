import axios from "axios";

export function getDogs() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_DOG",
      payload: response.data,
    });
  };
}

export function getTemperament() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/temperament");
    dispatch({
      type: "GET_TEMPERAMENT",
      payload: response.data,
    });
  };
}
