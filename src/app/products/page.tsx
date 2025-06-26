import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/shared'
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
    <PageLayout>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Modular Architecture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Open source tools for 
              <span className="text-blue-600"> research organizations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Turn your geospatial data into compelling stories, custom visualization tools, 
              and organized data platforms. Self-hosted, so your data stays under your control.
            </p>
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
                  <Link href="/products/eostories">
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
                  Building blocks for developers who want to create their own Earth science tools
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
                      <span>Developers building custom Earth science tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Organizations with in-house development teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Teams who need more flexibility than off-the-shelf tools</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• React components for maps, timelines, data filters</li>
                    <li>• STAC/COG integration helpers included</li>
                    <li>• Design system with consistent UI patterns</li>
                    <li>• Skip the boilerplate and focus on unique requirements</li>
                    <li>• Documentation and examples included</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button className="w-full group-hover:bg-green-700 transition-colors" asChild>
                    <Link href="/products/eocomponents">
                      View Component Library <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/tools-ecosystem">
                      See Components in Action
                    </Link>
                  </Button>
                </div>
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
                  <Link href="/products/eocatalogs">
                    View Examples <ArrowRight className="h-4 w-4 ml-2" />
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
                Works seamlessly with modern geospatial data
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                eoViz naturally extends cloud-native geospatial best practices. If you're already 
                using cloud-optimized data formats like STAC and COG, eoViz will feel like a 
                natural next step. But you don't need a full data infrastructure to get started.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cloud-Native Ready</h3>
                    <p className="text-muted-foreground text-sm">
                      Perfect companion to eoAPI and STAC workflows. Instantly visualize analysis-ready, 
                      cloud-optimized datasets without additional processing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Palette className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Flexible Data Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Start simple with CSV or GeoJSON files. Scale up to petabyte-scale satellite 
                      data as your needs grow. No infrastructure overhaul required.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Deploy Anywhere</h3>
                    <p className="text-muted-foreground text-sm">
                      Modern web architecture works with any hosting platform. Self-hosted control 
                      with cloud-scale performance when you need it.
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
            Start sharing your research impact
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join research organizations using eoViz to turn complex geospatial data 
            into clear, compelling communications that drive real-world action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/examples">
                Explore Examples
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tools-ecosystem">
                Explore Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}