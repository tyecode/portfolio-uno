import NavigationBar from '@/components/navigation-bar'
import { Badge, Avatar } from '@nextui-org/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="full fixed top-0 z-50 flex w-full justify-center p-6">
        <div className="w-full max-w-4xl rounded-2xl border-2 border-secondary-300 bg-background/90 p-2">
          <Avatar isBordered radius="sm" size="sm" />
        </div>
      </div>
      <NavigationBar />
      <main>{children}</main>
    </>
  )
}
