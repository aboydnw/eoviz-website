import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { OptimizedVideo } from '@/components/shared/OptimizedVideo'
import { Play, BookOpen } from 'lucide-react'
import { homepage } from '@/content/homepage'

export function HeroSection() {
  const { hero } = homepage
  
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-2xl lg:max-w-none">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">
                {hero.badge}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {hero.headline}
              <span className="text-blue-600"> {hero.subline}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={hero.primaryCta.href}>
                  <Play className="h-4 w-4 mr-2" />
                  {hero.primaryCta.text}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={hero.secondaryCta.href}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  {hero.secondaryCta.text}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:max-w-xl">
            <OptimizedVideo
              src={hero.video.src}
              title={hero.video.title}
              description={hero.video.description}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
