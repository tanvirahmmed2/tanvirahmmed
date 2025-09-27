import React, { useState, useEffect, useRef } from 'react'
import { FaStar } from "react-icons/fa";
import { reviewDatas } from '../ReviewDatas'
import UsePageTitle from '../UsePageTitle';
import { gsap } from "gsap";

const Review = () => {
  const [leftslide, setLeftSlide] = useState(0)
  const [centerslide, setCenterSlide] = useState(0)
  const [rightslide, setRightSlide] = useState(2)

  const centerSlideRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterSlide(prev =>
        prev === reviewDatas.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (centerslide === 0) {
      setLeftSlide(reviewDatas.length - 1)
      setRightSlide(1)
    } else if (centerslide === reviewDatas.length - 1) {
      setLeftSlide(centerslide - 1)
      setRightSlide(0)
    } else {
      setRightSlide(centerslide + 1)
      setLeftSlide(centerslide - 1)
    }
  }, [centerslide]);

  useEffect(() => {
    if (centerSlideRef.current) {
      gsap.fromTo(centerSlideRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, [centerslide]);

  UsePageTitle("Review")

  return (
    <div className="w-full flex flex-col items-center justify-center gap-12 py-12">
      <p className="flex flex-row w-full h-auto items-center justify-center gap-4 text-2xl md:text-4xl font-bold tracking-wide">
        <span className="text-indigo-500 animate-pulse"><FaStar /></span> 
        What clients are saying?
      </p>

      <div className="w-full p-2 flex flex-row items-center justify-center md:gap-6 lg:gap-12">
        <div className="w-[250px] h-[350px] rounded-2xl cursor-pointer blur-[1px] hidden md:flex scale-75 lg:scale-90 flex-col items-center justify-between p-6 opacity-40 text-center bg-white/5 backdrop-blur-md shadow-lg transition-all duration-500 hover:opacity-60 hover:scale-95">
          <p className="font-poppins text-xs italic">{reviewDatas[leftslide].review}</p>
          <div className="w-full h-auto flex flex-col items-center justify-center gap-1 text-indigo-500">
            <p className="rounded-full border-2 border-white overflow-hidden">{reviewDatas[leftslide].avatar}</p>
            <h1 className="font-semibold">{reviewDatas[leftslide].name}</h1>
            <p className="text-xs text-gray-400">{reviewDatas[leftslide].email}</p>
          </div>
        </div>

        <div
          ref={centerSlideRef}
          className="min-w-[290px] w-[300px] h-[420px] rounded-2xl cursor-pointer flex flex-col items-center justify-between p-6 opacity-100 text-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl shadow-2xl border border-white/10 transition-all duration-500 hover:scale-105"
        >
          <p className="font-poppins leading-relaxed italic">{reviewDatas[centerslide].review}</p>
          <div className="w-full h-auto flex flex-col items-center justify-center gap-1 text-indigo-500">
            <p className="text-5xl rounded-full border-2 border-indigo-500 overflow-hidden">{reviewDatas[centerslide].avatar}</p>
            <h1 className="font-semibold">{reviewDatas[centerslide].name}</h1>
            <p className="text-sm text-gray-300">{reviewDatas[centerslide].email}</p>
          </div>
        </div>

        <div className="w-[250px] h-[350px] rounded-2xl cursor-pointer blur-[1px] hidden md:flex scale-75 lg:scale-90 flex-col items-center justify-between p-6 opacity-40 text-center bg-white/5 backdrop-blur-md shadow-lg transition-all duration-500 hover:opacity-60 hover:scale-95">
          <p className="font-poppins text-xs italic">{reviewDatas[rightslide].review}</p>
          <div className="w-full h-auto flex flex-col items-center justify-center gap-1 text-indigo-500">
            <p className="rounded-full border-2 border-white overflow-hidden">{reviewDatas[rightslide].avatar}</p>
            <h1 className="font-semibold">{reviewDatas[rightslide].name}</h1>
            <p className="text-xs text-gray-400">{reviewDatas[rightslide].email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
