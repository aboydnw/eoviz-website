import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Layers,
  ArrowRight,
  CheckCircle,
  Search,
  Globe,
  Building,
  Users,
  Database,
  Palette,
  Github
} from 'lucide-react'

export default function EoCatalogsPage() {
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
            <div className="mx-auto mb-6 p-4 bg-purple-100 rounded-full w-fit">
              <Layers className="h-12 w-12 text-purple-600" />
            </div>
            <Badge variant="secondary" className="mb-4">
              Data Organization Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-purple-600">eoCatalogs</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create complete websites that organize your data, tools, and stories into 
              discoverable, accessible platforms. Perfect for research organizations 
              managing complex datasets and multi-project coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/sandbox">
                  View Example Catalogs
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
              See eoCatalogs in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete data portal organizing complex datasets for discovery and access
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
                <source src="/videos/demo-data-catalog.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50">
                <h3 className="font-semibold text-purple-900 mb-2">Climate Data Portal</h3>
                <p className="text-purple-700">
                  This catalog organizes complex climate datasets into discoverable, 
                  understandable resources that support evidence-based decision making.
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
              Everything you need to organize and share data
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for organizations that manage multiple datasets, research projects, 
              and need to make complex information discoverable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Dataset Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Make complex datasets easily discoverable through search, filters, and organized collections.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Advanced search and filtering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Metadata-driven organization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>STAC-native compatibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Organization Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Custom themes and branding that reflect your organization's identity and mission.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Custom color schemes and logos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Configurable layout options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Institution-specific messaging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Integrated Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Seamlessly connect datasets with stories and tools for a unified user experience.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Link data to eoStories narratives</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Embed eoTools for data exploration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Unified content management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud-Native Integration */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Especially powerful with cloud-native data
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                eoCatalogs shines when you're already using cloud-optimized data formats like STAC and COG. 
                If you're considering eoAPI for your data infrastructure, eoCatalogs provides the perfect 
                frontend for discovery and access.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Database className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Perfect with eoAPI</h3>
                    <p className="text-muted-foreground text-sm">
                      Instantly organize and visualize petabyte-scale datasets managed through 
                      eoAPI's STAC catalogs and cloud-optimized processing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">But works with any data</h3>
                    <p className="text-muted-foreground text-sm">
                      Don't have cloud-native infrastructure yet? Start with simpler datasets 
                      and scale up as your data management needs grow.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Scales with your organization</h3>
                    <p className="text-muted-foreground text-sm">
                      From single research projects to institutional data portals managing 
                      hundreds of datasets across multiple domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-dashed">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <h3 className="font-semibold text-lg">Catalog Architecture</h3>
                    </div>
                    
                    <div className="bg-purple-200 h-16 rounded flex items-center justify-center text-sm font-medium">
                      eoCatalogs Frontend
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-200 h-12 rounded flex items-center justify-center text-xs font-medium">
                        eoStories
                      </div>
                      <div className="bg-green-200 h-12 rounded flex items-center justify-center text-xs font-medium">
                        eoTools
                      </div>
                    </div>
                    
                    <div className="bg-gray-300 h-12 rounded flex items-center justify-center text-sm font-medium">
                      Data Layer (eoAPI, STAC, or custom)
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Unified discovery experience for complex datasets
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Building className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Research Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Universities, national labs, and research institutions managing 
                  multiple projects and datasets that need public discovery interfaces.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Database className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>Data Portal Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Organizations responsible for making scientific datasets accessible 
                  to researchers, policymakers, and the public.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Multi-Project Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Programs managing multiple research initiatives that need 
                  unified presentation and cross-project data discovery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to organize your data?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a unified platform that makes your datasets discoverable, 
            accessible, and connected to the stories that explain their importance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sandbox">
                View Example Catalogs
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
