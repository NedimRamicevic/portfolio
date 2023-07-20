import React from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectSection'

const HomePage = () => {
  return (
    <main className='bg-white dark:bg-black duration-700 text-black dark:text-white px-16'>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </main>
  )
}

export default HomePage