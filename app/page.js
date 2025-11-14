'use client'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Projects/Project'
import Footer from './components/Footer/Footer'

export default function Page() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Narendra Saryam",
    "alternateName": "Narendra",
    "url": "https://narendrasaryam.com",
    "image": "https://narendrasaryam.com/n1nobg.webp",
    "sameAs": [
      "https://github.com/Narendra-Saryam",
      "https://www.linkedin.com/in/narendra-saryam/"
    ],
    "jobTitle": "MERN Stack Developer & Machine Learning Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Narendra Saryam is a MERN Stack Developer and Machine Learning Engineer specializing in React, Next.js, Node.js, Python, TensorFlow, and PyTorch",
    "email": "narendrasaryam9459@gmail.com",
    "knowsAbout": [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Python",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "MERN Stack",
      "Web Development",
      "Artificial Intelligence",
      "Frontend Development",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "IT Student"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "occupationalCategory": "15-1252.00",
      "skills": "React.js, Next.js, Node.js, Python, Machine Learning, TensorFlow, PyTorch, JavaScript, HTML, CSS, Tailwind CSS"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://narendrasaryam.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://narendrasaryam.com#About"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://narendrasaryam.com#Projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://narendrasaryam.com#Footer"
      }
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Narendra Saryam Portfolio",
    "alternateName": "Narendra Saryam Developer Portfolio",
    "url": "https://narendrasaryam.com",
    "description": "Official portfolio website of Narendra Saryam - MERN Stack Developer and Machine Learning Engineer",
    "author": {
      "@type": "Person",
      "name": "Narendra Saryam"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://narendrasaryam.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const professionalData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2024-01-01T00:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "Person",
      "name": "Narendra Saryam",
      "description": "Professional MERN Stack Developer and Machine Learning Engineer",
      "image": "https://narendrasaryam.com/n1nobg.webp"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalData) }}
      />
      <main className='bg-black h-auto w-full overflow-hidden'>
        <h1 className="sr-only">Narendra Saryam - MERN Stack Developer and Machine Learning Engineer Portfolio</h1>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Project />
        <Footer />
      </main>
    </>
  )
}
