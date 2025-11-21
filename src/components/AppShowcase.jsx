export default function AppShowcase() {
  const steps = [
    { title: 'Step 1', text: 'Onboarding واضح وسريع.' },
    { title: 'Step 2', text: 'ميزات أساسية مركزة.' },
    { title: 'Step 3', text: 'نشر وتكرار مستمر.' },
  ]

  return (
    <section id="app" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The App</h2>
          <p className="text-slate-300 mt-2">لقطات • خارطة طريق • CTA</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 h-80"></div>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-white font-semibold">{s.title}</p>
                <p className="text-slate-300 text-sm mt-1">{s.text}</p>
              </div>
            ))}
            <button className="w-full inline-flex items-center justify-center rounded-full bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 px-5 py-2.5 text-sm font-semibold transition">انضم للبيتا</button>
          </div>
        </div>
      </div>
    </section>
  )
}
