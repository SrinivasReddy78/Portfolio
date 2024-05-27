import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center text-white font-poppins">

        <h1 className='text-center text-2xl mb-5 font-extralight underline underline-offset-8 decoration-1 decoration-[#dadada]'>
          I know the following Skils
        </h1>

        <div className="grid w-10/12 h-[83%] grid-cols-auto-13-fr p-4 gap-4 overflow-y-auto">

          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><FaCss3Alt className=' text-[#E44c27] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>HTML</h1>
          </div>
          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><FaCss3Alt className=' text-[#208cb7] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>CSS</h1>
          </div>
          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><DiJavascript className=' text-[#fbd725] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>JavaScript</h1>
          </div>
          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><FaReact className=' text-[#00D8FF] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>React JS</h1>
          </div>
          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><RiTailwindCssFill className=' text-[#38BDF8] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>Tailwind CSS</h1>
          </div>
          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><FaGithub className=' text-[#dadada] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>Git & Github</h1>
          </div>
          {/* <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><FaNodeJs className=' text-[#87CF30] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>Node JS</h1>
          </div>
          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><SiExpress className=' text-[#dadada] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>Express JS</h1>
          </div>
          <div className="skill-1 border h-[13rem] flex flex-col justify-evenly items-center rounded-lg cursor-pointer hover:scale-105 transition-transform ">
            <div className="logo"><DiMongodb className=' text-[#55AD47] text-9xl' /></div>
            <h1 className='text-2xl font-semibold'>Mongo DB</h1>
          </div> */}







        </div>
      </div>
    </>
  )
}

export default Skills
