import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Wishlist = () => {
  const { state, dispatch } = useContext(CartContext);

  const moveToCart = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: book });
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: book.id });
  };

  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="fw-bold m-0">❤️ My Wishlist</h2>
        <span className="badge bg-danger rounded-pill fs-6 px-3">
          {state.wishlist.length} Saved
        </span>
      </div>

      {state.wishlist.length === 0 ? (
        <div className="text-center py-5 border rounded-4 bg-body-tertiary shadow-sm my-4">
          <div className="fs-1 mb-3">💔</div>
          <h3 className="fw-bold">Your Wishlist is Empty</h3>
          <p className="text-muted mb-4">Save your favorite books to read or purchase later!</p>
          <Link to="/book" className="btn btn-primary btn-lg rounded-pill px-4">
            Browse Books
          </Link>
        </div>
      ) : (
 
        <div className="row g-4">
          {state.wishlist.map((book) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={book.id}>
              <div className="book-card">
 
                <div className="book-image-container">
                  <img src={book.image} alt={book.title} className="book-image" />
                  <button
                    className="wishlist-btn text-danger"
                    onClick={() => removeFromWishlist(book.id)}
                    title="Remove from Wishlist"
                  >
                    ✕
                  </button>
                </div>


                <div className="book-content">
                  <span className="badge bg-secondary-subtle text-secondary align-self-start mb-2">
                    {book.category}
                  </span>

                  <h5 className="book-title">{book.title}</h5>
                  <p className="book-author">By {book.author}</p>

                  <div className="book-rating">
                    ⭐ {book.rating} <span className="text-muted">({book.review})</span>
                  </div>

                  <div className="book-bottom flex-column align-items-stretch gap-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="book-price">₹{book.price}</span>
                    </div>

                    <button
                      className="btn btn-primary btn-sm rounded-pill w-100 fw-bold"
                      onClick={() => moveToCart(book)}
                    >
                      🛒 Move to Cart
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

export default Wishlist;