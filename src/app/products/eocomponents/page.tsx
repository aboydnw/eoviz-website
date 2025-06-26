import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Code, 
  Blocks,
  Wrench,
  ArrowRight,
  CheckCircle,
  Github,
  ExternalLink,
  Database,
  Map,
  BarChart3,
  Layers,
  Zap,
  Palette
} from 'lucide-react'

export default function eoComponentsPage() {
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
            <Link href="/tools-ecosystem" className="hover:text-foreground/80">Tools Ecosystem</Link>
            <Link href="/docs" className="hover:text-foreground/80">Documentation</Link>
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
              <Link href="/tools-ecosystem">Try Demo</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Developer Toolkit
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              eoComponents
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building blocks for developers who want to create their own Earth science tools. 
              React components, integration helpers, and design patterns that accelerate geospatial tool development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#get-started">
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/tools-ecosystem">
                  See Components in Action
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for development teams who want to build fast
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Skip the boilerplate and focus on your unique requirements. eoComponents provides 
              the foundation so you can concentrate on what makes your tool special.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Developers building custom Earth science tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start with proven components instead of building maps and data visualizations from scratch.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Organizations with in-house development teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accelerate your team's development while maintaining full control over your tools and data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Blocks className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Teams who need more flexibility than off-the-shelf tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customize every aspect of your tool while building on a solid, tested foundation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to build Earth science tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pre-built components, integration helpers, and design patterns that work together seamlessly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">React Component Library</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Map className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Interactive Maps</h4>
                    <p className="text-muted-foreground text-sm">
                      Map components with built-in layer management, controls, and responsive design patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Visualizations</h4>
                    <p className="text-muted-foreground text-sm">
                      Charts, timelines, and data filters optimized for Earth science datasets.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Layers className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">UI Patterns</h4>
                    <p className="text-muted-foreground text-sm">
                      Consistent interface components that work well for geospatial applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Integration Helpers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Database className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">STAC/COG Support</h4>
                    <p className="text-muted-foreground text-sm">
                      Utilities for connecting to cloud-native geospatial data sources with minimal configuration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance Optimization</h4>
                    <p className="text-muted-foreground text-sm">
                      Built-in best practices for handling large datasets and responsive user experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <Palette className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Design System</h4>
                    <p className="text-muted-foreground text-sm">
                      Consistent theming and styling that can be customized to match your organization's branding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See eoComponents in action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools built by the community using eoComponents as their foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-lg">🔥</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Wildfire Analytics</CardTitle>
                    <CardDescription className="text-sm">Emergency Response Labs</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" size="sm" className="w-fit bg-green-50">Built with eoComponents</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time wildfire risk assessment using eoComponents map and timeline widgets.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed bg-gradient-to-r from-gray-50 to-gray-100">
              <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
                <Code className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">Your Tool Here</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Build your own Earth science tool using eoComponents.
                </p>
                <Button variant="outline" size="sm">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
                <ArrowRight className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">Explore More</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  See all tools built with eoComponents in our ecosystem.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tools-ecosystem">
                    Browse Ecosystem
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="get-started" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with eoComponents and join the community of developers building 
            the next generation of Earth science communication tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/docs">
                View Documentation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                GitHub Repository
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t">
            <p className="text-muted-foreground mb-4">
              Need help getting started or have questions about implementation?
            </p>
            <Button variant="outline">
              Contact Development Seed Team
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
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tools-ecosystem" className="hover:underline">Tools Ecosystem</Link></li>
                <li><Link href="#" className="hover:underline">GitHub</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:underline">Documentation</Link></li>
                <li><Link href="/workshop" className="hover:underline">Workshop</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <div>
              © 2025 eoViz. Open source software for Earth observation storytelling.
            </div>
            <div>
              Development supported by NASA IMPACT and the Earth Science Data Systems Program.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
