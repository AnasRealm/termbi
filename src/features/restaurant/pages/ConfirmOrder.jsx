import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../shared/components/Breadcrumb/Breadcrumb';
import './ConfirmOrder.css';

function ConfirmOrder() {
  const navigate = useNavigate();

  return (
    <div className="confirm-order-page">
      <Breadcrumb />
      
      <div className="confirm-container">
        <div className="success-icon">
          <i className="fas fa-check"></i>
        </div>
        
        <h1>Confirmation ordered Successfully</h1>
        
        <button className="go-home-btn" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmOrder;
