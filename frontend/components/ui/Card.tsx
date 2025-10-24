import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-card shadow-card overflow-hidden',
        hover && 'hover:shadow-card-hover transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}
