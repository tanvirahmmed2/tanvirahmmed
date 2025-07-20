import React,{useEffect} from 'react'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

import photo from './Image/photo.png'


function Details() {
   

    return (
        <div className='w-full flex flex-col gap-6 items-center min-h-screen mt-12 md:mt-0 h-auto py-4'>

            <div className='w-full min-h-[85vh] flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around'>
                <div className='group  w-[250px] h-[320px] relative  text-white  flex flex-col items-center justify-center rounded-full cursor-pointer' >
                    <div className='  w-[250px] h-[320px] border-2 relative bg-gradient-to-t text-white shadow-2xl border-cyan-800 from-cyan-800 to-transparent  overflow-hidden rounded-full cursor-pointer' >
                        <img src={photo} alt="" className='scale-150 absolute bottom-6 left-0' />
                    </div>
                </div>



                <div className='w-full md:w-1/2 flex flex-col gap-2  items-center md:items-start'>
                    <motion.h2 initial={{ scale: .7 }} whileInView={{ scale: 1 }} className='font-bold text-4xl md:text-6xl font-poppins'>Hello!</motion.h2>
                    <div className='flex flex-row gap-2 font-bold items-end h-auto '>
                        <h1 className='inline-block text-3xl md:text-5xl'>I'm </h1>
                        <h1 className='text-cyan-500 inline-block text-3xl md:text-5xl'>
                            <Typewriter
                                words={[' Tanvir Ahmmed']}
                                typeSpeed={100}
                                delaySpeed={1000}
                            />
                        </h1>
                    </div>
                    <h1 className='font-semibold text-base md:text-xl'>Web Developer</h1>
                    <p className='text-base md:text-xl text-center md:text-start'>I'm a professional MERN stack web developer with 2 years experience in this field especially working with multi-national companies</p>
                    <div className='flex w-[220px] text-xl mt-2 flex-col gap-2 md:gap-4 group relative group'>

                        <span className='absolute inset-0 bg-cyan-600 w-0 group-hover:w-full transition-all duration-500 ease-out origin-left rounded-lg'></span>
                        <a href="/Tanvir_Ahmmed_resume.pdf" download className='h-8 w-full gap-2  flex items-center justify-start pl-4 rounded-lg z-50 border-2  text-cyan-600 hover:text-white transition duration-1000'>Download Resume <p className='text-xs hidden group-hover:block transition duration-500 ease-out'><FaChevronRight /></p></a>

                    </div>


                    <div className='w-full text-2xl flex flex-row gap-8 mt-8 items-center justify-center md:justify-start'>
                        <a className='hover:scale-125 hover:text-cyan-500' href="https://www.facebook.com/tanvirahmmed.official/"> <FaFacebook /></a>
                        <a className='hover:scale-125 hover:text-cyan-500' href="https://www.instagram.com/tanvirahmmed4"><FaInstagram /></a>
                        <a className='hover:scale-125 hover:text-cyan-500' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FaWhatsapp /></a>
                        <a className='hover:scale-125 hover:text-cyan-500' href="https://t.me/tanvirahmmed14"><FaTelegram /></a>
                        <a className='hover:scale-125 hover:text-cyan-500' href="https://bd.linkedin.com/in/tanvirahmmed4"><FaLinkedin /></a>
                        <a className='hover:scale-125 hover:text-cyan-500' href="https://github.com/tanvirahmmed2"><FaGithub /></a>

                    </div>

                </div>

            </div>
            

            <motion.span initial={{scale: 0}} whileInView={{scale:1}} transition={{duration:1}} className='w-3/4 h-[2px]  bg-cyan-500'></motion.span>

        </div>
    )
}

export default Details
