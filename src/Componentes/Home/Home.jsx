import React from 'react'
import image from '/src/assets/image/n1nobg.png'
import TextChanger from '../Projects/TextChanger'

import {motion} from 'framer-motion';

import {fadeIn} from '../variants'

const Home = () => {
  return (
    <div id='Home' className='text-white flex flex-wrap-reverse w-full justify-between items-center p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <motion.h1
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}} 
            className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
                {/* <TextChanger /> */}
                Hello' I am Narendra
            </motion.h1>
            <motion.p
            variants={fadeIn("left",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}  
            className='md:mt-5 text-sm md:text-2xl tracking-tight'>
                I am a MERN Stack Developer, This is my Portfolio it contain all the information about my past activities and knowledge i gain.
            </motion.p>
            <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href="#Footer">Contact Me</a></button>
        </div>
        <div className='p-5'>
          <img className='h-60 md:h-[34rem] rounded-full bg-gradient-to-tl from-black via-[#171d32] shadow-xl mr-10 hover:scale-105 duration-200' src={image} alt="Hero Image" />
        </div>
    </div>
  )
}

export default Home