import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-card shadow-card overflow-hidden',
        hover && 'hover:shadow-card-hover transition-shadow duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
