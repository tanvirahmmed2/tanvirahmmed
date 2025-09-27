import React from 'react'
import Review from '../pages/Review'
import About from '../pages/About'
import UsePageTitle from '../UsePageTitle'
import Intro from '../pages/Intro'


function Home() {
  
  UsePageTitle("Home")
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <Intro />
      <About />
      <Review />

    </div>
  )
}

export default Home
