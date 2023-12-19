'use client'

import Link from 'next/link'
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ModulzLogoIcon,
} from '@radix-ui/react-icons'

import IconButton from '@/components/icon-button'
import { NAV_LINKS } from '@/constants'
import { useSectionStore } from '@/stores/use-section-store'
import Footer from './footer'

const SocialMedia = [
  {
    id: 'social-media-1',
    title: 'github',
    link: 'https://github.com/tyecode',
    icon: <GitHubLogoIcon width={20} height={20} />,
  },
  {
    id: 'social-media-2',
    title: 'discord',
    link: 'https://github.com/tyecode',
    icon: <DiscordLogoIcon width={20} height={20} />,
  },
  {
    id: 'social-media-3',
    title: 'linkedin',
    link: 'https://github.com/tyecode',
    icon: <LinkedInLogoIcon width={20} height={20} />,
  },
  {
    id: 'social-media-4',
    title: 'modulz',
    link: 'https://github.com/tyecode',
    icon: <ModulzLogoIcon width={20} height={20} />,
  },
]

const Header = () => {
  const current = useSectionStore((state) => state.current)
  const setSection = useSectionStore((state) => state.setSection)

  return (
    <header id="#" className="w-full">
      <section className="container flex flex-col gap-12 pb-8 pt-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-heading-1">Sengphachanh Chanthavong</h1>
          <h2 className="text-heading-2">Font-end Developer</h2>
          <p className="text-paragraph">
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {SocialMedia.map((social) => (
            <Link key={social.id} href={social.link} target="_blank">
              <IconButton title={social.title}>{social.icon}</IconButton>
            </Link>
          ))}
        </div>

        <div className="hidden w-full lg:flex">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="group cursor-pointer py-1">
                <div
                  className="flex w-full items-center py-2"
                  onClick={() => {
                    setSection(link.id)
                  }}
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
