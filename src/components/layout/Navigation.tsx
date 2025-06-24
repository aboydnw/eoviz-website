import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { OptimizedImage } from '@/components/shared/OptimizedImage'
import { Github } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <div className="mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <OptimizedImage
              src="/logos/eoviz-logo.png"
              alt="eoViz logo"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
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
            <Link href="/sandbox">Explore Examples</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
