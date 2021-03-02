import React from "react";
import "./CategoriesAndTags.scss";

export default function CategoriesAndTags({ categories, tags }) {
  return (
    <div className="tagAndCategoryContainer">
      {categories.map((category) => (
        <div key={category} className="category">
          {category}
        </div>
      ))}
      {tags.map((tag) => (
        <div key={tag} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}
