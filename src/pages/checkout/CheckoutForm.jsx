import React, { useState } from 'react';
import '../../styles/checkoutform.css';
import { assets } from '../../assets/assets';
const CheckoutForm = () => {
  const [deliveryOption, setDeliveryOption] = useState('ship');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: 'Lagos',
    phoneNumber: '',
    saveInfo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Select delivery option</h2>
        <div className="delivery-options">
          <label className={`delivery-option ${deliveryOption === 'ship' ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="deliveryOption" 
              value="ship" 
              checked={deliveryOption === 'ship'} 
              onChange={() => setDeliveryOption('ship')}
            />
            Ship to you
          </label>
          <label className={`delivery-option ${deliveryOption === 'pickup' ? 'selected' : ''}`}>
            <input 
              type="radio" 
              name="deliveryOption" 
              value="pickup" 
              checked={deliveryOption === 'pickup'} 
              onChange={() => setDeliveryOption('pickup')}
            />
            Pick up yourself
          </label>
        </div>

        <form>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
          </div>
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
          <input type="text" name="address" placeholder="Address" onChange={handleInputChange} />
          <select name="city" value={formData.city} onChange={handleInputChange}>
            <option value="Lagos">Lagos</option>
          </select>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} />
          <label>
            <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleInputChange} />
            Save this information for next time
          </label>
          
          <div className="shipping-method">
            <h3>Shipping Method</h3>
            <label>
              <input type="radio" name="shippingMethod" defaultChecked />
              Standard shipping (delivered within 1-2 days)
              <span className="shipping-price">₦ 4,156</span>
            </label>
          </div>
        </form>
      </div>

      <div className="order-summary">
        <div className="product-info">
          <img src={assets.antimalaria} alt="Product" />
          <span>Vitabiotics Feroglobin Capsule</span>
          <span>₦ 8,120</span>
        </div>
        <div className="discount-code">
          <input type="text" placeholder="Discount code" />
          <button>Apply</button>
        </div>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>₦ 8,120</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>₦ 4,156</span>
        </div>
        <div className="summary-item">
          <span>VAT</span>
          <span>₦ 501.72</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>₦ 13,077.72</span>
        </div>
        <button className="proceed-to-pay">Proceed to pay</button>
      </div>
    </div>
  );
};

export default CheckoutForm;