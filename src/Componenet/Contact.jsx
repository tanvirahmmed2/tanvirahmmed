import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCss, faFacebook, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNode, faNodeJs, faReact, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Contact() {

 const handlesubmit=(e)=>{
  e.preventDefault()
 }

  return (
    <div className='w-full h-auto px-4 py-20 flex flex-col items-center justify-center text-center gap-2'>
      <h1 className='text-3xl font-bold py-4'>Reach Me</h1>
      <p className='text-lg '>I’m a full-time professional web developer with a deep passion for clean code, responsive design, and powerful digital experiences. I specialize in crafting modern websites and web applications that not only look great but also perform flawlessly.</p>
      <p className='text-lg '>With 24/7 availability and a strong commitment to client satisfaction, I strive to understand your goals, bring your vision to life, and support your project from start to finish — and beyond.</p>
      <p className='text-lg '>Whether you need a portfolio site, business page, e-commerce solution, or a custom web application, I’m here to turn your ideas into a functional, beautiful, and scalable product.</p>


      
      <div className='w-full text-2xl flex flex-row gap-8 mt-8 items-center justify-center'>
        <a className='hover:scale-125 hover:text-red-800' href="https://www.facebook.com/tanvirahmmed.official/"> <FontAwesomeIcon icon={faFacebook} /></a>
        <a className='hover:scale-125 hover:text-red-800' href="https://www.instagram.com/tanvirahmmed4"><FontAwesomeIcon icon={faInstagram} /></a>
        <a className='hover:scale-125 hover:text-red-800' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a className='hover:scale-125 hover:text-red-800' href="https://t.me/tanvirahmmed14"><FontAwesomeIcon icon={faTelegram} /></a>
        <a className='hover:scale-125 hover:text-red-800' href="https://bd.linkedin.com/in/tanvirahmmed4"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className='hover:scale-125 hover:text-red-800' href="https://github.com/tanvirahmmed2"><FontAwesomeIcon icon={faGithub} /></a>
        <a className='hover:scale-125 hover:text-red-800' href="mailto:tanvir004006@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>

      </div>
      <form action="" onSubmit={handlesubmit} className='flex flex-col gap-4 w-80 h-auto items-center justify-center  '>
        <div className='flex flex-col w-full items-start gap-2'>
          <label className='italic ' htmlFor="name">Name</label>
          <input className='border-2 px-4 py-2 rounded-[4px] w-full' type="text" id='name' name='name' required/>
        </div>
        <div className='flex flex-col w-full items-start gap-2'> 
          <label className='italic ' htmlFor="mail">Email</label>
          <input className='border-2 px-4 py-2 rounded-[4px] w-full' type='email' id='mail' name='mail' required/>
        </div>
        <div className='flex flex-col w-full items-start gap-2'>
          <label className='italic ' htmlFor="report">Text</label>
          <textarea className='border-2 px-4 py-2 rounded-[4px] w-full' rows={4} type="text" id='report' name='report' required/>
        </div>
        <button type='submit' className='px-4 rounded-xl bg-blue-500 text-white cursor-pointer hover:scale-110 transition duration-300'>Send</button>
      </form>

    </div>
  )
}

export default Contact
