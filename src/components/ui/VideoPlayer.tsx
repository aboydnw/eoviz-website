'use client'

import { useState, useRef, useEffect } from 'react'
import { AlertCircle, Play, Loader2 } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  children?: React.ReactNode
}

export function VideoPlayer({ src, poster, className = "", children }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoadStart = () => {
    setIsLoading(true)
    setHasError(false)
  }

  const handleCanPlay = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`bg-muted rounded-lg flex items-center justify-center p-8 ${className}`}>
        <div className="text-center space-y-2">
          <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto" />
          <p className="text-sm text-muted-foreground">Video unavailable</p>
          <p className="text-xs text-muted-foreground">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center z-10">
          <div className="text-center space-y-2">
            <Loader2 className="h-8 w-8 text-muted-foreground animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Loading video...</p>
          </div>
        </div>
      )}
      
      {isVisible && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className="w-full h-auto rounded-lg"
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          <div className="bg-muted rounded-lg flex items-center justify-center p-8">
            <div className="text-center space-y-2">
              <Play className="h-8 w-8 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground">Your browser doesn't support video playback</p>
            </div>
          </div>
        </video>
      )}
      
      {children}
    </div>
  )
}
