import React, { useEffect, useState } from 'react';
import { projectDatas } from './Datas';
import { useParams } from 'react-router-dom';

const ShowProject = () => {
  const [projectgroup, setProjectGroup] = useState(null);
  const { title } = useParams(); 

  useEffect(() => {
    const group = projectDatas.find((project) => project.title === title);
    
    setProjectGroup(group);
  }, [title]);
  
  if (!projectgroup) {
    return <div className='text-red-500 font-bold w-full min-h-screen'>No data found!!</div>;
  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center py-12'>
      <h1 className='text-2xl font-bold'>{title} Projects</h1>
      <h1>{projectgroup.headline}</h1>
      {projectgroup.projects.map((project)=>{
        const {id,title,desc,homeimg,productimg,responsiveimg,barimg,userimg,siteurl}= project
        return <div>
          <h1>{title}</h1>
          <p>{desc}</p>
          <a href={siteurl} className='text-red-500'>view site</a>
        </div>
      })}

    </div>
  );
};

export default ShowProject;
