import React from 'react'
import image from '/src/assets/n1.jpg'
import images from '/src/assets/image/n1nobg.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-around bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
         <div className='flex justify-center items-center flex-col gap-10'>
            <motion.h2 
             variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}
            className='text-2xl md:text-4xl font-bold'>
                About
            </motion.h2>
            <img className='h-60 md:h-[20rem] rounded-full bg-gradient-to-tr from-black via-[#0000] shadow-xl mr-10 hover:scale-105 duration-200' src={images} alt="Hero Image" />
        </div>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <ul>
                <div className='md:flex gap-6'>
                    <motion.div 
                    variants={fadeIn("down",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}}
                    className='flex gap-3 py-4'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            a Frontend Developer who turns designs into fast, accessible web apps using React and TypeScript. I obsess over pixel-perfect UIs, smooth animations, and cutting load times (like that 60% performance boost I delivered).
                            </p>
                        </span>
                    </motion.div>
                    <motion.div
                    variants={fadeIn("left",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}}
                    className='flex gap-3 py-4'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Machine Learning Engineer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            a Machine Learning Engineer passionate about transforming data into intelligent solutions. With expertise in Python, TensorFlow, and NLP, I build predictive models and computer vision systems that drive real-world impact.
                            </p>
                        </span>
                    </motion.div>
                </div>
                <div className='md:flex gap-6'>
                    <motion.div
                    variants={fadeIn("right",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}} 
                    className='flex gap-3 py-4'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>DSA & Competitive Programming Expert</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            a DSA enthusiast who thrives on solving complex problems with elegant code. Ranked in the top 1% on LeetCode, I love optimizing algorithms—whether it’s crafting a pathfinding visualizer or mentoring budding coders.
                            </p>
                        </span>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount: 0.7}}
                    className='flex gap-3 py-4'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Video/Image Editor</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            a visual storyteller wielding Adobe Premiere and After Effects to craft eye-catching content. From viral ad campaigns (5M+ views) to surreal photo manipulations, I blend technical precision with artistic flair.
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