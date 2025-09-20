import React, { useState } from 'react'
import image from '/src/assets/n1.jpg'
import email from '/src/assets/image/email.png'
import linkedin from '/src/assets/image/linkedin.png'
import github from '/src/assets/image/github.png'
import { pre } from 'framer-motion/client'


const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showCopy, setShowCopy] = useState(false);

  const togglePopup = () => {
    setShowPopup(prev => !prev);
  };

  const handleCopy = () => {
    setShowCopy(prev => !prev);
  };
  return (
    <div id='Footer' className='flex justify-between flex-wrap bg-gradient-to-tl from-black via-[#181818] to-black border-[0.05px] border-[#404040] rounded-t-xl text-white p-3 md:p-4 gap-5 items-center'>
        <div className='flex gap-2 md:gap-4 items-center'>
            <button onClick={togglePopup} className='text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-white'>Contact</button>
            <h3 onClick={togglePopup} className='text-sm md:text-lg font-normal mt-2 underline'>Feel Free To Reach Out</h3>
        </div>
        {showPopup && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='bg-[#181818] border-[0.05px] border-[#404040] rounded-xl p-4 w-11/12 md:w-1/3'>
            <div className='flex justify-between items-center mb-4'>
              <h2>Send Massage</h2>
              <button className='border-[0.5px] p-1 border-[#414141] rounded' onClick={togglePopup}>Close</button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <input className='w-full bg-black border-[0.5px] border-[#414141] p-1 px-3 rounded-sm' placeholder='Your Name' type="text" />
              <input className='w-full bg-black border-[0.5px] border-[#414141] p-1 px-3 rounded-sm' placeholder='Email' type="text" />
              <textarea className='w-full bg-black border-[0.5px] border-[#414141] p-1 px-3 rounded-sm' placeholder='Message...' />
              <button className='bg-white text-black rounded-sm px-3 p-1'>Submit</button>
            </div>            
          </div>
        </div>
        )}
        {showCopy && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='bg-[#181818] border-[0.05px] border-[#404040] rounded-xl p-4 w-11/12 md:w-1/3'>
            <div className='flex justify-between items-center mb-4'>
              <h2>Copy Emali</h2>
              <button className='border-[0.5px] p-1 border-[#414141] rounded' onClick={handleCopy}>Close</button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='flex items-center gap-2'>
                <img className='w-6' src={email} alt="" />
                <h1>narendrasaryam9459@gmail.com</h1>
              </div>
              <button className='bg-white text-black rounded-sm px-3 p-1'>Copy</button>
            </div>            
          </div>
        </div>
        )}
        <div>
            <ul className='flex gap-2 md:gap-4'>
                <li onClick={handleCopy} className='flex gap-2 items-center'>
                    <img className='w-6' src={email} alt="" />
                </li>
                <li className='flex gap-2 items-center'>
                  <a href='https://www.linkedin.com/in/narendra-saryam/'><img className='w-6' src={linkedin} alt="" /></a>
                </li>
                <li className='flex gap-2 items-center'>
                  <a href="https://github.com/Narendra-Saryam"><img className='w-6' src={github} alt="" /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer