import React, { useEffect, useState } from 'react';
import { projectDatas } from './Datas';
import { useParams } from 'react-router-dom';

const ShowProject = () => {
  const [selectedProjectGroup, setSelectedProjectGroup] = useState(null);
  const { title } = useParams(); 

  useEffect(() => {
    const group = projectDatas.find((project) => project.title === title);
    setSelectedProjectGroup(group);
  }, [title]);

  if (!selectedProjectGroup) {
    return <div className='text-red-500 font-bold w-full min-h-screen'>No data found!!</div>;
  }

  return (
    <div className="p-4 w-full min-h-screen">
      <h1 className="text-3xl font-bold">{selectedProjectGroup.title}</h1>
      <p className="text-gray-600 mb-6">{selectedProjectGroup.headline}</p>

      {selectedProjectGroup.projects.map((proj) => (
        <div key={proj.id} className="mb-6 p-4 border rounded shadow-sm">
          <h2 className="text-2xl font-semibold">{proj.title}</h2>
          <p className="text-gray-700 mt-2">{proj.desc}</p>
          {proj.url && (
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline block mt-3"
            >
              Visit Website
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowProject;
