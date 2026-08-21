import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up - BookBazaar";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 bg-body-tertiary">
            <div className="text-center mb-4">

              <h2 className="fw-extrabold mb-1">Create an Account</h2>
              <p className="text-muted">Join BookBazaar to explore thousands of books</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label htmlFor="fullNameInput" className="form-label fw-semibold">
                  Full Name
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-body-secondary border-end-0">👤</span>
                  <input
                    type="text"
                    className="form-control bg-body border-start-0"
                    id="fullNameInput"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="usernameInput" className="form-label fw-semibold">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-body-secondary border-end-0">🏷️</span>
                  <input
                    type="text"
                    className="form-control bg-body border-start-0"
                    id="usernameInput"
                    name="username"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3 text-start">
                <label htmlFor="emailInput" className="form-label fw-semibold">
                  Email Address
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-body-secondary border-end-0">📧</span>
                  <input
                    type="email"
                    className="form-control bg-body border-start-0"
                    id="emailInput"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4 text-start">
                <label htmlFor="passwordInput" className="form-label fw-semibold">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-body-secondary border-end-0">🔒</span>
                  <input
                    type="password"
                    className="form-control bg-body border-start-0"
                    id="passwordInput"
                    name="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success btn-lg w-100 rounded-pill fw-bold mb-3 shadow-sm"
              >
                Sign Up & Continue
              </button>
            </form>

            <div className="text-center border-top pt-3 mt-2">
              <p className="text-muted mb-0">
                Already have an account?{' '}
                <Link to="/login" className="text-primary fw-bold text-decoration-none">
                  Log In here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
