import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Componenet/NavBar'
import Footer from './Componenet/Footer'
import Home from './Home'
import Review from './Componenet/Review'
import Services from './Componenet/Services'
import Contact from './Componenet/Contact'
import Projects from './Componenet/Projects'
import ShowProject from './Componenet/Project/ShowProject'


function App() {
  return (
    <div className='overflow-x-hidden w-full relative select-none h-auto bg-gray-100 '>

      <NavBar />
      <div className='w-full  py-12 h-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<Review />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:title' element={<ShowProject />} />
        </Routes>

      </div>

      <Footer />


    </div>
  )
}

export default App
