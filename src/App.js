import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import "./main.scss";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
