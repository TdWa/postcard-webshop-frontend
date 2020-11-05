import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductInCart } from "../store/users/selectors";
import { changeProductAmountInCart } from "../store/users/actions";
import "./AddToCart.scss";

export default function AddToCart({ productId }) {
  const [amount, setAmount] = useState("");
  const productInCart = useSelector(selectProductInCart(1, productId));
  const dispatch = useDispatch();

  return (
    <div className="addToCart">
      <div className="col1">
        In cart: {productInCart ? productInCart.amount : 0}
      </div>
      <div className="col2">change to:</div>
      <div className="col3">
        <input
          type="number"
          min={0}
          max={999}
          value={amount}
          onChange={(e) => {
            if (e.target.value > 999) {
              setAmount(999);
            } else {
              setAmount(Number(e.target.value));
            }
          }}
        ></input>{" "}
      </div>
      <div className="col4">
        {amount !== "" && (
          <button
            onClick={() => {
              dispatch(changeProductAmountInCart(1, productId, amount));
              setAmount("");
            }}
          >
            OK
          </button>
        )}
      </div>
    </div>
  );
}
