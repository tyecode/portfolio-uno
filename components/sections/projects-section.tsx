'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@nextui-org/react'

import { Button, Card, CardBody } from '@nextui-org/react'
import { PROJECTS } from '@/constants'

const ProjectsSection = () => {
  const reversed = [...PROJECTS].reverse()

  return (
    <section className="container pb-8 pt-24 lg:min-h-screen" id="projects">
      <h3 className="text-heading-3 mb-8 flex items-center gap-2">
        <div className="h-[2px] w-5 bg-foreground"></div>
        Projects
      </h3>
      <div className="flex flex-col gap-6">
        {reversed.map((project, index) => {
          return (
            <Card
              key={project.id}
              className="border-2 border-secondary-200 bg-transparent text-foreground"
              isBlurred
            >
              <CardBody className="flex flex-col gap-6 sm:flex-row">
                <div className="relative aspect-video h-fit grow overflow-hidden rounded-md sm:basis-1/2 md:basis-2/4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-0 top-0 h-full w-full bg-background opacity-10"></div>
                </div>
                <div className="flex grow flex-col gap-2 sm:basis-1/2 md:basis-2/4">
                  <Link href="#" underline="hover" size="lg" color="secondary">
                    <h4 className="text-heading-4 flex duration-200 hover:text-secondary">
                      {project.title}
                    </h4>
                  </Link>
                  <p className="text-paragraph">{project.description}</p>
                  <span className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => {
                      return (
                        <Button
                          key={`badge-${index}`}
                          variant="flat"
                          color="secondary"
                          size="sm"
                          disabled
                        >
                          {tag}
                        </Button>
                      )
                    })}
                  </span>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
