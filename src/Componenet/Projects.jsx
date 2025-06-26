import React from 'react'


const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: "Responsive and modern design to present developer, business, commercial profile.",
    image: "",
    link: ""


  },
  {
    id: 2,
    title: "Online Store",
    desc: "User-friendly shopping site with product listings and cart system.",
    image: "",
    link: ""

  },
  {
    id: 3,
    title: "Magazine",
    desc: "Built for reading — a blog-style magazine site using React and Tailwind.",
    image: "",
    link: ""

  },
  {
    id: 4,
    title: "Publication",
    desc: "Designed for displaying journals, publications, and editorial content.",
    image: "",
    link: ""

  },
  {
    id: 5,
    title: "Education",
    desc: "Easy access to quality learning resources and tools for students and teachers.",
    image: "",
    link: ""

  },
  {
    id: 6,
    title: "Daily Life",
    desc: "Users plan, track, and manage their daily tasks for a more organized and productive life.",
    image: "",
    link: ""

  }
]


function Projects() {
  return (
    <div className='w-full h-auto px-4 py-20'>
      <div className='text-3xl font-bold text-center mb-10'>
        <h1 className='inline-block'>Here My</h1>
        <h1 className='text-red-700 inline-block ml-2'>Projects</h1>

      </div>

      <div className='grid gap-8 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]'>
        {projects.map((project) => (
          <div key={project.id} className='group relative flex flex-col items-center justify-end p-4 bg-gray-50 rounded-2xl text-center cursor-pointer w-[20rem] h-90  mx-auto'>
            <img src={project.image} alt="" />
            <p>{project.desc}</p>
            <a href={project.link} className=' text-red-500 group-hover:flex hidden transition duration-400'>show more</a>
            <h1 className='font-bold text-xl '>{project.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
