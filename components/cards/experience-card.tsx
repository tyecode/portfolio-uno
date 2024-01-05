'use client'

import { Link } from '@nextui-org/react'
import { Card, CardBody } from '@nextui-org/react'
import { DividerHorizontalIcon } from '@radix-ui/react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const ExperienceCard = ({ data }: any) => {
  return (
    <Card
      isBlurred
      className="border-2 border-secondary-200 bg-transparent text-foreground"
    >
      <CardBody className="flex flex-col items-start justify-start gap-0 p-6 md:flex-row md:gap-12 lg:flex-col lg:gap-0">
        <p className="font-poppins text-sm font-normal uppercase text-accent-foreground md:w-[48rem] lg:w-fit">
          {data.period}
        </p>
        <div className="flex grow flex-col gap-2">
          <h4 className="text-medium font-normal text-foreground">
            <div className="flex flex-col flex-wrap gap-2">
              <span className="text-heading-4">{data.position}</span>
              <span className="flex gap-1 font-fira text-secondary">
                <DividerHorizontalIcon width={24} height={24} />
                <Link
                  href={data.link}
                  underline="hover"
                  size="md"
                  color="secondary"
                  target="_blank"
                >
                  {data.title}
                </Link>
              </span>
            </div>
          </h4>
          <div className="flex flex-col gap-2">
            {data.description.map((list: string, index: number) => (
              <span key={`experience-list-${index}`} className="flex gap-5">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="mt-1 h-4 w-4 text-secondary"
                />
                <p className="text-paragraph">{list}</p>
              </span>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ExperienceCard
