'use client'

const AboutSection = () => {
  return (
    <>
      <section className="container pb-8 pt-24 lg:min-h-screen" id="about">
        <h3 className="text-heading-3 mb-8 flex items-center gap-2">
          <div className="h-[2px] w-5 bg-foreground"></div>
          About
        </h3>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-paragraph">
              {`I'm Sengphachanh Chanthavong, a front-end developer with a Bachelor's degree in Software Programming. I specialize in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. With expertise in React and Next.js framework, I build dynamic and responsive web applications.`}
            </p>
            <p className="text-paragraph">
              {`During my university studies, I developed a keen eye for design and a passion for delivering seamless user experiences. I collaborate effectively with designers and back-end developers to create modern and innovative solutions. I prioritize clean and maintainable code to ensure scalability and code quality.`}
            </p>
            <p className="text-paragraph">
              {`Staying up to date with the latest trends and technologies, I am a quick learner and thrive on new challenges that allow me to expand my skill set. If you're seeking a dedicated and creative front-end developer to bring your ideas to life, let's discuss how I can contribute to your projects.`}
            </p>
          </div>
          {/* <div className="aspect-square max-w-[280px] rounded-xl bg-secondary/60"></div> */}
        </div>
      </section>
    </>
  )
}

export default AboutSection
