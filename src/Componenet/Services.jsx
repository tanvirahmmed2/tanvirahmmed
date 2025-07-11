import React from 'react';
import { Link } from 'react-router-dom'


import { FaCode, FaDatabase, FaSwatchbook } from "react-icons/fa";


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
  return (
    <div className='w-full h-auto px-4 py-20 min-h-screen'>
      <div className='text-3xl font-bold text-center mb-10'>
        <h1 className='text-red-700 inline-block mr-2'>Service</h1>
        <h1 className='inline-block'>I Provide</h1>
      </div>

      <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]'>
        {services.map((service) => (
          <div
            key={service.id} className='relative shadow-xl flex flex-col items-center justify-center p-6 border-teal-700 border-2 hover:bg-gray-200  rounded-2xl text-center transition duration-300 cursor-pointer w-[20rem] mx-auto'
          >
            <div className='text-2xl mb-2'>{service.icon}</div>
            <h2 className='font-bold text-lg mb-2'>{service.title}</h2>
            <p className='text-sm mb-6'>{service.desc}</p>
            <Link to={service.link} className='text-red-600 underline-offset-2'>visit projects</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
