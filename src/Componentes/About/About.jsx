import React from 'react'
import image from '/src/assets/n1.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div
      
      className="text-white md:flex md:flex-row md:justify-between mx-1 md:mx-10"
    >
      <div className="flex flex-col w-full items-center justify-center md:justify-between mt-10 md:mt-0">
        <div className="flex items-start flex-col bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] p-3 md:p-6 border-[#404040] mx-4 md:mx-0 md:max-w-7xl">
          <motion.h2
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-lg md:text-2xl font-bold"
          >
            About
          </motion.h2>
          <h1 className="text-[11px] md:text-[12px] mt-2">
            I’m a passionate IT student with skills in software development, machine learning, and web technologies. I love working on meaningful projects and always aim to learn and grow in technology. I’m looking for opportunities that push me to solve problems and build real world solutions.
          </h1>
        </div>
        <div className="md:flex md:w-full flex-wrap flex-col items-center m-4">
          <ul className="md:max-w-7xl md:grid md:grid-cols-2 gap-3 space-y-4 md:space-y-0 md:gap-6">
            <li className="bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] p-3 md:p-6 border-[#404040] flex flex-col h-full">
              <motion.div
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-3 py-2"
              >
                <img className="h-8 w-8 rounded-full object-cover" src={image} alt="Frontend" />
                <span>
                  <h1 className="text-lg md:text-2xl font-semibold">Frontend Developer</h1>
                  <p className="text-[11px] md:text-[12px] mt-1">
                    I am a Frontend Engineer passionate about building interactive, user-friendly, and scalable web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I specialize in transforming ideas into responsive, accessible, and visually appealing interfaces.
                  </p>
                </span>
              </motion.div>
            </li>
            <li className="bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black p-3 md:p-6 border-[0.05px] border-[#404040] flex flex-col h-full">
              <motion.div
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-3 py-2"
                id='Experience'
              >
                <img className="h-8 w-8 rounded-full object-cover" src={image} alt="Machine Learning" />
                <span>
                  <h1 className="text-lg md:text-2xl font-semibold leading-normal">Machine Learning Engineer</h1>
                  <p className="text-[11px] md:text-[12px] mt-1">
                    Passionate about turning data into intelligent solutions. With expertise in Python, machine learning algorithms, and deep learning frameworks like TensorFlow and PyTorch, I design and deploy models that solve real-world problems.
                  </p>
                </span>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About