import React from 'react'
import image from '/src/assets/n1.jpg'

const ProjectCard = ({title,main}) => {
  return (
    <div className='p-2 md:p-4 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4 h-60' src={image} alt="" />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-tight'>
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
        <div className='mt-2 p-2 md:p-4 flex md:gap-4'>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                Demo
            </button>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                Source Code
            </button>
        </div>
    </div>
  )
}

export default ProjectCard