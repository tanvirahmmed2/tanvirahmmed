import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import ThemeContext from './Context/ThemeContext';

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const {light}= useContext(ThemeContext)
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='flex flex-col gap-4 w-full h-auto items-center justify-center  pb-8'>
      <motion.span initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}} className={`w-full h-[2px] ${light? "bg-black": "bg-white"}`}></motion.span>
      <div className='flex flex-col gap-4 md:gap-12 md:flex-row items-center justify-center'>
        <div>
          <Link to='/services'>Services</Link>

        </div>
        <div>
          <Link to='/projects'>Projects</Link>
        </div>
        <div>
          <Link to='/about'>About Me</Link>
        </div>
        <div>
          <Link to='/contact'>Contact</Link>
        </div>

        
      </div>
      <div className='flex flex-row gap-4 items-start justify-center text-2xl'>
          <a className='hover:scale-110 hover:text-red-800' href="https://www.facebook.com/tanvirahmmed.official/"> <FaFacebook /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://www.instagram.com/tanvirahmmed4"><FaInstagram/></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FaWhatsapp/></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://t.me/tanvirahmmed14"><FaTelegram /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://bd.linkedin.com/in/tanvirahmmed4"><FaLinkedin /></a>
          <a className='hover:scale-110 hover:text-red-800' href="https://github.com/tanvirahmmed2"><FaGithub/></a>

        </div>
      <p>All rights are reserved by <a href="/" className='text-cyan-500 font-bold'>Tanvir Ahmmed</a> | {year}</p>
    </footer>
  )
}

export default Footer
