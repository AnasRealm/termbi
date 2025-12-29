import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../shared/components/Breadcrumb/Breadcrumb';
import './PlaceOrder.css';

function PlaceOrder() {
  const navigate = useNavigate();

  const orderData = {
    orderCode: '5511002233644 - 55998811',
    totalPrice: '540$',
    name: 'Customer name',
    phone: '+44 526 584 5364',
    address: 'Lorem ipsum has been the industry\'s standard dummy'
  };

  return (
    <div className="place-order-page">
      <Breadcrumb />
      
      <div className="place-order-container">
        <h1>Your Order is Ready</h1>
        
        <div className="order-summary-box">
          <h2>Order Summary</h2>
          
          <div className="order-details">
            <div className="detail-row">
              <span className="label">Order Code</span>
              <span className="value">{orderData.orderCode}</span>
            </div>
            <div className="detail-row">
              <span className="label">Total Price</span>
              <span className="value price">{orderData.totalPrice}</span>
            </div>
            <div className="detail-row">
              <span className="label">Name</span>
              <span className="value">{orderData.name}</span>
            </div>
            <div className="detail-row">
              <span className="label">Phone</span>
              <span className="value">{orderData.phone}</span>
            </div>
            <div className="detail-row">
              <span className="label">Delivery address</span>
              <span className="value">{orderData.address}</span>
            </div>
          </div>

          <button 
            className="confirm-btn"
            onClick={() => navigate('/confirm-order')}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
