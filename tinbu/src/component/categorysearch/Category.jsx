import React from "react";
import "../../styles/categorysearch.css";
import { assets } from "../../assets/assets";
function CategorySearch() {
  return (
    <div className="category-search">
      <div className="shop-inner">
        <div className="shop-category">
          <p>Shop by category</p>
          <img src={assets.dropdown_icon} alt="drop-down" />
        </div>
        <div className="search-icon">
          <img src={assets.search_icon} alt="drop-down" />
          <input
            type="search"
            id="default-search"
            className="search-input"
            placeholder="What do you need?"
            required
          />
        </div>

        <div className="contact-info">
          <img src={assets.call_icon} alt="drop-down" />
          <p>Call-081278146570</p>
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;
