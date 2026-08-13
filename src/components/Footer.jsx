import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">

          <div className="row">

            {/* Brand */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h3 className="fw-bold text-white">
                📚 BookBazaar
              </h3>

              <p className="text-secondary mt-3">
                Discover your next great read. Explore thousands of
                books across fiction, self-help, programming, finance
                and more.
              </p>

              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-light fs-5">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" className="text-light fs-5">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" className="text-light fs-5">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="#" className="text-light fs-5">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>


            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-secondary text-decoration-none">
                    Home
                  </a>
                </li>

                <li className="mb-2">
                  <a href="/books" className="text-secondary text-decoration-none">
                    Books
                  </a>
                </li>

                <li className="mb-2">
                  <a href="/wishlist" className="text-secondary text-decoration-none">
                    Wishlist
                  </a>
                </li>

                <li className="mb-2">
                  <a href="/about" className="text-secondary text-decoration-none">
                    About Us
                  </a>
                </li>
              </ul>
            </div>


            {/* Categories */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Categories</h5>

              <ul className="list-unstyled">
                <li className="mb-2 text-secondary">Fiction</li>
                <li className="mb-2 text-secondary">Self Help</li>
                <li className="mb-2 text-secondary">Programming</li>
                <li className="mb-2 text-secondary">Finance</li>
                <li className="mb-2 text-secondary">Fantasy</li>
              </ul>
            </div>


            {/* Contact */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>

              <p className="text-secondary mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Mumbai, Maharashtra, India
              </p>

              <p className="text-secondary mb-2">
                <i className="bi bi-envelope me-2"></i>
                support@bookbazaar.com
              </p>

              <p className="text-secondary mb-2">
                <i className="bi bi-telephone me-2"></i>
                +91 98765 43210
              </p>

              {/* Newsletter */}
              <div className="mt-4">
                <h6 className="fw-bold">Subscribe to our newsletter</h6>

                <div className="input-group mt-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />

                  <button className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

          </div>


          {/* Divider */}
          <hr className="border-secondary my-4" />


          {/* Bottom Footer */}
          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">
              <p className="text-secondary mb-0">
                © 2026 BookBazaar. All rights reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <a
                href="#"
                className="text-secondary text-decoration-none me-3"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-secondary text-decoration-none"
              >
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>
      </footer>
    </>

  )
}

export default Footer