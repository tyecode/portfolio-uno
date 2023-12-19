import React from 'react'
import Image from 'next/image'
import { Card, CardBody } from '@nextui-org/react'

const SKILLS = [
  {
    id: 'skill-1',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-2',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-3',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-3',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-3',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-3',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-3',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-3',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
  {
    id: 'skill-3',
    title: 'HTML',
    icon: '/icons/html.svg',
  },
]

const SkillsSection = () => {
  return (
    <section className="container pb-8 pt-24" id="skills">
      <h3 className="text-heading-3 mb-8 flex items-center gap-2">
        <div className="h-[2px] w-5 bg-foreground"></div>
        Kills
      </h3>
      <div className="flex flex-wrap gap-6">
        {SKILLS.map((skill) => (
          <Card
            key={skill.id}
            isBlurred
            className="flex-center aspect-square w-fit border-2 border-secondary-200 bg-transparent p-0 text-foreground"
          >
            <CardBody className="flex-center p-3">
              <Image src={'/icons/html.svg'} width={56} height={56} alt="..." />
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
