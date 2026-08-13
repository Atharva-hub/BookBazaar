import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Wishlist = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>My Wishlist ❤️</h2>

      {state.wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {state.wishlist.map((book) => (
            <div className="col-md-6 col-lg-3 mb-4" key={book.id}>
              <div className="card h-100">

                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "250px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    {book.title}
                  </h5>

                  <p className="card-text">
                    {book.author}
                  </p>

                  <p className="fw-bold">
                    ₹{book.price}
                  </p>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: book.id,
                      })
                    }
                  >
                    Remove
                  </button>

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