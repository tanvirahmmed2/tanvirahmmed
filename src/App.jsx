import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Componenet/NavBar'
import Footer from './Componenet/Footer'
import Home from './Home'
import Review from './Componenet/Review'
import Skills from './Componenet/Skills.jsx'
import Contact from './Componenet/Contact'
import Projects from './Componenet/Projects'
import ShowProject from './Componenet/Project/ShowProject'
import About from './Componenet/About'
import Services from './Componenet/Services.jsx'


function App() {
  return (
    <div className='overflow-x-hidden w-full relative select-none h-auto bg-gray-900 text-white font-sans '>

      <NavBar />
      
      <div className='w-full  pt-14 h-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/reviews' element={<Review />} />
          <Route path='/skills' element={<Skills />} />
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
