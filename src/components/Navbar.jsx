import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'عني' },
  { id: 'philosophy', label: 'الفلسفة' },
  { id: 'methodology', label: 'المنهجية' },
  { id: 'services', label: 'الخدمات' },
  { id: 'book', label: 'الكتاب' },
  { id: 'app', label: 'التطبيق' },
  { id: 'projects', label: 'المشاريع' },
  { id: 'contact', label: 'تواصل' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-wide">Raouf Riwayhi</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="text-slate-200/90 hover:text-white transition-colors text-sm">
              {s.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="block w-full text-left text-slate-200/90 hover:text-white py-2">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
