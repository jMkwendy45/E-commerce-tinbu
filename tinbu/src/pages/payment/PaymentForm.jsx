import React, { useState } from 'react';
import '../../styles/paymentform.css';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
  };

  return (
    <div className="payment-form">
      <h2>Select payment option</h2>
      <div className="payment-options">
        <label>
          <input 
            type="radio" 
            value="bank" 
            checked={paymentMethod === 'bank'} 
            onChange={() => setPaymentMethod('bank')}
          />
          Bank transfer
        </label>
        <span className="or">Or</span>
        <label>
          <input 
            type="radio" 
            value="card" 
            checked={paymentMethod === 'card'} 
            onChange={() => setPaymentMethod('card')}
          />
          Card
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="0000 0000 0000 0000" 
          value={cardNumber} 
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div className="card-details">
          <input 
            type="text" 
            placeholder="MM/YY" 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="CVV" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button type="submit">Pay NGN 23,877.29</button>
      </form>
    </div>
  );
};

export default PaymentForm;