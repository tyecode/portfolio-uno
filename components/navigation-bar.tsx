'use client'

import { useState } from 'react'

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'

import { NAV_LINKS } from '@/constants'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar className="lg:hidden" isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link href="#">
            <Button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Logo"
              color="secondary"
              variant="flat"
              isIconOnly
              className="aspect-square w-10 rounded-xl border-2 bg-transparent text-lg font-bold text-primary-foreground"
            >
              SC
            </Button>
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="py-8">
        {NAV_LINKS.map((link, index) => {
          const { id, title } = link
          return (
            <NavbarMenuItem key={id}>
              <Link
                color={'foreground'}
                className={`w-full py-2 font-inter text-xs font-medium uppercase tracking-wider ${
                  index !== 0 ? 'border-t-2' : ''
                }`}
                href={'#' + id}
                size="md"
                onClick={() => setIsMenuOpen(false)}
              >
                {title}
              </Link>
            </NavbarMenuItem>
          )
        })}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavigationBar
