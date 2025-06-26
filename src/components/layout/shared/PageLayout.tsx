import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className={`pt-16 ${className}`}>
        {children}
      </div>
      <SiteFooter />
    </div>
  )
}
