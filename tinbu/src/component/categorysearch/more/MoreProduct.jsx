import React from "react";
import "../../../styles/moreproduct.css";
import { more_product, assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
function MoreProduct() {
  return (
    <div className="more-for-you-container">
      <h2 className="more-section-titles">More for you</h2>
      <div className="more-products-slider-container">
        <div className="more-products">
          <img
            src={assets.backwardarrow}
            alt=""
            className="slider-arrow left"
          />

          {more_product.map((more_product, index) => (
            <div key={index} className="more-products-card">
              <img
                src={more_product.image}
                alt={more_product.name}
                className="more-products-image"
              />
              <h3 className="more-products-name">{more_product.name}</h3>
              <p className="more-products-description">
                {more_product.description}
              </p>
              <p className="more-products-price">₦{more_product.price}</p>
              <Link to="/addtocart">
                <button className="add-to-cart-btn">Add to cart</button>
              </Link>
            </div>
          ))}
          <img src={assets.fowardarrow} alt="" className="slider-arrow left" />
          <div className="more-slider-info">
            <p>
              Get started with these selections from our pharmacies. Click or
              swipe left or right direction to view more options.
            </p>
            <Link to="/allproduct">
              <button className="view-all-btns">View all products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreProduct;
