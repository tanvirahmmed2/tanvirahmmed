import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faHtml5, faInstagram, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='flex flex-col gap-4 w-full h-auto items-center justify-center border-t-2 border-teal-700 py-8 rounded-2xl'>
      <div className='flex flex-col gap-4 md:gap-12 md:flex-row items-center justify-center'>
        <div>
          <Link to='/services'>Services</Link>

        </div>
        <div>
          <Link to='/projects'>Projects</Link>
        </div>

        
      </div>
      <div className='flex flex-row gap-4 items-start justify-center text-2xl'>
          <a className='hover:scale-110 hover:text-red-800' href="https://www.facebook.com/tanvirahmmed.official/"> <FontAwesomeIcon icon={faFacebook} /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://www.instagram.com/tanvirahmmed4"><FontAwesomeIcon icon={faInstagram} /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://t.me/tanvirahmmed14"><FontAwesomeIcon icon={faTelegram} /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://bd.linkedin.com/in/tanvirahmmed4"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://github.com/tanvirahmmed2"><FontAwesomeIcon icon={faGithub} /></a>

        </div>
      <p>All rights are reserved by <a href="/" className='text-teal-500'>TanvirAhmmed</a> | {year}</p>
    </footer>
  )
}

export default Footer
