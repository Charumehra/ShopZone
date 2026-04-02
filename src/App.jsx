import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import ProductDetails from './components/ProductDetails'
import CartPage from './components/CartPage'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage/>} />
    </Routes>
    </>
    
  )
}

export default App