const initialState = {
  loading: false,
  error: "",
  count: 0,
  rows: [],
};

export default function apiProductsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "START_LOADING": {
      return { ...state, loading: true };
    }
    case "FETCH10": {
      return {
        ...state,
        loading: false,
        count: payload.count,
        rows: [...state.rows, ...payload.rows],
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
}
