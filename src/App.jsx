import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Componenet/NavBar'
import Footer from './Componenet/Footer'
import Home from './Home'
import Review from './Componenet/Review'
import Services from './Componenet/Services'
import Contact from './Componenet/Contact'
import Projects from './Componenet/Projects'

function App() {
  return (
    <div className='overflow-x-hidden w-full px-4 py-4  select-none h-auto bg-gray-200 '>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Review />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
