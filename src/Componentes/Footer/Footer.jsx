import React from 'react'
import image from '/src/assets/n1.jpg'

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out</h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex gap-1 items-center'>
                <img className='h-8' src={image} alt="" />
                narendrasaryam9459@gmail.com
            </li>
            <li className='flex gap-1 items-center'>
                <img className='h-8' src={image} alt="" />
                linkdin.com/username
            </li>
            <li className='flex gap-1 items-center'>
                <img className='h-8' src={image} alt="" />
                github.com/username
            </li>
        </ul>
    </div>
  )
}

export default Footer