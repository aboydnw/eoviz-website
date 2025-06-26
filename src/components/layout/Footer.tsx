import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { OptimizedImage } from '@/components/shared/OptimizedImage'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <OptimizedImage
                src="/logos/eoviz-logo.png"
                alt="eoViz logo"
                width={20}
                height={20}
                className="h-5 w-5"
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
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools-ecosystem" className="hover:underline">Tools Ecosystem</Link></li>
              <li><Link href="#" className="hover:underline">GitHub</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="hover:underline">Documentation</Link></li>
              <li><Link href="/workshop" className="hover:underline">Workshop</Link></li>
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
  )
}
