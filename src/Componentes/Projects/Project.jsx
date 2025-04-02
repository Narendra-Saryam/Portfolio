import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard 
                title="Website 1" 
                main="This is the website which i have been working for 10 years this is very long thime to work on."
            />
            <ProjectCard 
                title="Website 2" 
                main="This is the website which i have been working for 10 years this is very long thime to work on."
            />
            <ProjectCard 
                title="Website 3" 
                main="This is the website which i have been working for 10 years this is very long thime to work on."
            />
            <ProjectCard 
                title="Website 4" 
                main="This is the website which i have been working for 10 years this is very long thime to work on."
            />
        </div>
    </div>
  )
}

export default Project