import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('BookBazaar render error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const showDetails = import.meta.env.DEV && this.state.error;

    return (
      <main className="container py-5">
        <div className="mx-auto text-center border rounded-4 shadow-sm p-5" style={{ maxWidth: '680px' }}>
          <div className="display-1 mb-3" aria-hidden="true">⚠️</div>
          <h1 className="fw-bold mb-3">Something went wrong</h1>
          <p className="text-muted mb-4">
            BookBazaar could not display this page. Try again or return to the home page.
          </p>
          {showDetails && (
            <pre className="text-start small bg-body-tertiary rounded-3 p-3 mb-4 overflow-auto">
              {this.state.error.message}
            </pre>
          )}
          <div className="d-flex justify-content-center gap-2">
            <button type="button" className="btn btn-primary rounded-pill px-4" onClick={this.handleReset}>
              Try Again
            </button>
            <a href="/" className="btn btn-outline-secondary rounded-pill px-4">
              Go Home
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default ErrorBoundary;