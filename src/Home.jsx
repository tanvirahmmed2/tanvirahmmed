import React from 'react'
import Details from './Componenet/Details'
import Services from './Componenet/Services'
import Projects from './Componenet/Projects'
import Review from './Componenet/Review'
import Contact from './Componenet/Contact'

function Home() {
  return (
    <div>
      <Details/>
      <Services/>
      <Projects/>
      <Review/>
      <Contact/>
    </div>
  )
}

export default Home
