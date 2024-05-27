import React from 'react'
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/grid';

import { Grid, Pagination } from 'swiper/modules';


const projectData = [
  {
    id: 1,
    title: 'Cinemaplay',
    textStack: 'React, Tailwind CSS, API, UseContext Api, React Routing',
    image: './images/Project-1.png',
    Outputurl: 'https://cinemaplay.netlify.app/',
    CodeUrl: 'https://github.com/SrinivasReddy78/Cinemaplay',
    DemoUrl: './video/cinemaplay.mp4',
  },
  {
    id: 2,
    title: 'Hospital-Site',
    textStack: 'Html, CSS',
    image: './images/Project-2.png',
    Outputurl: 'https://srinivasreddy78.github.io/Hospital-site/',
    CodeUrl: 'https://github.com/SrinivasReddy78/Hospital-site',
  },
  {
    id: 3,
    title: 'SunDown Studio Clone',
    textStack: 'Html, CSS, Javascript',
    image: './images/Project-3.png',
    Outputurl: 'https://srinivasreddy78.github.io/Sundown/',
    CodeUrl: 'https://github.com/SrinivasReddy78/Sundown',
  },
  {
    id: 4,
    title: 'Random Joke Generator',
    textStack: 'Html, CSS, Javascript, API Integration',
    image: './images/Project-4.png',
    Outputurl: 'https://srinivasreddy78.github.io/JokeGenerator/',
    CodeUrl: 'https://github.com/SrinivasReddy78/JokeGenerator',
  },
  {
    id: 5,
    title: 'Todo App',
    textStack: 'React, Tailwind CSs',
    image: './images/Project-5.png',
    Outputurl: 'https://todo78.netlify.app/',
    CodeUrl: 'https://github.com/SrinivasReddy78/TodoApp',
  },
  {
    id: 6,
    title: 'Piano',
    textStack: 'HTML, CSS, Javascript',
    image: './images/Project-6.png',
    Outputurl: 'https://srinivasreddy78.github.io/Piano/',
    CodeUrl: 'https://github.com/SrinivasReddy78/Piano',
  },
  {
    id: 7,
    title: 'Arcade Snake Game',
    textStack: 'Html, CSS, Javascript',
    image: './images/Project-7.png',
    Outputurl: 'https://srinivasreddy78.github.io/ArcadeSnakeGame/',
    CodeUrl: 'https://github.com/SrinivasReddy78/ArcadeSnakeGame',
  },
  {
    id: 8,
    title: 'Matrix-Themed NumberGuessing Game',
    textStack: 'Html, CSS, Javascript',
    image: './images/Project-8.png',
    Outputurl: 'https://srinivasreddy78.github.io/Matrix-Themed-Numberguessgame/',
    CodeUrl: 'https://github.com/SrinivasReddy78/Matrix-Themed-Numberguessgame',
  },
]


const Project = () => {
  const [visibleDemoCardId, setVisibleDemoCardId] = useState(null);

  const handleDemoClick = (id) => {
    setVisibleDemoCardId(id);
  }



  return (
    <>
      <div className="w-full h-full font-poppins text-white bg-bgColor2 flex items-center justify-center">


        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,

            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
          }}

          modules={[Grid, Pagination]}
          className='w-full h-[90%] flex p-5'
        >
          {projectData.map(project => {
            return (
              <SwiperSlide key={project.id} className='relative z-40 flex items-center justify-center'>
                <div className=" w-full h-full">
                  <img src={project.image} alt=""
                    className={`w-full h-full object-contain max-[640px]:object-fill`} />
                </div>
                <div className={`absolute top-0 left-0 z-50 w-full h-full bg-black/80 transition-opacity opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-2 px-2 cursor-pointer`}>
                  <h1 className='text-xl font-bold text-Green text-center'>{project.title}</h1>
                  <p className='text-sm font-light mb-2 text-center'>{project.textStack}</p>
                  <div className="flex gap-6">
                    <a href={project.CodeUrl} target={'_blank'}><button className='px-2 py-1 font-medium border border-Green text-Green rounded-sm'>View Code</button></a>
                    <a href={project.Outputurl} target={'_blank'}><button className='px-2 py-1 font-medium border border-Green text-Green rounded-sm'>View Site</button></a>
                  </div>
                </div>

              </SwiperSlide>
            )
          })}

        </Swiper>



      </div>
    </>
  )
}

export default Project
