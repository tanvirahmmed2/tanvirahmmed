import React from 'react'
import { Link } from 'react-router-dom'
import { projectDatas } from './Project/Datas'
import UsePageTitle from './UsePageTitle'

const Projects = () => {
  UsePageTitle("Projects")
  return (
    <div className="w-full p-12 h-auto flex flex-col gap-10 items-center justify-center  ">
      <div className="text-3xl md:text-4xl font-bold flex flex-row items-center justify-center w-full h-auto gap-3">
        <h1 className="text-white">Here are</h1>
        <h1 className="text-cyan-500">My Projects</h1>
      </div>
      <div className="w-full p-4 flex flex-wrap justify-center gap-10">
        {projectDatas.map(({ id, title, category, Image }) => (
          <div
            key={id}
            className="group w-[280px] h-[400px] relative rounded-2xl overflow-hidden cursor-pointer border-2 border-emerald-500  transform transition duration-500 ease-out"
          >
            <img
              src={Image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 rounded-2xl transition duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 w-full flex flex-col items-center justify-center gap-2 p-3  backdrop-blur-sm">
              <p className="text-xs font-poppins text-cyan-400 font-semibold w-full text-right px-2">
                {category}
              </p>
              <div className="w-full flex flex-row items-center justify-between px-2">
                <p className="text-sm font-bold bg-white text-black px-2 p-1 rounded-lg">{title}</p>
                <Link
                  to={`/projects/${title}`}
                  className="text-xs md:text-sm  text-white font-semibold font-mono px-3 py-1 bg-cyan-500 rounded-lg shadow-md hover:bg-cyan-600 transition"
                >
                  see more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
