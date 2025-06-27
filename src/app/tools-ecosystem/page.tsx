import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/shared'
import { 
  ExternalLink,
  Github,
  Globe,
  CheckCircle,
  ArrowRight,
  Flame,
  Satellite,
  Activity,
  Droplets,
  Waves,
  Cloud,
  Shield,
  BookOpen,
  Download,
  Layers
} from 'lucide-react'

export default function ToolsEcosystemPage() {
  return (
    <PageLayout>

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
              Production-ready Earth science tools from organizations worldwide. 
              All feature excellent documentation, easy deployment, and commitment to open data standards. 
              Use them in your projects or let them inspire your own custom development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#featured-tools">
                  Browse 6 Featured Tools
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

      {/* Built on Open Science Principles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Built on Open Science Principles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Shield className="h-8 w-8 mx-auto text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">Government-Backed Reliability</h4>
                <p className="text-sm text-muted-foreground">NASA, USGS, and NOAA provide institutional trust and scientific accuracy</p>
              </div>
              <div>
                <Cloud className="h-8 w-8 mx-auto text-green-600 mb-3" />
                <h4 className="font-semibold mb-2">Expert Development Examples</h4>
                <p className="text-sm text-muted-foreground">See how professional teams build tools using modern development practices</p>
              </div>
              <div>
                <Globe className="h-8 w-8 mx-auto text-purple-600 mb-3" />
                <h4 className="font-semibold mb-2">Open Data Foundation</h4>
                <p className="text-sm text-muted-foreground">All tools use publicly available data with no API keys or licensing barriers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section id="featured-tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Tools Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully selected tools that demonstrate excellence in Earth science communication 
              and modern development practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Fire Event Explorer */}
            <Card className="group hover:shadow-lg transition-shadow border-2 border-orange-200">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-200 rounded-lg mb-4 flex items-center justify-center">
                  <Flame className="h-12 w-12 text-red-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Fire Event Explorer</CardTitle>
                    <CardDescription className="text-sm">by Development Seed</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-xs">Intermediate</Badge>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs bg-green-50 border-green-200">Built with eoComponents</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Explore wildfire perimeters, track fire progression over time, and analyze burn severity. 
                  Perfect for emergency management and fire risk communication.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">STAC</Badge>
                  <Badge variant="outline">Satellite Data</Badge>
                  <Badge variant="outline">Embeddable</Badge>
                  <Badge variant="outline">Real-time</Badge>
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

            {/* NASA Worldview */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-4 flex items-center justify-center">
                  <Satellite className="h-12 w-12 text-blue-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">NASA Worldview</CardTitle>
                    <CardDescription className="text-sm">by NASA GIBS</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">Simple</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Browse over 1,200 global satellite imagery layers with near real-time data. 
                  Perfect for showing environmental events and changes over time.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">MODIS</Badge>
                  <Badge variant="outline">Landsat</Badge>
                  <Badge variant="outline">Near Real-time</Badge>
                  <Badge variant="outline">Global Coverage</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://worldview.earthdata.nasa.gov/" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://www.earthdata.nasa.gov/data/tools/worldview" target="_blank">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Docs
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* USGS Earthquake */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-red-200 rounded-lg mb-4 flex items-center justify-center">
                  <Activity className="h-12 w-12 text-amber-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Real-time Earthquakes</CardTitle>
                    <CardDescription className="text-sm">by USGS</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">Simple</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Monitor global earthquake activity in real-time with magnitude, depth, and location data. 
                  Essential for disaster response and seismic risk assessment.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Real-time</Badge>
                  <Badge variant="outline">Global</Badge>
                  <Badge variant="outline">ANSS Network</Badge>
                  <Badge variant="outline">Filtering</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://earthquake.usgs.gov/earthquakes/map/" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://www.usgs.gov/programs/earthquake-hazards/earthquakes" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Data
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* USGS Water Data Dashboard */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Droplets className="h-12 w-12 text-cyan-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Water Data Dashboard</CardTitle>
                    <CardDescription className="text-sm">by USGS</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">Simple</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Real-time water monitoring including stream flow, groundwater levels, and water quality 
                  from thousands of monitoring stations across the United States.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Real-time</Badge>
                  <Badge variant="outline">Water Resources</Badge>
                  <Badge variant="outline">Station Network</Badge>
                  <Badge variant="outline">Mobile-friendly</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://dashboard.waterdata.usgs.gov/" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://waterdata.usgs.gov/" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Data
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* NASA Ocean Color */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-emerald-200 rounded-lg mb-4 flex items-center justify-center">
                  <Waves className="h-12 w-12 text-teal-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Ocean Color Web</CardTitle>
                    <CardDescription className="text-sm">by NASA Ocean Biology</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">Intermediate</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Ocean color and temperature data visualization showing chlorophyll concentrations, 
                  sea surface temperature, and marine ecosystem indicators.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">MODIS</Badge>
                  <Badge variant="outline">VIIRS</Badge>
                  <Badge variant="outline">Ocean Health</Badge>
                  <Badge variant="outline">Climate Indicators</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://oceancolor.gsfc.nasa.gov/" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://oceandata.sci.gsfc.nasa.gov/" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Data
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* NOAA Climate Explorer */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-violet-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <Cloud className="h-12 w-12 text-violet-600" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Climate Explorer</CardTitle>
                    <CardDescription className="text-sm">by NOAA/NEMAC</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">Intermediate</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Climate data exploration for the United States showing historical trends, 
                  future projections, and extreme weather analysis for local decision-making.
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Climate Data</Badge>
                  <Badge variant="outline">Projections</Badge>
                  <Badge variant="outline">County-level</Badge>
                  <Badge variant="outline">Policy Support</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://crt-climate-explorer.nemac.org/" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href="https://toolkit.climate.gov/tool/climate-explorer" target="_blank">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Docs
                    </Link>
                  </Button>
                </div>
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
          <Button size="lg">
            Submit Tool for Review
          </Button>
        </div>
      </section>

    </PageLayout>
  )
}
