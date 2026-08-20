import React, { useState, useContext,useEffect } from 'react';
import books from '../data/books.js';
import '../css/book.css';
import { CartContext } from '../context/CartContext';


const Book = () => {

  useEffect(() => {
      document.title = "Books";
  }, []);

  const { dispatch } = useContext(CartContext);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');


  const categories = ['All', 'Self Help', 'Finance', 'Fiction', 'Fantasy', 'Programming', 'Classic', 'History', 'Psychology', 'Business'];


  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || 
                          book.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (book) => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
  };

  const addToWishlist = (book) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: book });
  };

  return (
    <div className="container py-4">

      <div className="text-center mb-4">
        <h2 className="fw-bold">Explore Our Book Collection</h2>
        <p className="text-muted">Discover bestseller books across various genres</p>
      </div>


      <div className="row justify-content-center mb-4 g-3">
       
        <div className="col-md-8 col-lg-6">
          <div className="input-group input-group-lg shadow-sm">
            <span className="input-group-text bg-body-tertiary border-end-0">🔍</span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="btn btn-outline-secondary" onClick={() => setSearch('')}>
                ✕
              </button>
            )}
          </div>
        </div>


        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm rounded-pill px-3 ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted fw-semibold">
          Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
        </span>
        {(search || selectedCategory !== 'All') && (
          <button 
            className="btn btn-sm btn-link text-decoration-none" 
            onClick={() => { setSearch(''); setSelectedCategory('All'); }}
          >
            Reset Filters
          </button>
        )}
      </div>


      {filteredBooks.length === 0 ? (
        <div className="text-center py-5 my-4 border rounded-3 bg-body-tertiary">
          <div className="fs-1 mb-2">📚</div>
          <h4 className="fw-bold">No books found</h4>
          <p className="text-muted">Try searching with a different keyword or category filter.</p>
          <button className="btn btn-primary rounded-pill px-4" onClick={() => { setSearch(''); setSelectedCategory('All'); }}>
            Show All Books
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {filteredBooks.map((book) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={book.id}>
              <div className="book-card">
                {/* Image Section */}
                <div className="book-image-container">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                  <button
                    className="wishlist-btn"
                    onClick={() => addToWishlist(book)}
                    title="Add to Wishlist"
                  >
                    ❤️
                  </button>
                </div>

                {/* Content Section */}
                <div className="book-content">
                  <span className="badge bg-secondary-subtle text-secondary align-self-start mb-2">
                    {book.category}
                  </span>

                  <h5 className="book-title">{book.title}</h5>
                  <p className="book-author">By {book.author}</p>
                  <p className="book-description">{book.description}</p>

                  <div className="book-rating">
                    ⭐ {book.rating} <span className="text-muted">({book.review})</span>
                  </div>

                  <div className="book-bottom">
                    <span className="book-price">₹{book.price}</span>
                    <button className="details-btn" onClick={() => addToCart(book)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Book;