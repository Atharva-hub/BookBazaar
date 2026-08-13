import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BookBazaar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/book">Books</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/wishlist">Wishlist</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <button className="btn btn-outline-success" type="submit">Login</button>
                            
                    
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav