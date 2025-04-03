import React from 'react'
import image from '/src/assets/image/n1nobg.png'
import TextChanger from '../Projects/TextChanger'

const Home = () => {
  return (
    <div id='Home' className='text-white flex flex-wrap-reverse w-full justify-between items-center p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
                {/* <TextChanger /> */}
                Hello' I am Narendra
            </h1>
            <p className='md:mt-5 text-sm md:text-2xl tracking-tight'>
                I am a MERN Stack Developer, This is my Portfolio it contain all the information about my past activities and knowledge i gain.
            </p>
            <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href="#Footer">Contact Me</a></button>
        </div>
        <div className='p-20'>
          <img className=' md:h-96 rounded-full bg-gradient-to-tl from-black via-[#171d32] shadow-xl mt-4 mr-10 hover:scale-110 duration-200' src={image} alt="Hero Image" />
        </div>
    </div>
  )
}

export default Home