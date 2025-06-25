import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCss, faFacebook, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNode, faNodeJs, faReact, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function About() {
    return (
        <div>
            <h1>About Me</h1>
            <div className='w-full text-2xl flex flex-row gap-8 mt-4 items-center justify-center md:justify-start cursor-pointer'>
                <p className='hover:scale-125 hover:text-red-800'><FontAwesomeIcon icon={faHtml5} /></p>
                <p className='hover:scale-125 hover:text-red-800'><FontAwesomeIcon icon={faCss} /></p>
                <p className='hover:scale-125 hover:text-red-800'><FontAwesomeIcon icon={faJs} /></p>
                <p className='hover:scale-125 hover:text-red-800'><FontAwesomeIcon icon={faReact} /></p>
                <p className='hover:scale-125 hover:text-red-800'><FontAwesomeIcon icon={faNode} /></p>


            </div>

        </div>
    )
}

export default About
