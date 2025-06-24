import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Globe, 
  Layers, 
  Code, 
  BookOpen,
  ArrowRight,
  CheckCircle,
  Zap,
  Palette,
  Database,
  Wrench,
  Users,
  Rocket,
  Github,
  Download
} from 'lucide-react'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Same as homepage */}
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
            <Link href="/products" className="text-foreground">Products</Link>
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
            <Badge variant="secondary" className="mb-4">
              Modular Architecture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Three approaches to 
              <span className="text-blue-600"> connecting science with people</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you need to tell a compelling story, build an interactive tool, or organize 
              complex datasets, we've created components that solve real communication challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Tools in Action Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See real eoViz implementations solving complex geospatial challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto" 
                  >
                    <source src="/videos/demo-mobile-climate-mapper.mp4" type="video/mp4" />
                  </video>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Mobile Climate Mapper</h3>
                    <p className="text-sm text-muted-foreground">
                      Interactive climate scenarios with global animations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Solving real challenges</h3>
                <p className="text-muted-foreground mb-6">
                  Each tool you see here emerged from conversations with researchers, emergency managers, 
                  and policy makers who needed better ways to share critical Earth science insights.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
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
        </div>
      </section>

      {/* Product Overview Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            
            {/* eoStories */}
            <Card className="relative group hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <Badge variant="outline" className="w-fit mx-auto mb-2">Stories</Badge>
                <CardTitle className="text-2xl">eoStories</CardTitle>
                <CardDescription className="text-base">
                  Narrative-driven content framework with engaging geospatial tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-4">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-32 object-cover rounded" 
                  >
                    <source src="/videos/demo-stories.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Perfect for:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Research communication teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Science outreach organizations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Policy briefing and reports</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Story components for web and print</li>
                    <li>• Interactive maps and charts</li>
                    <li>• Custom branding and themes</li>
                    <li>• Export to PDF, web, presentations</li>
                    <li>• Search engine optimized</li>
                  </ul>
                </div>

                <Button className="w-full group-hover:bg-blue-700 transition-colors" asChild>
                  <Link href="/sandbox">
                    Try eoStories <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* eoComponents */}
            <Card className="relative group hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Code className="h-8 w-8 text-green-600" />
                </div>
                <Badge variant="outline" className="w-fit mx-auto mb-2">Components</Badge>
                <CardTitle className="text-2xl">eoComponents</CardTitle>
                <CardDescription className="text-base">
                  Reusable React components for custom geospatial applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-4">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-32 object-cover rounded" 
                  >
                    <source src="/videos/demo-fire-event-explorer.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Perfect for:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Frontend developers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Custom application builders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Rapid prototyping teams</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ready-to-use map and chart widgets</li>
                    <li>• Time-slider and animation tools</li>
                    <li>• Works out-of-the-box with smart defaults</li>
                    <li>• Simple configuration, powerful results</li>
                    <li>• Full TypeScript support included</li>
                  </ul>
                </div>

                <Button className="w-full group-hover:bg-green-700 transition-colors" asChild>
                  <Link href="/sandbox">
                    Explore Components <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* eoCatalogs */}
            <Card className="relative group hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Layers className="h-8 w-8 text-purple-600" />
                </div>
                <Badge variant="outline" className="w-fit mx-auto mb-2">Catalogs</Badge>
                <CardTitle className="text-2xl">eoCatalogs</CardTitle>
                <CardDescription className="text-base">
                  Complete websites that organize data, tools, and stories
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-4">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-32 object-cover rounded" 
                  >
                    <source src="/videos/demo-data-catalog.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Perfect for:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Research organizations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Data portal managers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Multi-project coordination</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Organize and discover your datasets</li>
                    <li>• Organization branding and themes</li>
                    <li>• Integrated content management</li>
                    <li>• Unified user experience</li>
                    <li>• Multi-project coordination</li>
                  </ul>
                </div>

                <Button className="w-full group-hover:bg-purple-700 transition-colors" asChild>
                  <Link href="/sandbox">
                    View Examples <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Approaches */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're exploring on your own or need guidance, we're here to help you succeed 
              with open source tools and collaborative support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Light Customization */}
            <Card>
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Community</CardTitle>
                <CardDescription>Explore, learn, and contribute with community support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">~10 lines</div>
                  <p className="text-sm text-muted-foreground">of configuration code</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Download and start building</li>
                  <li>• Follow documentation guides</li>
                  <li>• Join community discussions</li>
                  <li>• Contribute improvements</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/docs">
                    <Download className="h-4 w-4 mr-2" />
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Medium Customization */}
            <Card>
              <CardHeader className="text-center">
                <Wrench className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Collaboration</CardTitle>
                <CardDescription>Work together with our team for custom solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">~1 week</div>
                  <p className="text-sm text-muted-foreground">implementation time</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Collaborative development</li>
                  <li>• Tailored tool creation</li>
                  <li>• Knowledge sharing sessions</li>
                  <li>• Ongoing partnership</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#contact">
                    <Users className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Heavy Customization */}
            <Card>
              <CardHeader className="text-center">
                <Rocket className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Partnership</CardTitle>
                <CardDescription>Deep collaboration for institutional transformation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">~1 month</div>
                  <p className="text-sm text-muted-foreground">development timeline</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Embedded team collaboration</li>
                  <li>• Institutional capacity building</li>
                  <li>• Long-term strategic alignment</li>
                  <li>• Community impact focus</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#contact">
                    <Rocket className="h-4 w-4 mr-2" />
                    Begin Collaboration
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built on proven architecture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                eoViz follows the same modular pattern as other successful NASA Earth observation 
                tools. Each component works independently but integrates seamlessly when needed.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data Layer</h3>
                    <p className="text-muted-foreground text-sm">
                      Compatible with standard geospatial data formats and any satellite or Earth observation data source.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Palette className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Presentation Layer</h3>
                    <p className="text-muted-foreground text-sm">
                      Modern web components optimized for maps, charts, and interactive storytelling.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Deployment Layer</h3>
                    <p className="text-muted-foreground text-sm">
                      Deploy to Vercel, Netlify, AWS, or any hosting platform. Self-hosted and open source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <h3 className="font-semibold text-lg">eoViz Architecture</h3>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-blue-200 h-16 rounded flex items-center justify-center text-xs font-medium">
                        eoStories
                      </div>
                      <div className="bg-green-200 h-16 rounded flex items-center justify-center text-xs font-medium">
                        eoComponents
                      </div>
                      <div className="bg-purple-200 h-16 rounded flex items-center justify-center text-xs font-medium">
                        eoCatalogs
                      </div>
                    </div>
                    
                    <div className="bg-gray-300 h-12 rounded flex items-center justify-center text-sm font-medium">
                      Shared Infrastructure (eoAPI, STAC, etc.)
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Modular, independently deployable, better together
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to make an impact?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our examples, dive into the documentation, or reach out to discuss 
            how eoViz can help your organization share Earth science more effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sandbox">
                Explore Examples
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

      {/* Footer - Same as homepage */}
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
              © 2025 eoViz. Open source software for Earth observation storytelling.
            </div>
            <div>
              Development supported by NASA IMPACT and the Earth Science Data Systems Program. 
              Built on the foundation of the VEDA platform and years of NASA-funded research.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}