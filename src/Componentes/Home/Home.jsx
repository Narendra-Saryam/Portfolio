import React from 'react'
import image from '/src/assets/n1.jpg'
import TextChanger from '../Projects/TextChanger'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
                <TextChanger />
            </h1>
            <p className='text-sm md:text-2xl tracking-tight'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum, natus non voluptatibus.
            </p>
            <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
        </div>
        <div><img className='h-96' src={image} alt="Hero Image" /></div>
    </div>
  )
}

export default Home