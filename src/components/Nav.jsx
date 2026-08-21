import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';

const Nav = () => {
  const { state } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();


  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = state.wishlist.length;


  const isActive = (path) => location.pathname === path ? 'active fw-bold' : '';

  return (
    <nav className={`navbar navbar-expand-lg sticky-top border-bottom shadow-sm ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4 text-primary" to="/">
          <span className="me-2 fs-3">📚</span> BookBazaar
        </Link>


        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/book')}`} to="/book">Books</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/about')}`} to="/about">About Us</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 flex-wrap">

            <Link to="/wishlist" className="btn btn-outline-danger position-relative rounded-pill px-3">
              ❤️ Wishlist
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlistCount}
                </span>
              )}
            </Link>


            <Link to="/cart" className="btn btn-outline-primary position-relative rounded-pill px-3">
              🛒 Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className={`btn auth-btn auth-btn-login ${location.pathname === '/login' ? 'auth-btn-login-active' : ''}`}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className={`btn auth-btn auth-btn-signup ${location.pathname === '/signup' ? 'auth-btn-signup-active' : ''}`}
            >
              Sign Up
            </Link>

            <button 
              className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-warning text-dark'} rounded-pill px-3 fw-medium ms-lg-1`}
              onClick={toggleTheme}
              title="Toggle Dark/Light Mode"
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;