import React from 'react'
import { Typewriter } from 'react-simple-typewriter';


const Intro = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-6 md:text-5xl text-2xl font-bold'>
            <div>
                <Typewriter
                    words={['Hello!']}
                    typeSpeed={70}
                    delaySpeed={300}
                />
            </div>
            <div className='text-teal-800 text-4xl md:text-8xl'>
                <Typewriter
                    words={['I am',' Tanvir Ahmmed']}
                    typeSpeed={70}
                    delaySpeed={300}
                />
            </div>
            <div>
                <Typewriter
                    words={[' A MERN Stack web Developer']}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    delaySpeed={300}
                />
            </div>



        </div>
    )
}

export default Intro
