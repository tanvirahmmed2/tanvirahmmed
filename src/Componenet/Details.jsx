import React from 'react'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

import photo from './Image/photo.png'


function Details() {


    return (
        <div className='w-full flex flex-col items-center justify-between min-h-[90vh] h-auto pt-4'>

            <div className='w-full min-h-[90vh] pt-20 lg:pt-0 flex flex-col lg:flex-row  items-center md:justify-around justify-end'>

                <div className='w-full md:w-1/2 flex flex-col gap-2  items-center lg:items-start'>
                    <motion.h2 initial={{ scale: .7 }} whileInView={{ scale: 1 }} className='font-bold text-4xl md:text-6xl font-poppins'>Hello!</motion.h2>
                    <div className='flex flex-row gap-2 font-bold items-end h-auto '>
                        <h1 className='inline-block text-3xl md:text-4xl lg:text-5xl'>I'm </h1>
                        <h1 className='text-cyan-500 inline-block text-3xl md:text-4xl lg:text-5xl'>
                            <Typewriter
                                words={[' Tanvir Ahmmed']}
                                typeSpeed={100}
                                delaySpeed={1000}
                            />
                        </h1>
                    </div>
                    <h1 className='font-semibold text-base md:text-xl'>Web Developer</h1>
                    <p className='text-base md:text-xl text-center lg:text-start'>I'm a professional MERN stack web developer with 2 years experience in this field especially working with multi-national companies</p>
                    
                    <div className='h-auto md:w-[400px] text-xs md:text-base w-[160px] group md:gap-2  flex flex-col md:flex-row'>
                        <div className='flex w-full  mt-2 flex-col group relative group/item1'>

                            <span className='absolute inset-0 bg-cyan-500 w-0 group-hover/item1:w-full transition-all duration-500 ease-out origin-left rounded-lg'></span>
                            <a href="/Tanvir_Ahmmed_resume.pdf" download className='h-8 w-full gap-2  flex items-center justify-center px-4 rounded-lg z-10 border-2  text-cyan-600 hover:text-white transition duration-1000'>Download Resume <p className='text-xs hidden group-hover/item1:block transition duration-500 ease-out'><FaChevronRight /></p></a>

                        </div>
                        <div className='flex w-full  mt-2 flex-col group relative group/item2'>

                            <span className='absolute inset-0 bg-cyan-500 w-0 group-hover/item2:w-full transition-all duration-500 ease-out origin-left rounded-lg'></span>
                            <a href="mailto:tanvir004006@gmail.com" download className='h-8 w-full gap-2  flex items-center justify-center px-4 rounded-lg z-10 border-2  text-cyan-600 hover:text-white transition duration-1000'>Hire Me <p className='text-xs hidden group-hover/item2:block transition duration-500 ease-out'><FaChevronRight /></p></a>



                        </div>
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

                <img src={photo} alt="" className='md:h-[90vh] h-auto lg:w-[420px] md:w-[370px] w-[320px] object-cover ' />






            </div>


            <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} className='w-full h-[2px]  bg-cyan-500'></motion.span>

        </div>
    )
}

export default Details
