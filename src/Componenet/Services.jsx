import React from 'react';

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwatchbook, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: "Crafting beautiful, intuitive, and user-friendly digital experiences through thoughtful interface and experience design.",
    icon: <FontAwesomeIcon icon={faSwatchbook} />,
    more: "Learn more",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Delivering complete web solutions by combining front-end and back-end development into a seamless, scalable experience.",
    icon: <FontAwesomeIcon icon={faCode} />,
    more: "Learn more",
  },
  {
    id: 3,
    title: "Web App",
    desc: "A fast, secure, and user-friendly web app designed to boost productivity and streamline tasks from any device.",
    icon: <FontAwesomeIcon icon={faDatabase} />,
    more: "Learn more",
  }
];

function Services() {
  return (
    <div className='w-full h-auto px-4 py-20'>
      <div className='text-3xl font-bold text-center mb-10'>
        <h1 className='text-teal-500 inline-block mr-2'>Service</h1>
        <h1 className='inline-block'>I Provide</h1>
      </div>

      <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]'>
        {services.map((service) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            key={service.id}
            className='relative flex flex-col items-center justify-center p-6 border-teal-700 border-2 hover:bg-teal-700  rounded-2xl text-center transition duration-300 cursor-pointer w-[20rem] mx-auto'
          >
            <div className='text-2xl mb-2'>{service.icon}</div>
            <h2 className='font-bold text-lg mb-2'>{service.title}</h2>
            <p className='text-sm mb-6'>{service.desc}</p>
            <a href="#" className='absolute bottom-4 text-sm text-red-600 hover:underline'>
              {service.more}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
