import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import contact from './sliderImage/contact.jpg'
import service from './sliderImage/service.jpg'
import review from './sliderImage/review.jpg'
import projects from './sliderImage/projects.jpg'
import { useState } from 'react';
import photo from './Image/photo.png'


function Details() {
    const sliders = [
        {
            id: 1,
            title: "Service",
            path: "/services",
            imgurl: service
        },
        {
            id: 2,
            title: "Projects",
            path: "/projects",
            imgurl: projects
        },
        {
            id: 3,
            title: "Reviews",
            path: "/reviews",
            imgurl: review
        },
        {
            id: 4,
            title: "Contact",
            path: "/contact",
            imgurl: contact
        }
    ]

    const [currslide, setCurrSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrSlide((prev) => (prev + 1) % sliders.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, [sliders.length])

    return (
        <div className='w-full flex flex-col gap-6 items-center min-h-screen mt-12 md:mt-0 h-auto py-4'>

            <div className='w-full min-h-[85vh] flex flex-col md:flex-row gap-8 md:gap-0 items-center md:justify-around'>
                <div className='group  w-[250px] h-[300px] relative  text-white  flex flex-col items-center justify-center rounded-full cursor-pointer' >
                    <div className='group-hover:scale-110 transition duration-500  w-[300px] h-[400px] absolute text-white from-gray-300 to-transparent blur-3xl overflow-hidden rounded-full cursor-pointer' ></div>
                    <div className='  w-[250px] h-[300px] border-2 relative bg-gradient-to-t text-white shadow-2xl border-teal-800 from-gray-300 to-transparent  overflow-hidden rounded-full cursor-pointer' >
                        <img src={photo} alt="" className='scale-150 absolute bottom-6 left-0' />
                    </div>
                </div>



                <div className='w-full md:w-1/2 flex flex-col gap-2  items-center md:items-start'>
                    <motion.h2 initial={{ scale: .7 }} whileInView={{ scale: 1 }} className='font-bold text-2xl md:text-3xl'>Hello!</motion.h2>
                    <div className='flex flex-row gap-2 font-bold items-end h-auto '>
                        <h1 className='text-2xl md:text-4xl'>I'm </h1>
                        <h1 className='text-teal-700 inline-block text-3xl md:text-5xl'>
                            <Typewriter
                                words={[' Tanvir Ahmmed']}
                                typeSpeed={100}
                                delaySpeed={1000}
                            />
                        </h1>
                    </div>
                    <h1 className='font-bold text-2xl'>Web Developer</h1>
                    <p className='text-[14px] md:text-lg text-center md:text-start'>I'm a professional MERN stack web developer with 2 years experience in this field especially working with multi-national companies</p>
                    <div className='flex md:text-base mt-2 flex-col gap-2 md:gap-4 group'>


                        <a href="/Tanvir_Ahmmed_resume.pdf" download className='border-teal-700 border-2  font-bold px-10 rounded-md cursor-pointer transition duration-300 hover:scale-110'>Download Resume</a>

                    </div>


                    <div className='w-full text-2xl flex flex-row gap-8 mt-8 items-center justify-center md:justify-start'>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://www.facebook.com/tanvirahmmed.official/"> <FaFacebook /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://www.instagram.com/tanvirahmmed4"><FaInstagram /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FaWhatsapp /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://t.me/tanvirahmmed14"><FaTelegram /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://bd.linkedin.com/in/tanvirahmmed4"><FaLinkedin /></a>
                        <a className='hover:scale-125 hover:text-teal-500' href="https://github.com/tanvirahmmed2"><FaGithub /></a>

                    </div>

                </div>

            </div>
            <div className='w-full h-auto flex items-center justify-center mb-8'>
                <div className='w-2/5 min-w-[350px] h-[400px] bg-gray-400 rounded-xl overflow-hidden relative cursor-pointer group'>
                    <img src={sliders[currslide].imgurl} className='w-full object-center h-[400px]' alt="" />
                    <div className='w-full h-auto absolute bottom-0 flex flex-row items-center justify-between p-4 text-xl font-semibold'>
                        <h1 className='font-bold'>{sliders[currslide].title}</h1>
                        <Link to={sliders[currslide].path} className='text-red-500'>more......</Link>
                    </div>
                </div>
            </div>


            <div className='w-3/4 h-[2px] bg-teal-950'></div>

        </div>
    )
}

export default Details
