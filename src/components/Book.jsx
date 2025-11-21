export default function Book() {
  return (
    <section id="book" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 aspect-[3/4]"></div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Book</h2>
          <p className="text-slate-300 mt-4">عنوان + وصف مختصر + اقتباس ملهم. نسخة نظيفة وواضحة.</p>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center rounded-full bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 px-5 py-2.5 text-sm font-semibold transition">تحميل</button>
            <button className="inline-flex items-center rounded-full bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 text-sm font-semibold transition">شراء</button>
          </div>
        </div>
      </div>
    </section>
  )
}
