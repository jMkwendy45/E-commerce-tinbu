import React from "react";
import "../../styles/availableproduct.css";
import { availableProduct } from "../../assets/assets/";
import { Link } from "react-router-dom";
const ProductCard = ({ image, name, price, description }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <h3 className="product-name">{name}</h3>
    <p className="product-description">{description}</p>
    <p className="product-price">₦{price}</p>
    <Link to="/addtocart">
      <button className="add-to-cart-btn">Add to Cart</button>
    </Link>
  </div>
);

const AvailableProduct = () => (
  <div className="product-grid-container">
    <h2 className="grid-title">Available products</h2>
    <div className="product-grid">
      {availableProduct.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
    <div className="pagination">
      <span className="page-number">1</span>
    </div>
  </div>
);

export default AvailableProduct;
