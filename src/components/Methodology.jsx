export default function Methodology() {
  const steps = [
    { title: 'Rebuild', icon: '🧱', text: 'نفكّك ثم نعيد البناء.' },
    { title: 'Realign', icon: '🎯', text: 'نضبط الاتجاه مع الرؤية.' },
    { title: 'Rise', icon: '🚀', text: 'نطلق بمنظومة متماسكة.' },
  ]

  return (
    <section id="methodology" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">RR System®</h2>
          <p className="text-slate-300 mt-2">Three steps — واضحة وقابلة للتنفيذ</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center hover:border-emerald-400/40 transition">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-slate-300 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
