import React, { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'

const LogIn = () => {
    const {light}= useContext(ThemeContext)
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form className={`w-[320px] h-auto flex flex-col items-center justify-center gap-4 ${light? "bg-black/10": "bg-white/10"} p-6 rounded-xl`}>
                <div className='w-full h-auto flex flex-col items-start justify-center gap-2'>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email' name='email' className='w-full p-2 text-black outline-none rounded-md'/>
                </div>
                <div className='w-full h-auto flex flex-col items-start justify-center gap-2'>
                    <label htmlFor="password">password</label>
                    <input type="text" id='password' name='password' className='w-full p-2 text-black outline-none rounded-md'/>
                </div>
                <button type='submit' className='bg-white text-black px-4 rounded-xl'>LogIn</button>
            </form>

        </div>
    )
}

export default LogIn
