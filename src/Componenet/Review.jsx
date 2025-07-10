import React from 'react'


import { FaStar } from "react-icons/fa";

import { reviewDatas } from './ReviewDatas'

const Review = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-12 m-8'>
      <p className='flex flex-row w-full h-auto items-center justify-center gap-4 text-xl md:text-3xl'><FaStar /> What clients are saying?</p>
      <div className='w-full h-auto grid justify-items-center gap-12 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        {reviewDatas.map((reviews) => {

          const { id, name, email, review } = reviews
          return <div key={id} className='relative w-[300px] h-auto rounded-xl hover:scale-95 transition duration-300 cursor-pointer shadow-2xl overflow-hidden flex flex-col items-start justify-start border-2 border-teal-800'>
            <div className='w-full h-auto border-2 p-4'>
              <h1 className='text-xl font-bold'>{name}</h1>
              <p>{email}</p>
            </div>
            <div className='w-full h-auto flex items-center justify-center mt-4'>
            <p className='p-4 text-center italic'>{review}</p>

            </div>
            
          </div>

        })}
      </div>

    </div>
  )
}

export default Review
