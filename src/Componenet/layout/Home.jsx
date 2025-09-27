import React from 'react'
import Projects from '../pages/Projects'
import Review from '../pages/Review'
import Contact from '../pages/Contact'
import About from '../pages/About'
import UsePageTitle from '../UsePageTitle'
import Skills from '../pages/Skills'
import Intro from '../pages/Intro'


function Home() {
  
  UsePageTitle("Home")
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Review />
      <Contact />

    </div>
  )
}

export default Home
