import React from 'react'
import Register from './Register'
import Home from './home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return ( 
    <div className='text-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App