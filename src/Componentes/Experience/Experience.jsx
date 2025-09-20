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
    <div  className='md:p-4 flex flex-col md:flex-row items-center justify-around'>
        <div className='flex flex-col rounded-xl'>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='grid grid-cols-2 gap-2 items-center justify-center  text-white'>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <img className='h-20 ' src={html_icon} alt="" />
                        <p>HTML</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-30'>
                        <img className='h-20' src={css_icon} alt="" />
                        <p>CSS</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <img className='h-20 ' src={javascript_icon} alt="" />
                        <p>JavaScript</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <img className='h-20 ' src={react_icon} alt="" />
                        <p>React JS</p>
                    </span>
                </div>
                <div className='grid grid-cols-1 gap-2  items-center justify-center text-white'>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <img className='h-20' src={java_icon} alt="" />
                        <p>Java</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <img className='h-20' src={github_icon} alt="" />
                        <p>GitHub</p>
                    </span>
                </div>
            </div>                   
            <div className='flex'>
                <div className='flex text-white pt-4 w-full justify-between'>
                    <span className='flex flex-col items-center px-4 md:px-14 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <img className='h-20' src={github_icon} alt="" />
                        <p>NULL</p>
                    </span>
                    <span className='flex flex-col items-center px-6 md:px-20 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <img className='h-20' src={tailwind_icon} alt="" />
                        <p>Tailwind CSS</p>
                    </span>
                </div>
            </div>
        </div>
        {/* <div className='grid md:grid-cols-2 gap-2 mt-4 md:mt-0'>
            <div className='flex gap-2 pr-2 bg-[#181818] border-[0.05px] border-[#404040] rounded-lg items-center'>
                <img className='w-20 md:w-24 rounded-l-lg p-[0.5px] h-full' src={image} alt="" />
                <span className='text-white'>
                    <h1 className='leading-tight'>Software Engineer, Google</h1>
                    <p className='text-sm leading-tight font-thin flex justify-end'>Sept 2023 - Present</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as developer</li>
                        <li>- Jr. developer</li>
                    </ul>
                </span>
            </div>
            <div className='flex gap-2 pr-2 bg-[#181818] border-[0.05px] border-[#404040] rounded-lg items-center'>
                <img className='w-20 md:w-24 rounded-l-lg p-[0.5px] h-full' src={image} alt="" />
                <span className='text-white'>
                    <h1 className='leading-tight'>Software Engineer, Google</h1>
                    <p className='text-sm leading-tight font-thin flex justify-end'>Sept 2023 - Present</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as developer</li>
                        <li>- Jr. developer</li>
                    </ul>
                </span>
            </div>
            <div className='flex gap-2 pr-2 bg-[#181818] border-[0.05px] border-[#404040] rounded-lg items-center'>
                <img className='w-20 md:w-24 rounded-l-lg p-[0.5px] h-full' src={image} alt="" />
                <span className='text-white'>
                    <h1 className='leading-tight'>Software Engineer, Google</h1>
                    <p className='text-sm leading-tight font-thin flex justify-end'>Sept 2023 - Present</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as developer</li>
                        <li>- Jr. developer</li>
                    </ul>
                </span>
            </div>
            <div className='flex gap-2 pr-2 bg-[#181818] border-[0.05px] border-[#404040] rounded-lg items-center'>
                <img className='w-20 md:w-24 rounded-l-lg p-[0.5px] h-full' src={image} alt="" />
                <span className='text-white'>
                    <h1 className='leading-tight'>Software Engineer, Google</h1>
                    <p className='text-sm leading-tight font-thin flex justify-end'>Sept 2023 - Present</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as developer</li>
                        <li>- Jr. developer</li>
                    </ul>
                </span>
            </div>
        </div> */}
    </div>
  )
}

export default Experience