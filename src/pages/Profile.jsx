import React from 'react'
import { GiHand } from "react-icons/gi";
import { FaInstagram,FaLinkedin, FaLinkedinIn, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
  return (
    <>
      <div className="w-full h-full font-space-grotesk flex gap-4 max-[640px]:flex-col-reverse justify-center items-center text-white max-[640px]:gap-2  ">
        <div className="left-info flex flex-col items-center  gap-2">
          <div className="profile-info py-2 px-4 w-[48rem] h-[28rem] bg-profile-bg/10 rounded-md border border-profile-stroke max-[1024px]:w-[32rem] max-[991px]:w-[22rem] max-[991px]:h-[22rem] max-[640px]:w-[17rem] max-[640px]:h-[19rem] max-[1024px]:py-4">
            <h1 className='text-5xl text-center font-bold text-profile-txt leading-tight max-[640px]:text-sm max-[991px]:text-xl max-[1024px]:text-3xl'>Hey my self Srinivas Reddy,<br />
              A self taught Web Developer
            </h1>
            <h3 className='text-xl text-center font-normal border-b py-4 max-[640px]:text-[12px] max-[640px]:leading-4 max-[640px]:py-2 max-[991px]:text-sm max-[1024px]:text-base'>
              Aspiring MERN Stack Developer | JavaScript | React.js | Tailwind CSS | Frontend Development</h3>
            <div className="py-4">
              <div className="mb-3">
                <div className="flex justify-between items-center ">
                  <h2 className='text-2xl text-profile-txt font-medium max-[640px]:text-xl max-[991px]:text-xl'>Schooling</h2>
                  <p className='font-normal text-profile-txt max-[640px]:text-sm'>CGPA : 8.8</p>

                </div>
                <div className="flex justify-between items-center max-[640px]:text-xs max-[991px]:text-sm">
                  <p className='font-light'>Vignana jyothi high school</p>
                  <p className='font-light'>2019</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex justify-between items-center">
                  <h2 className='text-2xl text-profile-txt font-medium max-[640px]:text-base max-[991px]:text-xl'>Intermediate</h2>
                  <p className='font-normal text-profile-txt max-[640px]:text-sm'>CGPA : 9.3</p>
                </div>
                <div className="flex justify-between items-center max-[640px]:text-[0.6rem] max-[991px]:text-sm">
                  <p className='font-light'>sri chaitanya junior kalasala - MPC</p>
                  <p className='font-light'>2019-2021</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex justify-between items-center">
                  <h2 className='text-2xl text-profile-txt font-medium max-[640px]:text-xl max-[991px]:text-xl'>Undergraduation</h2>
                  <p className='font-normal text-profile-txt max-[640px]:text-sm'>CGPA : 8.0</p>
                </div>
                <div className="flex justify-between items-center max-[640px]:text-[0.4rem] max-[991px]:text-xs">
                  <p className='font-light'>Av college of commerce and science - B.Sc computer Science</p>
                  <p className='font-light'>2021-2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hobbie bg-profile-bg/10 w-[48rem] h-10 rounded-md border border-profile-stroke max-[1024px]:w-[32rem] max-[991px]:w-[22rem] max-[640px]:w-[17rem] max-[640px]:h-14">
            <p className='font-normal flex items-center text-center p-2 justify-center h-full max-[1024px]:text-xs'>Playing Cricket, Watching Movies, Listening to Music, Learning new Skills, Workout.</p>
          </div>
        </div>
        <div className="right-info flex flex-col gap-2">
          <div className="profile-img w-[22rem] h-[24rem] overflow-hidden bg-profile-bg/10 rounded-md border border-profile-stroke max-[1024px]:w-[16rem] max-[991px]:w-[14rem] max-[991px]:h-[18rem] max-[640px]:w-[17rem] max-[640px]:h-[13rem]">
            <img src="./images/ProfilePic.jpg" alt="profile" className='w-full h-full object-cover' />
          </div>
          <div className="w-[22rem] h-12 bg-profile-bg/10 rounded-md border border-profile-stroke max-[1024px]:w-[16rem] max-[991px]:w-[14rem] max-[640px]:w-[17rem] max-[640px]:h-10">
            <div className="flex items-center justify-center gap-2 w-full h-full">
            <a className='px-2 py-1 rounded text-white text-2xl bg-pink-500 max-[640px]:text-lg' href=""><FaInstagram /></a>
            <a className='px-2 py-1 rounded text-white text-2xl bg-blue-500 max-[640px]:text-lg' href=""><FaLinkedinIn  /></a>
            <a className='px-2 py-1 rounded text-white text-2xl bg-orange-500 max-[640px]:text-lg' href=""><FaReddit /></a>
            <a className='px-2 py-1 rounded text-white text-2xl bg-zinc-850 border border-zinc-400 max-[640px]:text-lg' href=""><FaXTwitter /></a>
            </div>
          </div>
          <div className="w-[22rem] h-12 bg-profile-bg/10 rounded-md border border-profile-stroke max-[1024px]:w-[16rem] max-[991px]:w-[14rem] max-[640px]:w-[17rem] max-[640px]:h-8">
            <div className="w-full h-full flex items-center justify-center gap-2">
              <h1 className='text-3xl text-[#FFCE48] font-semibold font-poppins max-[640px]:text-xl'>Hire Me</h1>
              <div className="text-[#FFCE48] text-3xl max-[640px]:text-xl"><GiHand /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
