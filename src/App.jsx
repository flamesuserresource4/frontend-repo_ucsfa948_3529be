import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(600px_300px_at_100%_10%,rgba(16,185,129,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.6))]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <CTA />

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} SentinelGuard. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
              <a className="hover:text-white" href="#">Security</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
