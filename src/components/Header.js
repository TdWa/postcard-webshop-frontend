import React from "react";
import "./Header.css";
import ShoppingCartInfo from "./ShoppingCartInfo";

export default function Header() {
  return (
    <div className="headerContainer">
      <header>
        <h1>Postcard webshop</h1>
        <ShoppingCartInfo />
      </header>
    </div>
  );
}
