import React from 'react'
// import ProjectCard from './ProjectCard'
import image from '/src/assets/n1.jpg'
import github from '/src/assets/image/github.png'
import demo from '/src/assets/image/demo.png'
import ifc from '/src/assets/image/ifc.png'

const Project = () => {
  return (
    <div id='Projects' className='text-white flex justify-between flex-col md:flex-row w-full p-2 md:p-4 md:px-20'>
        <div className='flex flex-col p-0 md:p-8'>
            <div className='flex gap-2 md:gap-4'>
                <div className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={ifc} alt="" />
                    <h1 className='px-2 w-full'>Iris Flower Classification</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>The model classifies Iris flowers using length and width measurements and returns the predicted species with probabilities.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam"><img className='w-6' src={github} alt="" /></a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam"><img className='w-6' src={demo} alt="" /></a>
                    </div>
                </div>
                <div className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={image} alt="" />
                    <h1 className='px-2 w-full'>wedsite 1</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This is the website you are looking for a long time.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Code
                        </button>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 md:gap-4 mt-2 md:mt-4'>
                <div className='bg-[#181818] h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={image} alt="" />
                    <h1 className='px-2 w-full'>wedsite 1</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This is the website you are looking for a long time.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Code
                        </button>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className='bg-[#181818] w-full h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={image} alt="" />
                    <h1 className='px-2 w-full'>wedsite 1</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This is the website you are looking for a long time.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Code
                        </button>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col mt-2 md:mt-0 p-0 md:p-8'>
            <div className='flex gap-2 md:gap-4'>
                <div className='bg-[#181818] h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={image} alt="" />
                    <h1 className='px-2 w-full'>wedsite 1</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This is the website you are looking for a long time.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Code
                        </button>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className='bg-[#181818] h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={image} alt="" />
                    <h1 className='px-2 w-full'>wedsite 1</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This is the website you are looking for a long time.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Code
                        </button>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 md:gap-4 mt-2 md:mt-4'>
                <div className='bg-[#181818] h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={image} alt="" />
                    <h1 className='px-2 w-full'>wedsite 1</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This is the website you are looking for a long time.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Code
                        </button>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className='bg-[#181818] h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <img className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px]' src={image} alt="" />
                    <h1 className='px-2 w-full'>wedsite 1</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This is the website you are looking for a long time.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Code
                        </button>
                        <button className='text-black px-2 md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-sm bg-white'>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project