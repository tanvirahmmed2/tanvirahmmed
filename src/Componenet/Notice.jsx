import React, {  useState } from 'react'
import { IoMdClose } from "react-icons/io";

const Notice = () => {
    const [notice, setNotice]= useState(true)
    const handlenoticeboard=()=>{
        setNotice(!notice)

        console.log(notice)
    }

  return (
    <div className={`w-full h-8 bg-black/20 ${notice? "flex": "hidden"} flex-row items-center justify-center gap-4`}>
      <p onClick={handlenoticeboard} className='text-white hover:bg-white/5 cursor-pointer rounded-md p-2'><IoMdClose/></p>
    </div>
  )
}

export default Notice
