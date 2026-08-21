import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Book from './pages/Book'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import CartProvider from './context/CartContext'
import ThemeProvider from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary.jsx'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
              <Routes>
                <Route path='/' element={<ErrorBoundary><Home /></ErrorBoundary>} />
                <Route path='/about' element={<ErrorBoundary><About /></ErrorBoundary>} />
                <Route path='/book' element={<ErrorBoundary><Book /></ErrorBoundary>} />
                <Route path='/cart' element={<ErrorBoundary><Cart /></ErrorBoundary>} />
                <Route path='/wishlist' element={<ErrorBoundary><Wishlist /></ErrorBoundary>} />
                <Route path='*' element={<ErrorBoundary><NotFound /></ErrorBoundary>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <div className="display-1 mb-3" aria-hidden="true">📚</div>
      <h1 className="fw-bold">Page not found</h1>
      <p className="text-muted mb-4">The page you requested does not exist.</p>
      <a href="/" className="btn btn-primary rounded-pill px-4">Go Home</a>
    </div>
  )
}

export default App
