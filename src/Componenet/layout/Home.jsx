import React from 'react'
import Projects from '../Projects'
import Review from '../Review'
import Contact from '../Contact'
import About from '../About'
import UsePageTitle from '../UsePageTitle'
import Skills from '../Skills'
import Intro from '../Intro'
import Services from '../Services'


function Home() {
  
  UsePageTitle("Home")
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center gap-12'>
      <Intro />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Review />
      <Contact />

    </div>
  )
}

export default Home
