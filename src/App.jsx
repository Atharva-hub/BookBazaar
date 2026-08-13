import { useState } from 'react'
import react from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Book from './pages/Book'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import CartProvider from './context/CartContext'
function App() {
 
 return(
  <>
  <CartProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/book' element={<Book/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
  </Routes>

  <Footer/>
  </BrowserRouter>
  </CartProvider>
  </>
 )
}

export default App
