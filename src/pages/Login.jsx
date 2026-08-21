import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - BookBazaar";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim().toLowerCase() === 'atharva' && password === '080403') {
      setError('');

      navigate('/');
    } else {
      setError('Invalid username or password. Hint: Username is "Atharva" and Password is "080403"');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 bg-body-tertiary">
            <div className="text-center mb-4">
              {/* <div className="display-4 mb-2">🔐</div> */}
              <h2 className="fw-extrabold mb-1">Welcome Back</h2>
              <p className="text-muted">Log in to continue to BookBazaar</p>
            </div>

            {error && (
              <div className="alert alert-danger alert-dismissible fade show rounded-3 text-start small mb-4" role="alert">
                <strong>Authentication Failed!</strong> {error}
                <button type="button" className="btn-close" onClick={() => setError('')} aria-label="Close"></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label htmlFor="usernameInput" className="form-label fw-semibold">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-body-secondary border-end-0">👤</span>
                  <input
                    type="text"
                    className="form-control bg-body border-start-0"
                    id="usernameInput"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-4 text-start">
                <label htmlFor="passwordInput" className="form-label fw-semibold">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-body-secondary border-end-0">🔑</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control bg-body border-start-0 border-end-0"
                    id="passwordInput"
                    placeholder="Enter your password "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "👁️‍🗨️" : "👁️"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 rounded-pill fw-bold mb-3 shadow-sm"
              >
                Log In
              </button>
            </form>

            <div className="text-center border-top pt-3 mt-2">
              <p className="text-muted mb-0">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary fw-bold text-decoration-none">
                  Sign Up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
