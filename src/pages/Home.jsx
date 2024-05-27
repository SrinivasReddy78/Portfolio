import React from 'react'
import { useState, useEffect } from 'react'
import Profile from './Profile'
import Project from './Project'
import Skills from './Skills'
import Contactme from './Contactme'
// import { Link } from 'react-router-dom'


const Home = () => {
    const [viewer, setViewer] = useState(false)
    const [userInput, setUserInput] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);


    const handleSearch = (e) =>{
        const value = e.target.value
        setUserInput(value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleNavigation();
          
        }
        if (e.key === 'Escape') {
          setViewer(false)
          setUserInput('');
        }
      }
    
      const handleNavigation = () => {
        switch(userInput.toLocaleLowerCase()) {
            case '1':
            case 'profile':
                setViewer(true);
                setSelectedOption(<Profile />);
                break;
            case '2':
            case 'project':
                setViewer(true);
                setSelectedOption(<Project />);
                break;
            case '3':
            case 'skills':
                setViewer(true);
                setSelectedOption(<Skills />);
                break;
            case '4':
            case 'contact me':
                setViewer(true);
                setSelectedOption(<Contactme />);
                break;
            default:
                setViewer(false); 
                setSelectedOption(null);
                break;
        }
        setUserInput('');
    };
    
        
     
    

    return (
        <>
            <div className="w-screen h-screen text-white py-10 px-8 font-poppins relative z-0 max-[640px]:px-6">
                {/* Headings and input */}
                <div className="flex flex-col items-center">
                    <h3 className='text-3xl font-semibold my-6 max-[640px]:text-xl max-[640px]:my-4'>HEY WELCOME TO MY</h3>
                    <h1 className='text-6xl font-semibold text-Yellow mb-8 max-[640px]:text-4xl'>PORTFOLIO</h1>
                    <input type="text"
                        className='w-1/2 h-16 bg-transparent text-Green outline-none rounded-md mb-10 border border-[#D4CECE] text-2xl px-2 py-1 placeholder-Green max-[640px]:w-11/12'
                        placeholder='Ex : Profile or 1'
                        value={userInput}
                        onChange={handleSearch}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </div>
                {/* Menu */}
                <div className="pl-[370px] max-[640px]:pl-4">
                    <p className='mb-8 font-semibold max-[640px]:text-sm'>CHOOSE WHAT YOU WANT TO SEE ABOUT ME IN THE INPUT LINE</p>
                    <div className="flex flex-col gap-3 font-semibold text-[#CBC7C7]">
                        <h2>1 : PROFILE</h2>
                        <h2>2 : PROJECT</h2>
                        <h2>3 : SKILLS</h2>
                        <h2>4 : CONTACT ME</h2>
                    </div>
                </div>
                {/* pop open */}
                {viewer && 
                    <div className="w-[90vw] h-[90vh] absolute z-20 bg-bgColor2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black max-[640px]:h-[95vh]">
                      {selectedOption}
                      <button onClick={()=>{setViewer(false); setUserInput('')}} className={`absolute right-2 top-2 rounded-full bg-white text-black font-medium px-3 py-1 max-[640px]:text-xs max-[640px]:px-2`}>X</button>
                    </div>
                }
                <div className={`overlay bg-gray-500/50 fixed w-screen h-screen top-0 left-0 z-10 blur-sm ${viewer? 'block': 'hidden'}`}></div>
            </div>
        </>
    )
}

export default Home
