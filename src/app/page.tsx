import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollAwareNavigation } from '@/components/layout/ScrollAwareNavigation'
import { 
  Globe, 
  Layers, 
  Zap, 
  Users, 
  Code, 
  BookOpen,
  ArrowRight,
  Play,
  Github,
  ExternalLink
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollAwareNavigation />
      
      {/* Add padding to account for fixed header */}
      <div className="pt-16">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">
                  Open Source • Community-Driven • Mission-Focused
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Connecting Earth science with
                <span className="text-blue-600"> the people who need it most</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We built eoViz to bridge the gap between groundbreaking Earth science and the communities, 
                policymakers, and researchers who can act on it. Open source tools for meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/examples">
                    <Play className="h-4 w-4 mr-2" />
                    Explore Examples
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">
                    Schedule Discovery Call
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Featured Demo Video */}
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
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <h3 className="font-semibold text-sm text-blue-900">Real Impact in Action</h3>
                    <p className="text-xs text-blue-700 mt-1">
                      See how storytelling helps emergency managers understand wildfire risk
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NASA Credit Section */}
      <section className="py-12 border-b bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              {/* NASA Logo */}
              <img 
                src="/logos/nasa-logo.svg" 
                alt="NASA" 
                className="w-16 h-16" 
              />
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Supported by NASA IMPACT
                </p>
                <p className="text-sm text-slate-600">
                  Years of building tools with NASA taught us that great Earth science 
                  often stays locked in academic papers. We created eoViz to change that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open tools for sharing Earth science that matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each tool emerged from conversations with researchers, emergency managers, and policy makers who needed better ways to share critical Earth science insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* eoStories */}
            <Card className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <Badge variant="outline">Stories</Badge>
                </div>
                <CardTitle>eoStories</CardTitle>
                <CardDescription>
                  Help people understand complex Earth science through compelling narratives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Transform research into accessible stories</li>
                  <li>• Combine maps, charts, and narrative</li>
                  <li>• Share across web, PDF, and presentations</li>
                  <li>• Built for scientists and communicators</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                  <Link href="/products/eostories">
                    Learn more <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* eoComponents */}
            <Card className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Code className="h-8 w-8 text-green-600" />
                  <Badge variant="outline">Components</Badge>
                </div>
                <CardTitle>eoComponents</CardTitle>
                <CardDescription>
                  Building blocks for developers who want to create their own Earth science tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• React components for maps, timelines, and visualizations</li>
                  <li>• Skip the boilerplate and focus on your unique requirements</li>
                  <li>• STAC/COG integration helpers included</li>
                  <li>• Perfect foundation for custom development</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                  <Link href="/products/eocomponents">
                    Explore component library <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* eoCatalogs */}
            <Card className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Layers className="h-8 w-8 text-purple-600" />
                  <Badge variant="outline">Catalogs</Badge>
                </div>
                <CardTitle>eoCatalogs</CardTitle>
                <CardDescription>
                  Create platforms where people can discover and access Earth science datasets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Make complex datasets discoverable</li>
                  <li>• Integrate stories with data access</li>
                  <li>• Connect researchers with resources</li>
                  <li>• Support institutional branding</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                  <Link href="/products/eocatalogs">
                    View examples <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Ecosystem Community Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Growing Community of Earth Science Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations worldwide are building Earth science communication tools using eoViz principles. 
              Explore what's possible when open data standards meet great design.
            </p>
          </div>

          {/* Horizontal scrolling showcase */}
          <div className="mb-8">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {/* Tool Preview 1 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-lg">🗺️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Climate Mapper</h3>
                    <p className="text-xs text-muted-foreground">Climate Research Institute</p>
                  </div>
                  <Badge variant="outline" size="sm" className="ml-auto">Simple</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Interactive climate data visualization with time-series analysis
                </p>
                <div className="flex gap-1">
                  <Badge variant="secondary" size="sm" className="text-xs">STAC</Badge>
                  <Badge variant="secondary" size="sm" className="text-xs">Embeddable</Badge>
                </div>
              </div>

              {/* Tool Preview 2 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-lg">🔥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Wildfire Analytics</h3>
                    <p className="text-xs text-muted-foreground">Emergency Response Labs</p>
                  </div>
                  <div className="ml-auto text-right">
                    <Badge variant="outline" size="sm">Advanced</Badge>
                    <div className="mt-1">
                      <Badge variant="outline" size="sm" className="text-xs bg-green-50">Built with eoComponents</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Real-time wildfire risk assessment and impact modeling
                </p>
                <div className="flex gap-1">
                  <Badge variant="secondary" size="sm" className="text-xs">Real-time</Badge>
                  <Badge variant="secondary" size="sm" className="text-xs">API</Badge>
                </div>
              </div>

              {/* Tool Preview 3 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-lg">🌊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Ocean Data Explorer</h3>
                    <p className="text-xs text-muted-foreground">Marine Science Consortium</p>
                  </div>
                  <Badge variant="outline" size="sm" className="ml-auto">Intermediate</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Comprehensive ocean data analysis with 3D visualization
                </p>
                <div className="flex gap-1">
                  <Badge variant="secondary" size="sm" className="text-xs">COG</Badge>
                  <Badge variant="secondary" size="sm" className="text-xs">3D Viz</Badge>
                </div>
              </div>

              {/* More tools indicator */}
              <div className="flex-shrink-0 w-80 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-dashed p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-gray-500 text-lg">+</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Many more tools</p>
                  <p className="text-xs text-gray-500">Browse the full ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/tools-ecosystem">
                Explore Community Tools <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From research to real-world action
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Built for Impact</h3>
                    <p className="text-muted-foreground">
                      Every tool we create is shaped by real challenges faced by emergency responders, 
                      policymakers, and researchers working to understand our changing planet.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Community-Driven</h3>
                    <p className="text-muted-foreground">
                      Open source means everyone benefits. Contribute code, share improvements, 
                      and help us build tools that serve the global Earth science community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Layers className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Your Infrastructure, Your Control</h3>
                    <p className="text-muted-foreground">
                      Self-hosted and modular by design. Use what you need, modify what you want, 
                      and maintain full control over your data and deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed">
                <CardContent className="p-8 text-center">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-200 h-20 rounded flex items-center justify-center">
                      <Globe className="h-8 w-8 text-blue-700" />
                    </div>
                    <div className="bg-green-200 h-20 rounded flex items-center justify-center">
                      <Layers className="h-8 w-8 text-green-700" />
                    </div>
                    <div className="bg-purple-200 h-20 rounded flex items-center justify-center">
                      <Code className="h-8 w-8 text-purple-700" />
                    </div>
                    <div className="bg-orange-200 h-20 rounded flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-orange-700" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Component showcase
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Ready to Get Started?</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's help your research reach the people who need it
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how eoViz works with your data, or talk with our team about your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">
                Schedule Discovery Call
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/examples">
                Explore Examples First
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logos/eoviz-logo.png" 
                  alt="eoViz" 
                  className="h-6 w-auto" 
                />
                <span className="font-bold">eoViz</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modular geospatial storytelling platform for Earth observation data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="hover:underline">eoStories</Link></li>
                <li><Link href="/products" className="hover:underline">eoComponents</Link></li>
                <li><Link href="/products" className="hover:underline">eoCatalogs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:underline">Documentation</Link></li>
                <li><Link href="/examples" className="hover:underline">Examples</Link></li>
                <li><Link href="/workshop" className="hover:underline">Workshop</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tools-ecosystem" className="hover:underline">Tools Ecosystem</Link></li>
                <li><Link href="#" className="hover:underline">GitHub</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <div>
              © 2025 eoViz. Open source tools for Earth observation storytelling.
            </div>
            <div>
              Built with support from NASA IMPACT and the Earth Science Data Systems Program. 
              Part of the global effort to make Earth science data more accessible and actionable.
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}
