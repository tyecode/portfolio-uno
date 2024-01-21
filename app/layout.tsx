'use client'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { METADATA } from '@/constants/config'
import MatrixBackground from '@/components/matrix-background'
import { Providers } from '@/app/providers'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <HelmetProvider>
        <Helmet>
          <title>{METADATA.title}</title>
          <meta name="author" content="tyecode <github.com/tyecode" />
          <meta name="description" content={METADATA.description} />
          <meta name="keywords" content={METADATA.keywords.join(',')} />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="canonical" href="https://www.tyecode.space/" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Helmet>

        <body suppressHydrationWarning>
          <MatrixBackground />
          <div className="fixed top-0 -z-40 h-screen w-screen bg-background/80"></div>
          <Providers>{children}</Providers>
        </body>
      </HelmetProvider>
    </html>
  )
}
