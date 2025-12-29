import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../../contexts/AuthContext';
import AuthModal from "../../../features/Auth/components/AuthModal";
import "../../../features/Auth/styles/modal.css";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-nav navbar">
      <div className="container">
        <Link className="navbar-logo" to="/">
          <img src="/imges/Group.png" alt="" />
        </Link>

        <div
          className={`hamburger d-lg-none ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ul-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/restaurant/register"
                style={{ marginRight: "16px" }}
              >
                Register Restaurant
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-8">
            <li className="nav-item">
              {isLoggedIn ? (
                <div className="user-menu">
                  <Link to="/profile" className="user-icon">
                    <i className="fas fa-user"></i>
                  </Link>
                </div>
              ) : (
                <button
                  className="nav-link login"
                  onClick={() => setLoginModalOpen(true)}
                  style={{
                    background: "none",
                    border: "0.5px solid white",
                    color: "white",
                  }}
                >
                  Log in
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      <AuthModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        initialMode="login"
      />
    </nav>
  );
}

export default Navbar;
