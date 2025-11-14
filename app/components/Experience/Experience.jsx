'use client'

import Image from 'next/image'

const Experience = () => {
  return (
    <div  className='md:p-4 flex flex-col md:flex-row items-center justify-around'>
        <div className='flex flex-col rounded-xl'>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='grid grid-cols-2 gap-2 items-center justify-center  text-white'>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/html.png" alt="HTML" width={80} height={80} />
                        <p>HTML</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-30'>
                        <Image className='h-20 w-auto' src="/css.png" alt="CSS" width={80} height={80} />
                        <p>CSS</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/javascript.png" alt="JavaScript" width={80} height={80} />
                        <p>JavaScript</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/reactjs.png" alt="React JS" width={80} height={80} />
                        <p>React JS</p>
                    </span>
                </div>
                <div className='grid grid-cols-1 gap-2  items-center justify-center text-white'>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/java.png" alt="Java" width={80} height={80} />
                        <p>Java</p>
                    </span>
                    <span className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/github.png" alt="GitHub" width={80} height={80} />
                        <p>GitHub</p>
                    </span>
                </div>
            </div>                   
            <div className='flex'>
                <div className='flex text-white pt-4 w-full justify-between'>
                    <span className='flex flex-col items-center px-4 md:px-14 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/nextjs.png" alt="Next JS" width={80} height={80} />
                        <p>Next JS</p>
                    </span>
                    <span className='flex flex-col items-center px-6 md:px-20 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/tailwind.png" alt="Tailwind CSS" width={80} height={80} />
                        <p>Tailwind CSS</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
