import React from "react";
import "../../styles/cartitem.css";
import { products } from "../../assets/assets";
import { Link } from "react-router-dom";
const CartDetails = () => {
  return (
    <div className="cart-details">
      <h2>Your cart details</h2>
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td className="item-info">
                <img src={item.image} alt={item.name} className="item-image" />
                <span>{item.name}</span>
              </td>
              <td>1</td>
              <td>₦ {item.price.toLocaleString()}</td>
              <td>₦ {item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <p>Cart subtotal</p>
        <p className="subtotal">₦ {products[0].price.toLocaleString()}</p>
      </div>
      <div className="cart-actions">
        <Link to="/allproduct">
          <button className="get-more-items">Get more items</button>
        </Link>

        <Link to="/checkoutform">
          <button className="checkout">Checkout now</button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
