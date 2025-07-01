import React from 'react'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import Home from './Componentes/Home/Home.jsx'
import About from './Componentes/About/About.jsx'
import Experience from './Componentes/Experience/Experience.jsx'
import Project from './Componentes/Projects/Project.jsx'
import Footer from './Componentes/Footer/Footer.jsx'

const App = () => {
  return (
    <div className='bg-black h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  )
}

export default App