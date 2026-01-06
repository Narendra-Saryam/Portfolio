'use client'

import Image from 'next/image'
import TextChanger from '../Projects/TextChanger'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Home = () => {
  return (
    <section id='Home' className='text-white flex flex-wrap-reverse w-full justify-between items-center p-10 md:p-20' aria-label="Home section">
        <div className='md:w-2/4 md:pt-10 bg-[#] p-3 md:p-6'>
            <motion.h1
            // variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}} 
            className='text-3xl md:text-5xl font-bold leading-normal tracking-tighter'>
                {/* <TextChanger /> */}
                Hello&apos; I am Narendra Saryam
            </motion.h1>
            <motion.p
            // variants={fadeIn("left",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}  
            className='md:mt-5 text-sm md:text-lg tracking-tight'>
                I am Narendra Saryam, a MERN Stack Developer specializing in React, Next.js, and Node.js. This is my Portfolio showcasing all my web development projects, machine learning work, and the technical knowledge I&apos;ve gained throughout my journey as a developer.
            </motion.p>
            <button id="About" className='mt-5 md:mt-10 text-black py-2 px-3 text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-white' aria-label="Contact me">
              <a href="#Footer">Contact Me</a>
            </button>
        </div>
        <div className='p-5'>
          <a href="https://www.linkedin.com/in/narendra-saryam/" target="_blank" rel="noopener noreferrer" aria-label="Visit Narendra Saryam's LinkedIn profile">
            <Image 
              className='h-60 md:h-[34rem] w-auto rounded-2xl bg-gradient-to-tl from-black via-[#181818] border-[0.05px] border-[#404040] hover:border-[2px] shadow-xl mr-10 cursor-pointer hover:opacity-90 transition-opacity' 
              src="/n1nobg.webp" 
              alt="Narendra Saryam - MERN Stack Developer and Machine Learning Engineer" 
              width={544} 
              height={544} 
              priority 
            />
          </a>
        </div>
    </section>
  )
}

export default Home
