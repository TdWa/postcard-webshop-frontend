import React, { useState } from "react";
import "./AddToCart.scss";

export default function AddToCart() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="addToCart">
      Add to cart <button>+</button>
    </div>
  );
}
