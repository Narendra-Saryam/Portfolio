import React from 'react'
import image from '/src/assets/n1.jpg'

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-20'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
                <span className='p-3 bg-zinc-950 items-center rounded-2xl'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                </span>
            </div>
            <div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg items-center'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                    <span className='text-white'>
                        <h1 className='leading-tight'>Software Engineer, Google</h1>
                        <p className='text-sm leading-tight font-thin'>Sept 2023 - Present</p>
                        <ul className='text-sm p-2'>
                            <li>- Work as developer</li>
                            <li>- Jr. developer</li>
                        </ul>
                    </span>
                </div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg items-center'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                    <span className='text-white'>
                        <h1 className='leading-tight'>Software Engineer, Google</h1>
                        <p className='text-sm leading-tight font-thin'>Sept 2023 - Present</p>
                        <ul className='text-sm p-2'>
                            <li>- Work as developer</li>
                            <li>- Jr. developer</li>
                        </ul>
                    </span>
                </div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg items-center'>
                    <img className='h-20 bg-[#E35F26]' src={image} alt="" />
                    <span className='text-white'>
                        <h1 className='leading-tight'>Software Engineer, Google</h1>
                        <p className='text-sm leading-tight font-thin'>Sept 2023 - Present</p>
                        <ul className='text-sm p-2'>
                            <li>- Work as developer</li>
                            <li>- Jr. developer</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience