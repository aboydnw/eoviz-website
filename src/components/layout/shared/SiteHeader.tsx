'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { OptimizedImage } from '@/components/shared/OptimizedImage'
import { Github } from 'lucide-react'

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar if:
      // 1. At the top of the page (< 10px)
      // 2. Scrolling up
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Add event listener
    window.addEventListener('scroll', controlNavbar)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
          <Link href="/tools-ecosystem" className="hover:text-foreground/80">Tools Ecosystem</Link>
          <Link href="/docs" className="hover:text-foreground/80">Documentation</Link>
          <Link href="/examples" className="hover:text-foreground/80">Examples</Link>
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
            <Link href="/examples">Explore Examples</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
