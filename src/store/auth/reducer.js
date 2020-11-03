const initialState = {
  user: null, // the logged-in user
  accessToken: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
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
