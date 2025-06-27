import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/shared'
import { 
  Code, 
  CheckCircle, 
  BookOpen,
  Github,
  Zap,
  Layers,
  Settings,
  Palette,
  Database,
  Map,
  BarChart3,
  Filter
} from 'lucide-react'

export default function eoComponentsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              React Components Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              eoComponents
              <span className="text-green-600"> for Rapid Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building blocks for developers who want to create custom Earth science tools. 
              Skip the boilerplate and focus on your unique requirements with proven, production-ready components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tools-ecosystem">
                  <Code className="h-4 w-4 mr-2" />
                  See Components in Action
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
                <source src="/videos/demo-fire-event-explorer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                <h3 className="font-semibold text-lg text-green-900 mb-2">Fire Event Explorer - Built with eoComponents</h3>
                <p className="text-sm text-green-700">
                  This wildfire analysis tool was built using eoComponents in just 2 weeks, 
                  demonstrating how reusable components accelerate custom development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Production-ready components for Earth science tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build professional geospatial applications, 
              from interactive maps to advanced data filtering interfaces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Interactive Maps</CardTitle>
                <CardDescription>
                  High-performance mapping components with built-in STAC and COG support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mapbox GL JS and Leaflet integrations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>STAC API integration out of the box</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>COG rendering with dynamic band combinations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Data Visualization</CardTitle>
                <CardDescription>
                  Chart components optimized for time-series and geospatial data analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Time-series charts with zoom and pan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-dimensional data exploration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Statistical analysis widgets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Data Filters & Controls</CardTitle>
                <CardDescription>
                  Advanced filtering interfaces for complex Earth science datasets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Date range and temporal filtering</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Spatial bounding box selection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-criteria search interfaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Data Integration</CardTitle>
                <CardDescription>
                  Helpers for connecting to modern Earth science data infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>STAC catalog browsing and search</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>eoAPI and TiTiler integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Data caching and performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Design System</CardTitle>
                <CardDescription>
                  Consistent UI patterns and theming for professional applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tailwind CSS integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dark and light theme support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Accessible components by default</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Developer Experience</CardTitle>
                <CardDescription>
                  Tools and documentation that make development fast and enjoyable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>TypeScript definitions included</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Storybook component playground</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive examples and guides</span>
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
              Built for modern development teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              eoComponents serves organizations that need custom Earth science tools 
              but want to avoid the time and cost of building everything from scratch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">In-House Development Teams</h3>
              <p className="text-muted-foreground mb-6">
                Organizations with React developers who need to build custom Earth science 
                tools but don't want to reinvent geospatial components.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Faster development cycles</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Focus on unique business logic</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Production-ready components</span>
                </li>
              </ul>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layers className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Research Organizations</h3>
              <p className="text-muted-foreground mb-6">
                Teams that need more flexibility than off-the-shelf tools provide 
                but lack the resources for full custom development.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Cost-effective customization</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Academic-friendly licensing</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Research workflow integration</span>
                </li>
              </ul>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Consulting & Agencies</h3>
              <p className="text-muted-foreground mb-6">
                Development teams building Earth science tools for clients who need 
                to deliver high-quality solutions quickly and reliably.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Faster project delivery</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Professional quality assurance</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Client customization options</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="get-started" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to start building?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get started with eoComponents and join the community of developers building 
                the next generation of Earth science communication tools.
              </p>
              <div className="space-y-4">
                <Button size="lg" asChild className="w-full">
                  <Link href="/docs">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Documentation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Repository
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Need Custom Development?</h3>
              <p className="text-muted-foreground mb-6">
                Many organizations in our ecosystem work with Development Seed for custom tool development. 
                We help teams build Earth science communication tools that integrate seamlessly with modern data infrastructure.
              </p>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Custom eoComponents implementations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Integration with your existing systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Training and technical support</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
