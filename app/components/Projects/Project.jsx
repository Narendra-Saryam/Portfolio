'use client'

import Image from 'next/image'

const Project = () => {
  return (
    <section id='Projects' className='text-white flex justify-center flex-col md:flex-col lg:flex-row w-full p-2 md:p-4 md:px-20' aria-label="Projects section">
        <div className='flex flex-col p-0 md:p-8 w-full'>
            <h2 className="sr-only">My Projects</h2>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 w-full'>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/IFC.webp" alt="Iris Flower Classification project screenshot" width={400} height={160} />
                    <h3 className='px-2 w-full font-semibold'>Iris Flower Classification</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>The model classifies Iris flowers using length and width measurements and returns the predicted species with probabilities.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/Iris-Flowers-Detection" aria-label="View Iris Flower Classification source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://iris-flowers-detection.netlify.app/" aria-label="View Iris Flower Classification live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/riskClassification.webp" alt="Risk Classification project screenshot" width={400} height={160} />
                    <h3 className='px-2 w-full font-semibold'>Risk Classification</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This model is used to classify human body toxicity by taking some medical information and then classifying it into High, Low, or Normal toxicity levels.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/Risk-Classification" aria-label="View Risk Classification source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://risk-classification.netlify.app/" aria-label="View Risk Classification live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 mt-2 md:mt-4 w-full'>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/clipboard.webp" alt="Online Clipboard project screenshot" width={400} height={160} />
                    <h3 className='px-2 w-full font-semibold'>Online Clipboard</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>An online clipboard application enabling users to store, access, and manage snippets or text across client and server components.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/Online-Clipboard" aria-label="View Online Clipboard source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://onlineclipboards.netlify.app/" aria-label="View Online Clipboard live demo" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="Live Demo" width={24} height={24} />
                        </a>
                    </div>
                </article>
                <article className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/InfoRetrievel.webp" alt="Information Retrieval project screenshot" width={400} height={160} />
                    <h3 className='px-2 w-full font-semibold'>Information Retrieval</h3>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>An IR (Information Retrieval) summarization project that implements techniques to generate concise summaries from text using retrieval methods.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/IR-Summarization-Project" aria-label="View Information Retrieval source code on GitHub" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/github.webp" alt="GitHub" width={24} height={24} />
                        </a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/IR-Summarization-Project/blob/main/IR_with_Summarization.ipynb" aria-label="View Information Retrieval notebook" rel="noopener noreferrer" target="_blank">
                          <Image className='w-6 h-auto' src="/arrow.webp" alt="View Notebook" width={24} height={24} />
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Project
