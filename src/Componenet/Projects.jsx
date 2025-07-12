import React from 'react'
import { Link } from 'react-router-dom'

import { projectDatas } from './Project/Datas'

const Projects = () => {
  return (
    <div className='w-full  py-12 h-auto flex-col min-h-screen gap-6 items-center flex'>
      <div className='text-3xl font-bold flex flex-row items-center justify-center w-full h-auto gap-4'>
        <h1>Here are</h1>
        <h1 className='text-teal-500'>My Projects</h1>
      </div>
      <div className='grid justify-items-center w-full p-2 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4'>
        {projectDatas.map((projectsdata) => {
          const { id, title, headline , titleimg} = projectsdata
          return <div key={id} className='w-[350px] h-[350px] relative bg-gray-300 group rounded-xl overflow-hidden'>

            <img src={titleimg} alt="" className='w-[350px] h-[350px] object-cover' />
            <div className='absolute bottom-0 w-full h-auto p-4 flex flex-col items-center justify-center font-semibold text-teal-950 bg-white/80'>
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
