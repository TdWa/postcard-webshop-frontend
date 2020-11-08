import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartByUserId } from "../store/users/selectors";
import { selectUserFromAuth } from "../store/auth/selectors";
import "./ShoppingCartInfo.scss";
import { logout } from "../store/auth/actions";

export default function ShoppingCartInfo() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartByUserId(1));
  const user = useSelector(selectUserFromAuth);

  return (
    <div id="shoppingCartInfo">
      {!user ? (
        <Link to={`/login`}>
          <button>Login</button>{" "}
        </Link>
      ) : (
        <div>
          {`Welcome ${user.name}! `}
          <button onClick={() => dispatch(logout)}>Logout</button> {cart.length}{" "}
          {cart.length === 1 ? "item" : "items"} selected{" "}
          <Link to={`/cart`}>
            <button>View Cart</button>
          </Link>
        </div>
      )}
    </div>
  );
}
