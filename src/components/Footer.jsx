import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-body border-top pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-primary mb-3">
              📚 BookBazaar
            </h3>
            <p className="text-muted">
              Discover your next great read. Explore thousands of books across fiction, self-help, programming, finance, and more.
            </p>
            <div className="d-flex gap-3 mt-3">
              <span className="fs-5 cursor-pointer">🌐</span>
              <span className="fs-5 cursor-pointer">📱</span>
              <span className="fs-5 cursor-pointer">✉️</span>
            </div>
          </div>

 
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-muted text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/book" className="text-muted text-decoration-none">Books Catalog</Link>
              </li>
              <li className="mb-2">
                <Link to="/wishlist" className="text-muted text-decoration-none">Wishlist</Link>
              </li>
              <li className="mb-2">
                <Link to="/cart" className="text-muted text-decoration-none">Cart</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-muted text-decoration-none">About Us</Link>
              </li>
            </ul>
          </div>


          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Top Categories</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">Self Help</li>
              <li className="mb-2">Finance & Wealth</li>
              <li className="mb-2">Fiction & Fantasy</li>
              <li className="mb-2">Programming</li>
              <li className="mb-2">Classics & History</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Subscribe to Newsletter</h5>
            <p className="text-muted small mb-3">
              Get updates on new releases, special discounts, and curated book recommendations.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary fw-bold" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-muted mb-0 small">
              © {new Date().getFullYear()} BookBazaar. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <span className="text-muted small me-3 cursor-pointer">Privacy Policy</span>
            <span className="text-muted small cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;