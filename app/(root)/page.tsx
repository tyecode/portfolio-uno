'use client'

import Footer from '@/components/footer'
import AboutSection from '@/components/sections/about-section'
import ExperienceSection from '@/components/sections/experience-section'
import ProjectsSection from '@/components/sections/projects-section'
import { useSectionStore } from '@/stores/use-section-store'
import { useEffect, useState } from 'react'

export default function Home() {
  const [section, setSection] = useState('about')
  const current = useSectionStore((state) => state.current)

  useEffect(() => {
    setSection(current)
  }, [current])

  return (
    <>
      <div className="flex flex-col lg:hidden">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </div>

      <div className="hidden flex-col lg:flex">
        {section === 'about' && <AboutSection />}
        {section === 'experience' && <ExperienceSection />}
        {section === 'projects' && <ProjectsSection />}
      </div>
    </>
  )
}
