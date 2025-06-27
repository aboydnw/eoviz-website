import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/shared'
import { 
  BookOpen, 
  Eye
} from 'lucide-react'

export default function eoStoriesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Narrative-Driven Communication
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              eoStories
              <span className="text-blue-600"> for Earth Science Storytelling</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform complex research into narratives that stakeholders actually understand and remember. 
              Combine interactive maps, charts, and compelling narrative to communicate your findings effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/examples">
                  <Eye className="h-4 w-4 mr-2" />
                  See Story Examples
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#get-started">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto" 
              >
                <source src="/videos/demo-stories.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                <h3 className="font-semibold text-lg text-blue-900 mb-2">Wildfire Risk Communication Story</h3>
                <p className="text-sm text-blue-700">
                  See how narrative combined with interactive visualization helps emergency managers 
                  understand and communicate wildfire risk to their communities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="get-started" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start creating impactful science stories
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join research organizations using eoStories to transform complex findings 
            into compelling narratives that drive real-world action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/examples">
                <Eye className="h-4 w-4 mr-2" />
                View Story Examples
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">
                <BookOpen className="h-4 w-4 mr-2" />
                Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
