import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  BookOpen,
  ArrowRight,
  CheckCircle,
  FileText,
  Presentation,
  Share2,
  Zap,
  Users,
  Github
} from 'lucide-react'

export default function EoStoriesPage() {
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
              <Link href="/sandbox">Try Demo</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit">
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
            <Badge variant="secondary" className="mb-4">
              Narrative Framework
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-blue-600">eoStories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform complex Earth science research into compelling narratives that reach 
              the people who need them most. Combine interactive maps, charts, and storytelling 
              in one powerful framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/sandbox">
                  Try eoStories Demo
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

      {/* Demo Video */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              See eoStories in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Real storytelling helping emergency managers understand wildfire risk
            </p>
          </div>
          
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
                <h3 className="font-semibold text-blue-900 mb-2">Real Impact in Action</h3>
                <p className="text-blue-700">
                  This story combines satellite data, risk analysis, and clear narrative to help 
                  emergency managers make critical decisions during wildfire season.
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
              Everything you need to tell your story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for research communicators, scientists, and organizations who need to 
              share Earth science insights with broader audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Rich Content Blocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Combine text, images, maps, and interactive charts in a flowing narrative structure.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Interactive maps and visualizations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Time-series animations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Custom data visualizations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Presentation className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Multi-Format Publishing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  One story, multiple ways to share. Publish to web, PDF, or presentation formats.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Responsive web stories</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>PDF report generation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Presentation slides</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Share2 className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Built for Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Optimized for discovery and engagement across all platforms and devices.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Search engine optimized</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Social media previews</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Mobile-first design</span>
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
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Research Communication Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Transform technical research into accessible stories that reach policy makers, 
                  journalists, and the public.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Science Outreach Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Create compelling narratives that help communities understand environmental 
                  challenges and solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Policy Briefing Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Present complex Earth science data in formats that support evidence-based 
                  decision making.
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
            Ready to tell your story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start creating compelling Earth science narratives that reach the people 
            who need them most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sandbox">
                Try eoStories Demo
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
                <li><Link href="/products/eostories" className="hover:underline">eoStories</Link></li>
                <li><Link href="/products/eotools" className="hover:underline">eoTools</Link></li>
                <li><Link href="/products/eocatalogs" className="hover:underline">eoCatalogs</Link></li>
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
