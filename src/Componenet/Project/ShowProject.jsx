import React, { useEffect, useState } from 'react';
import { projectDatas } from './Datas';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ShowProject = () => {
  const [projects, setProjects] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const group = projectDatas.filter((project) => project.title === title);
    setProjects(group);
  }, [title]);

  if (!projects) {
    return <div className='text-red-500 font-bold w-full min-h-screen'>No data found!!</div>;
  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center gap-6 py-12'>
      <h1 className='text-4xl font-bold'>-----{title}-----</h1>
      <div className='w-full h-auto'>
        {projects.map((project) => {
          const { id, category, headline, desc, responsivedesc, homeimg, productimg, footerimg, userimg, responsiveimg, siteurl, codeurl } = project
          return <div className='w-full h-auto flex flex-col gap-8 items-center text-center  justify-center mb-8' key={id}>
            <h1 className='text-center font-bold text-2xl italic'>{category}</h1>
            <h1>{headline}</h1>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={homeimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>

            <p>{desc}</p>
            <p className='text-3xl font-mono '>Page Showcase</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={productimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>
            <p className='text-3xl font-mono '>Reponsive Design</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={responsiveimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>
            <p>{responsivedesc}</p>
            <p className='text-3xl font-mono '>User Page</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={userimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>
            <p className='text-3xl font-mono '>Footer</p>
            <a href={siteurl} className='w-full h-auto flex items-center justify-center'><img src={footerimg} className='w-4/5 md:w-1/2 shadow-xl hover:scale-105 cursor-pointer' alt="" /></a>
            <div className='w-auto h-auto flex flex-row gap-2 items-center justify-center'>
              <a href={siteurl} className='px-4 bg-red-500  text-white rounded-xl cursor-pointer hover:scale-105 shadow-md shadow-red-500'>view site</a>
              <a href={codeurl} className='px-4 bg-emerald-500 text-white rounded-xl cursor-pointer hover:scale-105 shadow-md shadow-emerald-500'>code</a>
            </div>

            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} className='w-3/4 h-[2px] bg-red-700'></motion.div>
          </div>
        })}

      </div>


    </div>
  );
};

export default ShowProject;
