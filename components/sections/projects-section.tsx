'use client'

import { PROJECTS } from '@/constants'
import ProjectsCard from '@/components/cards/projects-card'

const ProjectsSection = () => {
  const reversed = [...PROJECTS].reverse()

  return (
    <section
      className="container pb-8 pt-24 lg:min-h-screen lg:pb-16 lg:pt-16"
      id="projects"
    >
      <h3 className="text-heading-3 mb-8 flex items-center gap-2">
        <div className="h-[2px] w-5 bg-foreground"></div>
        Projects
      </h3>
      <div className="flex flex-col gap-6">
        {reversed.map((project) => {
          return <ProjectsCard key={project.id} data={project} />
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
