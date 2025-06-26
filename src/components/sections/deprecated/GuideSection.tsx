export function GuideSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          We've been there. We've seen brilliant research get overlooked because of communication barriers.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Over the past decade, we've worked with NASA and dozens of research organizations who faced the same 
          frustrations: data sitting unused, stakeholders who don't understand findings, and expensive custom 
          tool development that takes months.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">5-10 NASA Groups</h3>
            <p className="text-muted-foreground">Helped solve communication challenges across multiple NASA divisions</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Dozens of Tools Built</h3>
            <p className="text-muted-foreground">Custom geospatial visualization tools for research organizations</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Open Source Foundation</h3>
            <p className="text-muted-foreground">Built on years of NASA-funded research and community collaboration</p>
          </div>
        </div>
      </div>
    </section>
  )
}
