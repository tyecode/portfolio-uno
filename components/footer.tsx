'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <div className="container flex h-20 items-center justify-center py-16 lg:justify-start">
      <span className="flex flex-row gap-1">
        <span className="text-paragraph flex-center mb-6 flex-wrap gap-1 text-center text-xs tracking-wide md:text-start">
          <span>
            ©2023{' '}
            <Link
              href={'https://github.com/tyecode'}
              className="tracking-wide duration-300 hover:text-secondary"
              target="_blank"
            >
              tyecode
            </Link>
            , All rights reserved.
          </span>
        </span>
      </span>
    </div>
  )
}

export default Footer
