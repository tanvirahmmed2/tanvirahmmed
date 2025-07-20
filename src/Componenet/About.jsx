import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import contact from './sliderImage/contact.jpg'
import service from './sliderImage/service.jpg'
import review from './sliderImage/review.jpg'
import projects from './sliderImage/projects.jpg'
import { useState } from 'react';

function About() {
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

    const [leftslide, setLeftSlide] = useState(0)
    const [centerslide, setCenterSlide] = useState(0)
    const [rightslide, setRightSlide] = useState(2)
    useEffect(() => {
        const interval = setInterval(() => {
            setCenterSlide(prev =>
                prev === sliders.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [sliders.length]);
    useEffect(() => {
        if (centerslide === 0) {
            setLeftSlide(sliders.length - 1)
            setRightSlide(1)

        }
        else if (centerslide === sliders.length - 1) {
            setLeftSlide(centerslide - 1)
            setRightSlide(0)
        }
        else {
            setRightSlide(centerslide + 1)
            setLeftSlide(centerslide - 1)

        }

    }, [sliders.length, centerslide])


    return (
        <div className='w-full h-auto p-4  bg-gray-50'>
            <div className='w-full h-auto p-6 flex flex-col items-center justify-center'>
                <h1 className='text-4xl text-cyan-500 font-bold pb-6'>About Me</h1>

                <div className='w-full h-auto text-[17px] flex flex-col items-center gap-4 justify-center mb-8 text-center'>

                    <p>I'm a dedicated and detail-oriented MERN Stack Developer with a strong foundation in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. With several years of hands-on experience, I've developed a wide range of dynamic, responsive, and scalable applications — from elegant personal portfolios and business websites to powerful data-driven platforms and RESTful APIs.</p>
                    <p>My strength lies in handling the complete development cycle — from designing intuitive user interfaces with React and Tailwind CSS, to architecting robust backend systems using Node.js, Express, and MongoDB. I'm passionate about writing clean, efficient code and following best practices to deliver applications that are both user-friendly and maintainable.</p>
                    <p>I’m always exploring new technologies and tools to stay ahead in the fast-paced world of web development. I thrive in collaborative team environments but am equally comfortable working independently to bring ideas to life.</p>
                    <p>Whether it's building something from scratch or optimizing an existing product, I focus on creating seamless digital experiences that solve real-world problems and deliver real value.</p>


                </div>
                <div className='grid gap-6 md:px-24 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] w-full justify-items-center'>
                    <div className=' flex flex-col items-center justify-center w-80 h-60  p-4 gap-3 rounded-2xl border-cyan-500 border-2 hover:scale-105 transition duration-300 cursor-pointer'>
                        <h1 className='text-xl font-bold'>I work with</h1>
                        <div className='w-full text-3xl flex flex-row gap-8 mt-4 items-center justify-center cursor-pointer'>
                            <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaHtml5 /></p>
                            <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaCss3 /></p>
                            <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaJs /></p>
                            <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaReact /></p>
                            <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaNodeJs /></p>


                        </div>
                    </div>
                    <div className=' flex flex-col items-center justify-center w-80 h-60 text-center border-cyan-500 border-2   p-4 gap-3 rounded-2xl hover:scale-105 transition duration-300  cursor-pointer'>
                        <h1 className='text-xl font-bold'>20+ Projects Completed</h1>
                        <p>Over the years, I’ve successfully delivered 20+ projects in collaboration with various companies and organizations. Each project has helped me grow, refine my skills, and deepen my understanding of full stack development.</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center w-80 h-60 text-center border-cyan-500 border-2  p-4 gap-3 rounded-2xl hover:scale-105 transition duration-300  cursor-pointer'>
                        <h1 className='text-xl font-bold'>Quality Service</h1>
                        <p>I’m committed to delivering high-quality, reliable, and efficient web solutions tailored to each client’s unique needs. My focus on clean code, performance, and user experience ensures every project meets the highest standards.</p>
                    </div>
                </div>
            </div>





            <div className='w-full h-auto flex items-center justify-center py-10'>
                <div className='w-full relative h-[500px] flex items-center gap-16 justify-center'>

                    <img className='w-[230px] h-[350px] object-cover rounded-xl  hidden sm:block opacity-50' src={sliders[leftslide].imgurl} alt="" />
                    <div className='absolute z-20 w-[300px] h-[440px] flex flex-col items-center justify-center border-2 border-red-700 shadow-2xl rounded-xl overflow-hidden'>
                        <img className='w-[300px] h-[400px] object-cover ' src={sliders[centerslide].imgurl} alt="" />
                        <div className='w-full h-auto flex flex-row items-center justify-between px-6 py-2'>
                            <p className='text-cyan-500 font-poppins'>{sliders[centerslide].title}</p>
                            <Link to={sliders[centerslide].path} className='text-cyan-500 font-poppins'>show more</Link>


                        </div>
                    </div>
                    <img className='w-[230px] h-[350px] object-cover rounded-xl opacity-50 hidden sm:block' src={sliders[rightslide].imgurl} alt="" />

                </div>
            </div>



        </div>
    )
}

export default About
