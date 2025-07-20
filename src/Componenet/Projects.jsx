import React from 'react'
import { Link } from 'react-router-dom'

import { projectDatas } from './Project/Datas'
import UsePageTitle from './UsePageTitle'

const Projects = () => {
  UsePageTitle("Projects")
  return (
    <div className='w-full  py-12 h-auto flex-col min-h-screen gap-6 items-center flex bg-gray-50'>
      <div className='text-3xl font-bold flex flex-row items-center justify-center w-full h-auto gap-4'>
        <h1>Here are</h1>
        <h1 className='text-cyan-500'>My Projects</h1>
      </div>
      <div className='grid justify-items-center w-full p-2 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4'>
        {projectDatas.map((projectsdata) => {
          const { id, title, headline , titleimg} = projectsdata
          return <div key={id} className='border-2 border-cyan-600 shadow-xl w-[350px] h-[350px] relative bg-gray-300 group rounded-xl overflow-hidden'>

            <img src={titleimg} alt="" className='w-[350px] h-[350px] object-cover' />
            <div className='absolute bottom-0 w-full h-auto p-4 flex flex-col items-center justify-center font-semibold text-cyan-950 bg-white/90'>
              <h1 className='text-xl font-bold'>{title}</h1>
              <p>{headline}</p>
              <Link to={`/projects/${title}`} className='text-red-700 text-xl group-hover:scale-110 font-bold font-mono'>see more</Link>
            </div>
          </div>
        })}
      </div>
      <div className='px-4 h-auto w-full flex flex-col items-center justify-center text-center gap-4 text-[17px]'>
        <p>Over the years, I’ve worked on a diverse range of full-stack web development projects, primarily focused on the MERN stack — MongoDB, Express.js, React.js, and Node.js. Each project reflects my ability to craft complete, production-ready applications that are fast, scalable, and user-centric</p>
        <p>My portfolio includes everything from personal portfolio websites and company landing pages, to complex dashboards, authentication systems, e-commerce platforms, chat applications, and real-time data visualization tools. I’ve developed responsive and intuitive UIs using React.js with modern libraries like Tailwind CSS, Framer Motion, and React Router, ensuring a smooth user experience across all devices.</p>
        <p>On the backend, I’ve implemented secure REST APIs with Node.js and Express, integrated MongoDB for flexible and efficient data management, and used tools like JWT, bcrypt, and middleware for robust authentication and authorization flows. In some cases, I’ve also incorporated WebSockets, Cloudinary, and third-party APIs to enhance functionality.</p>
        <p>Every project I build is not just a showcase of skills, but a reflection of my commitment to solving problems, improving user experience, and pushing the limits of what modern web technologies can do.</p>
      </div>
    </div>
  )
}

export default Projects
