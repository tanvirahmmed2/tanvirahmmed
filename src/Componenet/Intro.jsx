import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { Typewriter } from 'react-simple-typewriter';
import { FaChevronRight } from "react-icons/fa6";

import ThemeContext from './Context/ThemeContext';

import { FaCode } from "react-icons/fa";

const Intro = () => {
    
  const {light}= useContext(ThemeContext)
   
    return (
        <div className='w-full h-auto min-h-screen py-16 flex flex-col items-center justify-center  text-center px-4'>
            <div className='w-3/4 h-auto flex flex-col items-center justify-center gap-4 text-center'>
                <p className='text-6xl text-indigo-500 animate-bounce'><FaCode /></p>
                <h1 className='lg:text-6xl text-3xl font-semibold flex flex-row items-center justify-center gap-4'>
                    <p>Tanvir</p>
                    <p>Ahmmed</p>
                </h1>
                <p className='text-2xl lg:text-5xl font-semibold text-indigo-500 font-manrope'>
                    <Typewriter
                        words={[' MERN STACK DEVELOPER']}
                        typeSpeed={100}
                        delaySpeed={1000}
                    />
                </p>

                
                <p className='text-lg'>Crafting exceptional digital experiences with modern web technologies. Specializing in full-stack development with a passion for clean code and innovative solutions.</p>


                <div className='h-auto md:w-[400px] text-xs md:text-base w-[160px] group gap-2   flex flex-col md:flex-row'>
                    <div className={`flex w-full  mt-2 flex-col group relative group/item1 ${light? "bg-black/5" : "bg-white"}  hover:bg-transparent transition-all duration-500 ease-out origin-left rounded-lg`}>

                        <span className='absolute inset-0 bg-indigo-500 w-0 group-hover/item1:w-full transition-all duration-500 ease-out origin-left rounded-lg shadow-lg shadow-indigo-600'></span>
                        <Link to="/projects" download className='h-8 w-full gap-2  flex items-center justify-center px-4 rounded-lg z-10    text-indigo-600 hover:text-white transition duration-1000'>Projects <p className='text-xs hidden group-hover/item1:block transition duration-500 ease-out'><FaChevronRight /></p></Link>

                    </div>
                    <div className={`flex w-full  mt-2 flex-col group relative group/item2 ${light? "bg-black/5" : "bg-white"}  hover:bg-transparent transition-all duration-500 ease-out origin-left rounded-lg`}>

                        <span className='absolute inset-0 bg-indigo-500 w-0 group-hover/item2:w-full transition-all duration-500 ease-out origin-left rounded-lg shadow-lg shadow-indigo-600'></span>
                        <Link to='/contact' download className='h-8 w-full gap-2  flex items-center justify-center px-4 rounded-lg z-10    text-indigo-600 hover:text-white transition duration-1000'>Hire Me <p className='text-xs hidden group-hover/item2:block transition duration-500 ease-out'><FaChevronRight /></p></Link>



                    </div>
                </div>

            </div>

        </div>
    )
}

export default Intro
