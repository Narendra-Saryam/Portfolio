'use client'

import Image from 'next/image'

const Project = () => {
  return (
    <div id='Projects' className='text-white flex justify-center flex-col md:flex-col lg:flex-row w-full p-2 md:p-4 md:px-20'>
        <div className='flex flex-col p-0 md:p-8 w-full'>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 w-full'>
                <div className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/IFC.png" alt="Iris Flower Classification" width={400} height={160} />
                    <h1 className='px-2 w-full'>Iris Flower Classification</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>The model classifies Iris flowers using length and width measurements and returns the predicted species with probabilities.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/Iris-Flowers-Detection"><Image className='w-6 h-auto' src="/github.png" alt="GitHub" width={24} height={24} /></a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://iris-flowers-detection.netlify.app/"><Image className='w-6 h-auto' src="/arrow.png" alt="Demo" width={24} height={24} /></a>
                    </div>
                </div>
                <div className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/riskClassification.png" alt="Risk Classification" width={400} height={160} />
                    <h1 className='px-2 w-full'>Risk Classification</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>This model is used to classify human body toxicity by taking some medical information and then classifying it into High, Low, or Normal toxicity levels.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/Risk-Classification"><Image className='w-6 h-auto' src="/github.png" alt="GitHub" width={24} height={24} /></a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://risk-classification.netlify.app/"><Image className='w-6 h-auto' src="/arrow.png" alt="Demo" width={24} height={24} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 md:gap-4 mt-2 md:mt-4 w-full'>
                <div className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/clipboard.png" alt="Online Clipboard" width={400} height={160} />
                    <h1 className='px-2 w-full'>Online Clipboard</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>An online clipboard application enabling users to store, access, and manage snippets or text across client and server components.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/Online-Clipboard"><Image className='w-6 h-auto' src="/github.png" alt="GitHub" width={24} height={24} /></a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://onlineclipboards.netlify.app/"><Image className='w-6 h-auto' src="/arrow.png" alt="Demo" width={24} height={24} /></a>
                    </div>
                </div>
                <div className='bg-gradient-to-tl from-black via-[#181818] to-black h-60 md:h-80 border-[0.05px] border-[#404040] rounded-xl flex flex-col justify-between'>
                    <Image className='h-28 md:h-40 w-full rounded-t-xl p-[0.5px] object-cover' src="/InfoRetrievel.png" alt="Information Retrieval" width={400} height={160} />
                    <h1 className='px-2 w-full'>Information Retrieval</h1>
                    <p className='px-2 w-full text-[12px] text-[#949494]'>An IR (Information Retrieval) summarization project that implements techniques to generate concise summaries from text using retrieval methods.</p>
                    <div className='p-1 md:p-4 flex items-center justify-center gap-1 md:gap-4'>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/IR-Summarization-Project"><Image className='w-6 h-auto' src="/github.png" alt="GitHub" width={24} height={24} /></a>
                        <a className='px-2 hover:bg-[#202020] hover:border-[0.5px] border-[#404040] rounded-sm' href="https://github.com/Narendra-Saryam/IR-Summarization-Project/blob/main/IR_with_Summarization.ipynb"><Image className='w-6 h-auto' src="/arrow.png" alt="Demo" width={24} height={24} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
