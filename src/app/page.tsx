import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <div className="mr-6">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logos/eoviz-logo.png" 
                alt="eoViz" 
                className="h-8 w-auto" 
              />
              <span className="font-bold text-xl">eoViz</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/products" className="hover:text-foreground/80">Products</Link>
            <Link href="/docs" className="hover:text-foreground/80">Documentation</Link>
            <Link href="/sandbox" className="hover:text-foreground/80">Sandbox</Link>
            <Link href="/workshop" className="hover:text-foreground/80">Workshop</Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sandbox">Explore Examples</Link>
            </Button>
          </div>
        </div>
      </nav>

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
                  <Link href="/sandbox">
                    <Play className="h-4 w-4 mr-2" />
                    Explore Examples
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/docs">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Learn How
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

      {/* Featured Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools Built for Real Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Born from years of NASA-funded research, eoViz helps organizations turn complex 
              Earth science data into clear, actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
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
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Emergency Response</Badge>
                    <Badge variant="outline">Active Use</Badge>
                  </div>
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
                  <source src="/videos/demo-data-catalog.mp4" type="video/mp4" />
                </video>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Climate Data Portal</h3>
                  <p className="text-muted-foreground mb-4">
                    Policymakers need accessible climate data to make informed decisions. This portal 
                    organizes complex datasets into discoverable, understandable resources.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Policy Support</Badge>
                    <Badge variant="outline">Global Access</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              Three Ways to Solve Your Challenge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're crafting stories, building tools, or organizing data, 
              we've built components that work together or stand alone.
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
                <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
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
                  Build interactive tools that help people explore and understand Earth data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Map widgets that work out of the box</li>
                  <li>• Time-series tools for trend analysis</li>
                  <li>• Designed for rapid prototyping</li>
                  <li>• From simple demos to production tools</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Explore components <ArrowRight className="h-4 w-4 ml-1" />
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
                <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform">
                  View examples <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
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

      {/* Workshop CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Coming Next Month</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the eoViz Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a researcher with a story to tell, a developer building tools, 
            or an organization serving communities—let's build something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/workshop">
                Learn at Our Workshop
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                Contribute on GitHub
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
                <li><Link href="/sandbox" className="hover:underline">Sandbox</Link></li>
                <li><Link href="/workshop" className="hover:underline">Workshop</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">GitHub</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
                <li><Link href="#" className="hover:underline">Support</Link></li>
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
  )
}