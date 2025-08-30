import React from 'react'
import { Link } from 'react-router-dom'

import { projectDatas } from './Project/Datas'
import UsePageTitle from './UsePageTitle'

const Projects = () => {
  UsePageTitle("Projects")
  return (
    <div className='w-full p-12 h-auto flex-col gap-6 items-center flex justify-center '>
      <div className='text-3xl font-bold flex flex-row items-center justify-center w-full h-auto gap-4'>
        <h1>Here are</h1>
        <h1 className='text-cyan-500'>My Projects</h1>
      </div>
      <div className=' w-full p-2 flex flex-wrap justify-center h-auto gap-8'>

        {projectDatas.map((Data) => {
          const { id, title, category, titleimg } = Data
          return <div key={id} className='w-[280px] shadow-sm  h-[400px] relative rounded-lg overflow-hidden  cursor-pointer shadow-green-400 hover:scale-105 transition duration-500'>
            <img src={titleimg} alt="" className='w-[280px] h-[400px] object-cover' />
            <div className='w-full h-auto absolute bottom-0 flex flex-col items-center justify-center p-1 bg-white/20 gap-2'>
              <p className='text-xs font-poppins text-cyan-500 font-bold w-full text-end px-4'>{category}</p>
              <div className='w-full h-auto flex flex-row items-center justify-center'>
                <p className='w-1/2  text-center font-bold text-white'>{title}</p>
                <Link to={`/projects/${title}`} className='text-white font-bold font-mono w-1/2  text-center bg-cyan-500 rounded-lg'>see more</Link>
              </div>
              
            </div>

          </div>
        })}
      </div>

    </div>
  )
}

export default Projects
