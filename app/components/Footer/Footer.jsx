'use client'

import { useState } from 'react'
import Image from 'next/image'

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showCopy, setShowCopy] = useState(false);
    const [copied, setCopied] = useState(false);

  // The email address to copy (kept separate from the imported `email` image)
  const EMAIL_ADDRESS = 'narendrasaryam9459@gmail.com';

  const togglePopup = () => {
    setShowPopup(prev => !prev);
  };

  // toggle the copy modal and reset copied state when opening/closing
  const handleCopy = () => {
    setShowCopy(prev => !prev);
    setCopied(false);
  };

  // copy email to clipboard with a small fallback for older browsers
  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
      } else {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = EMAIL_ADDRESS;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      // auto-hide the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };
  return (
    <div id='Footer' className='flex justify-between flex-wrap bg-gradient-to-tl from-black via-[#181818] to-black border-[0.05px] border-[#404040] rounded-t-xl text-white p-3 md:p-4 gap-5 items-center'>
        <div className='flex gap-2 md:gap-4 items-center'>
            <button onClick={togglePopup} className='text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-white'>Contact</button>
            <h3 onClick={togglePopup} className='text-sm md:text-lg font-normal mt-2 underline cursor-pointer'>Feel Free To Reach Out</h3>
        </div>
        {showPopup && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='bg-[#181818] border-[0.05px] border-[#404040] rounded-xl p-4 w-11/12 md:w-1/3'>
            <div className='flex justify-between items-center mb-4'>
              <h2>Send Message</h2>
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
              <h2>Copy Email</h2>
              <button className='border-[0.5px] p-1 border-[#414141] rounded' onClick={handleCopy}>Close</button>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='flex items-center gap-2'>
                <Image className='w-6 h-auto' src="/email.png" alt="Email" width={24} height={24} />
                <h1>{EMAIL_ADDRESS}</h1>
              </div>
              <div className='flex items-center gap-2'>
                <button onClick={copyToClipboard} className='bg-white text-black rounded-sm px-3 p-1'>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>            
          </div>
        </div>
        )}
        <div>
            <ul className='flex gap-2 md:gap-4'>
        <li onClick={handleCopy} className='flex gap-2 items-center cursor-pointer'>
          <Image onClick={copyToClipboard} className='w-6 h-auto cursor-pointer' src="/email.png" alt="Email" width={24} height={24} />
        </li>
                <li className='flex gap-2 items-center'>
                  <a href='https://www.linkedin.com/in/narendra-saryam/'><Image className='w-6 h-auto' src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></a>
                </li>
                <li className='flex gap-2 items-center'>
                  <a href="https://github.com/Narendra-Saryam"><Image className='w-6 h-auto' src="/github.png" alt="GitHub" width={24} height={24} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
