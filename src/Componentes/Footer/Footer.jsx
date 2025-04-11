import React from 'react'
import image from '/src/assets/n1.jpg'
import email from '/src/assets/image/email.png'
import linkedin from '/src/assets/image/linkedin.png'
import github from '/src/assets/image/github.png'

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-between flex-wrap bg-[#465697] text-white p-10 md:p-12 gap-5 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out</h3>
        </div>
        <div>
            <ul className='text-sm md:text-xl'>
                <li className='flex gap-2 items-center'>
                    <img className='w-6' src={email} alt="" />
                    <p>narendrasaryam9459@gmail.com</p>
                </li>
                <li className='flex gap-2 items-center'>
                    <img className='w-6' src={linkedin} alt="" />
                    <a href='https://www.linkedin.com/in/narendra-saryam/'>narendra-saryam</a>
                </li>
                <li className='flex gap-2 items-center'>
                    <img className='w-6' src={github} alt="" />
                    <p>github.com/username</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer