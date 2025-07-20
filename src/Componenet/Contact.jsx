import React from 'react'
import {useFormik} from 'formik'


import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  const formik =useFormik({
    initialValues:{
      name:'',
      mail:'',
      report:''
    },
    onSubmit:(values,  {resetForm})=>{
      resetForm({values:''})
      console.log(values);
      alert("Thank You")
      
    }
  })

 
  return (
    <div className='w-full h-auto px-4 py-20 flex flex-col items-center justify-center text-center gap-2 bg-gray-50'>
      <h1 className='text-3xl font-bold py-4'>Reach Me</h1>
      <p className=''>I’m a full-time professional web developer with a deep passion for clean code, responsive design, and powerful digital experiences. I specialize in crafting modern websites and web applications that not only look great but also perform flawlessly.</p>
      <p className=''>With 24/7 availability and a strong commitment to client satisfaction, I strive to understand your goals, bring your vision to life, and support your project from start to finish — and beyond.</p>
      <p className=''>Whether you need a portfolio site, business page, e-commerce solution, or a custom web application, I’m here to turn your ideas into a functional, beautiful, and scalable product.</p>


      
      <div className='w-full text-2xl flex flex-row gap-8 mt-8 items-center justify-center'>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://www.facebook.com/tanvirahmmed.official/"> <FaFacebook/></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://www.instagram.com/tanvirahmmed4"><FaInstagram/></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FaWhatsapp/></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://t.me/tanvirahmmed14"><FaTelegram /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://bd.linkedin.com/in/tanvirahmmed4"><FaLinkedin/></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://github.com/tanvirahmmed2"><FaGithub /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="mailto:tanvir004006@gmail.com"><CiMail /></a>

      </div>
      
      <h1 className='italic font-semibold mt-4'>Report or mail:</h1>

      <form action="" onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-80 h-auto items-center justify-center  '>
        <div className='flex flex-col w-full items-start gap-2'>
          <label className='italic ' htmlFor="name">Name</label>
          <input value={formik.values.name} onChange={formik.handleChange} className='border-2 border-cyan-500 px-4 py-2 rounded-lg w-full outline-none' type="text" id='name' name='name' placeholder='full name' required/>
        </div>
        <div className='flex flex-col w-full items-start gap-2'> 
          <label className='italic ' htmlFor="mail">Email</label>
          <input value={formik.values.mail} onChange={formik.handleChange} className='border-2 border-cyan-500 px-4 py-2 rounded-lg w-full outline-none' type='email' id='mail' name='mail' placeholder='email' required/>
        </div>
        <div className='flex flex-col w-full items-start gap-2'>
          <label className='italic ' htmlFor="report">Text</label>
          <textarea value={formik.values.report} onChange={formik.handleChange} className='border-2 resize-none border-cyan-500 px-4 py-2 rounded-lg w-full outline-none' placeholder='enter your text' rows={4} type="text" id='report' name='report' required/>
        </div>
        <button type='submit' className='px-4 rounded-xl bg-cyan-500 text-white cursor-pointer hover:scale-110 transition duration-300'>Send</button>
      </form>

    </div>
  )
}

export default Contact
