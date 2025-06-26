import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Code, Layers, ArrowRight } from 'lucide-react'

export function ProductSuiteSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open tools for sharing Earth science that matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each tool emerged from conversations with researchers, emergency managers, and policy makers who needed better ways to share critical Earth science insights.
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
                Turn complex research into narratives that stakeholders actually understand and remember
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Decision-makers understand your research impact</li>
                <li>• Funders see clear evidence of your work's value</li>
                <li>• Media coverage that accurately represents your findings</li>
                <li>• Policy makers have the context they need to act</li>
              </ul>
              <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/products/eostories">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
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
                Building blocks for developers who want to create custom Earth science tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• React components for maps, timelines, and visualizations</li>
                <li>• Skip the boilerplate and focus on your unique requirements</li>
                <li>• STAC/COG integration helpers included</li>
                <li>• Perfect foundation for custom development</li>
              </ul>
              <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/products/eocomponents">
                  Explore component library <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
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
                Organize multiple datasets and research projects so people can actually find and use your work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Researchers discover your datasets easily</li>
                <li>• Institutional branding showcases your work</li>
                <li>• Connect data to the stories that explain it</li>
                <li>• Multi-project coordination without chaos</li>
              </ul>
              <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/products/eocatalogs">
                  View examples <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tools Ecosystem Community Section */}
        <div className="mt-20 pt-16 border-t">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Growing Community of Earth Science Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations worldwide are building Earth science communication tools using eoViz principles. 
              Explore what's possible when open data standards meet great design.
            </p>
          </div>

          {/* Horizontal scrolling showcase */}
          <div className="mb-8">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {/* Tool Preview 1 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-lg">🗺️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Climate Mapper</h3>
                    <p className="text-xs text-muted-foreground">Climate Research Institute</p>
                  </div>
                  <Badge variant="outline" size="sm" className="ml-auto">Simple</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Interactive climate data visualization with time-series analysis
                </p>
                <div className="flex gap-1">
                  <Badge variant="secondary" size="sm" className="text-xs">STAC</Badge>
                  <Badge variant="secondary" size="sm" className="text-xs">Embeddable</Badge>
                </div>
              </div>

              {/* Tool Preview 2 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-lg">🔥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Wildfire Analytics</h3>
                    <p className="text-xs text-muted-foreground">Emergency Response Labs</p>
                  </div>
                  <div className="ml-auto text-right">
                    <Badge variant="outline" size="sm">Advanced</Badge>
                    <div className="mt-1">
                      <Badge variant="outline" size="sm" className="text-xs bg-green-50">Built with eoComponents</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Real-time wildfire risk assessment and impact modeling
                </p>
                <div className="flex gap-1">
                  <Badge variant="secondary" size="sm" className="text-xs">Real-time</Badge>
                  <Badge variant="secondary" size="sm" className="text-xs">API</Badge>
                </div>
              </div>

              {/* Tool Preview 3 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-lg">🌊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Ocean Data Explorer</h3>
                    <p className="text-xs text-muted-foreground">Marine Science Consortium</p>
                  </div>
                  <Badge variant="outline" size="sm" className="ml-auto">Intermediate</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Comprehensive ocean data analysis with 3D visualization
                </p>
                <div className="flex gap-1">
                  <Badge variant="secondary" size="sm" className="text-xs">COG</Badge>
                  <Badge variant="secondary" size="sm" className="text-xs">3D Viz</Badge>
                </div>
              </div>

              {/* More tools indicator */}
              <div className="flex-shrink-0 w-80 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-dashed p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-gray-500 text-lg">+</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Many more tools</p>
                  <p className="text-xs text-gray-500">Browse the full ecosystem</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/tools-ecosystem">
                Explore Community Tools <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
