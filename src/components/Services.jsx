export default function Services() {
  const services = [
    { title: '1:1 Coaching', icon: '🎧', text: 'جلسات تركيز عالية، خطط دقيقة.' },
    { title: 'Workshops', icon: '📚', text: 'تصميم وتيسير ورش عمل عملية.' },
    { title: 'Systems Design', icon: '🧩', text: 'هندسة منظومات Block by Block.' },
    { title: 'Content Strategy', icon: '📝', text: 'منهجية نشر متسقة وذات أثر.' },
  ]

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Coaching & Services</h2>
          <p className="text-slate-300 mt-2">حزم واضحة • CTA جاهزة</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 transition">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-slate-300 mt-2">{s.text}</p>
              <button className="mt-4 inline-flex items-center rounded-full bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 px-4 py-2 text-sm font-semibold transition">احجز الآن</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
