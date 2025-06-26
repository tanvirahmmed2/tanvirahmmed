import React from 'react'
import { motion } from 'motion/react'


const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: "Responsive and modern design to present developer, business, commercial profile.",
    image: "/disibin_firstpage.jpg",
    link: "https://www.disibin.com/"


  },
  {
    id: 2,
    title: "Online Store",
    desc: "User-friendly shopping site with product listings and cart system.",
    image: "/online_store_web.jpg",
    link: ""

  },
  {
    id: 3,
    title: "Magazine",
    desc: "Built for reading — a blog-style magazine site using React and Tailwind.",
    image: "/magazine_web.jpg",
    link: ""

  },
  {
    id: 4,
    title: "Publication",
    desc: "Designed for displaying journals, publications, and editorial content.",
    image: "/publication_web.jpg",
    link: ""

  },
  {
    id: 5,
    title: "Education",
    desc: "Easy access to quality learning resources and tools for students and teachers.",
    image: "/educational_web.jpg",
    link: ""

  },
  {
    id: 6,
    title: "Daily Life",
    desc: "Users plan, track, and manage their daily tasks for a more organized and productive life.",
    image: "/daily_life_web.jpg",
    link: ""

  }
]


function Projects() {
  return (
    <div className='w-full h-auto px-4 py-20'>
      <div className='text-3xl font-bold text-center mb-10'>
        <h1 className='inline-block'>Here My</h1>
        <h1 className='text-teal-500 inline-block ml-2'>Projects</h1>

      </div>

      <div className='grid gap-8 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]'>
        {projects.map((project) => (

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            href={project.link} key={project.id} className='group relative hover:border-2 border-teal-700 text-black flex flex-col items-center justify-end p-4 overflow-hidden rounded-xl text-center cursor-pointer w-[20rem] h-100 mx-auto'>
            
            <img src={project.image} alt="" className='absolute  w-full h-110 object-cover top-0 ' />
            <div className='flex flex-col w-full items-center justify-center absolute bottom-0 backdrop-blur-2xl'>
              <p className='text-sm italic'>{project.desc}</p>
              <h1 className='font-bold text-lg '>{project.title}</h1>
            </div>

          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Projects
