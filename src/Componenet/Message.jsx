import React, { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'


const Message = () => {
    const {light}= useContext(ThemeContext)
    
    return (
        <div className='w-full h-screen flex flex-col items-center justify-start  py-4'>
            
            <div className='w-[350px] h-auto flex flex-col gap-8 items-center justify-start'>
                <h1 className='text-3xl'>WelCome To Message Box</h1>
                <input type="text" placeholder='search messages' className={`w-full py-1 px-3 rounded-lg text-black outline-none shadow-md shadow-indigo-200`} />

                <div className={`w-full h-auto p-3 flex flex-col gap-2 items-start justify-center rounded-lg ${light? "bg-black/10": "bg-white/10"}`}>
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Text:</p>
                    <div className='w-full h-auto flex flex-row items-center justify-around bg-black/20 p-2 rounded-lg'>
                        <a href="/">Response</a>
                        <p>Delete</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Message
