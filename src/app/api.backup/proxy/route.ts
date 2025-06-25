import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  
  if (!url) {
    return new NextResponse('URL parameter required', { status: 400 })
  }

  try {
    // Fetch the external content
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; eoViz-proxy)',
      }
    })
    
    if (!response.ok) {
      return new NextResponse('Failed to fetch content', { status: response.status })
    }
    
    const content = await response.text()
    
    // Create response without frame-blocking headers
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': response.headers.get('content-type') || 'text/html',
        // Remove frame-blocking headers
        'X-Frame-Options': 'ALLOWALL',
        'Content-Security-Policy': 'frame-ancestors *',
        // Add CORS headers
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    })
  } catch (error) {
    console.error('Proxy error:', error)
    return new NextResponse('Proxy error', { status: 500 })
  }
}
