import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/layout/shared'
import { 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  BookOpen,
  Database,
  Search,
  Users,
  Building,
  Globe,
  Palette,
  Settings,
  Eye,
  Filter
} from 'lucide-react'

export default function eoCatalogsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Data Discovery Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              eoCatalogs
              <span className="text-purple-600"> for Data Organization</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create platforms where people can discover and access Earth science datasets. 
              Organize multiple datasets and research projects so people can actually find and use your work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/examples">
                  <Eye className="h-4 w-4 mr-2" />
                  View Catalog Examples
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#get-started">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h3 className="font-semibold text-lg text-purple-900 mb-2">NASA Earth Data Dashboard</h3>
                <p className="text-sm text-purple-700">
                  See how eoCatalogs helps researchers discover and access analysis-ready 
                  Earth science datasets through intuitive search and exploration interfaces.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="get-started" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make your data discoverable and accessible
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join research organizations using eoCatalogs to organize and share 
            Earth science datasets with their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/examples">
                <Eye className="h-4 w-4 mr-2" />
                View Catalog Examples
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">
                <BookOpen className="h-4 w-4 mr-2" />
                Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
