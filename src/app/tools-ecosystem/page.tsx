import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter,
  ExternalLink,
  Github,
  Globe,
  Zap,
  Users,
  CheckCircle,
  Code,
  Database,
  Map,
  BarChart3,
  ArrowRight,
  Plus
} from 'lucide-react'

export default function ToolsEcosystemPage() {
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
            <Link href="/tools-ecosystem" className="text-foreground">Tools Ecosystem</Link>
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
              Community Marketplace
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Tools Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover community-built tools that share eoViz principles. Production-ready Earth science tools 
              from organizations worldwide, all featuring excellent documentation, easy deployment, and 
              commitment to open data standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#browse-tools">
                  Browse Tools
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#submit-tool">
                  Submit Your Tool
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">For eoViz Users</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Production-Ready</h3>
                    <p className="text-muted-foreground text-sm">
                      Battle-tested tools, not prototypes. Each tool has been used in real projects 
                      and maintained by active development teams.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Integration-Friendly</h3>
                    <p className="text-muted-foreground text-sm">
                      Built to work together and with eoViz products. Many tools can be embedded 
                      in eoStories or connected to eoCatalogs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Code className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Open Source</h3>
                    <p className="text-muted-foreground text-sm">
                      Deploy anywhere, modify as needed. Full source code available with 
                      clear licensing and contribution guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Well-Documented</h3>
                    <p className="text-muted-foreground text-sm">
                      Clear setup guides, API documentation, and examples. Get started 
                      quickly without guessing how things work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">For Tool Providers</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expanded Reach</h3>
                    <p className="text-muted-foreground text-sm">
                      Showcase your tools to the growing eoViz community. Connect with researchers, 
                      developers, and organizations who could benefit from your work.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Standards Recognition</h3>
                    <p className="text-muted-foreground text-sm">
                      Demonstrate your commitment to modern geospatial practices and 
                      open data standards to the Earth science community.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Community Building</h3>
                    <p className="text-muted-foreground text-sm">
                      Connect with other developers solving similar problems. Share knowledge 
                      and collaborate on advancing Earth science tooling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Leadership</h3>
                    <p className="text-muted-foreground text-sm">
                      Influence emerging patterns in Earth science tooling. Help shape 
                      the future of geospatial communication tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Browser Section */}
      <section id="browse-tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse Community Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Use them in your projects or let them inspire your own custom development
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-8 p-6 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter & Search Tools</span>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Complexity Level</label>
                <div className="space-y-1">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Simple</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Intermediate</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Advanced</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Data Type</label>
                <div className="space-y-1">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Satellite Imagery</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Climate Data</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Geospatial Vectors</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Use Case</label>
                <div className="space-y-1">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Visualization</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Analysis</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Communication</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Integration</label>
                <div className="space-y-1">
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Embeddable</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">API Available</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">Themeable</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Tool Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Tool Card 1 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Map className="h-12 w-12 text-blue-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Climate Mapper</CardTitle>
                    <CardDescription className="text-sm">by Climate Research Institute</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">Simple</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Interactive climate data visualization tool with time-series analysis and 
                  scenario comparison features.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" size="sm">STAC</Badge>
                  <Badge variant="outline" size="sm">Climate Data</Badge>
                  <Badge variant="outline" size="sm">Embeddable</Badge>
                </div>
                
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

            {/* Tool Card 2 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <BarChart3 className="h-12 w-12 text-green-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Wildfire Analytics</CardTitle>
                    <CardDescription className="text-sm">by Emergency Response Labs</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-xs">Intermediate</Badge>
                    <div className="mt-1">
                      <Badge variant="outline" size="sm" className="text-xs">Built with eoComponents</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Real-time wildfire risk assessment and impact modeling for emergency 
                  management teams.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" size="sm">Satellite</Badge>
                  <Badge variant="outline" size="sm">Real-time</Badge>
                  <Badge variant="outline" size="sm">API</Badge>
                </div>
                
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

            {/* Tool Card 3 */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <Database className="h-12 w-12 text-purple-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Ocean Data Explorer</CardTitle>
                    <CardDescription className="text-sm">by Marine Science Consortium</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">Advanced</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Comprehensive ocean data analysis platform with 3D visualization and 
                  advanced filtering capabilities.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" size="sm">COG</Badge>
                  <Badge variant="outline" size="sm">Ocean Data</Badge>
                  <Badge variant="outline" size="sm">3D Viz</Badge>
                </div>
                
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

            {/* More tools message */}
            <Card className="group hover:shadow-lg transition-shadow border-dashed">
              <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
                <Plus className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">More Tools Coming</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're actively curating and adding high-quality Earth science tools to the ecosystem.
                </p>
                <Button variant="outline" size="sm">
                  Submit Your Tool
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tool Submission Section */}
      <section id="submit-tool" className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Submit Your Tool
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have a tool that exemplifies great Earth science communication? We feature tools with 
            excellent documentation, easy deployment, and open data standards.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div>
              <h3 className="font-semibold mb-4">Submission Criteria</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Open source with clear licensing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Production-ready with good documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Uses open data sources (STAC, COG, public APIs)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Demonstrates Earth science communication value</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Responsive design and accessibility considerations</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Submission Process</h3>
              <ol className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <span className="text-sm">Submit GitHub repository link and live demo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <span className="text-sm">Development Seed team reviews against criteria</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <span className="text-sm">Tool featured in ecosystem with attribution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <span className="text-sm">Optional: Guidance on eoComponents integration</span>
                </li>
              </ol>
            </div>
          </div>

          <Button size="lg">
            Submit Tool for Review
          </Button>
        </div>
      </section>

      {/* Custom Development CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Custom Development Services
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Many organizations in our ecosystem work with Development Seed for custom tool development. 
            See something you like but need it tailored to your specific needs? We specialize in building 
            Earth science communication tools that integrate seamlessly with modern data infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">
                View Our Products
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Discuss Your Custom Tool Project
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
        </div>
      </footer>
    </div>
  )
}
