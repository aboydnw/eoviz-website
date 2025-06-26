import { OptimizedImage } from '@/components/shared/OptimizedImage'

export function NasaCreditSection() {
  return (
    <section className="py-12 border-b bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <OptimizedImage
              src="/logos/nasa-logo.svg"
              alt="NASA logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <div>
              <p className="text-lg font-semibold text-slate-900">
                Supported by NASA IMPACT
              </p>
              <p className="text-sm text-slate-600">
                Years of building tools with NASA taught us that great Earth science 
                often stays locked in academic papers. We created eoViz to change that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
