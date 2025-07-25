import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


import { FaBehance, FaBootstrap, FaCode, FaDatabase, FaSwatchbook } from "react-icons/fa";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { CiCloud } from "react-icons/ci";
import UsePageTitle from './UsePageTitle';


const services = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: "Crafting beautiful, intuitive, and user-friendly digital experiences through thoughtful interface and experience design.",
    icon: <FaSwatchbook />,
    link: "/projects",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Delivering complete web solutions by combining front-end and back-end development into a seamless, scalable experience.",
    icon: <FaCode />,
    link: "/projects",
  },
  {
    id: 3,
    title: "Web App",
    desc: "A fast, secure, and user-friendly web app designed to boost productivity and streamline tasks from any device.",
    icon: <FaDatabase />,
    link: "/projects",
  }
];

function Services() {
  UsePageTitle("Service")
  const icons = [<FaCss3 />, <FaBehance />, <FaHtml5 />, <CiCloud />, <FaJs />, <FaNodeJs />, <FaReact />, <FaBootstrap />, <FaCode />, <FaDatabase />]
  const [iconindex, setIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className='w-full h-auto px-4 py-20 min-h-screen gap-12 flex flex-col items-center justify-center'>
      <div className='text-3xl font-bold text-center '>
        <h1 className='text-cyan-500 inline-block mr-2'>Service</h1>
        <h1 className='inline-block'>I Provide</h1>
      </div>

      <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] w-full'>
        {services.map((service) => (
          <div
            key={service.id} className='relative shadow-xl flex flex-col items-center justify-center p-6 border-cyan-500 border-2 hover:bg-gray-200  rounded-2xl text-center transition duration-300 cursor-pointer w-[20rem] mx-auto'
          >
            <div className='text-2xl mb-2'>{service.icon}</div>
            <h2 className='font-bold text-lg mb-2'>{service.title}</h2>
            <p className='text-sm mb-6'>{service.desc}</p>
            <Link to={service.link} className='text-red-600 underline-offset-2'>visit projects</Link>
          </div>
        ))}
      </div>
      <div className='w-full h-auto flex flex-row gap-4 items-center justify-center'>
        <p className='text-5xl text-cyan-900 hover:text-red-800 hover:scale-110 transition duration-300 cursor-pointer'>{icons[iconindex - 1]}</p>
        <p className='text-9xl text-cyan-500 hover:text-red-800 hover:scale-110 transition duration-300 cursor-pointer'>{icons[iconindex]}</p>
        <p className='text-5xl text-cyan-900 hover:text-red-800 hover:scale-110 transition duration-300 cursor-pointer'>{icons[iconindex + 1]}</p>

      </div>

    </div>
  );
}

export default Services;
