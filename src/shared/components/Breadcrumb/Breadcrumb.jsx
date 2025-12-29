import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb() {
  const location = useLocation();
  
  const steps = [
    { name: 'Cart', path: '/cart' },
    { name: 'Checkout', path: '/checkout' },
    { name: 'Place order', path: '/place-order' },
    { name: 'Confirm Order', path: '/confirm-order' }
  ];

  const currentIndex = steps.findIndex(step => step.path === location.pathname);

  return (
    <div className="breadcrumb">
      {steps.map((step, index) => (
        <span key={step.path}>
          {index <= currentIndex ? (
            <Link 
              to={step.path} 
              className={index === currentIndex ? 'active' : 'completed'}
            >
              {step.name}
            </Link>
          ) : (
            <span className="disabled">{step.name}</span>
          )}
          {index < steps.length - 1 && <span className="separator">›</span>}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
