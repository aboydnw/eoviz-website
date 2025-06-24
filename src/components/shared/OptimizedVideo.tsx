'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Loader2, Play, AlertCircle } from 'lucide-react'

interface OptimizedVideoProps {
  src: string
  poster?: string
  title: string
  description?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
}

export function OptimizedVideo({
  src,
  poster,
  title,
  description,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true
}: OptimizedVideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    // Preload video metadata
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.src = src
    
    const handleLoadedMetadata = () => {
      setCanPlay(true)
      setIsLoading(false)
    }
    
    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('error', handleError)
    }
  }, [src])

  if (hasError) {
    return (
      <Card className={`overflow-hidden ${className}`}>
        <CardContent className="p-8 text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
          )}
          <p className="text-sm text-red-600">
            Video temporarily unavailable. Please check your connection and try again.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-0 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Loading video...</p>
            </div>
          </div>
        )}
        
        <video
          autoPlay={autoPlay && canPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          poster={poster}
          className={`w-full h-auto transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoadedData={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          onCanPlay={() => setCanPlay(true)}
          preload="metadata"
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          <div className="p-8 text-center">
            <Play className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Your browser doesn't support video playback. 
              <a href={src} className="underline ml-1" download>
                Download the video
              </a>
            </p>
          </div>
        </video>
        
        {(title || description) && (
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="font-semibold text-sm text-blue-900">{title}</h3>
            {description && (
              <p className="text-xs text-blue-700 mt-1">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
