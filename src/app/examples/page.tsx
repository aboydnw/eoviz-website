'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollAwareNavigation } from '@/components/layout/ScrollAwareNavigation'
import { 
  ExternalLink, 
  BookOpen, 
  Code, 
  Layers,
  MapPin,
  Flame,
  Globe,
  Satellite
} from 'lucide-react'

const examples = [
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
    embedUrl: 'https://earth.gov/ghgcenter/stories/vulcan',
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
    embedUrl: 'https://www.earthdata.nasa.gov/dashboard/tools/fire-event-explorer',
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
    embedUrl: 'https://www.earthdata.nasa.gov/dashboard/',
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
    embedUrl: 'https://earth.gov/',
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
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                Climate Policy
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Flame className="h-3 w-3 mr-1" />
                Emergency Response
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Satellite className="h-3 w-3 mr-1" />
                Scientific Research
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Globe className="h-3 w-3 mr-1" />
                Education & Outreach
              </Badge>
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
                        <Link href={example.embedUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Explore Full Version
                        </Link>
                      </Button>
                    </div>

                    {/* Screenshot/Video Preview */}
                    <div className={`${isReverse ? 'lg:col-start-1' : ''}`}>
                      <Card className={`overflow-hidden ${useCaseColors[example.useCase]}`}>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Live Example</CardTitle>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={example.embedUrl} target="_blank">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <Link href={example.embedUrl} target="_blank" className="block">
                            <div className="relative group cursor-pointer">
                              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg overflow-hidden relative">
                                {/* Placeholder for screenshot - you can replace with actual screenshots */}
                                <div className="w-full h-full flex items-center justify-center bg-white">
                                  <div className="text-center space-y-4">
                                    <IconComponent className={`h-16 w-16 text-${example.color}-400 mx-auto`} />
                                    <div>
                                      <p className="text-lg font-semibold text-slate-700">Interactive Tool</p>
                                      <p className="text-sm text-slate-500">Click to explore live version</p>
                                    </div>
                                  </div>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                                      <ExternalLink className="h-6 w-6 text-slate-700" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
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

        {/* Footer placeholder - you can add your existing footer here */}
      </div>
    </div>
  )
}
