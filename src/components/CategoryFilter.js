// CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = ["All", ...categories.filter(cat => cat !== "All")];

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;