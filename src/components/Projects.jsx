export default function Projects() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    title: `Case Study ${i + 1}`,
    text: 'وصف مختصر للمشروع والنتائج.'
  }))

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects & Case Studies</h2>
            <p className="text-slate-300 mt-2">فلترة: All / Coaching / App / Content</p>
          </div>
          <div className="hidden sm:flex gap-2">
            {['All','Coaching','App','Content'].map(t => (
              <button key={t} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/5">{t}</button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <a key={i} href="#" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-4 h-48 flex items-end">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="relative">
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-slate-300 text-sm">{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
