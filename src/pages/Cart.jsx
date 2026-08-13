import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const increment = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  return (
    <div className="container mt-4">

      <h2>My Cart</h2>

      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">

          {state.cart.map((book) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={book.id}
            >

              <div className="card h-100">

                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{
                    height: "300px",
                    objectFit: "contain",
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {book.title}
                  </h5>

                  <p className="card-text">
                    <strong>Author:</strong> {book.author}
                  </p>

                  <p className="card-text">
                    <strong>Category:</strong> {book.category}
                  </p>

                  <p className="card-text">
                    {book.description}
                  </p>

                  <p>
                    ⭐ {book.rating} ({book.review})
                  </p>

                  <h5>
                    ₹{book.price}
                  </h5>

                  {/* Quantity */}
                  <div className="d-flex align-items-center gap-2 mt-3">

                    <button
                      className="btn btn-secondary"
                      onClick={() => decrement(book.id)}
                    >
                      -
                    </button>

                    <span className="fw-bold">
                      {book.quantity}
                    </span>

                    <button
                      className="btn btn-secondary"
                      onClick={() => increment(book.id)}
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    className="btn btn-danger mt-3"
                    onClick={() => removeFromCart(book.id)}
                  >
                    Remove
                  </button>

                  {/* Total for this book */}
                  <p className="mt-3 fw-bold">
                    Total: ₹{book.price * book.quantity}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Cart;