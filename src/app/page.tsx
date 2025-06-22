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
        <div className="container flex h-16 items-center">
          <div className="mr-6">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6" />
              <span className="font-bold text-xl">EOViz</span>
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
              <Link href="/sandbox">Try Demo</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4">
                Open Source • Self-Hosted • Modular
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                The fastest way to deploy 
                <span className="text-blue-600"> Earth observation</span> communication
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Modular geospatial storytelling platform that connects great science with broader audiences. 
                Deploy like Jekyll, customize like React.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/sandbox">
                    <Play className="h-4 w-4 mr-2" />
                    Try Live Demo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/docs">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Documentation
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for demo embed */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed">
                <CardContent className="p-8 text-center">
                  <Globe className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <p className="text-sm text-muted-foreground">
                    Interactive demo will be embedded here
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Suite Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modular Product Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three complementary products that work independently or together, 
              following the proven eoAPI architecture pattern.
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
                  Narrative-driven content framework with engaging geospatial tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• React/MDX storytelling components</li>
                  <li>• Integrated geospatial widgets</li>
                  <li>• White-label customization</li>
                  <li>• Export to multiple formats</li>
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
                  Reusable React components for custom geospatial applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Pre-built visualization components</li>
                  <li>• Time-series and animation tools</li>
                  <li>• 80% solution with opinionated defaults</li>
                  <li>• Declarative programming style</li>
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
                  Complete websites that organize data, tools, and stories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• STAC-native data discovery</li>
                  <li>• Organization branding</li>
                  <li>• Integrated content management</li>
                  <li>• Cohesive user experience</li>
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
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From data to engagement in minutes, not months
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Fast Deployment</h3>
                    <p className="text-muted-foreground">
                      Deploy like Jekyll with simple configuration, but get React-level customization when you need it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Audience Connection</h3>
                    <p className="text-muted-foreground">
                      Connect great science with broader audiences beyond scientist-to-scientist communication.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Layers className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Modular Architecture</h3>
                    <p className="text-muted-foreground">
                      Use individual components or the full suite. Self-hosted, open-source, and designed for your workflow.
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
                    Interactive component showcase coming soon
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="py-20 bg-blue-50">
        <div className="container text-center">
          <Badge variant="secondary" className="mb-4">Coming Next Month</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Workshop: Building Stories with EOViz
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for a hands-on workshop where we'll create compelling geospatial stories 
            using EOViz tools. Perfect for researchers, communicators, and developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/workshop">
                Reserve Your Spot
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/sandbox">
                <ExternalLink className="h-4 w-4 mr-2" />
                Try Workshop Preview
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-5 w-5" />
                <span className="font-bold">EOViz</span>
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
          <div className="text-center text-sm text-muted-foreground">
            © 2025 EOViz. Open source software for Earth observation storytelling.
          </div>
        </div>
      </footer>
    </div>
  )
}