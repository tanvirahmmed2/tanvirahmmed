import React from 'react'
import { Link } from 'react-router-dom'
import { projectDatas } from '../Project/Datas'
import UsePageTitle from '../UsePageTitle'

const Projects = () => {
  UsePageTitle("Projects")
  return (
    <div className="w-full min-h-screen py-16 px-6 flex flex-col gap-12 items-center justify-center ">
      
      {/* Heading */}
      <div className="text-3xl md:text-4xl font-extrabold flex flex-row items-center justify-center gap-3">
        <h1 className="">Here are</h1>
        <h1 className="text-indigo-600">My Projects</h1>
      </div>

      {/* Project Cards */}
      <div className="w-full flex flex-wrap justify-center gap-8 md:gap-12">
        {projectDatas.map(({ id, title, category, Image, githubUrl }) => (
          <div
            key={id}
            className="group w-full sm:w-[280px] h-[400px] relative rounded-xl overflow-hidden cursor-pointer shadow-lg border border-indigo-200 dark:border-indigo-700 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Image */}
            <img
              src={Image}
              alt={title}
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-2"
            />

            {/* Content */}
            <div className="absolute bottom-0 w-full flex flex-col gap-2 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-lg font-semibold text-indigo-600">{title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{category}</p>
              </div>

              <div className="w-full flex flex-row items-center justify-between mt-1">
                <Link
                  to={`/projects/${title}`}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-lg font-medium text-white bg-emerald-500 shadow hover:bg-emerald-600 transition"
                >
                  View
                </Link>
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs md:text-sm px-3 py-1.5 rounded-lg font-medium text-white bg-gray-700 shadow hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
