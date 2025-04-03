import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className='fixed left-0 right-0 z-50 py-4 flex flex-col  w-full bg-black bg-opacity-40 shadow-xl'>
      <nav className='flex flex-wrap justify-between items-center text-white px-6  md:px-20'>
        <span className='text-xl font-bold tracking-wide'><a className="underline-animation" href="#Home">Portfolio</a></span>
        
        
        {/* Mobile menu button */}
        <button 
          className='md:hidden absolute right-6 top-4 transition-all duration-300'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
        
        {/* Navigation links */}
        <ul className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex gap-6 py-4 md:py-0 mt-4 md:mt-0 bg-black bg-opacity-30 md:bg-transparent rounded-xl md:rounded-none text-center`}>
          <li>
            <a href="#About" className='block text-md transition-all duration-200 px-5 py-1 rounded-2xl ease-linear hover:text-white hover:bg-[#465697] hover:shadow-md'>
              About
            </a>
          </li>
          <li>
            <a href="#Experience" className='block text-md transition-all duration-200 px-5 py-1 rounded-2xl ease-linear hover:text-white hover:bg-[#465697] hover:shadow-md'>
              Experience
            </a>
          </li>
          <li>
            <a href="#Projects" className='block text-md transition-all duration-200 px-5 py-1 rounded-2xl ease-linear hover:text-white hover:bg-[#465697] hover:shadow-md'>
              Projects
            </a>
          </li>
          <li>
            <a href="#Footer" className='block text-md transition-all duration-200 px-5 py-1 rounded-2xl ease-linear hover:text-white hover:bg-[#465697] hover:shadow-md'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;