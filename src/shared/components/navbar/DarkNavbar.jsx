import { Link } from "react-router-dom";
import { useAuth } from '../../../contexts/AuthContext';
import { useCart } from '../../../contexts/CartContext';
import "./DarkNavbar.css";

function DarkNavbar() {
  const { isLoggedIn } = useAuth();
  const { cartCount } = useCart();

  return (
    <nav className="dark-navbar">
      <div className="container">
       <div className="dark-navbar-left">
         <Link className="dark-navbar-logo" to="/">
         <img src="/images/Group.png" alt="" />
        </Link>
         <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input 
            type="text" 
            placeholder="Search for any product..." 
            className="search-input"
          />
        </div>

       </div>
       

        <div className="dark-navbar-icons">
          <Link to="/cart" className="icon-btn cart-icon">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="icon-btn">
            <i className="fas fa-globe"></i>
          </button>
          {isLoggedIn ? (
            <Link to="/profile" className="icon-btn">
              <i className="fas fa-user"></i>
            </Link>
          ) : (
            <Link to="/" className="icon-btn">
              <i className="fas fa-user"></i>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default DarkNavbar;
