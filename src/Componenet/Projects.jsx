import React from 'react'
import { Link } from 'react-router-dom'

import { projectDatas } from './Project/Datas'
import UsePageTitle from './UsePageTitle'

const Projects = () => {
  UsePageTitle("Projects")
  return (
    <div className='w-full p-12 h-auto flex-col min-h-screen gap-6 items-center flex bg-white/5'>
      <div className='text-3xl font-bold flex flex-row items-center justify-center w-full h-auto gap-4'>
        <h1>Here are</h1>
        <h1 className='text-cyan-500'>My Projects</h1>
      </div>
      <div className=' w-full p-2 flex flex-col lg:flex-row items-center justify-center h-auto gap-8'>
        {projectDatas.map((projectsdata) => {
          const { id, title, headline, titleimg } = projectsdata;
          return <div key={id} className='border-2 border-cyan-600 w-full lg:w-[350px] h-[500px] relative bg-gray-300 group rounded-xl overflow-hidden'>

            <img src={titleimg} alt="" className='w-full h-[500px] object-cover' />
            <div className='absolute bottom-0 w-full h-auto p-4 flex flex-col items-center justify-center font-semibold text-cyan-950 bg-white/90'>
              <h1 className='text-xl font-bold'>{title}</h1>
              <p>{headline}</p>
              <Link to={`/projects/${title}`} className='text-red-700 text-xl group-hover:scale-110 font-bold font-mono'>see more</Link>
            </div>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Projects
