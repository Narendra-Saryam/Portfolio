import React from 'react'
import image from '/src/assets/n1.jpg'
import images from '/src/assets/image/n1nobg.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const About = () => {
  return (
    <div id='About' className='text-white md:flex md:flex-row md:justify-between mx-1 md:mx-10'>
         <div className='flex items-start flex-col bg-[#181818] p-3 md:p-6 border-[0.05px] border-[#404040] rounded-xl mx-4 md:mx-0 md:max-w-96'>
            <motion.h2 
            //  variants={fadeIn("down",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}
            className='text-lg md:text-2xl font-bold'>
                About
            </motion.h2>
            <h1 className='text-[11px] md:text-[12px]'>I am a MERN Stack Developer, This is my Portfolio it contain all the information about my past activities and knowledge i gain.</h1>
            {/* <img className='h-60 md:h-[20rem] rounded-full bg-gradient-to-tr from-black via-[#0000] shadow-xl hover:scale-105 duration-200' src={images} alt="Hero Image" /> */}
        </div>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center m-4'>
            <ul className='grid grid-cols-2 gap-3'>
                <div className='bg-[#181818] p-3 md:p-6 border-[0.05px] border-[#404040] rounded-xl'>
                    <motion.div 
                    // variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}}
                    className='flex gap-3 py-2'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-lg md:text-2xl font-semibold'>Frontend Developer</h1>
                            <p className='text-[11px] md:text-[12px]'>
                            a Frontend Developer who turns designs into fast, accessible web apps using React and TypeScript.
                            </p>
                        </span>
                    </motion.div>
                </div>
                <div className='bg-[#181818] p-2 md:p-3 border-[0.05px] border-[#404040] rounded-xl'>
                    <motion.div
                    // variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}}
                    className='flex gap-3 py-2'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-lg md:text-2xl font-semibold leading-normal'>Machine Learning Engineer</h1>
                            <p className='text-[11px] md:text-[12px]'>
                            a Machine Learning Engineer passionate about transforming data into intelligent solutions. 
                            </p>
                        </span>
                    </motion.div>
                </div>
                <div className='bg-[#181818] p-3 md:p-6 border-[0.05px] border-[#404040] rounded-xl'>
                    <motion.div
                    // variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}} 
                    className='flex gap-3 py-2'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-lg md:text-2xl font-semibold'>DSA & Competitive Programming Expert</h1>
                            <p className='text-[11px] md:text-[12px]'>
                            a DSA enthusiast who thrives on solving complex problems with elegant code. 
                            </p>
                        </span>
                    </motion.div>
                </div>
                <div className='bg-[#181818] p-3 md:p-6 border-[0.05px] border-[#404040] rounded-xl'>
                    <motion.div 
                    // variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}}
                    className='flex gap-3 py-2'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-lg md:text-2xl font-semibold'>Video/Image Editor</h1>
                            <p className='text-[11px] md:text-[12px]'>
                            a visual storyteller wielding Adobe Premiere and After Effects to craft eye-catching content.
                            </p>
                        </span>
                    </motion.div>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default About