'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <div className="container flex h-20 items-center justify-center py-16 lg:justify-start">
      <span className="flex flex-row gap-1">
        <span className="text-paragraph text-xs tracking-wide">
          ©2023 - Designed & Built by Sengphachanh Chanthavong
        </span>
      </span>
    </div>
  )
}

export default Footer
