import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import { FaBars } from "react-icons/fa";

function NavBar() {
    const [menu, setMenu] = useState("hidden");
    const handlemenu = () => {
        setMenu(menu === "hidden" ? "flex" : "hidden")
    }

    return (
        <nav className='w-full h-12 shadow-sm flex flex-row items-center justify-between px-4 md:px-8 fixed z-50 bg-white  '>

            <a href="/" className='w-auto h-12 flex items-center justify-center  font-bold text-xl sm:text-3xl cursor-grab'>Tanvir Ahmmed</a>

            <div className={`relative flex md:hidden flex-col items-center justify-center h-12 w-28`}>
                <p onClick={handlemenu} className='h-12 w-16 flex items-center justify-center cursor-pointer hover:border-b-2' ><FaBars/></p>
                <div className={`absolute ${menu} flex-col gap-4 items-start top-12 shadow-2xl bg-white py-4 px-4 rounded-xl`}>
                    <Link to='/services' className='w-[100px] h-8 items-center justify-center flex hover:scale-110 hover:text-teal-500 cursor-pointer font-semibold '>Services</Link>
                    <Link to='/projects' className='w-[100px] h-8 items-center justify-center flex hover:scale-110 hover:text-teal-500 cursor-pointer  font-semibold '>Projects</Link>
                    <Link to='/reviews' className='w-[100px] h-8 items-center justify-center flex  hover:scale-110 hover:text-teal-500 cursor-pointer  font-semibold '>Reviews</Link>
                    <Link to='/contact' className='w-[100px] h-8 items-center justify-center flex  hover:scale-110 hover:text-teal-500 cursor-pointer font-semibold '>Contact</Link>
                    <a href="/Tanvir_Ahmmed_resume.pdf"  download className='w-[100px] h-8 items-center justify-center flex  hover:scale-110 hover:text-teal-500 cursor-pointer   font-semibold text-red-600'>Resume</a>
                </div>
            </div>


            <div className='hidden  w-auto h-12 md:flex flex-row items-center justify-between gap-2'>
                <Link to='/services' className='hover:scale-110 hover:text-red-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer font-semibold '>Services</Link>
                <Link to='/projects' className='hover:scale-110 hover:text-red-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer  font-semibold '>Projects</Link>
                <Link to='/reviews' className=' hover:scale-110 hover:text-red-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer  font-semibold '>Reviews</Link>
                <Link to='/contact' className=' hover:scale-110 hover:text-red-700 w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer text-teal-700 font-semibold '>Contact <span className='px-2 animate-bounce text-xl font-bold text-red-700'> !</span></Link>
            </div>
        </nav>
    )
}

export default NavBar
