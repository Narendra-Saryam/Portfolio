import React from 'react'
import image from '/src/assets/n1.jpg'
import html_icon from '/src/assets/image/html.png'
import css_icon from '/src/assets/image/css.png'
import javascript_icon from '/src/assets/image/javascript.png'
import react_icon from '/src/assets/image/reactjs.png'
import java_icon from '/src/assets/image/java.png'
import github_icon from '/src/assets/image/github.png'
import tailwind_icon from '/src/assets/image/tailwind.png'

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-20'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around pt-10'>
            <div className=' md:w-2/5 md:p-12 py-10 rounded-3xl  bg-black bg-opacity-30'>
                <div className='flex flex-wrap gap-8 items-center justify-center'>
                    <span className='p-3 items-center rounded-2xl'>
                        <img className='h-20 rounded-2xl bg-gradient-to-tl from-black via-[#465697] hover:bg-gradient-to-t hover:scale-105 duration-300' src={html_icon} alt="" />
                    </span>
                    <span className='p-3 items-center rounded-2xl'>
                        <img className='h-20 rounded-2xl bg-gradient-to-tl from-black via-[#465697] hover:bg-gradient-to-t hover:scale-105 duration-300' src={css_icon} alt="" />
                    </span>
                    <span className='p-3 items-center rounded-2xl'>
                        <img className='h-20 rounded-2xl bg-gradient-to-tl from-black via-[#465697] hover:bg-gradient-to-t hover:scale-105 duration-300' src={javascript_icon} alt="" />
                    </span>
                    <span className='p-3 items-center rounded-2xl'>
                        <img className='h-20 rounded-2xl bg-gradient-to-tl from-black via-[#465697] hover:bg-gradient-to-t hover:scale-105 duration-300' src={react_icon} alt="" />
                    </span>
                    <span className='p-3 items-center rounded-2xl'>
                        <img className='h-20 rounded-2xl bg-gradient-to-tl from-black via-[#465697] hover:bg-gradient-to-t hover:scale-105 duration-300' src={java_icon} alt="" />
                    </span>
                    <span className='p-3 items-center rounded-2xl'>
                        <img className='h-20 rounded-2xl bg-gradient-to-tl from-black via-[#465697] hover:bg-gradient-to-t hover:scale-105 duration-300' src={github_icon} alt="" />
                    </span>
                    {/* <span className='p-3 items-center rounded-2xl'>
                        <img className='h-20 rounded-2xl bg-gradient-to-tl from-black via-[#465697] hover:bg-gradient-to-t hover:scale-105 duration-300' src={tailwind_icon} alt="" />
                    </span> */}
                </div>
                <h1 className='flex items-center justify-center pt-5 text-2xl md:text-4xl text-white font-bold'>Skills</h1>
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