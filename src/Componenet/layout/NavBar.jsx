import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import ThemeContext from '../Context/ThemeContext';

function NavBar() {
    const { light } = useContext(ThemeContext)
    const [menu, setMenu] = useState(false);
    const handlemenu = () => {
        setMenu(!menu)
    }

    return (
        <section className={`w-full h-auto fixed flex flex-col items-center justify-center z-50 backdrop-blur-md  shadow-sm shadow-indigo-400 ${light? "text-black bg-white": 'text-white bg-gray-800'}`}>
            <nav className={`w-full h-16 flex flex-row items-center justify-between md:justify-around px-6 `}>

                <Link to="/" className='md:text-3xl text-xl font-semibold'>Tanvir Ahmmed</Link>

                <div className={`flex md:hidden flex-col items-center justify-center  h-16 w-28`}>
                    <span onClick={handlemenu} className=' h-16 w-16 flex gap-4 items-center justify-center cursor-pointer ' >
                        <p className={`text-3xl ${menu ? "hidden" : "flex"}`}><HiBars3BottomLeft /></p>
                        <p className={`text-3xl ${!menu ? "hidden" : "flex"}`}><IoMdClose /></p>

                    </span>

                </div>


                <div className='hidden  w-auto  h-16 md:flex flex-row items-center justify-between gap-2'>
                    <a href='/' className='hover:scale-110 hover:text-indigo-500 w-[90px]  h-16 items-center justify-center flex hover:border-b-2 border-indigo-500 cursor-pointer font-semibold '>Home</a>
                    <Link to='/about' className='hover:scale-110 hover:text-indigo-500 w-[90px]  h-16 items-center justify-center flex hover:border-b-2 border-indigo-500 cursor-pointer font-semibold '>About</Link>
                    <Link to='/skills' className='hover:scale-110 hover:text-indigo-500 w-[90px]  h-16 items-center justify-center flex hover:border-b-2 border-indigo-500 cursor-pointer font-semibold '>Skills</Link>
                    <Link to='/projects' className='hover:scale-110 hover:text-indigo-500 w-[90px]  h-16 items-center justify-center flex hover:border-b-2 border-indigo-500 cursor-pointer  font-semibold '>Projects</Link>
                    <Link to='/contact' className=' hover:scale-110 hover:text-red-700 w-[90px]  h-16 items-center justify-center flex hover:border-b-2 border-red-500 cursor-pointer  font-semibold '>Contact <span className='px-2 animate-bounce text-xl font-bold text-indigo-500'> !</span></Link>
                </div>
            </nav>

            <div className={`${!menu ? "hidden" : "flex"} md:hidden flex-col items-center justify-center w-full gap-2   text-center p-4`}>
                <a href='/' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-indigo-500 cursor-pointer font-semibold'>Home</a>
                <Link to='/about' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-indigo-500 cursor-pointer font-semibold'>About</Link>
                <Link to='/skills' className=' h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-indigo-500 cursor-pointer font-semibold'>Skills</Link>
                <Link to='/projects' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-indigo-500 cursor-pointer font-semibold '>Projects</Link>
                <Link to='/reviews' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-indigo-500 cursor-pointer font-semibold'>Reviews</Link>
                <Link to='/contact' className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-indigo-500 cursor-pointer font-semibold '>Contact</Link>
                <a href="/Tanvir_Ahmmed_resume.pdf" download className='h-8 w-full pl-4 hover:pl-6 hover:scale-110 hover:text-indigo-500 cursor-pointer font-semibold '>Resume</a>
            </div>

        </section>

    )
}

export default NavBar
