import { CONFIG } from '@/constants'
import MatrixBackground from '@/components/matrix-background'
import { Providers } from '@/app/providers'

import './globals.css'

export const metadata = {
  title: CONFIG.name + ' - Personal Website',
  keywords: ['personal', 'website', 'tyecode', 'sengphachanh', 'chanthavong'],
  description:
    'Sengphachanh Chanthavong or Tyecode - A Front-end Developer passionate about Web development. Explore my personal website and contact me today.',
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
