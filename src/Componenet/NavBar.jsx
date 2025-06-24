import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon={faBars} /> */}

function NavBar() {
    const [menu, setMenu] = useState("hidden");
    const handlemenu = () => {
        setMenu(menu == "hidden" ? "flex" : "hidden")
    }

    return (
        <nav className='w-full h-12 flex flex-row items-center justify-between px-8 rounded-4xl relative z-50'>

            <a href="/" className='w-auto h-12 flex items-center justify-center  font-bold font-bold sm:text-2xl'>Tanvir Ahmmed</a>

            <div className={`relative flex md:hidden flex-col items-center justify-center h-12 w-28`}>
                <p onClick={handlemenu} className='h-12 w-28 flex items-center justify-center cursor-pointer hover:border-b-2' ><FontAwesomeIcon icon={faBars} /></p>
                <div className={`absolute ${menu} flex-col items-start top-12`}>
                    <Link to='/services' className='w-[100px] h-12 items-center justify-center flex hover:scale-105 hover:text-red-600 cursor-pointer font-semibold '>Services</Link>
                    <Link to='/projects' className='w-[100px] h-12 items-center justify-center flex hover:scale-105 hover:text-red-600 cursor-pointer  font-semibold '>Projects</Link>
                    <Link to='/reviews' className='w-[100px] h-12 items-center justify-center flex  hover:scale-105 hover:text-red-600 cursor-pointer  font-semibold '>Reviews</Link>
                    <Link to='/contact' className='w-[100px] h-12 items-center justify-center flex  hover:scale-105 hover:text-red-600 cursor-pointer text-black font-semibold '>Contact Me</Link></div>
            </div>


            <div className='hidden  w-auto h-12 md:flex flex-row items-center justify-between gap-2'>
                <Link to='/services' className='w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer font-semibold '>Services</Link>
                <Link to='/projects' className='w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer  font-semibold '>Projects</Link>
                <Link to='/reviews' className='w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer  font-semibold '>Reviews</Link>
                <Link to='/contact' className='w-[100px] h-12 items-center justify-center flex hover:border-b-2 cursor-pointer text-red-600 font-semibold '>Contact Me</Link>
            </div>
        </nav>
    )
}

export default NavBar
