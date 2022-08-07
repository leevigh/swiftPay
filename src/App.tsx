import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Verify } from './pages/Verify'

function App() {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout/:cartId' element={<Checkout />} />
        <Route path='/verify/:cartId' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
