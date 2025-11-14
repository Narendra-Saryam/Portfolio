'use client'

import Image from 'next/image'

const Experience = () => {
  return (
    <section id="Experience" className='md:p-4 flex flex-col md:flex-row items-center justify-around' aria-label="Skills and Experience section">
        <div className='flex flex-col rounded-xl'>
            <h2 className="sr-only">Technical Skills</h2>
            <div className='flex flex-row items-center justify-center gap-4'>
                <div className='grid grid-cols-2 gap-2 items-center justify-center  text-white'>
                    <article className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/html.webp" alt="HTML5 skill" width={80} height={80} />
                        <p>HTML</p>
                    </article>
                    <article className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-30'>
                        <Image className='h-20 w-auto' src="/css.webp" alt="CSS3 skill" width={80} height={80} />
                        <p>CSS</p>
                    </article>
                    <article className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/javascript.webp" alt="JavaScript skill" width={80} height={80} />
                        <p>JavaScript</p>
                    </article>
                    <article className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/reactjs.webp" alt="React.js skill" width={80} height={80} />
                        <p>React JS</p>
                    </article>
                </div>
                <div className='grid grid-cols-1 gap-2  items-center justify-center text-white'>
                    <article className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/java.webp" alt="Java programming skill" width={80} height={80} />
                        <p>Java</p>
                    </article>
                    <article className='flex flex-col items-center p-2 md:px-10 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/github.webp" alt="GitHub version control skill" width={80} height={80} />
                        <p>GitHub</p>
                    </article>
                </div>
            </div>                   
            <div className='flex'>
                <div className='flex text-white pt-4 w-full justify-between'>
                    <article className='flex flex-col items-center px-4 md:px-14 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/nextjs.webp" alt="Next.js framework skill" width={80} height={80} />
                        <p>Next JS</p>
                    </article>
                    <article className='flex flex-col items-center px-6 md:px-20 bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] border-[#404040] hover:bg-gradient-to-t hover:scale-105 duration-300'>
                        <Image className='h-20 w-auto' src="/tailwind.webp" alt="Tailwind CSS framework skill" width={80} height={80} />
                        <p>Tailwind CSS</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
