import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Componenet/layout/NavBar.jsx'
import Footer from './Componenet/layout/Footer.jsx'
import Home from './Componenet/layout/Home.jsx'
import Review from './Componenet/pages/Review.jsx'
import Skills from './Componenet/pages/Skills.jsx'
import Contact from './Componenet/pages/Contact.jsx'
import Projects from './Componenet/pages/Projects.jsx'
import ShowProject from './Componenet/pages/Project.jsx'
import About from './Componenet/pages/About.jsx'
import ThemeContext from './Componenet/Context/ThemeContext.jsx'
import Notice from './Componenet/pages/Notice.jsx'



function App() {

   const [light, setLight] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(light));
    }, [light]);

    
  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      <div  className={`overflow-x-hidden w-full relative select-none h-auto   font-sans ${light? "bg-white text-black": "bg-gray-800 text-white"} `}>

        <NavBar />
        <div className='w-full flex flex-col items-center justify-center min-h-screen  mt-16 h-auto font-poppins'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/reviews' element={<Review />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:title' element={<ShowProject />} />
          </Routes>

        </div>
        <Notice />
        <Footer />


      </div>
    </ThemeContext.Provider>
  )
}

export default App
