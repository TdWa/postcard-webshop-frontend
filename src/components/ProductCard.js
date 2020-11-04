import React from "react";
import { Link } from "react-router-dom";
import CategoriesAndTags from "./CategoriesAndTags";
import AddToCart from "./AddToCart";
import "./ProductCard.scss";

export default function ProductCard({
  id,
  name,
  url,
  price,
  tags,
  categories,
}) {
  return (
    <div className="productCard">
      <div className="imgContainer">
        <Link to={`/product/${id}`}>
          <img src={url} alt={name}></img>
        </Link>
      </div>
      <div className="textContainer">
        <div className="textRow">
          <strong>{name}</strong>
        </div>
        <CategoriesAndTags categories={categories} tags={tags} />
        <div className="textRow">
          <div>€ {price.toFixed(2)}</div>
          <AddToCart productId={id} />
        </div>
      </div>
    </div>
  );
}
