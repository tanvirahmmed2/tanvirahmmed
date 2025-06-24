import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Details() {
    return (
        <div className='w-full min-h-[100vh] mt-12 md:mt-0 h-auto py-4'>
            <div className='w-full h-auto md:h-[80vh] flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-around'>
                
                <div className=' w-[200px] h-[250px] relative bg-gradient-to-t from-gray-400 to-white bg- overflow-hidden rounded-full cursor-pointer' >
                    <img src="/profile.png" alt="" className='scale-200' />
                </div>


                <div className='w-full md:w-1/2 flex flex-col gap-0 md:gap-2 items-center md:items-start'>
                    <h2 className='font-bold text-xs md:text-3xl'>Hello!</h2>
                    <div className='flex flex-row gap-2 font-bold text-xl sm:text-2xl md:text-4xl'>
                        <h1>I'm </h1>
                        <h1 className='text-red-600'>Tanvir Ahmmed</h1>
                    </div>
                    <h1 className='font-bold text-xs md:text-2xl'>MERN Stack Web Developer</h1>
                    <p className='text-[12px] md:text-lg text-center md:text-start'>I'm a professional web devloper with 2 years experience in this field working with multi-national companies</p>
                    <div className='flex md:text-base text-[12px] mt-2 flex-col md:flex-row gap-2 md:gap-6 group'>
                        <a href="mailto:tanvir004006@gmail.con" className='group/item1 flex flex-row items-center justify-between gap-4 bg-gray-200 hover:bg-red-700 px-4 rounded-2xl text-black hover:text-white font-bold'>
                            Hire Me
                            <p className='hidden group-hover/item1:flex '><FontAwesomeIcon icon={faArrowRight} /></p>

                        </a>
                        <Link to='/projects' className='group/item2 flex flex-row items-center justify-between gap-4 bg-gray-200 hover:bg-red-700 px-4 rounded-2xl text-black hover:text-white font-bold'>
                            Projects
                            <p className='hidden group-hover/item2:flex'><FontAwesomeIcon icon={faArrowRight} /></p>
                        </Link>
                    </div>
                    <div className='w-full text-2xl flex flex-row gap-8 text-red-800 mt-4 items-center justify-center md:justify-start'>
                        <a href="https://www.facebook.com/tanvirahmmed.official/"> <FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="https://www.instagram.com/tanvirahmmed4"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FontAwesomeIcon icon={faWhatsapp}/></a>
                        <a href="https://t.me/tanvirahmmed14"><FontAwesomeIcon icon={faTelegram}/></a>
                    </div>
                </div>

            </div>

            <div>
                

            </div>

        </div>
    )
}

export default Details
