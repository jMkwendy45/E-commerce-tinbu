import React, { useState } from 'react';
import '../../styles/productdetail.css';
import { products,more_product } from '../../assets/assets';
import MoreProduct from '../categorysearch/more/MoreProduct';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const product = products[0]; // Assuming we're displaying the first product

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="div">
    <div className="productdetail">
      <div className="productimage-container">
        <img src={product.image} alt={product.name} className="productimage" />
      </div>
      <div className="productinfo">
        <h2 className="productname">{product.name}</h2>
        <p className="productprice">₦{product.price}</p>
        <div className="quantityselector">
          <button onClick={decreaseQuantity}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button className="addtocart">Add to cart</button>
        <div className="product-description">
          <h3>Product description</h3>
          <p>{product.description}</p>
        </div>
      </div>
          </div>
          <h2 className="more-section-titles">More for you</h2>
          <div className="more-products">
       {more_product.map((more_product, index) => (
          <div key={index} className="more-products-card">
            <img src={more_product.image} alt={more_product.name} className="more-products-image" />
            <h3 className="more-products-name">{more_product.name}</h3>
            <p className="more-products-description">{more_product.description}</p>
            <p className="more-products-price">₦{more_product.price}</p>
            <button className="add-to-cart-btn">Add to cart</button>
            
          </div>
        ))}   
       </div> 




          </div>
  );
};

export default ProductDetail;