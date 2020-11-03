import axios from "axios";
import { API_URL } from "../../../src/config";

const userLoggedIn = (token, profile) => {
  return {
    type: "ADD_USER_WITH_TOKEN",
    payload: { token, profile },
  };
};

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    console.log(
      "TODO: change hardcoded kelley to email and pw from form",
      email,
      password
    );
    try {
      const loginResponse = await axios.post(`${API_URL}/login`, {
        email: "kelley@codaisseur.com",
        password: "abcd",
      });
      const token = loginResponse.data.jwt;

      const userProfileResponse = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(userLoggedIn(token, userProfileResponse.data));
      localStorage.setItem("token", token);
    } catch (e) {
      console.log(e.message);
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
