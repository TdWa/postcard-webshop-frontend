import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartByUserId } from "../store/users/selectors";
import { selectProductsByCart } from "../store/products/selectors";
import { emptyCart } from "../store/users/actions";
import ProductInCart from "../components/ProductInCart";
import "./CartPage.scss";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartByUserId(1));
  const products = useSelector(selectProductsByCart(cart));

  let total = 0;
  products.forEach((product) => {
    const amount = cart.find((p) => p.productId === product.id).amount;
    total += product.price * amount;
  });

  return (
    <div className="page">
      <h2>Your shopping cart</h2>
      <div id="productInCartContainer">
        {cart.map((p) => {
          return <ProductInCart key={p.productId} id={p.productId} />;
        })}
        <hr></hr>
      </div>
      {cart.length > 0 && (
        <div id="belowLine">
          <div className="colA">
            <button onClick={() => dispatch(emptyCart(1))}>Empty cart</button>
          </div>
          <div className="colB">
            <button id="buyButton">
              A buy button that doesn't do anything
            </button>
          </div>
          <div className="colC">Total</div>
          <div>= &nbsp;&nbsp;€ {total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}

/*
As a customer, I want to be able to view my shopping cart, which products are in it, 
how many times, and what total price that adds up to. 
I also want to be able to adjust the number of items in that page, 
and to be able to empty the whole cart.
*/
