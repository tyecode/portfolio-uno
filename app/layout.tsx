import { Metadata } from 'next'

import { CONFIG } from '@/constants'
import MatrixBackground from '@/components/matrix-background'
import { Providers } from '@/app/providers'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.url),
  title: 'Sengphachanh Chanthavong | Front-end Developer',
  description:
    'Explore the personal website of Sengphachanh Chanthavong, a passionate Front-end Developer. Discover my projects, skills, and get in touch today.',
  keywords: [
    'Sengphachanh Chanthavong',
    'Tyecode',
    'Front-end Developer',
    'Web Development',
    'Personal Website',
  ],
  authors: [
    {
      name: 'Sengphachanh Chanthavong',
      url: CONFIG.url,
    },
    {
      name: 'tyecode',
      url: 'https://github.com/tyecode',
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: CONFIG.url,
  },
  openGraph: {
    type: 'website',
    title: 'Sengphachanh Chanthavong | Front-end Developer',
    description:
      'Explore the personal website of Sengphachanh Chanthavong, a passionate Front-end Developer. Discover my projects, skills, and get in touch today.',
    url: CONFIG.url,
    siteName: 'Sengphachanh Chanthavong',
    images: '/images/cover.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning>
        <MatrixBackground />
        <div className="fixed top-0 -z-40 h-screen w-screen bg-background/80"></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
