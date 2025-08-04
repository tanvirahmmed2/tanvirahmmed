import React, { useState } from 'react'
import { IoMdClose, IoMdMoon, IoMdSunny } from "react-icons/io";

const Notice = () => {
    const [notice, setNotice] = useState(true)
    const [light, setLight]= useState(true)
    const handlenoticeboard = () => {
        setNotice(!notice)

        console.log(notice)
    }
    const handlemood=()=>{
        setLight(!light)
    }


    return (
        <div className={`w-full h-8 bg-black/20 ${notice ? "flex" : "hidden"} flex-row items-center justify-around gap-4 text-xs lg:text-base`}>
            <p className='text-white/30 italic'>currently available for new job or project offer</p>
            <span onClick={handlemood} className='w-auto h-8 flex items-center justify-center '>
                <p className={`w-auto h-8 ${light? "flex": "hidden"} cursor-pointer rounded-xl gap-2 items-center justify-center px-3`}><IoMdSunny /> Light</p>
                <p className={`w-auto h-8 ${light? "hidden": "flex"} cursor-pointer rounded-xl gap-2 items-center justify-center px-3`}><IoMdMoon /> Dark</p>
            </span>
            <p onClick={handlenoticeboard} className='text-white hover:bg-white/5 cursor-pointer rounded-md p-2'><IoMdClose /></p>
        </div>
    )
}

export default Notice
