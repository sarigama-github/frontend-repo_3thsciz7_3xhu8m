export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <p className="text-slate-300 mt-2">نموذج بسيط + معلومات التواصل</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <form className="space-y-4">
            <input className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="الاسم" />
            <input type="email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="البريد" />
            <textarea rows="5" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="رسالتك" />
            <button type="button" className="inline-flex items-center rounded-full bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 px-5 py-2.5 text-sm font-semibold transition">إرسال</button>
          </form>

          <div className="space-y-3 text-slate-300">
            <p><span className="text-white">Email:</span> hello@example.com</p>
            <p><span className="text-white">Phone:</span> +216 00 000 000</p>
            <div className="h-56 rounded-2xl border border-white/10 bg-slate-900/60" />
          </div>
        </div>
      </div>
    </section>
  )
}
