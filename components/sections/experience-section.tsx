'uee client'

import ExperienceCard from '@/components/cards/experience-card'
import { EXPERIENCE } from '@/constants'

const ExperienceSection = () => {
  const reversed = [...EXPERIENCE].reverse()

  return (
    <section className="container pb-8 pt-24 lg:min-h-screen  " id="experience">
      <h3 className="text-heading-3 mb-8 flex items-center gap-2">
        <div className="h-[2px] w-5 bg-foreground"></div>
        Experience
      </h3>
      <div className="flex flex-col gap-6">
        {reversed.map((experience, index) => {
          if (index > 2) return

          return <ExperienceCard key={experience.id} data={experience} />
        })}
      </div>
    </section>
  )
}

export default ExperienceSection
