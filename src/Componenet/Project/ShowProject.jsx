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
      <div className='w-full h-auto'>
        {projectgroup.projects.map((project) => {
          const { id, title, desc, homeimg, productimg,  responsivedesc, footerimg,  userimg, responsiveimg,  siteurl } = project
          return <div className='w-full h-auto flex flex-col gap-6 items-center text-center  justify-center' key={id}>
            <h1 className='text-3xl font-bold text-teal-600'>{title}</h1>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={homeimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>

            <p>{desc}</p>
            <p className='text-3xl font-mono '>Product Showcase</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={productimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>
            <p className='text-3xl font-mono '>Reponsive Design</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={responsiveimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>
            <p>{responsivedesc}</p>
            <p className='text-3xl font-mono '>User Page</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={userimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>
            <p className='text-3xl font-mono '>Footer</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={footerimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>

            <a href={siteurl} className='text-red-500'>view site</a>
          </div>
        })}
      </div>


    </div>
  );
};

export default ShowProject;
