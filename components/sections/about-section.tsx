'use client'

import Image from 'next/image'

const AboutSection = () => {
  return (
    <section
      className="container pb-8 pt-24 lg:min-h-screen lg:pb-16 lg:pt-16"
      id="about"
    >
      <h3 className="text-heading-3 mb-8 flex items-center gap-2">
        <div className="h-[2px] w-5 bg-foreground"></div>
        About
      </h3>
      <div className="flex flex-col gap-12">
        {/* <div className="flex-center aspect-square max-w-[280px] overflow-hidden rounded-xl bg-secondary/60 p-1"> */}
          {/* <Image
            className="rounded-xl opacity-80"
            src={
              'https://scontent.fvte5-1.fna.fbcdn.net/v/t1.6435-9/38948687_245272449437744_541789603036659712_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeF9-p9FjxI0yBNfU3nu0YhsrpsSYe7WTIqumxJh7tZMin_oX02cba_2-FlzFTBbAlU3s_Gv6rWe2Xpv7GsdIRMR&_nc_ohc=9ntKPXSfzaYAX_jaywC&_nc_ht=scontent.fvte5-1.fna&oh=00_AfCApO5rNGJXHOBtt7u1ThtTN4WCEvb52vKYYKo5PzEpkw&oe=65CC8676'
            }
            alt=""
            width={500}
            height={500}
            priority
          /> */}
        {/* </div> */}

        <div className="flex flex-col gap-8">
          <p className="text-paragraph">
            {`Hello, I am Sengphachanh Chanthavong (you can call me Tye), a front-end developer with a Bachelor's degree in Software Programming based in Laos, Vientiane Capital. I specialize in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. With expertise in React and Next.js framework, I build dynamic and responsive web applications.`}
          </p>
          <p className="text-paragraph">
            {`During my university studies, I developed a keen eye for design and a passion for delivering seamless user experiences. I collaborate effectively with designers and back-end developers to create modern and innovative solutions. I prioritize clean and maintainable code to ensure scalability and code quality.`}
          </p>
          <p className="text-paragraph">
            {`Staying up to date with the latest trends and technologies, I am a quick learner and thrive on new challenges that allow me to expand my skill set. If you're seeking a dedicated and creative front-end developer to bring your ideas to life, let's discuss how I can contribute to your projects.`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
