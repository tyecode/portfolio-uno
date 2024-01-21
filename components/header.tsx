'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import { Button } from '@nextui-org/react'

import { NAV_LINKS, CONFIG } from '@/constants'
import Footer from '@/components/footer'
import { useSectionStore } from '@/stores/use-section-store'

const SocialMedia = [
  {
    id: 'social-media-1',
    title: 'email',
    link: 'mailto:sengphachanh.dev@gmail.com',
    icon: faEnvelope,
  },
  {
    id: 'social-media-2',
    title: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100018649715222',
    icon: faFacebookF,
  },
  {
    id: 'social-media-3',
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/tyecode',
    icon: faLinkedin,
  },
  {
    id: 'social-media-4',
    title: 'github',
    link: 'https://github.com/tyecode',
    icon: faGithub,
  },
]

const Header = () => {
  const current = useSectionStore((state) => state.current)
  const setSection = useSectionStore((state) => state.setSection)

  const handleClick = (section: string) => {
    setSection(section)

    if (section === 'about') {
      const about = document.querySelector('#about')
      about?.classList.add('section-active')
      console.log(section)
    }
  }

  return (
    <header id="#" className="w-full">
      <section className="container flex flex-col gap-12 pb-8 pt-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-heading-1">{CONFIG.name}</h1>
          <h2 className="text-heading-2">{CONFIG.skill}</h2>
          <p className="text-paragraph">{CONFIG.description}</p>
        </div>

        <div className="flex items-center gap-4">
          {SocialMedia.map((social) => (
            <Link key={social.id} href={social.link} target="_blank">
              <Button
                isIconOnly
                aria-label={social.title}
                color="secondary"
                variant="ghost"
                className="aspect-square w-10 rounded-xl border-2 duration-200"
              >
                <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
              </Button>
            </Link>
          ))}
        </div>

        <div className="hidden w-full lg:flex">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="group cursor-pointer py-1">
                <div
                  className="flex w-full items-center py-2"
                  onClick={() => handleClick(link.id)}
                >
                  <div
                    className={`mr-2 h-[2px] duration-300 ${
                      current === link.id
                        ? 'w-16 bg-foreground'
                        : 'w-5 bg-accent-foreground'
                    }`}
                  ></div>
                  <span
                    className={
                      current !== link.id
                        ? 'font-inter text-xs font-medium uppercase tracking-wider  text-accent-foreground duration-300 group-hover:text-foreground'
                        : 'font-inter text-xs font-medium uppercase tracking-wider text-foreground  duration-300 group-hover:text-foreground'
                    }
                  >
                    {link.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="hidden lg:block">
        <Footer />
      </div>
    </header>
  )
}

export default Header
