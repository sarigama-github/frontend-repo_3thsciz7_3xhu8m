import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Methodology from './components/Methodology'
import Services from './components/Services'
import Book from './components/Book'
import AppShowcase from './components/AppShowcase'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 scroll-smooth">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Philosophy />
        <Methodology />
        <Services />
        <Book />
        <AppShowcase />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400 bg-slate-950">
        © {new Date().getFullYear()} Raouf Riwayhi — Block by Block
      </footer>
    </div>
  )
}

export default App
