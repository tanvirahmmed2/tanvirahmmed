import React from 'react'
import Details from './Componenet/Details'
import Services from './Componenet/Services'
import Projects from './Componenet/Projects'
import Review from './Componenet/Review'
import Contact from './Componenet/Contact'
import About from './Componenet/About'
import UsePageTitle from './Componenet/UsePageTitle'

function Home() {
  UsePageTitle("Home")
  return (
    <div>
      <Details/>
      <About/>
      <Services/>
      <Projects/>
      <Review/>
      <Contact/>

    </div>
  )
}

export default Home
