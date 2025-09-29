import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaJs, } from "react-icons/fa"
import { SiExpress, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si"
import UsePageTitle from '../UsePageTitle'
import ThemeContext from '../Context/ThemeContext'

const skills = [
    { name: "React Js", level: 90, icon: <FaReact className="text-sky-500 text-4xl w-full text-center" /> },
    { name: "JavaScript", level: 95, icon: <FaJs className="text-yellow-400 text-4xl w-full text-center" /> },
    { name: "Tailwind CSS", level: 100, icon: <SiTailwindcss className="text-cyan-400 text-4xl w-full text-center" /> },
    { name: "Express Js", level: 94, icon: <SiExpress className="text-green-500 text-4xl w-full text-center" /> },
    { name: "Node Js", level: 95, icon: <FaNodeJs className="text-green-400 text-4xl w-full text-center" /> },
    { name: "Rest API's", level: 89, icon: <FaNodeJs className="text-teal-400 text-4xl w-full text-center" /> },
    { name: "MongoDB", level: 93, icon: <SiMongodb className="text-green-600 text-4xl w-full text-center" /> },
    { name: "PostgreSQL", level: 90, icon: <SiPostgresql className="text-blue-500 text-4xl w-full text-center" /> },
]


const Skills = () => {
    const { light } = useContext(ThemeContext)
    UsePageTitle("skills")

    return (
        <div className="w-full flex flex-col items-center justify-center gap-8 py-16 px-6">
            <h1 className="text-4xl font-semibold">Technical Skills</h1>
            <p className="md:text-2xl text-lg opacity-70 text-center">
                Technologies I work with to bring ideas to life
            </p>

            <div className="w-full md:w-3/4 flex flex-wrap justify-center gap-10">
                {skills.map((skill, i) => {
                    const { name, level, icon } = skill
                    return <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`w-full sm:w-[220px] h-[150px] p-5 rounded-2xl shadow-md ${light ? "bg-indigo-50" : "bg-cyan-50"} bg-opacity-30 flex flex-col justify-between `}  >

                        {icon}
                        <div className='w-full flex flex-row items-center justify-between'>
                            <h2 className="text-lg font-semibold">{name}</h2>
                            <span>{level}%</span>
                        </div>


                        <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${level}%` }}
                                transition={{ duration: 2 }}
                                className="h-2 bg-indigo-500 rounded-full"
                            />
                        </div>

                    </motion.div>
                })}
            </div>
        </div>
    )
}

export default Skills
