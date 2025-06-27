import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCss, faFacebook, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNode, faNodeJs, faReact, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Details() {
    return (
        <div className='w-full flex flex-col gap-6 items-center min-h-[100vh] mt-12 md:mt-0 h-auto py-4'>
            <div className='w-full min-h-[85vh] flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around'>
                <div className='group  w-[250px] h-[300px] relative bg-gradient-to-br text-white from-teal-800 to-gray-900  flex flex-col items-center justify-center rounded-full cursor-pointer' >
                    <div className='group-hover:scale-110 transition duration-500  w-[300px] h-[400px] absolute text-white bg-gradient-to-br  from-teal-800 to-teal-900 blur-3xl overflow-hidden rounded-full cursor-pointer' ></div>
                    <div className='  w-[250px] h-[300px] relative bg-gradient-to-br text-white from-teal-800 to-gray-900  overflow-hidden rounded-full cursor-pointer' >
                        <img src="/profile.png" alt="" className='scale-150 absolute bottom-6 left-0' />
                    </div>
                </div>



                <div className='w-full md:w-1/2 flex flex-col gap-2  items-center md:items-start'>
                    <h2 className='font-bold text-xl md:text-3xl'>Hello!</h2>
                    <div className='flex flex-row gap-2 font-bold text-3xl md:text-5xl'>
                        <h1>I'm </h1>
                        <h1 className='text-teal-200'>Tanvir Ahmmed</h1>
                    </div>
                    <h1 className='font-bold text-2xl'>Web Developer</h1>
                    <p className='text-[14px] md:text-lg text-center md:text-start'>I'm a professional web devloper with 2 years experience in this field working with multi-national companies</p>
                    <div className='flex md:text-base mt-2 flex-col gap-2 md:gap-4 group'>

                        <Link to='/projects' className='group/item2 flex flex-row items-center justify-between gap-4 border-teal-700 border-2 font-bold px-10 rounded-md cursor-pointer hover:scale-105'>
                            Projects
                            <p className='hidden group-hover/item2:flex'><FontAwesomeIcon icon={faArrowRight} /></p>
                        </Link>
                        <a href="mailto:tanvir004006@gmail.con" className='group/item1 flex flex-row items-center justify-between gap-4 border-teal-700 border-2  font-bold px-10 rounded-md cursor-pointer hover:scale-105'>
                            Hire Me
                            <p className='hidden group-hover/item1:flex '><FontAwesomeIcon icon={faArrowRight} /></p>

                        </a>
                        <a href="/Tanvir_Ahmmed_resume.pdf" download className='border-teal-700 border-2  font-bold px-10 rounded-md cursor-pointer hover:scale-105'>Download Resume</a>

                    </div>


                    <div className='w-full text-2xl flex flex-row gap-8 mt-8 items-center justify-center md:justify-start'>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://www.facebook.com/tanvirahmmed.official/"> <FontAwesomeIcon icon={faFacebook} /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://www.instagram.com/tanvirahmmed4"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://t.me/tanvirahmmed14"><FontAwesomeIcon icon={faTelegram} /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://bd.linkedin.com/in/tanvirahmmed4"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://github.com/tanvirahmmed2"><FontAwesomeIcon icon={faGithub} /></a>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Details
