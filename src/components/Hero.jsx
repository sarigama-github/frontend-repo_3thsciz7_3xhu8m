import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-emerald-300 mb-4 font-medium">Architect • Coach • Innovator</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Raouf Riwayhi
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg">
            نبني الأفكار Block by Block — من الرؤية إلى التنفيذ.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { id: 'services', label: 'الخدمات' },
              { id: 'methodology', label: 'المنهجية' },
              { id: 'projects', label: 'المشاريع' },
              { id: 'book', label: 'الكتاب' },
              { id: 'app', label: 'التطبيق' },
            ].map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="pointer-events-auto inline-flex items-center rounded-full bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-emerald-500/20 transition"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
