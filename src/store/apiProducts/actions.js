import axios from "axios";

export const startLoading = () => {
  return { type: "START_LOADING" };
};

export const fetch10APIProducts = ({ rows, count }) => {
  return {
    type: "FETCH10",
    payload: {
      rows,
      count,
    },
  };
};

export const setFetchError = (error) => {
  return {
    type: "FETCH_ERROR",
    payload: error,
  };
};

export async function getNext10Products(dispatch, getState) {
  try {
    dispatch(startLoading());

    const response = await axios.get(
      `http://localhost:4000/products?limit=10&offset=${
        getState().apiProducts.rows.length
      }`
    );

    dispatch(
      fetch10APIProducts({
        rows: response.data.rows,
        count: response.data.count,
      })
    );
  } catch (e) {
    console.log(e.message);
    dispatch(setFetchError(e.message));
  }
}
