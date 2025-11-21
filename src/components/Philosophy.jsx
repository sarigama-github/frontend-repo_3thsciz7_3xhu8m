export default function Philosophy() {
  const pillars = [
    { key: 'Mind', label: 'Mind', icon: '🧠', text: 'وضوح ووعي' },
    { key: 'Body', label: 'Body', icon: '🏃‍♂️', text: 'طاقة وانضباط' },
    { key: 'Spirit', label: 'Spirit', icon: '✨', text: 'معنى واتساق' },
  ]

  return (
    <section id="philosophy" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Philosophy</h2>
          <p className="text-slate-300 mt-2">Mind • Body • Spirit — Block by Block</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.key} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-center">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="text-xl font-semibold text-white">{p.label}</h3>
              <p className="text-slate-300 mt-2">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <div className="h-0.5 w-64 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
        </div>
      </div>
    </section>
  )
}
