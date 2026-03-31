import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
    
  )
}

export default App