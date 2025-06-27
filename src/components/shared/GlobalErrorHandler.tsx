'use client'

import { useEffect } from 'react'

export function GlobalErrorHandler() {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
      
      // Prevent the default behavior (logging to console)
      event.preventDefault()
      
      // In production, send to error tracking service
      if (process.env.NODE_ENV === 'production') {
        // TODO: Send to error tracking service
        // trackError(event.reason)
      }
    }

    // Handle global JavaScript errors
    const handleError = (event: ErrorEvent) => {
      console.error('Global error:', event.error)
      
      // In production, send to error tracking service
      if (process.env.NODE_ENV === 'production') {
        // TODO: Send to error tracking service
        // trackError(event.error)
      }
    }

    // Handle resource loading errors
    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement
      if (target) {
        console.error('Resource failed to load:', target.tagName, target.getAttribute('src'))
        
        // Add fallback handling for images
        if (target.tagName === 'IMG') {
          // const img = target as HTMLImageElement
          // You could set a fallback image here
          // img.src = '/images/fallback.png'
        }
      }
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)
    window.addEventListener('error', handleResourceError, true) // Capture phase for resource errors

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
      window.removeEventListener('error', handleResourceError, true)
    }
  }, [])

  return null
}
