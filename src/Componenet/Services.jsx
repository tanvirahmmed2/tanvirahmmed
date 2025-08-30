import React, { useContext } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

import { FaCode, FaDatabase, FaSwatchbook } from "react-icons/fa";
import UsePageTitle from './UsePageTitle';
import ThemeContext from './Context/ThemeContext';



function Services() {
  const { light } = useContext(ThemeContext)
  UsePageTitle("Service")


  return (
    <div className='w-full h-auto px-4 py-20 gap-12 flex flex-col items-center justify-center'>
      <div className='text-3xl font-bold text-center '>
        <h1 className='text-cyan-500 inline-block mr-2'>Service</h1>
        <h1 className='inline-block'>I Provide</h1>
      </div>


      <div className='h-auto flex flex-wrap w-full items-center justify-center gap-12'>

        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`relative shadow-xl flex flex-col items-center justify-center p-6 border-cyan-500 border-2 ${light ? "hover:bg-black/10" : "hover:bg-white/10"}  rounded-2xl text-center transition duration-300 cursor-pointer w-[350px] md:w-[275px] h-[350px] `}>
          <div className='text-2xl mb-2'><FaSwatchbook /></div>
          <h2 className='font-bold text-lg mb-2'>UI/UX Design</h2>
          <p className='text-sm mb-6'>Crafting beautiful, intuitive, and user-friendly digital experiences through thoughtful interface and experience design.</p>
          <Link to="/projects" className='text-red-600 underline-offset-2'>visit projects</Link>
        </motion.div>
        <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`relative shadow-xl flex flex-col items-center justify-center p-6 border-cyan-500 border-2 ${light ? "hover:bg-black/10" : "hover:bg-white/10"}  rounded-2xl text-center transition duration-300 cursor-pointer w-[350px] md:w-[275px] h-[350px] `}>
          <div className='text-2xl mb-2'><FaCode /></div>
          <h2 className='font-bold text-lg mb-2'>Web Development</h2>
          <p className='text-sm mb-6'>Delivering complete web solutions by combining front-end and back-end development into a seamless, scalable experience.</p>
          <Link to="/projects" className='text-red-600 underline-offset-2'>visit projects</Link>
        </motion.div>
        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`relative shadow-xl flex flex-col items-center justify-center p-6 border-cyan-500 border-2 ${light ? "hover:bg-black/10" : "hover:bg-white/10"}  rounded-2xl text-center transition duration-300 cursor-pointer w-[350px] md:w-[275px] h-[350px] `}>
          <div className='text-2xl mb-2'><FaDatabase /></div>
          <h2 className='font-bold text-lg mb-2'>Web App</h2>
          <p className='text-sm mb-6'>A fast, secure, and user-friendly web app designed to boost productivity and streamline tasks from any device.</p>
          <Link to="/projects" className='text-red-600 underline-offset-2'>visit projects</Link>
        </motion.div>

      </div>


    </div>
  );
}

export default Services;
