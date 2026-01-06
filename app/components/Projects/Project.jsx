'use client'

import Image from 'next/image'

const Project = () => {
  return (
    <section id='Projects' className='text-white flex justify-center flex-col md:flex-col lg:flex-row w-full p-2 md:p-4 md:px-20' aria-label="Projects section">
        <div className='flex flex-col p-0 md:p-8 w-full'>
            {/* <h2 className="sr-only">My Projects</h2> */}
            
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 w-full'>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://iris-flowers-detection.netlify.app/" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/IFC.webp" alt="Iris Flower Classification project screenshot" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>Iris Flower Classification</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>The model classifies Iris flowers using length and width measurements and returns the predicted species with probabilities.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/Narendra-Saryam/Iris-Flowers-Detection" aria-label="View Iris Flower Classification source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://iris-flowers-detection.netlify.app/" aria-label="View Iris Flower Classification live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://risk-classification.netlify.app/" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/riskClassification.webp" alt="Risk Classification project screenshot" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>Risk Classification</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This model is used to classify human body toxicity by taking some medical information and then classifying it into High, Low, or Normal toxicity levels.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/Narendra-Saryam/Risk-Classification" aria-label="View Risk Classification source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://risk-classification.netlify.app/" aria-label="View Risk Classification live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 mt-2 md:mt-4 w-full'>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://onlineclipboards.netlify.app/" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/clipboard.webp" alt="Online Clipboard project screenshot" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>Online Clipboard</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>An online clipboard application enabling users to store, access, and manage snippets or text across client and server components.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/Narendra-Saryam/Online-Clipboard" aria-label="View Online Clipboard source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://onlineclipboards.netlify.app/" aria-label="View Online Clipboard live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://github.com/Narendra-Saryam/IR-Summarization-Project/blob/main/IR_with_Summarization.ipynb" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/InfoRetrievel.webp" alt="Information Retrieval project screenshot" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>Information Retrieval</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>An IR (Information Retrieval) summarization project that implements techniques to generate concise summaries from text using retrieval methods.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/Narendra-Saryam/IR-Summarization-Project" aria-label="View Information Retrieval source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/Narendra-Saryam/IR-Summarization-Project/blob/main/IR_with_Summarization.ipynb" aria-label="View Information Retrieval notebook" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="View Notebook" width={24} height={24} />
                        </a>
                    </div>
                </article>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 mt-2 md:mt-4 w-full'>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://sql-visualization.vercel.app/" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/sqlToExcelVis.webp" alt="SQL-to-Excel Visualizer project screenshot" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>SQL-to-Excel Visualizer</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>Learn SQL execution step-by-step with animated visualizations and interactive table uploads.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/Narendra-Saryam/SQLVis" aria-label="View Project 5 source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://sql-visualization.vercel.app/" aria-label="View Project 5 live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://fluoride-and-nitrate-gis.vercel.app/" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/nagpurWaterQuality.webp" alt="Nagpur Water Quality Monitoring System project screenshot" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>Nagpur Water Quality Monitoring System</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>An interactive GIS-based web application for monitoring and visualizing fluoride and nitrate contamination levels in Nagpur's water supply using geographic mapping technology.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/Narendra-Saryam/fluorideGIS" aria-label="View Project 6 source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://fluoride-and-nitrate-gis.vercel.app/" aria-label="View Project 6 live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 mt-2 md:mt-4 w-full'>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://example.com/" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/commin soon.webp" alt="Coming Soon - Project 7" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>Project 7</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>Coming soon - Project description goes here.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/" aria-label="View Project 7 source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://example.com/" aria-label="View Project 7 live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between overflow-hidden'>
                    <a href="https://example.com/" target="_blank" rel="noopener noreferrer" className='relative h-28 md:h-40 w-full overflow-hidden rounded-t-xl cursor-pointer hover:opacity-80 transition-opacity'>
                        <Image className='w-full h-full object-cover object-center' src="/commin soon.webp" alt="Coming Soon - Project 8" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    </a>
                    <h3 className='px-2 w-full font-semibold'>Project 8</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>Coming soon - Project description goes here.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://github.com/" aria-label="View Project 8 source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 py-1 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer' href="https://example.com/" aria-label="View Project 8 live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Project
