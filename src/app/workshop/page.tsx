import { PageLayout } from '@/components/layout/shared'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, Users, BookOpen } from 'lucide-react'

export default function WorkshopPage() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Hands-on Workshop
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              ESIP Workshop
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us for a hands-on workshop where participants will learn to configure 
              compelling Earth science stories using eoViz and NASA data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">What You'll Learn</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Configure interactive stories using eoViz components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Work with NASA Earth observation datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Create compelling narratives around geospatial data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Deploy and share your Earth science stories</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Who Should Attend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Earth science researchers and communicators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Data visualization and storytelling enthusiasts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Organizations working with NASA data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Anyone interested in geospatial storytelling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center gap-8 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date & Time TBD</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>ESIP Conference</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Workshop Details Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're finalizing the workshop agenda, schedule, and registration details. 
                Check back soon for complete information about this hands-on eoViz session 
                at the upcoming ESIP conference.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}