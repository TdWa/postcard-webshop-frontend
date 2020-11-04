import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  selectProductsByCategory,
  selectProductCategories,
} from "../store/products/selectors";
import "./HomePage.scss";

export default function HomePage() {
  const [categoryFilter, setCategoryFilter] = useState("all categories");
  const [sort, setSort] = useState("popularity (desc)");
  const products = useSelector(selectProductsByCategory(categoryFilter));
  const categories = useSelector(selectProductCategories);

  return (
    <div className="page">
      <br></br>
      <div id="filterContainer">
        <label htmlFor="filterType">Filter by category: </label>
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          name="filter"
          id="filterType"
        >
          <option>all categories</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <br></br>
      <div id="sortContainer">
        <label htmlFor="sortType">Sort Postcards: </label>
        <select
          onChange={(e) => setSort(e.target.value)}
          name="sort"
          id="sortType"
        >
          <option value="popularity (desc)">popularity (desc)</option>
          <option value="popularity (asc)">popularity (asc)</option>
          <option value="price (desc)">price (desc)</option>
          <option value="price (asc)">price (asc)</option>
        </select>
      </div>
      <br></br>
      <div id="productContainer">
        {products
          .sort((a, b) => {
            switch (sort) {
              case "popularity (desc)":
                return b.popularity - a.popularity;
              case "popularity (asc)":
                return a.popularity - b.popularity;
              case "price (desc)":
                return b.price - a.price;
              case "price (asc)":
                return a.price - b.price;
              default:
                return 0;
            }
          })
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}

/*
 <label htmlFor="searchType">Search by:</label>
<select
  onChange={(e) => setSearchType(e.target.value)}
  name="select"
  id="searchType"
>
  <option value="name">Name</option>
  <option value="ingredient">Ingredient</option>
</select>


<h2>
    Who likes{" "}
    <select
      defaultValue={"Resource..."}
      onChange={(e) => setResource(e.target.value)}
    >
      <option disabled>Resource...</option>
      {resources.map((resource) => {
        return (
          <option key={resource.id} value={resource.name}>
            {resource.name}
          </option>
        );
      })}
    </select>
    &nbsp;?
  </h2>

*/
