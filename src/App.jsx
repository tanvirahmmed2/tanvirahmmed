import React, { useEffect, useState } from 'react'
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
import ThemeContext from './Componenet/Context/ThemeContext.jsx'
import Notice from './Componenet/Notice.jsx'
import LogIn from './Componenet/LogIn.jsx'
import Message from './Componenet/Message.jsx'



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
      <div className={`overflow-x-hidden w-full relative select-none h-auto ${light ? "bg-white" : "bg-gray-900"} ${light ? "text-black" : "text-white"} font-sans `}>

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
            <Route path='/login' element={<LogIn/>}/>
            <Route path='message' element={<Message/>}/>
          </Routes>

        </div>
        <Notice />
        <Footer />


      </div>
    </ThemeContext.Provider>
  )
}

export default App
