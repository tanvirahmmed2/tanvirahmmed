import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faFacebook, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNode, faNodeJs, faReact, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function About() {
    return (
        <div className='w-full h-auto px-4 py-20'>
            <div className='w-full h-auto flex flex-col items-center gap-8 justify-center mb-8'>
                <h1 className='text-3xl font-bold pb-6'>About Me</h1>
                <p>I’m a Full Stack Web Developer with a few years of hands-on experience in building dynamic, responsive, and high-performance web applications. Over the years, I’ve completed numerous projects across a variety of domains — from personal portfolios and business websites to complex full-stack applications.</p>

            </div>
            <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]'>
                <div className='flex flex-col items-center justify-center w-80 h-60 bg-gray-100 p-4 gap-3 rounded-2xl'>
                    <h1 className='text-xl font-bold'>I work with</h1>
                    <div className='w-full text-3xl flex flex-row gap-8 mt-4 items-center justify-center cursor-pointer'>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FontAwesomeIcon icon={faHtml5} /></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FontAwesomeIcon icon={faCss} /></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FontAwesomeIcon icon={faJs} /></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FontAwesomeIcon icon={faReact} /></p>
                        <p className='hover:scale-125 hover:text-red-800 transition duration-300'><FontAwesomeIcon icon={faNode} /></p>


                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-80 h-60 text-center bg-gray-100 p-4 gap-3 rounded-2xl hover:scale-110 cursor-pointer'>
                    <h1 className='text-xl font-bold'>20+ Projects Completed</h1>
                    <p>Over the years, I’ve successfully delivered 20+ projects in collaboration with various companies and organizations. Each project has helped me grow, refine my skills, and deepen my understanding of full stack development.</p>
                </div>
                <div className='flex flex-col items-center justify-center w-80 h-60 text-center bg-gray-100 p-4 gap-3 rounded-2xl hover:scale-110 cursor-pointer'>
                    <h1 className='text-xl font-bold'>Quality Service</h1>
                    <p>I’m committed to delivering high-quality, reliable, and efficient web solutions tailored to each client’s unique needs. My focus on clean code, performance, and user experience ensures every project meets the highest standards.</p>
                </div>
            </div>


        </div>
    )
}

export default About
