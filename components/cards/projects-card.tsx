'use client'

import Image from 'next/image'

import { Link } from '@nextui-org/react'
import { Button, Card, CardBody } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const ProjectsCard = ({ data }: any) => {
  return (
    <Card
      key={data.id}
      className="border-2 border-secondary-200 bg-transparent text-foreground"
      isBlurred
    >
      <CardBody className="flex flex-col gap-6 p-6 sm:flex-row">
        <div className="relative aspect-video h-fit grow overflow-hidden rounded-md sm:basis-1/2 md:basis-2/4">
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={600}
            priority
            draggable={false}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-background opacity-10"></div>
        </div>
        <div className="flex grow flex-col gap-2 sm:basis-1/2 md:basis-2/4">
          <h4 className="text-heading-4">{data.title}</h4>
          <p className="text-paragraph">{data.description}</p>
          <div className="flex-center flex-wrap justify-start gap-2 text-secondary">
            {data.tags.map((tag: string, index: number) => {
              return (
                <span key={index} className="flex-center gap-2">
                  <span className="text-sm tracking-wide">{tag}</span>
                  {index !== data.tags.length - 1 && (
                    <FontAwesomeIcon icon={faCircle} width={4} height={4} />
                  )}
                </span>
              )
            })}
          </div>
          <div className="mt mt-2 flex flex-wrap gap-2">
            {data.links.map((link: any, index: number) => {
              return (
                <span key={`external-link-${index}`} className="flex-center">
                  <Link href={link.url} target="_blank">
                    <Button variant="flat" color="secondary" size="sm">
                      {link.id === 1 && (
                        <FontAwesomeIcon
                          className="h-[.84rem] w-[.84rem]"
                          icon={faExternalLink}
                        />
                      )}
                      {link.id === 2 && (
                        <FontAwesomeIcon className="h-4 w-4" icon={faGithub} />
                      )}
                      {link.title}
                    </Button>
                  </Link>
                </span>
              )
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProjectsCard
