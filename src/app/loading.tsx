import { Loading } from '@/components/shared/Loading'

export default function RootLoading() {
  return (
    <div className="min-h-screen bg-background">
      <Loading message="Loading eoViz..." className="min-h-screen" />
    </div>
  )
}
