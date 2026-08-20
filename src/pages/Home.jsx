import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import books from '../data/books.js';
import { CartContext } from '../context/CartContext.jsx';
import '../css/book.css';

const Home = () => {
  const { dispatch } = useContext(CartContext);


  const featuredBooks = books.slice(0, 4);


  const categories = [
    { name: 'Self Help', icon: '🌱', count: '5 Books' },
    { name: 'Finance', icon: '💰', count: '3 Books' },
    { name: 'Fiction', icon: '✨', count: '4 Books' },
    { name: 'Programming', icon: '💻', count: '3 Books' },
  ];

  return (
    <div>

      <section className="bg-primary text-white py-5 mb-5 shadow-sm rounded-bottom-4">
        <div className="container py-4 text-center">
          <span className="badge bg-light text-primary fs-6 px-3 py-2 rounded-pill mb-3 fw-bold">
            📖 Welcome to BookBazaar
          </span>
          <h1 className="display-4 fw-extrabold mb-3">
            Discover Your Next Great Read
          </h1>
          <p className="lead mx-auto mb-4 opacity-90" style={{ maxWidth: '650px' }}>
            Explore thousands of books across fiction, programming, finance, self-help, and more with fast delivery and great deals!
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/book" className="btn btn-warning btn-lg fw-bold px-4 rounded-pill shadow-sm">
              🔍 Browse All Books
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg px-4 rounded-pill">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        {/* 2. CATEGORIES SECTION */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0">Explore Categories</h2>
            <Link to="/book" className="text-decoration-none fw-semibold">
              View All &rarr;
            </Link>
          </div>

          <div className="row g-3">
            {categories.map((cat, index) => (
              <div key={index} className="col-6 col-md-3">
                <Link to="/book" className="text-decoration-none">
                  <div className="card text-center p-3 h-100 border-0 shadow-sm hover-shadow transition">
                    <div className="fs-1 mb-2">{cat.icon}</div>
                    <h5 className="fw-bold mb-1 text-body">{cat.name}</h5>
                    <span className="text-muted small">{cat.count}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold m-0">🔥 Trending Bestsellers</h2>
              <p className="text-muted m-0">Handpicked top recommendations for you</p>
            </div>
            <Link to="/book" className="btn btn-outline-primary rounded-pill px-3">
              See All Books
            </Link>
          </div>

          <div className="row g-4">
            {featuredBooks.map((book) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={book.id}>
                <div className="book-card">
                  {/* Book Image */}
                  <div className="book-image-container">
                    <img src={book.image} alt={book.title} className="book-image" />
                    <button 
                      className="wishlist-btn"
                      onClick={() => dispatch({ type: 'ADD_TO_WISHLIST', payload: book })}
                      title="Add to Wishlist"
                    >
                      ❤️
                    </button>
                  </div>


                  <div className="book-content">
                    <span className="badge bg-secondary-subtle text-secondary align-self-start mb-2">
                      {book.category}
                    </span>
                    <h5 className="book-title">{book.title}</h5>
                    <p className="book-author">{book.author}</p>

                    <div className="book-rating">
                      ⭐ {book.rating} <span className="text-muted">({book.review})</span>
                    </div>

                    <div className="book-bottom">
                      <span className="book-price">₹{book.price}</span>
                      <button 
                        className="details-btn"
                        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: book })}
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="my-5 p-4 rounded-4 bg-body-tertiary border shadow-sm">
          <h2 className="text-center fw-bold mb-4">Why BookBazaar?</h2>
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 mb-2">🚚</div>
                <h5 className="fw-bold">Free Shipping</h5>
                <p className="text-muted small">On all orders above ₹499 across India</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 mb-2">💯</div>
                <h5 className="fw-bold">100% Genuine</h5>
                <p className="text-muted small">Original paperbacks & hardcovers directly from publishers</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 mb-2">🔒</div>
                <h5 className="fw-bold">Secure Checkout</h5>
                <p className="text-muted small">Safe payments via UPI, Credit Card, and COD</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 mb-2">🎧</div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="text-muted small">Dedicated customer service team to help you anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;