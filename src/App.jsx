import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import Card from "./Card";
import mdc from './assets/images/mdc-1.png';
import { inputProject } from "./assets/projects";
import Contact from "./Contact";


const App = () => {
  return (
    <div className="bg-gray-200">
      {/* Navigation */}
      <nav id="top" className="flex p-4 bg-black text-white text-left">
        <p className="text-[2rem]">M D C</p>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 md:px-16 mt-8">
        <div className="hero text-center">
          <h2 className="welcome text-[3rem] md:text-[4rem] font-semibold text-gray-800 font-sans">
            Welcome To my Space
          </h2>
        </div>

        <div className="intro flex flex-col justify-between md:flex-row items-center gap-10 md:gap-[6rem] mt-8 max-w-screen-lg mx-auto px-4">
          
          <div className="text-left  md:w-[50%]">
    <h5 className="greeting text-[1.5rem]">Hello, {"I'm"}</h5>
    <h4 className="name text-orange-600 font-medium font-montesserat text-[3rem] md:text-[2rem]">
      Ibrahim Omobolaji Busari
    </h4>
    <p className="text-[1.1rem] md:text-[0.9rem] font-montesserat text-black w-full md:w-[25rem]">
      I am a Frontend React developer who specializes in building
      interactive and visually appealing user interfaces (UIs) for web
      applications using the React JavaScript library, focusing primarily
      on the front-end aspects of the website.
    </p>
  </div>

  <div className="flex justify-center md:w-1/2">
    <img
      className="rounded-full w-[18rem] h-[18rem] md:w-[16rem] md:h-[16rem] object-cover outline-4 outline-orange-600"
      src={mdc}
      alt="Ibrahim Omobolaji Busari"
    />
  </div>
        </div>
        </div>


      {/* Skills Section */}
      <div className="my-skills text-center py-16">
        <p className="sec2 text-[2.5rem] md:text-[3rem] font-semibold mb-8">MY SKILLS</p>
        <div className="Skill flex flex-wrap justify-center gap-8">
          <FaHtml5 className="w-16 h-16 md:w-24 md:h-24 text-white bg-orange-600 rounded-full p-4" />
          <FaCss3 className="w-16 h-16 md:w-24 md:h-24 text-white bg-blue-600 rounded-full p-4" />
          <FaReact className="w-16 h-16 md:w-24 md:h-24 text-white bg-cyan-600 rounded-full p-4" />
          <DiNodejsSmall className="w-16 h-16 md:w-24 md:h-24 text-white bg-green-600 rounded-full p-4" />
          <RiTailwindCssFill className="w-16 h-16 md:w-24 md:h-24 text-white bg-cyan-600 rounded-full p-4" />
          <IoLogoFigma className="w-16 h-16 md:w-24 md:h-24 text-white bg-orange-600 rounded-full p-4" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="frontends text-center py-16">
        <h3 className="sec2 text-[2.5rem] md:text-[2.5rem] font-semibold mb-8">PROJECTS</h3>
       
       
        {
          inputProject.map((projects ,i   ) =>(<Card key={i} {...projects} /> )) 
     }

      </div>
      <Contact/>
    </div>
  )
}

export default App
