import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

function NavBar() {
    const [menu, setMenu] = useState(false);
    const handlemenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className='w-full h-12 shadow-sm flex flex-row items-center justify-between px-4 md:px-8 fixed font-sans z-50 bg-white'>

            <a href="/" className='w-auto h-12 flex items-center justify-center  font-bold text-xl sm:text-3xl cursor-grab'>Tanvir Ahmmed</a>

            <div className={`relative flex lg:hidden flex-col items-center justify-center h-12 w-28`}>
                <span onClick={handlemenu} className='h-12 w-16 flex gap-4 items-center justify-center cursor-pointer hover:border-b-2 text-amber-600' >
                    <p className={`text-3xl ${menu ? "hidden":"flex"}`}><HiBars3BottomLeft/></p>
                    <p className={`text-3xl ${!menu ? "hidden":"flex"}`}><IoMdClose/></p>
                    
                </span>
                <div className={`absolute ${!menu ? "hidden":"flex"} flex-col w-[130px] h-auto gap-4 items-start top-12 shadow-2xl bg-white py-4 px-4 `}>
                    <Link to='/about' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold'>About Me</Link>
                    <Link to='/services' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold'>Services</Link>
                    <Link to='/projects' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold '>Projects</Link>
                    <Link to='/reviews' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold'>Reviews</Link>
                    <Link to='/contact' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold '>Contact</Link>
                    <a href="/Tanvir_Ahmmed_resume.pdf"  download className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold text-amber-500'>Resume</a>
                </div>
            </div>


            <div className='hidden  w-auto h-12 lg:flex flex-row items-center justify-between gap-2'>
                <Link to='/about' className='hover:scale-110 hover:text-cyan-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer font-semibold '>About Me</Link>
                <Link to='/services' className='hover:scale-110 hover:text-cyan-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer font-semibold '>Services</Link>
                <Link to='/projects' className='hover:scale-110 hover:text-cyan-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer  font-semibold '>Projects</Link>
                <Link to='/reviews' className=' hover:scale-110 hover:text-cyan-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer  font-semibold '>Reviews</Link>
                <Link to='/contact' className=' hover:scale-110 hover:text-red-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 border-red-500 cursor-pointer text-amber-500 font-semibold '>Contact <span className='px-2 animate-bounce text-xl font-bold text-cyan-500'> !</span></Link>
            </div>
        </nav>
    )
}

export default NavBar
