import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';

const Nav = () => {
  const { state } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Calculate total items in cart and wishlist
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  // Helper function to check active nav link
  const isActive = (path) => location.pathname === path ? 'active fw-bold' : '';

  return (
    <nav className={`navbar navbar-expand-lg sticky-top border-bottom shadow-sm ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
      <div className="container">
        {/* Brand Logo & Name */}
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4 text-primary" to="/">
          <span className="me-2 fs-3">📚</span> BookBazaar
        </Link>

        {/* Mobile Hamburger Toggle Button */}
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

          {/* Action Buttons: Cart, Wishlist, Theme Toggle */}
          <div className="d-flex align-items-center gap-2">
            {/* Wishlist Link */}
            <Link to="/wishlist" className="btn btn-outline-danger position-relative rounded-pill px-3">
              ❤️ Wishlist
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Link */}
            <Link to="/cart" className="btn btn-outline-primary position-relative rounded-pill px-3">
              🛒 Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Dark/Light Mode Toggle Button */}
            <button 
              className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-warning text-dark'} rounded-pill px-3 fw-medium ms-lg-2`}
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