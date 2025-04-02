import React from 'react'
import image from '/src/assets/n1.jpg'

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className=' h-40 md:h-80' src={image} alt="About Image" />
                <ul>
                    <div className='flex gap-3 py-4'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas expedita quod neque a reiciendis doloribus id quibusdam voluptatibus consequuntur! Autem ipsam, perspiciatis laudantium asperiores mollitia ullam ratione repellat facere fugiat!
                            </p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum esse eum repellat, impedit aliquam sed placeat, consequatur facilis non quia fugiat, atque amet possimus minus exercitationem dicta sunt fuga.
                            </p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <img className='h-4' src={image} alt="" />

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quidem delectus, unde maiores itaque repellat in incidunt labore aliquid cupiditate sequi, dolorum voluptates expedita tempora cumque ipsum eligendi veniam temporibus.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About