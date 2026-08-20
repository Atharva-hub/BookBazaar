import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";


const Cart = () => {

  useEffect(() => {
      document.title = "Cart";
  }, []);

  const { state, dispatch } = useContext(CartContext);

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };


  const subtotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = subtotal > 499 || subtotal === 0 ? 0 : 40;
  const totalAmount = subtotal + shippingFee;

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">🛒 Shopping Cart</h2>

      {state.cart.length === 0 ? (

        <div className="text-center py-5 border rounded-4 bg-body-tertiary shadow-sm my-4">
          <div className="fs-1 mb-3">🛍️</div>
          <h3 className="fw-bold">Your Cart is Empty</h3>
          <p className="text-muted mb-4">Looks like you haven't added any books to your cart yet.</p>
          <Link to="/book" className="btn btn-primary btn-lg rounded-pill px-4">
            Explore Books Now
          </Link>
        </div>
      ) : (

        <div className="row g-4">
          {/* Cart Items List */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {state.cart.map((book) => (
                <div key={book.id} className="card border shadow-sm p-3 rounded-3">
                  <div className="row align-items-center g-3">
                    {/* Book Thumbnail */}
                    <div className="col-3 col-md-2 text-center">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="img-fluid rounded"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                      />
                    </div>


                    <div className="col-9 col-md-5">
                      <h5 className="fw-bold mb-1">{book.title}</h5>
                      <p className="text-muted small mb-1">By {book.author}</p>
                      <span className="badge bg-secondary-subtle text-secondary mb-2">
                        {book.category}
                      </span>
                      <div className="fw-bold text-primary">₹{book.price}</div>
                    </div>


                    <div className="col-6 col-md-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-circle px-2 py-0 fw-bold"
                          onClick={() => decrement(book.id)}
                        >
                          -
                        </button>
                        <span className="fw-bold fs-6 px-2">{book.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-circle px-2 py-0 fw-bold"
                          onClick={() => increment(book.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>


                    <div className="col-6 col-md-2 text-end">
                      <div className="fw-bold mb-2">₹{book.price * book.quantity}</div>
                      <button
                        className="btn btn-outline-danger btn-sm rounded-pill"
                        onClick={() => removeFromCart(book.id)}
                        title="Remove Item"
                      >
                        🗑️ Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-body-tertiary">
              <h4 className="fw-bold mb-3">Order Summary</h4>
              
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Items Subtotal:</span>
                <span className="fw-bold">₹{subtotal}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Delivery Fee:</span>
                <span className="fw-bold">
                  {shippingFee === 0 ? <span className="text-success">FREE</span> : `₹${shippingFee}`}
                </span>
              </div>

              {shippingFee > 0 && (
                <p className="text-success small mb-2">
                  Add ₹{499 - subtotal} more for FREE Delivery!
                </p>
              )}

              <hr className="my-3" />

              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5">Total Amount:</span>
                <span className="fw-bold fs-5 text-primary">₹{totalAmount}</span>
              </div>

              <button className="btn btn-success btn-lg rounded-pill w-100 fw-bold mb-3 shadow-sm">
                Proceed to Checkout 🚀
              </button>

              <Link to="/book" className="btn btn-outline-secondary rounded-pill w-100">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;