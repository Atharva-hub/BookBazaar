import React from 'react'
import books from '../data/books.js'
import '../css/book.css'
import {CartContext} from '../context/CartContext'
import { useContext } from 'react'
import{useState} from 'react'
const Book = () => {

  const {dispatch} = useContext(CartContext);
  const [search, setSearch] = useState('')

  const filteredbooks = books.filter((book) => 
    {
      return book.title.toLowerCase().includes(search.toLowerCase())
    }
  )

  const addToCart = (book) => {
    dispatch({type:"ADD_TO_CART",payload:book});
  }


  return (
    <>
    <div className="col-12">
      <input type="text"
        className="form-control mb-4"
        placeholder="Search for books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div className="row">
      {filteredbooks.map((book) => (
        <div className="col-md-6 col-lg-3 mb-4" key={book.id}>
          
          <div className="book-card">

            {/* Image Section */}
            <div className="book-image-container">
              <img
                src={book.image}
                alt={book.title}
                className="book-image"
              />

              <button className="wishlist-btn" onClick={() => dispatch({type:"ADD_TO_WISHLIST",payload:book})}>
                ❤️
              </button>
            </div>

            {/* Content Section */}
            <div className="book-content">

              {/* Category */}
              <span className="book-category">
                {book.category}
              </span>

              {/* Title */}
              <h5 className="book-title">
                {book.title}
              </h5>

              {/* Author */}
              <p className="book-author">
                {book.author}
              </p>

              {/* Description */}
              <p className="book-description">
                {book.description}
              </p>

              {/* Rating */}
              <div className="book-rating">
                <span>{book.rating} ({book.review})</span>
              </div>

              {/* Price + Button */}
              <div className="book-bottom">
                <span className="book-price">
                  ₹{book.price}
                </span>

                <button className="details-btn" onClick={() => addToCart(book)}>
                  Add to Cart
                </button>
              </div>

            </div>
          </div>

        </div>
      ))}
    </div>
 
    </>

  )
}

export default Book;