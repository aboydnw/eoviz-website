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
            Here's how we help you turn complex data into clear impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need compelling stories, custom visualization tools, or organized data platforms, 
            we've created a simple path to get your research the attention it deserves.
          </p>
        </div>

        {/* 3-Step Plan */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Approach</h3>
              <p className="text-muted-foreground">Tell us about your data and communication goals. We'll help you determine whether you need stories, tools, catalogs, or a combination.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Implement Together</h3>
              <p className="text-muted-foreground">Work with our team to build your solution, or use our open-source tools independently. Your data stays under your control.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Watch Impact Grow</h3>
              <p className="text-muted-foreground">Stakeholders understand your work, scientists save time, and your research gets the recognition and funding it deserves.</p>
            </div>
          </div>
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
                <Badge variant="outline">Tools</Badge>
              </div>
              <CardTitle>eoTools</CardTitle>
              <CardDescription>
                Get custom visualization tools that show your unique data exactly how stakeholders need to see it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Your data gets the specialized interface it deserves</li>
                <li>• Skip expensive GIS team buildouts</li>
                <li>• Move beyond Google Earth Engine limitations</li>
                <li>• Stakeholders interact with data, not just view it</li>
              </ul>
              <Button variant="ghost" className="mt-4 p-0 h-auto group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/products/eotools">
                  See example tools <ArrowRight className="h-4 w-4 ml-1" />
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
      </div>
    </section>
  )
}
