import { useCart } from '../../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../shared/components/Breadcrumb/Breadcrumb';
import './Cart.css';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <Breadcrumb />
      <div className="cart-container">
        <h1>My Cart</h1>
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <input type="checkbox" defaultChecked />
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">{item.price}$</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Total Price</span>
                <span>{cartTotal}$</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span>30$</span>
              </div>
              <div className="summary-row total">
                <span>Grand Total</span>
                <span>{cartTotal + 30}$</span>
              </div>
              <button className="checkout-btn" onClick={() => navigate('/checkout')}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
