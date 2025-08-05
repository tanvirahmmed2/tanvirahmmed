import React, { useContext} from 'react'
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import ThemeContext from './Context/ThemeContext';

const Notice = () => {
    const {light, setLight}= useContext(ThemeContext)
    
    const handlemood=()=>{
        setLight(!light)
        console.log(light)
    }


    return (
        <div className={`w-full h-8 ${light? "bg-indigo-700": "bg-transparent"} bg-opacity-5 border-b-[1px] border-t-[1px] flex flex-row items-center justify-around gap-4 text-xs lg:text-base `}>
            <p className='italic '>currently available for new job or project offer</p>
            <span onClick={handlemood} className='w-auto h-8 flex items-center justify-center '>
                <p className={`w-auto h-8 ${!light? "flex": "hidden"} cursor-pointer rounded-xl gap-2 items-center justify-center px-3`}><IoMdSunny /> Light</p>
                <p className={`w-auto h-8 ${!light? "hidden": "flex"} cursor-pointer rounded-xl gap-2 items-center justify-center px-3`}><IoMdMoon /> Dark</p>
            </span>
            
        </div>
    )
}

export default Notice
