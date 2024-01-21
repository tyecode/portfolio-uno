'use client'

import { useEffect, useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'

import Header from '@/components/header'
import NavigationBar from '@/components/navigation-bar'
import Preloader from '@/components/preloader'

config.autoAddCss = false

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading && <Preloader />}
      <NavigationBar />
      <div className="w-full flex-row lg:flex">
        <div className="lg:flex-center lg:fixed lg:left-0 lg:z-50 lg:h-full lg:w-5/12 lg:pl-6 xl:px-20 xl:pr-10">
          <Header />
        </div>
        <div className="lg:flex lg:w-full lg:justify-end lg:pr-6 xl:px-20">
          <main className="lg:w-7/12">{children}</main>
        </div>
      </div>
    </>
  )
}
