import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/shared'
import { 
  Search, 
  BookOpen,
  Code,
  Database,
  Layers,
  Globe,
  ArrowRight,
  ExternalLink,
  Github,
  FileText,
  Zap,
  Shield,
  Users,
  Settings,
  BarChart3,
  Cloud
} from 'lucide-react'

export default function DocsPage() {
  return (
    <PageLayout>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Complete Documentation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              eoViz Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Complete documentation for the eoViz ecosystem. Get started with storytelling, 
              components, or catalogs, and learn about modern Earth science data standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Product */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Product
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each eoViz product serves different needs. Start with the documentation 
              that matches your role and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* eoStories */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <Badge variant="outline">Content Creation</Badge>
                </div>
                <CardTitle className="text-xl">eoStories Documentation</CardTitle>
                <CardDescription>
                  Learn to create compelling Earth science narratives with embedded data visualizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• What is eoStories</li>
                  <li>• Creating Your First Story</li>
                  <li>• Story Structure & Templates</li>
                  <li>• Embedding Data & Visualizations</li>
                  <li>• Publishing & Sharing</li>
                </ul>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Docs
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* eoComponents */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Code className="h-8 w-8 text-green-600" />
                  <Badge variant="outline">Developer Library</Badge>
                </div>
                <CardTitle className="text-xl">eoComponents Documentation</CardTitle>
                <CardDescription>
                  React component library for building custom Earth science applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Installation & Setup</li>
                  <li>• Component Library Reference</li>
                  <li>• Integration Guide</li>
                  <li>• Customization & Theming</li>
                  <li>• Data Integration Helpers</li>
                  <li>• Example Implementations</li>
                </ul>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href="/products/eocomponents">
                      <Code className="h-4 w-4 mr-2" />
                      Read Docs
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* eoCatalogs */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Database className="h-8 w-8 text-purple-600" />
                  <Badge variant="outline">Platform Setup</Badge>
                </div>
                <CardTitle className="text-xl">eoCatalogs Documentation</CardTitle>
                <CardDescription>
                  Build and deploy data discovery platforms for Earth science datasets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Platform Setup</li>
                  <li>• Configuration Guide</li>
                  <li>• Data Ingestion</li>
                  <li>• Search & Discovery Features</li>
                  <li>• Deployment Options</li>
                </ul>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Database className="h-4 w-4 mr-2" />
                    Read Docs
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Standards & Formats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Data Standards & Formats
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Foundational knowledge for working with modern Earth science data. 
              These standards enable interoperability across the entire ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* STAC */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">STAC (SpatioTemporal Asset Catalog)</CardTitle>
                <CardDescription>
                  Specification overview and implementation patterns for cataloging Earth observation data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn STAC
                </Button>
              </CardContent>
            </Card>

            {/* COG */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Cloud Optimized GeoTIFF (COG)</CardTitle>
                <CardDescription>
                  Format benefits, creation tools, and optimization techniques for cloud-native imagery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  COG Guide
                </Button>
              </CardContent>
            </Card>

            {/* Cloud-Native */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Cloud-Native Geospatial</CardTitle>
                <CardDescription>
                  Modern data architecture patterns and best practices for scalable Earth science platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Architecture Guide
                </Button>
              </CardContent>
            </Card>

            {/* eoAPI Integration */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">eoAPI Integration</CardTitle>
                <CardDescription>
                  How eoViz connects to eoAPI services for metadata, raster, and vector data access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://eoapi.dev/" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    eoAPI Docs
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Data Preparation */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Data Preparation</CardTitle>
                <CardDescription>
                  Validation, optimization, and best practices for preparing Earth science data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Preparation Guide
                </Button>
              </CardContent>
            </Card>

            {/* API Standards */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">API Standards</CardTitle>
                <CardDescription>
                  OGC compliance and interoperability standards for geospatial web services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Standards Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration & Advanced Topics */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integration & Advanced Topics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to combine eoViz products and extend the ecosystem for complex use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Layers className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cross-Product Integration</h3>
                  <p className="text-sm text-muted-foreground">How eoStories, eoComponents, and eoCatalogs work together</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Learn integration patterns for combining storytelling, components, and data catalogs 
                into cohesive Earth science communication platforms.
              </p>
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Integration Guide
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Custom Development</h3>
                  <p className="text-sm text-muted-foreground">Extending the ecosystem for specific needs</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Guidelines for building custom components, extending existing functionality, 
                and contributing back to the community.
              </p>
              <Button variant="outline" size="sm">
                <Code className="h-4 w-4 mr-2" />
                Development Guide
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Performance & Scaling</h3>
                  <p className="text-sm text-muted-foreground">Production considerations and optimization</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Best practices for deploying eoViz at scale, performance optimization, 
                and infrastructure planning for large datasets.
              </p>
              <Button variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Performance Guide
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Authentication & Security</h3>
                  <p className="text-sm text-muted-foreground">Access control patterns and security best practices</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Implementing authentication, authorization, and security controls 
                for eoViz deployments handling sensitive data.
              </p>
              <Button variant="outline" size="sm">
                <Shield className="h-4 w-4 mr-2" />
                Security Guide
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples & Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Examples & Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from real-world implementations and successful deployments of eoViz products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VEDA Platform */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">VEDA Platform</CardTitle>
                    <CardDescription>Large-scale implementation showcase</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  NASA's Visualization, Exploration, and Data Analysis platform demonstrates 
                  eoViz principles at planetary scale, serving billions of STAC items and 
                  supporting global Earth science research.
                </p>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <span>Multi-mission satellite data integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <span>Interactive storytelling at scale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <span>Cloud-native architecture patterns</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://docs.openveda.cloud/" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      VEDA Docs
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://www.earthdata.nasa.gov/dashboard/" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      Live Site
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Other Implementations */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Community Examples</CardTitle>
                    <CardDescription>Real implementations across domains</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Emergency Response Tools</h4>
                    <p className="text-xs text-muted-foreground">Wildfire risk assessment and flood monitoring platforms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Research Institutions</h4>
                    <p className="text-xs text-muted-foreground">Climate data portals and oceanographic visualization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Policy Support</h4>
                    <p className="text-xs text-muted-foreground">Environmental monitoring for decision makers</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/tools-ecosystem">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Browse Examples
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Migration Guides */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Migration Guides</CardTitle>
                <CardDescription>Moving from other platforms to eoViz</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• From custom STAC implementations</li>
                  <li>• Legacy visualization platforms</li>
                  <li>• Proprietary data catalogs</li>
                  <li>• Static storytelling tools</li>
                </ul>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Best Practices</CardTitle>
                <CardDescription>Lessons learned from real deployments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Data preparation workflows</li>
                  <li>• Performance optimization strategies</li>
                  <li>• User experience design patterns</li>
                  <li>• Infrastructure planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community & Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get help, contribute to the ecosystem, and connect with the eoViz community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Contributing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Different contribution paths for each product and the broader ecosystem
              </p>
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Contribute
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">GitHub Discussions</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Community conversations, questions, and feature requests
              </p>
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Join Discussion
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Support Channels</h3>
              <p className="text-sm text-muted-foreground mb-4">
                How to get help with implementation and troubleshooting
              </p>
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Get Help
              </Button>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Release Notes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Changelog and updates across all eoViz products
              </p>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                View Changes
              </Button>
            </Card>
          </div>
        </div>
      </section>

    </PageLayout>
  )
}
