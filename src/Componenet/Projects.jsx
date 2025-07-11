import React from 'react'
import { Link } from 'react-router-dom'

import { projectDatas } from './Project/Datas'

const Projects = () => {
  return (
    <div>
      {projectDatas.map((projectsdata)=>{
        const {id, title, headline, projects} = projectsdata
        return <div key={id}>
          <h1>{title}</h1>
          <p>{headline}</p>
          <Link to={`/projects/${title}`}>More</Link>
        </div>
      })}
    </div>
  )
}

export default Projects
