'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollAwareNavigation } from '@/components/layout/ScrollAwareNavigation'
import { OptimizedImage } from '@/components/shared/OptimizedImage'
import { 
  ExternalLink, 
  MapPin,
  Flame,
  Globe,
  Satellite,
  Play
} from 'lucide-react'

// Type definitions for better code clarity
interface ExamplePreview {
  type: 'video' | 'image'
  src: string
  poster?: string
  alt: string
}

interface Example {
  id: string
  title: string
  description: string
  challenge: string
  solution: string
  useCase: 'Climate Policy' | 'Emergency Response' | 'Scientific Research' | 'Education & Outreach'
  products: Array<'Stories' | 'Tools' | 'Catalogs'>
  icon: React.ComponentType<{ className?: string }>
  color: 'green' | 'red' | 'blue' | 'purple'
  url: string
  preview: ExamplePreview
  audience: string
  impact: string
}

const examples: Example[] = [
  {
    id: 'co2-emissions',
    title: 'Quantifying CO2 Emissions at Neighborhood Scale',
    description: 'Help policymakers and researchers understand hyperlocal carbon emissions patterns to inform climate action strategies.',
    challenge: 'Climate policy often operates on city or regional scales, but emissions vary dramatically at the neighborhood level. Traditional data is too coarse for targeted interventions.',
    solution: 'Combine high-resolution emissions data with interactive storytelling to show policymakers exactly where emissions are highest and what\'s driving them.',
    useCase: 'Climate Policy',
    products: ['Stories', 'Tools'],
    icon: MapPin,
    color: 'green',
    url: 'https://earth.gov/ghgcenter/stories/vulcan',
    preview: {
      type: 'video',
      src: '/videos/examples/co2-emissions-demo.mp4',
      poster: '/images/examples/co2-emissions-poster.jpg',
      alt: 'CO2 emissions visualization showing neighborhood-level data'
    },
    audience: 'City planners, climate policymakers, environmental justice advocates',
    impact: 'Enables targeted climate interventions at the neighborhood level'
  },
  {
    id: 'fire-perimeter',
    title: 'Visualizing Fire Perimeter Growth Over Time',
    description: 'Give emergency managers real-time situational awareness of wildfire spread patterns to coordinate response efforts.',
    challenge: 'Static fire maps don\'t show the dynamic nature of wildfire spread, making it hard for emergency managers to predict where fires are headed.',
    solution: 'Interactive timeline visualization showing fire perimeter evolution helps responders understand fire behavior and allocate resources effectively.',
    useCase: 'Emergency Response',
    products: ['Tools'],
    icon: Flame,
    color: 'red',
    url: 'https://www.earthdata.nasa.gov/dashboard/tools/fire-event-explorer',
    preview: {
      type: 'video',
      src: '/videos/examples/fire-perimeter-demo.mp4', 
      poster: '/images/examples/fire-perimeter-poster.jpg',
      alt: 'Fire perimeter growth visualization over time'
    },
    audience: 'Emergency managers, firefighters, evacuation coordinators',
    impact: 'Faster, more informed emergency response decisions'
  },
  {
    id: 'arco-data',
    title: 'NASA\'s Analysis-Ready Cloud-Optimized Earth Science Data',
    description: 'Showcase how cloud-optimized data formats accelerate scientific discovery and enable new research workflows.',
    challenge: 'Traditional Earth science data formats require extensive preprocessing before analysis, creating barriers for researchers and slowing discovery.',
    solution: 'Demonstrate ARCO data benefits through interactive stories, analysis tools, and organized data catalogs that researchers can immediately use.',
    useCase: 'Scientific Research',
    products: ['Stories', 'Tools', 'Catalogs'],
    icon: Satellite,
    color: 'blue',
    url: 'https://www.earthdata.nasa.gov/dashboard/',
    preview: {
      type: 'image',
      src: '/images/examples/nasa-dashboard-screenshot.jpg',
      alt: 'NASA Earth data dashboard showing analysis-ready datasets'
    },
    audience: 'Earth scientists, data engineers, research organizations',
    impact: 'Faster time from data to discovery, reduced technical barriers'
  },
  {
    id: 'earth-visualizations',
    title: 'NASA\'s Center for Earth Science Visualizations',
    description: 'Organize and present the full spectrum of NASA Earth science visualizations for education and public engagement.',
    challenge: 'NASA creates incredible Earth science visualizations, but they\'re scattered across different systems and hard for educators and communicators to find.',
    solution: 'Unified platform combining interactive tools with organized catalogs to help educators find and use NASA\'s visual resources effectively.',
    useCase: 'Education & Outreach',
    products: ['Tools', 'Catalogs'],
    icon: Globe,
    color: 'purple',
    url: 'https://earth.gov/',
    preview: {
      type: 'video',
      src: '/videos/examples/earth-visualizations-demo.mp4',
      poster: '/images/examples/earth-viz-poster.jpg', 
      alt: 'NASA Earth science visualization platform showcase'
    },
    audience: 'Educators, science communicators, public engagement teams',
    impact: 'Broader public understanding of Earth science through better access to visualizations'
  }
]

const productColors = {
  'Stories': 'bg-blue-100 text-blue-800',
  'Tools': 'bg-green-100 text-green-800', 
  'Catalogs': 'bg-purple-100 text-purple-800'
}

const useCaseColors = {
  'Climate Policy': 'bg-green-50 border-green-200',
  'Emergency Response': 'bg-red-50 border-red-200',
  'Scientific Research': 'bg-blue-50 border-blue-200',
  'Education & Outreach': 'bg-purple-50 border-purple-200'
}

// Simplified MediaPreview component
function MediaPreview({ example }: { example: Example }) {
  return (
    <div 
      className="relative group cursor-pointer" 
      onClick={() => window.open(example.url, '_blank')}
    >
      <div className="aspect-video bg-slate-100 rounded-t-lg overflow-hidden relative">
        {example.preview.type === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={example.preview.poster}
            className="w-full h-full object-cover"
          >
            <source src={example.preview.src} type="video/mp4" />
            {/* Fallback to poster image if video fails */}
            {example.preview.poster && (
              <OptimizedImage
                src={example.preview.poster}
                alt={example.preview.alt}
                width={640}
                height={360}
                className="w-full h-full object-cover"
              />
            )}
          </video>
        ) : (
          <OptimizedImage
            src={example.preview.src}
            alt={example.preview.alt}
            width={640}
            height={360}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
              {example.preview.type === 'video' ? (
                <Play className="h-8 w-8 text-slate-700" />
              ) : (
                <ExternalLink className="h-6 w-6 text-slate-700" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollAwareNavigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              Live Examples
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              See eoViz in Action
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real-world examples of how research organizations are using eoViz components 
              to bridge the gap between Earth science and the people who need it most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from(new Set(examples.map(e => e.useCase))).map(useCase => {
                const example = examples.find(e => e.useCase === useCase)!
                const IconComponent = example.icon
                return (
                  <Badge key={useCase} variant="outline" className="text-sm">
                    <IconComponent className="h-3 w-3 mr-1" />
                    {useCase}
                  </Badge>
                )
              })}
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {examples.map((example, index) => {
                const IconComponent = example.icon
                const isReverse = index % 2 === 1
                
                return (
                  <div 
                    key={example.id} 
                    className={`grid lg:grid-cols-2 gap-12 items-start ${
                      isReverse ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`space-y-6 ${isReverse ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-${example.color}-100`}>
                          <IconComponent className={`h-6 w-6 text-${example.color}-600`} />
                        </div>
                        <Badge variant="outline">{example.useCase}</Badge>
                      </div>
                      
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                          {example.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-4">
                          {example.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {example.products.map((product) => (
                          <Badge 
                            key={product} 
                            variant="secondary"
                            className={productColors[product]}
                          >
                            {product}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                            The Challenge
                          </h4>
                          <p className="text-sm">{example.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                            The Solution
                          </h4>
                          <p className="text-sm">{example.solution}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">
                              Who Uses This
                            </h4>
                            <p>{example.audience}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-1">
                              Impact
                            </h4>
                            <p>{example.impact}</p>
                          </div>
                        </div>
                      </div>

                      <Button asChild>
                        <Link href={example.url} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Explore Interactive Tool
                        </Link>
                      </Button>
                    </div>

                    {/* Media Preview */}
                    <div className={`${isReverse ? 'lg:col-start-1' : ''}`}>
                      <Card className={`overflow-hidden ${useCaseColors[example.useCase]}`}>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Live Preview</CardTitle>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={example.url} target="_blank">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <MediaPreview example={example} />
                          
                          {/* Action button */}
                          <div className="p-4 bg-slate-50 border-t">
                            <Button variant="outline" size="sm" asChild className="w-full">
                              <Link href={example.url} target="_blank">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Explore Interactive Tool
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build something like this?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              These examples show what's possible when Earth science meets the right tools. 
              Let's talk about what you could build for your stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Schedule Discovery Call
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">
                  Learn About Our Approach
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
