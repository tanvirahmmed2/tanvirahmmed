import React from 'react'


import {  FaNodeJs, FaReact } from "react-icons/fa";
import UsePageTitle from './UsePageTitle';


import photo from './Image/photo.png'

const About = () => {
    
  UsePageTitle("About")
  return (
    <div className='w-full h-auto min-h-[90vh] bg-white/5 py-16 flex flex-col items-center justify-center px-4'>
      <h1 className='text-5xl font-semibold flex flex-row gap-4'>
        <span className='text-cyan-500'>About</span>
        <span>Myself</span>
      </h1>
      <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-12'>


        <div className='w-[400px] h-[500px] flex flex-row items-center justify-between'>

          <div className='h-[400px] w-[50px] flex items-start justify-center'>
            <p className='text-4xl text-cyan-500 animate-bounce'><FaReact/></p>
          </div>
          <div className='w-[280px] h-[400px] bg-white/20 rounded-3xl overflow-hidden flex items-center justify-center'>
          <div className='w-[260px] h-[380px] object-contain bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center'>
              <img src={photo} alt="" className='w-[260px] h-[380px]  object-contain rounded-3xl scale-[1.8]' />
          </div>
            
          </div>
          <div className='h-[400px] w-[50px] flex items-end justify-center' >
            <p className='text-4xl text-emerald-500 animate-bounce'><FaNodeJs/></p>
          </div>

        </div>


        <div className='w-[400px] lg:w-[600px] h-auto flex flex-col items-center justify-center gap-8 text-center lg:text-start'>
          <div className='w-full h-auto flex flex-col items-start justify-center gap-4'>
            <h1 className='w-full h-auto text-center lg:text-start' >Hello!</h1>
            <p>I'm <span className='font-bold text-xl'>Tanvir Ahmmed</span>, a passionate MERN stack developer who loves creating digital experiences that make a difference. With expertise in modern web technologies, I transform complex ideas into elegant, functional solutions.</p>
            <p>My journey in web development started with curiosity and has evolved into a deep passion for building scalable applications. I specialize in the MERN stack but I'm always exploring new technologies to stay at the forefront of web development.</p>
            <p>When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.</p>
          </div>
          <div className='w-full h-auto flex flex-row items-center justify-between'>
            <div className='w-auto flex-auto flex flex-col items-center justify-center gap-3'>
              <span className='text-3xl font-bold text-cyan-500'>20+</span>
              <p>Projects</p>
            </div>
            <div className='w-auto flex-auto flex flex-col items-center justify-center gap-3'>
              <span className='text-3xl font-bold text-emerald-500'>2 Years+</span>
              <p>Experience</p>
            </div>
            <div className='w-auto flex-auto flex flex-col items-center justify-center gap-3'>
              <span className='text-3xl font-bold text-indigo-500'>100%</span>
              <p>Client satisfaction</p>
            </div>

          </div>
           
        </div>


      </div>
      
    </div>
  )
}

export default About

