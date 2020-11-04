import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductInCart } from "../store/users/selectors";
import {
  removeProductFromCart,
  addProductToCart,
} from "../store/users/actions";
import "./AddToCart.scss";

export default function AddToCart({ productId }) {
  const [amount, setAmount] = useState("");
  const productInCart = useSelector(selectProductInCart(1, productId));
  const dispatch = useDispatch();

  return (
    <div className="addToCart">
      in cart: {productInCart ? productInCart.amount : 0}{" "}
      <button
        onClick={() => {
          dispatch(removeProductFromCart(1, productId));
        }}
      >
        reset
      </button>
      {" add: "}
      <input
        type="number"
        placeholder={0}
        min={0}
        max={999}
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
          if (e.target.value > 999) {
            setAmount(999);
          }
        }}
      ></input>{" "}
      <button
        onClick={() => {
          dispatch(addProductToCart(1, productId, amount));
          setAmount("");
        }}
      >
        +
      </button>
    </div>
  );
}
