import React, { useContext } from 'react'
import { motion } from 'framer-motion';



import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import UsePageTitle from './UsePageTitle';
import ThemeContext from './Context/ThemeContext';



const Skills = () => {
    const {light} =useContext(ThemeContext)
    UsePageTitle("skills")
    return (
        <div className={`w-full h-auto  flex flex-col items-center justify-center gap-6 py-16 `}>
            <h1 className='text-4xl font-semibold'>Technical skills</h1>
            <p className='md:text-2xl text-lg opacity-70 text-center'>Technologies I work with to bring ideas to life</p>
            <div className='w-full h-auto flex flex-col md:flex-row items-center justify-center gap-12'>

                
                <motion.div initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6}} className={`w-[300px] md:w-[230px] h-[400px] ${light? "bg-black/5": "bg-white/5"} shadow-sm shadow-cyan-600 p-8 rounded-3xl flex flex-col items-center justify-between`}>
                    <p className='text-4xl text-cyan-500'><FaReact/></p>
                    <h1 className='text-4xl'>Frontend</h1>
                    <div  className='text-cyan-400 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>React Js</p>
                            <span>90%</span>

                        </div>
                        <input type="range" disabled value={90} className='w-full'/>
                    </div>
                    <div className='text-cyan-500 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>JavaScript</p>
                            <span>95%</span>

                        </div>
                        <input type="range" disabled value={95} className='w-full'/>
                    </div>
                    <div className='text-cyan-600 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>Tailwind CSS</p>
                            <span>100%</span>

                        </div>
                        <input type="range" disabled value={100} className='w-full'/>
                    </div>
                </motion.div>

                <motion.div initial={{y:-20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6}} className={`w-[300px] md:w-[230px] h-[400px] ${light? "bg-black/5": "bg-white/5"} shadow-sm shadow-emerald-600 p-8 rounded-3xl flex flex-col items-center justify-between`}>
                    <p className='text-4xl text-emerald-500'><FaNodeJs/></p>
                    <h1 className='text-4xl'>Backend</h1>
                    <div  className='text-emerald-400 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>Express Js</p>
                            <span>94%</span>

                        </div>
                        <input type="range" disabled value={94} className='w-full'/>
                    </div>
                    <div className='text-emerald-500 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>Node Js</p>
                            <span>95%</span>

                        </div>
                        <input type="range" disabled value={95} className='w-full'/>
                    </div>
                    <div className='text-emerald-600 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>Rest API's</p>
                            <span>89%</span>

                        </div>
                        <input type="range" disabled value={89} className='w-full'/>
                    </div>
                </motion.div>

                <motion.div initial={{x:50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6}} className={`w-[300px] md:w-[230px] h-[400px] ${light? "bg-black/5": "bg-white/5"}  shadow-sm shadow-indigo-600 p-8 rounded-3xl flex flex-col items-center justify-between`}>
                    <p className='text-4xl text-indigo-500'><FaDatabase/></p>
                    <h1 className='text-4xl'>DataBase</h1>
                    <div  className='text-indigo-400 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>MongoDB</p>
                            <span>93%</span>

                        </div>
                        <input type="range" disabled value={90} className='w-full'/>
                    </div>
                    <div className='text-indigo-500 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>Mongoose</p>
                            <span>92%</span>

                        </div>
                        <input type="range" disabled value={95} className='w-full'/>
                    </div>
                    <div className='text-indigo-600 w-full'>
                        <div className='w-full h-auto flex flex-row items-center justify-between'>
                            <p>PostgreSQL</p>
                            <span>90%</span>

                        </div>
                        <input type="range" disabled value={90} className='w-full'/>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Skills
