import React, { useEffect, useState } from 'react';
import { projectDatas } from '../Project/Datas';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Project = () => {
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
        <div className="min-h-screen w-full pt-20 p-4 flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl font-bold text-center mb-10">{title}</h1>

            {projects.map(
                ({
                    id,
                    category,
                    title,
                    description,
                    homeImage,
                    productImage,
                    contactImage,
                    userImage,
                    serviceImage,
                    siteUrl,
                    githubUrl,
                }) => (
                    <div
                        className="w-full flex flex-col gap-8 items-center text-center mb-12"
                        key={id}
                    >
                        <h2 className="text-2xl italic"> Category: {category}</h2>
                        <a
                            href={siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-3/4 flex justify-center"
                        >
                            <img
                                src={homeImage}
                                alt={title}
                                className="w-full  shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer rounded-2xl"
                            />
                        </a>

                        <p className="text-lg opacity-70  w-3/4">{description}</p>

                        {/* Sections */}
                        {[
                            { label: "Page", img: productImage },
                            { label: "Page", img: serviceImage },
                            { label: "Page", img: userImage },
                            { label: "Page", img: contactImage },
                        ].map(({ label, img }, idx) => (
                            <div key={idx} className="w-full flex flex-col gap-6 items-center">
                                <p className="text-xl font-semibold">{label}</p>
                                <a
                                    href={siteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-3/4 flex justify-center"
                                >
                                    <img
                                        src={img}
                                        alt={label}
                                        className="w-full  shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer rounded-2xl"
                                    />
                                </a>
                            </div>
                        ))}

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href={siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2   rounded-xl hover:scale-105 shadow-md shadow-red-400 bg-red-300 transition"
                            >
                                View Site
                            </a>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2   rounded-xl hover:scale-105 shadow-md shadow-emerald-400 bg-emerald-300 transition"
                            >
                                Code
                            </a>
                        </div>

                        {/* Divider */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1 }}
                            className="w-3/4 h-[2px] bg-red-700 mt-8"
                        ></motion.div>
                    </div>
                )
            )}
        </div>
    );
};

export default Project;
