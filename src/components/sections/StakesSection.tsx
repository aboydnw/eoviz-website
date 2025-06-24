export function StakesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Failure Stakes */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Without better communication, your research stays buried
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>• <strong>Your hard work sits unused</strong> - published papers and datasets that nobody knows about or understands</p>
              <p>• <strong>Funding opportunities slip away</strong> - stakeholders who don't understand your value won't invest in your future</p>
              <p>• <strong>Scientists waste time</strong> - answering the same questions over and over because people can't access data themselves</p>
              <p>• <strong>Problems persist</strong> - the real-world issues your research could solve remain unsolved</p>
            </div>
          </div>
          
          {/* Success Vision */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-6">
              But when stakeholders understand your work, everything changes
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>• <strong>Your scientists save hours</strong> - browser-based tools let stakeholders explore data without Python or GIS</p>
              <p>• <strong>Stakeholders engage deeply</strong> - they understand not just what you found, but why it matters</p>
              <p>• <strong>Funding flows</strong> - clear communication of your value leads to recognition and investment</p>
              <p>• <strong>Real impact happens</strong> - your research drives decisions, policy changes, and solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
