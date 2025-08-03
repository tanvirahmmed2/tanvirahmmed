import React from 'react'
import Projects from './Componenet/Projects'
import Review from './Componenet/Review'
import Contact from './Componenet/Contact'
import About from './Componenet/About'
import UsePageTitle from './Componenet/UsePageTitle'
import Skills from './Componenet/Skills'
import Intro from './Componenet/Intro'
import Services from './Componenet/Services'


function Home() {
  UsePageTitle("Home")
  return (
    <div>
      <Intro/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Review/>
      <Contact/>

    </div>
  )
}

export default Home
