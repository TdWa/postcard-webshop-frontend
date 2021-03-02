const initialState = {
  user: null,
  accessToken: null,
  error: "",
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_ERROR": {
      return {
        ...state,
        error: payload,
      };
    }
    case "LOGOUT": {
      return initialState;
    }
    case "ADD_USER_WITH_TOKEN": {
      return {
        user: payload.profile,
        accessToken: payload.token,
      };
    }
    default:
      return state;
  }
}
