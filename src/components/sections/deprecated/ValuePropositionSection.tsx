import { Card, CardContent } from '@/components/ui/card'
import { Layers, Zap, Users, Globe, Code, BookOpen } from 'lucide-react'

export function ValuePropositionSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your data stays yours, your impact grows
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Layers className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Complete Data Control</h3>
                  <p className="text-muted-foreground">
                    Self-hosted means your sensitive research data never leaves your infrastructure. 
                    No vendor lock-in, no usage fees, no privacy concerns with third-party platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Built for Research Organizations</h3>
                  <p className="text-muted-foreground">
                    Every tool is shaped by real challenges faced by research teams who need to 
                    communicate complex findings to stakeholders, funders, and decision-makers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Open Source Community</h3>
                  <p className="text-muted-foreground">
                    Contribute improvements, customize for your needs, and benefit from shared 
                    development. Built by researchers, for researchers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed">
              <CardContent className="p-8 text-center">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-200 h-20 rounded flex items-center justify-center">
                    <Globe className="h-8 w-8 text-blue-700" />
                  </div>
                  <div className="bg-green-200 h-20 rounded flex items-center justify-center">
                    <Layers className="h-8 w-8 text-green-700" />
                  </div>
                  <div className="bg-purple-200 h-20 rounded flex items-center justify-center">
                    <Code className="h-8 w-8 text-purple-700" />
                  </div>
                  <div className="bg-orange-200 h-20 rounded flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-orange-700" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Component showcase
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
