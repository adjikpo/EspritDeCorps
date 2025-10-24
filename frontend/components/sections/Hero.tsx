import Button from '@/components/ui/Button'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="hero-gradient min-h-screen flex items-center justify-center relative"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 text-neutral-300 max-w-2xl mx-auto animate-slide-up">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            {primaryCta && (
              <Link href={primaryCta.href}>
                <Button size="lg">{primaryCta.text}</Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-neutral-900">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
