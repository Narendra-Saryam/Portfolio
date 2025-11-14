'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="About"
      className="text-white md:flex md:flex-row md:justify-between mx-1 md:mx-10"
      aria-label="About section"
    >
      <div className="flex flex-col w-full items-center justify-center md:justify-between mt-10 md:mt-0">
        <article className="flex items-start flex-col bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] p-3 md:p-6 border-[#404040] mx-4 md:mx-0 md:max-w-7xl">
          <motion.h2
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-lg md:text-2xl font-bold"
          >
            About
          </motion.h2>
          <p className="text-[11px] md:text-[12px] mt-2">
            I&apos;m Narendra Saryam, a passionate IT student with skills in software development, machine learning, and web technologies. As Narendra Saryam, I love working on meaningful projects and always aim to learn and grow in technology. I&apos;m looking for opportunities that push me to solve problems and build real world solutions.
          </p>
        </article>
        <div className="md:flex md:w-full flex-wrap flex-col items-center m-4">
          <ul className="md:max-w-7xl md:grid md:grid-cols-2 gap-3 space-y-4 md:space-y-0 md:gap-6">
            <li className="bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black border-[0.05px] p-3 md:p-6 border-[#404040] flex flex-col h-full">
              <motion.article
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-3 py-2"
              >
                <Image className="h-8 w-8 rounded-full object-cover" src="/n1.jpg" alt="Narendra Saryam - Frontend Developer" width={32} height={32} />
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold">Frontend Developer</h3>
                  <p className="text-[11px] md:text-[12px] mt-1">
                    I am a Frontend Engineer passionate about building interactive, user-friendly, and scalable web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I specialize in transforming ideas into responsive, accessible, and visually appealing interfaces.
                  </p>
                </div>
              </motion.article>
            </li>
            <li className="bg-gradient-to-tl rounded-lg from-black via-[#181818] to-black p-3 md:p-6 border-[0.05px] border-[#404040] flex flex-col h-full">
              <motion.article
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-3 py-2"
                id='Experience'
              >
                <Image className="h-8 w-8 rounded-full object-cover" src="/n1.jpg" alt="Narendra Saryam - Machine Learning Engineer" width={32} height={32} />
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold leading-normal">Machine Learning Engineer</h3>
                  <p className="text-[11px] md:text-[12px] mt-1">
                    Passionate about turning data into intelligent solutions. With expertise in Python, machine learning algorithms, and deep learning frameworks like TensorFlow and PyTorch, I design and deploy models that solve real-world problems.
                  </p>
                </div>
              </motion.article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
