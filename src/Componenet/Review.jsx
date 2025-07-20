import React, {useState, useEffect} from 'react'


import { FaStar } from "react-icons/fa";

import { reviewDatas } from './ReviewDatas'
import UsePageTitle from './UsePageTitle';

const Review = () => {
  const [leftslide, setLeftSlide] = useState(0)
      const [centerslide, setCenterSlide] = useState(0)
      const [rightslide, setRightSlide] = useState(2)
      useEffect(() => {
          const interval = setInterval(() => {
              setCenterSlide(prev =>
                  prev === reviewDatas.length - 1 ? 0 : prev + 1
              );
          }, 3000);
  
          return () => clearInterval(interval);
      }, []);

      useEffect(() => {
          if (centerslide === 0) {
              setLeftSlide(reviewDatas.length - 1)
              setRightSlide(1)
  
          }
          else if (centerslide === reviewDatas.length - 1) {
              setLeftSlide(centerslide - 1)
              setRightSlide(0)
          }
          else {
              setRightSlide(centerslide + 1)
              setLeftSlide(centerslide - 1)
  
          }
  
      }, [ centerslide])
  
  UsePageTitle("Review")
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-12 py-8 bg-white ">
      <p className='flex flex-row w-full h-auto items-center justify-center gap-4 text-2xl md:text-4xl font-bold'> <span className='text-emerald-500'><FaStar /></span> What clients are saying?</p>
      <div className='w-full p-2 flex flex-row items-center justify-center gap-12'>


        <div className='w-[300px] h-[400px] rounded-xl cursor-pointer hidden md:flex flex-col items-center justify-between p-6 opacity-30 text-center bg-gray-100 shadow-xl'>

          <p className='font-poppins'>{reviewDatas[leftslide].review}</p>
          <div className='w-full h-auto flex flex-col items-center justify-center gap-1  text-emerald-500 '>
            <p className='text-5xl rounded-full border-2 pt-2 border-white overflow-hidden'>{reviewDatas[leftslide].avatar}</p>
            <h1>{reviewDatas[leftslide].name}</h1>
            <p>{reviewDatas[leftslide].email}</p>

          </div>
        </div>


        <div className='w-[300px] h-[400px] rounded-xl cursor-pointer flex flex-col items-center justify-between p-6 opacity-100 text-center hover:scale-105 bg-gray-100 shadow-xl'>

          <p className='font-poppins'>{reviewDatas[centerslide].review}</p>
          <div className='w-full h-auto flex flex-col items-center justify-center gap-1  text-red-500 '>
            <p className='text-5xl rounded-full border-2 pt-2 border-white overflow-hidden'>{reviewDatas[centerslide].avatar}</p>
            <h1>{reviewDatas[centerslide].name}</h1>
            <p>{reviewDatas[centerslide].email}</p>

          </div>
        </div>




        <div className='w-[300px] h-[400px] rounded-xl cursor-pointer hidden md:flex flex-col items-center justify-between p-6 opacity-30 text-center bg-gray-100 shadow-xl'>

          <p className='font-poppins'>{reviewDatas[rightslide].review}</p>
          <div className='w-full h-auto flex flex-col items-center justify-center gap-1  text-emerald-500 '>
            <p className='text-5xl rounded-full border-2 pt-2 border-white overflow-hidden'>{reviewDatas[rightslide].avatar}</p>
            <h1>{reviewDatas[rightslide].name}</h1>
            <p>{reviewDatas[rightslide].email}</p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Review
