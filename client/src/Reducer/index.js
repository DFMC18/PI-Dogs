const initialState = {
  dogs: [],
  temperament: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOG":
      return {
        ...state,
        dogs: action.payload,
      };
    case "GET_TEMPERAMENT":
      return {
        ...state,
        temperament: action.payload,
      };

    default:
      return state;
  }
}
