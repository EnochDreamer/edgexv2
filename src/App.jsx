import React from 'react'
import Register from './Register'
import Home from './home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from './courses/Courses'



function App() {
  return (
    <div className='text-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App