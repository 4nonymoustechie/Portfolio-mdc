import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
      <div className='max-w-screen-lg mx-auto px-4 py-8'>
          <h2 className='font-medium text-2xl'>Let's Connect </h2>
         <p>Let's connect and collaborate on your next project for a successful partnership!</p>
    
          <div className='mt-3 gap-3'>
              <div  className='flex flex-row items-center gap-3' >
                  <MdOutlineEmail/>
                  <p>ibrahimbusari4@gmail.com</p>
              </div>
              <div className='flex flex-row items-center gap-3' >
                  <FaPhoneAlt/>
                  <p>+234 906 557 9951</p>
              </div >
              <div className='flex flex-row items-center gap-3' >
                  <FaWhatsapp/>
                  <p>+234 901 955 5573</p>
            </div>
      </div>
      
      </div>
  )
}

export default Contact