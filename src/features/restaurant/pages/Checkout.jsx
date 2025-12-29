import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import Breadcrumb from '../../../shared/components/Breadcrumb/Breadcrumb';
import './Checkout.css';

function Checkout() {
  const { cartTotal } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <div className="checkout-page">
      <Breadcrumb />
      <div className="checkout-container">
        <div className="checkout-steps">
          <span>Cart</span>
          <span className="active">Checkout</span>
          <span>Place order</span>
          <span>Confirm Order</span>
        </div>

        <div className="checkout-content">
          <div className="payment-section">
            <h2>Payment Detailes</h2>
            
            <div className="form-group">
              <label>Cardholder Name</label>
              <input type="text" placeholder="Enter Cardholder name" />
            </div>

            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="0000 0000 0000 0000" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiration Date</label>
                <input type="text" placeholder="MM/YYYY" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="***" />
              </div>
            </div>

            <button className="place-order-btn" onClick={() => navigate('/place-order')}>Place order</button>
          </div>

          <div className="order-summary-section">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Total Price</span>
              <span className="price">{cartTotal}$</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="price">30$</span>
            </div>
            <div className="summary-row total">
              <span>Grand Total</span>
              <span className="price">{cartTotal + 30}$</span>
            </div>

            <h4>Choose Payment Method</h4>
            <div className="payment-methods">
              <label className="payment-option">
                <input 
                  type="radio" 
                  name="payment" 
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>PayPal</span>
              </label>
              <label className="payment-option">
                <input 
                  type="radio" 
                  name="payment" 
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Credit Card</span>
              </label>
              <label className="payment-option">
                <input 
                  type="radio" 
                  name="payment" 
                  value="google-pay"
                  checked={paymentMethod === 'google-pay'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Google Pay</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
