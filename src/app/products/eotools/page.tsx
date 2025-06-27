import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { PageLayout } from '@/components/layout/shared'
import { 
  Code,
  CheckCircle,
  Zap,
  DollarSign,
  Clock,
  Target,
  Building,
  Database
} from 'lucide-react'

export default function EoToolsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mx-auto mb-6 p-4 bg-green-100 rounded-full w-fit">
              <Code className="h-12 w-12 text-green-600" />
            </div>
            <Badge variant="secondary" className="mb-4">
              Custom Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-green-600">eoTools</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get custom visualization tools faster and cheaper than building from scratch. 
              Perfect for organizations with unique datasets who need specialized interfaces 
              beyond what Google Earth Engine or standard GIS tools can provide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/sandbox">
                  See Example Tools
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs">
                  View Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools in Action */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools Built for Real Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Born from years of NASA-funded research, these tools help organizations turn complex 
              Earth science data into clear, actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-48 object-cover" 
                >
                  <source src="/videos/demo-fire-event-explorer.mp4" type="video/mp4" />
                </video>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Wildfire Risk Explorer</h3>
                  <p className="text-muted-foreground mb-4">
                    When wildfires threaten communities, emergency managers need clear, immediate access 
                    to risk data. This tool transforms satellite data into actionable intelligence.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="outline">Emergency Response</Badge>
                    <Badge variant="outline">Active Use</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Custom features: Real-time fire progression tracking, evacuation route planning, 
                    resource allocation mapping, and automated alert systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-48 object-cover" 
                >
                  <source src="/videos/demo-mobile-climate-mapper.mp4" type="video/mp4" />
                </video>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mobile Climate Mapper</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive climate scenarios with global animations designed for mobile-first 
                    engagement. Helps communities understand local climate impacts.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="outline">Public Engagement</Badge>
                    <Badge variant="outline">Mobile-First</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Custom features: Location-specific projections, scenario comparison tools, 
                    touchscreen-optimized interface, and shareable local reports.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Each tool you see here emerged from conversations with researchers, emergency managers, 
              and policy makers who needed better ways to share critical Earth science insights.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">Global</div>
                <div className="text-sm text-muted-foreground">Reach & Access</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">Open</div>
                <div className="text-sm text-muted-foreground">Source & Community</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-1">Impact</div>
                <div className="text-sm text-muted-foreground">Driven & Measurable</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-1">Mission</div>
                <div className="text-sm text-muted-foreground">Focused & Collaborative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why choose eoTools?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the custom visualization tools you need without the typical time and cost barriers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Faster Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  Skip months of foundational development. We provide proven components 
                  so you can focus on what makes your tool unique.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Pre-built map and chart components</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Tested user interface patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Performance-optimized architecture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Cost-Effective Alternative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  Avoid expensive GIS team buildouts or restrictive platform licensing. 
                  Get enterprise-quality tools at a fraction of the cost.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>No per-user licensing fees</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Open source foundations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Self-hosted deployment options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Purpose-Built Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  Move beyond Google Earth Engine limitations and generic GIS interfaces. 
                  Get tools designed for your specific data and workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Custom data processing pipelines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Domain-specific visualizations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Workflow-optimized interfaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Database className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Organizations with Custom Datasets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  You have unique data that doesn't fit standard visualization tools. 
                  Your datasets need specialized interfaces that highlight what matters most.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Teams Outgrowing Google Earth Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Google Earth Engine works for analysis, but you need public-facing tools 
                  with custom branding, workflows, and user experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Building className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Alternative to Expensive GIS Buildouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Your organization needs custom geospatial tools but can't justify 
                  the cost and time of building a full GIS development team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build your custom tool?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how eoTools can help you create the specialized visualization 
            interface your data deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sandbox">
                Explore Example Tools
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">
                Read Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
