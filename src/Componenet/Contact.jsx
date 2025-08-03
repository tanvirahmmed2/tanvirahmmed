import React from 'react'
import { useFormik } from 'formik'
import { motion } from 'framer-motion';

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import UsePageTitle from './UsePageTitle';

function Contact() {
  UsePageTitle("Contact")


  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
      report: ''
    },
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: '' })
      console.log(values);
      alert("Thank You")

    }
  })


  return (
    <div className='w-full h-auto px-4 py-20 flex flex-col items-center justify-center text-center gap-2 bg-indigo-950 bg-opacity-20'>
      <h1 className='text-5xl font-bold py-4 text-cyan-500'>Connect Me</h1>
      <div className='w-full h-auto flex flex-col md:flex-row gap-8 items-center justify-center'>
        <motion.div initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6}} className='w-[350px] lg:w-[400px] h-[500px] shadow-sm shadow-white flex flex-col gap-4 items-center justify-center  rounded-xl p-4'>

          <h1 className='text-3xl font-semibold mt-4'>Network:</h1>
          <div className='w-full h-auto flex flex-row items-center justify-start p-4 gap-4 bg-white/5 rounded-lg'>
            <a className='hover:scale-125 hover:text-cyan-500 text-4xl' href="mailto:tanvir004006@gmail.com"><CiMail /></a>
            <div className='w-full h-auto flex flex-col items-start justify-center'>
              <h1 className='text-xl'>Gmail</h1>
              <p className='text-xs'>tanvir004006@gmail.com</p>
            </div>
          </div>
          <div className='w-full h-auto flex flex-row items-center justify-start p-4 gap-4 bg-white/10 rounded-lg'>
            <a className='hover:scale-125 hover:text-cyan-500 text-4xl' href="https://bd.linkedin.com/in/tanvirahmmed4"><FaLinkedin /></a>
            <div className='w-full h-auto flex flex-col items-start justify-center'>
              <h1 className='text-xl'>LinkedIn</h1>
              <p className='text-xs'>/in/tanvirahmmed4</p>
            </div>
          </div>
          <div className='w-full h-auto flex flex-row items-center justify-start p-4 gap-4 bg-white/15 rounded-lg'>
            <a className='hover:scale-125 hover:text-cyan-500 text-4xl' href="https://github.com/tanvirahmmed2"><FaGithub /></a>
            <div className='w-full h-auto flex flex-col items-start justify-center'>
              <h1 className='text-xl'>Github</h1>
              <p className='text-xs'>/tanvirahmmed2</p>
            </div>
          </div>
          <div className='w-full h-auto flex flex-row items-center justify-start p-4 gap-4 bg-white/20 rounded-lg'>
            <a className='hover:scale-125 hover:text-cyan-500 text-4xl' href="https://www.facebook.com/tanvirahmmed.official/"> <FaFacebook /></a>
            <div className='w-full h-auto flex flex-col items-start justify-center'>
              <h1 className='text-xl'>Facebook</h1>
              <p className='text-xs'>/tanvirahmmed.official</p>
            </div>
          </div>

        </motion.div>


        <motion.div initial={{x:50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6}} className='w-[350px] lg:w-[400px] h-[500px] shadow-sm shadow-white flex flex-col items-center justify-center  rounded-xl p-4 '>

          <h1 className='text-3xl font-semibold mt-4'>Discuss:</h1>
          <form action="" onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-80 h-auto items-center justify-center  '>
            <div className='flex flex-col w-full items-start gap-2'>
              <label className='italic ' htmlFor="name">Name</label>
              <input value={formik.values.name} onChange={formik.handleChange} className='border-2 text-black border-cyan-500 px-4 py-2 rounded-lg w-full outline-none' type="text" id='name' name='name' placeholder='full name' required />
            </div>
            <div className='flex flex-col w-full items-start gap-2'>
              <label className='italic ' htmlFor="mail">Email</label>
              <input value={formik.values.mail} onChange={formik.handleChange} className='border-2 text-black border-cyan-500 px-4 py-2 rounded-lg w-full outline-none' type='email' id='mail' name='mail' placeholder='email' required />
            </div>
            <div className='flex flex-col w-full items-start gap-2'>
              <label className='italic ' htmlFor="report">Text</label>
              <textarea value={formik.values.report} onChange={formik.handleChange} className='border-2 text-black resize-none border-cyan-500 px-4 py-2 rounded-lg w-full outline-none' placeholder='enter your text' rows={4} type="text" id='report' name='report' required />
            </div>
            <button type='submit' className='px-4 rounded-xl bg-cyan-500 text-white cursor-pointer hover:scale-110 transition duration-300'>Send</button>
          </form>
        </motion.div>

      </div>
      
      <div className='w-full text-2xl flex flex-row gap-8 mt-8 items-center justify-center'>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://www.facebook.com/tanvirahmmed.official/"> <FaFacebook /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://www.instagram.com/tanvirahmmed4"><FaInstagram /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://wa.me/qr/YE7Q5ROGHJ54I1"><FaWhatsapp /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://t.me/tanvirahmmed14"><FaTelegram /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://bd.linkedin.com/in/tanvirahmmed4"><FaLinkedin /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="https://github.com/tanvirahmmed2"><FaGithub /></a>
        <a className='hover:scale-125 hover:text-cyan-500' href="mailto:tanvir004006@gmail.com"><CiMail /></a>

      </div>



    </div>
  )
}

export default Contact
