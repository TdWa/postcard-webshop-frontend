import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { selectAllProducts } from "../store/products/selectors";
import "./HomePage.css";

export default function HomePage() {
  const products = useSelector(selectAllProducts);
  console.log("what is products", products);

  return (
    <div className="page">
      <div id="productContainer">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
