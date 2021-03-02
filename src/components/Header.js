import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import ShoppingCartInfo from "./ShoppingCartInfo";

export default function Header() {
  return (
    <div className="headerContainer">
      <header>
        <Link to={"/"}>
          <h1>Postcard webshop</h1>
        </Link>
        <ShoppingCartInfo />
      </header>
    </div>
  );
}
