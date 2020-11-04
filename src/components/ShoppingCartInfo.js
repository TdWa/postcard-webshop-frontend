import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartByUserId } from "../store/users/selectors";

export default function ShoppingCartInfo() {
  const cart = useSelector(selectCartByUserId(1));

  return (
    <div>
      {cart.length} {cart.length === 1 ? "item" : "items"} selected{" "}
      <Link to={`/cart`}>
        <button style={{ padding: 3 }}>View Cart</button>
      </Link>
    </div>
  );
}
