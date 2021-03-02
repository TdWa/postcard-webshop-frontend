import axios from "axios";
import { API_URL } from "../../../src/config";

const userLoggedIn = (token, profile) => {
  return {
    type: "ADD_USER_WITH_TOKEN",
    payload: { token, profile },
  };
};

const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      const loginResponse = await axios.post(
        `${API_URL}/login`,
        {
          email,
          password,
        },
        { validateStatus: false }
      );
      const token = loginResponse.data.jwt;
      if (!token) {
        dispatch(setError(loginResponse.data));
        return;
      }
      const userProfileResponse = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(userLoggedIn(token, userProfileResponse.data));
      localStorage.setItem("token", token);
    } catch (e) {
      console.log(e.message);
      console.log(e.response.request.response);
    }
  };
}

export async function bootstrapLoginState(dispatch, getState) {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const userProfileResponse = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(userLoggedIn(token, userProfileResponse.data));
    } catch (e) {
      console.log(e.message);
    }
  }
}

export function logout(dispatch, getState) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("token");
}
