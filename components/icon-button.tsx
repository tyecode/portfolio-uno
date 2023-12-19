import { Button } from '@nextui-org/react'

const IconButton = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <Button
      isIconOnly
      aria-label={title}
      color="secondary"
      variant="ghost"
      className="aspect-square w-10 rounded-xl border-2"
    >
      {children}
    </Button>
  )
}

export default IconButton
