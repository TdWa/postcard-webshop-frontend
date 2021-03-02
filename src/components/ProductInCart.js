import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import { selectProductInCart } from "../store/users/selectors";
import { removeProductFromCart } from "../store/users/actions";
import AddToCart from "./AddToCart";
import "./ProductInCart.scss";

export default function ProductInCart({ id }) {
  const dispatch = useDispatch();
  const product = useSelector(selectProductById(id));
  const productInCart = useSelector(selectProductInCart(1, id));

  return (
    <div className="productInCartContainer">
      <div className="colA">
        <button onClick={() => dispatch(removeProductFromCart(1, id))}>
          X
        </button>{" "}
        {product.name}
      </div>
      <div className="colB">
        <AddToCart productId={id} />
      </div>
      <div className="colC">
        € {product.price.toFixed(2)} x {productInCart.amount}
      </div>
      <div className="colD">
        = &nbsp;&nbsp;€ {(product.price * productInCart.amount).toFixed(2)}
      </div>
    </div>
  );
}
