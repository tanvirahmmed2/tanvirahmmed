import React from 'react'

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

function About() {
    return (
        <div className='w-full h-auto px-4 py-20'>
            <div className='w-full h-auto flex flex-col items-center gap-8 justify-center mb-8 text-center'>
                <h1 className='text-3xl font-bold pb-6'>About Me</h1>
                <p>I’m a Full Stack Web Developer with a few years of hands-on experience in building dynamic, responsive, and high-performance web applications. Over the years, I’ve completed numerous projects across a variety of domains — from personal portfolios and business websites to complex full-stack applications.</p>

            </div>
            <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] w-full justify-items-center'>
                <div className='flex flex-col items-center justify-center w-80 h-60  p-4 gap-3 rounded-2xl border-teal-700 border-2 hover:scale-110 transition duration-300 cursor-pointer'>
                    <h1 className='text-xl font-bold'>I work with</h1>
                    <div className='w-full text-3xl flex flex-row gap-8 mt-4 items-center justify-center cursor-pointer'>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaHtml5 /></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaCss3/></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaJs/></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaReact/></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FaNodeJs/></p>


                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-80 h-60 text-center border-teal-700 border-2   p-4 gap-3 rounded-2xl hover:scale-110 transition duration-300  cursor-pointer'>
                    <h1 className='text-xl font-bold'>20+ Projects Completed</h1>
                    <p>Over the years, I’ve successfully delivered 20+ projects in collaboration with various companies and organizations. Each project has helped me grow, refine my skills, and deepen my understanding of full stack development.</p>
                </div>
                <div className='flex flex-col items-center justify-center w-80 h-60 text-center border-teal-700 border-2  p-4 gap-3 rounded-2xl hover:scale-110 transition duration-300  cursor-pointer'>
                    <h1 className='text-xl font-bold'>Quality Service</h1>
                    <p>I’m committed to delivering high-quality, reliable, and efficient web solutions tailored to each client’s unique needs. My focus on clean code, performance, and user experience ensures every project meets the highest standards.</p>
                </div>
            </div>


        </div>
    )
}

export default About
