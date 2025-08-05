import React, { useEffect, useState } from 'react';
import { projectDatas } from './Datas';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <div className='w-full min-h-screen flex flex-col items-center gap-6 py-12'>
      <h1 className='text-3xl font-bold'>{title} Projects</h1>
      <h1 className='text-center'>{projectgroup.headline}</h1>
      <div className='w-full h-auto'>
        {projectgroup.projects.map((project) => {
          const { id, title, desc, homeimg, productimg, responsivedesc, footerimg, userimg, responsiveimg, siteurl, code } = project
          return <div className='w-full h-auto flex flex-col gap-6 items-center text-center  justify-center mb-8' key={id}>
            <h1 className='text-3xl font-bold text-teal-600'> <span className='text-teal-900'>#{id} </span>{title}</h1>
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
            <div className='w-auto h-auto flex flex-row gap-2 items-center justify-center'>
              <a href={siteurl} className='px-4 bg-red-500 rounded-xl cursor-pointer hover:scale-105 shadow-md shadow-red-500'>view site</a>
              <a href={code} className='px-4 bg-emerald-500 rounded-xl cursor-pointer hover:scale-105 shadow-md shadow-emerald-500'>code</a>
            </div>

            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} className='w-3/4 h-[2px] bg-red-700'></motion.div>
          </div>
        })}
      </div>


    </div>
  );
};

export default ShowProject;
