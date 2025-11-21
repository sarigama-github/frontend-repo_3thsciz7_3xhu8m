export default function About() {
  const items = [
    { title: 'Coach', subtitle: 'مدرب', icon: '🎯', desc: 'مرافقة عملية تركز على النتائج.' },
    { title: 'Researcher', subtitle: 'باحث', icon: '🔬', desc: 'تحليل منهجي لاكتشاف الأنماط.' },
    { title: 'Innovator', subtitle: 'مبتكر', icon: '💡', desc: 'حلول إبداعية قابلة للتنفيذ.' },
    { title: 'Architect', subtitle: 'Architect', icon: '🏗️', desc: 'تصميم أنظمة Block by Block.' },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="text-slate-300 mt-2">رحلة متدرجة: مدرب → باحث → مبتكر → Architect</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title} <span className="text-slate-400 text-base">— {item.subtitle}</span></h3>
                  <p className="text-slate-300 mt-2">{item.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/0 via-emerald-400/0 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
