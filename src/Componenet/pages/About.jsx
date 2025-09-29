import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import UsePageTitle from '../UsePageTitle';
import photo from '../Image/gg-profile.jpg'
import ThemeContext from '../Context/ThemeContext';

const About = () => {
  const { light } = useContext(ThemeContext)

  UsePageTitle("About")
  return (
    <div className="w-full h-auto py-20  flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold flex flex-row gap-3 mb-12">
        <span className="text-indigo-600">About</span>
        <span className="">Myself</span>
      </h1>

      <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-14 px-6">

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-[380px] h-[480px] flex flex-row items-center justify-between"
        >

          <div className={`w-full h-full p-2 ${light ? 'bg-indigo-50' : 'bg-emerald-50'} rounded-tl-[100px] rounded-br-[100px] overflow-hidden flex items-center justify-center shadow-lg`}>
            <div className="w-full h-full bg-white rounded-tl-[98px] rounded-br-[98px] overflow-hidden flex items-center justify-center shadow-inner">
              <img src={photo} alt="" className="w-full h-full object-cover rounded-2xl scale-[1.1]" />
            </div>
          </div>


        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[600px] px-2 lg:px-6"
        >
          <div className="flex flex-col items-start justify-center gap-5 text-justify  leading-relaxed">
            <h1 className="text-center lg:text-start text-3xl font-semibold ">Hello!</h1>
            <p>
              I'm <span className="font-bold text-xl text-indigo-600">Tanvir Ahmmed</span>, a passionate MERN stack developer who loves creating digital experiences that make a difference. With expertise in modern web technologies, I transform complex ideas into elegant, functional solutions.
            </p>
            <p>
              My journey in web development started with curiosity and has evolved into a deep passion for building scalable applications. I specialize in the MERN stack but I'm always exploring new technologies to stay at the forefront of web development.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="w-full text-black text-xs md:text-base h-28 overflow-hidden flex flex-row items-center justify-between mt-10 text-center gap-2">
            <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-gray-50 rounded-lg p-4">
              <span className="text-xl md:text-3xl font-extrabold text-indigo-600">20+</span>
              <p className="">Projects</p>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-gray-50 rounded-lg p-4">
              <span className="text-xl md:text-3xl font-extrabold text-emerald-600">2 Years+</span>
              <p className="">Experience</p>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-gray-50 rounded-lg p-4">
              <span className="text-xl md:text-3xl font-extrabold text-indigo-600">100%</span>
              <p className="">Client satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
