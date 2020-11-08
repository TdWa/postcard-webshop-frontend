import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/actions";
import { selectAuthError, selectUserFromAuth } from "../store/auth/selectors";
import { Redirect } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();

  const error = useSelector(selectAuthError);
  const user = useSelector(selectUserFromAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login(email, password));
  }

  return (
    <div id="login" className="page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="colOne">
            <label htmlFor="email">email:</label>
          </div>
          <div className="colTwo">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="colOne">
            <label htmlFor="password">password:</label>
          </div>
          <div className="colTwo">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <br></br>
      <br></br>
      <p>{error}</p>
      {user && <Redirect to="/home" />}
    </div>
  );
}
