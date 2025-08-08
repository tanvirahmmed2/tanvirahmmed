import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import ThemeContext from './Context/ThemeContext';

function NavBar() {

    const { light } = useContext(ThemeContext)
    const [menu, setMenu] = useState(false);
    const handlemenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className={`w-full  h-14  backdrop-blur-md flex flex-row items-center justify-between px-4 md:px-8 fixed font-sans z-50 text-base ${light? "bg-indigo-900": "bg-white/15"} text-white `}>

            <Link to="/" className='w-auto font-manrope h-14 flex items-center justify-center text-xl sm:text-3xl cursor-grab'>Tanvir Ahmmed</Link>
        
            <div className={`relative flex md:hidden flex-col items-center justify-center  h-14 w-28`}>
                <span onClick={handlemenu} className=' h-14 w-16 flex gap-4 items-center justify-center cursor-pointer hover:border-b-2' >
                    <p className={`text-3xl ${menu ? "hidden" : "flex"}`}><HiBars3BottomLeft /></p>
                    <p className={`text-3xl ${!menu ? "hidden" : "flex"}`}><IoMdClose /></p>

                </span>
                <div className={`absolute ${!menu ? "hidden" : "flex"} flex-col w-[130px] h-auto gap-4 items-start top-14 shadow-sm shadow-indigo-400 ${light? "bg-indigo-900": "bg-black/50"} rounded-br-md rounded-bl-md py-4 px-4 `}>
                    <a href='/' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold'>Home</a>
                    <Link to='/about' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold'>About</Link>
                    <Link to='/skills' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold'>Skills</Link>
                    <Link to='/services' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold '>Services</Link>
                    <Link to='/projects' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold '>Projects</Link>
                    <Link to='/reviews' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold'>Reviews</Link>
                    <Link to='/contact' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold '>Contact</Link>
                    <a href="/Tanvir_Ahmmed_resume.pdf" download className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-cyan-500 cursor-pointer font-semibold '>Resume</a>
                </div>
            </div>


            <div className='hidden  w-auto  h-14 md:flex flex-row items-center justify-between gap-2'>
                <a href='/' className='hover:scale-110 hover:text-cyan-500 w-[90px]  h-14 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer font-semibold '>Home</a>
                <Link to='/about' className='hover:scale-110 hover:text-cyan-500 w-[90px]  h-14 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer font-semibold '>About</Link>
                <Link to='/skills' className='hover:scale-110 hover:text-cyan-500 w-[90px]  h-14 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer font-semibold '>Skills</Link>
                <Link to='/projects' className='hover:scale-110 hover:text-cyan-500 w-[90px]  h-14 items-center justify-center flex hover:border-b-2 border-cyan-500 cursor-pointer  font-semibold '>Projects</Link>
                <Link to='/contact' className=' hover:scale-110 hover:text-red-700 w-[90px]  h-14 items-center justify-center flex hover:border-b-2 border-red-500 cursor-pointer  font-semibold '>Contact <span className='px-2 animate-bounce text-xl font-bold text-indigo-500'> !</span></Link>
            </div>
        </nav>
    )
}

export default NavBar
