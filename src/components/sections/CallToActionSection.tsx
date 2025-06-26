import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github } from 'lucide-react'

export function CallToActionSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="secondary" className="mb-4">Ready to Get Started?</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's help your research reach the people who need it
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're ready to dive in or want to learn more about how other research 
          organizations are solving these challenges, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="#contact">
              Schedule Discovery Call
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#assessment">
              Take Our Assessment
            </Link>
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com" target="_blank">
              <Github className="h-4 w-4 mr-2" />
              Explore on GitHub
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              Learn More About Our Approach
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
