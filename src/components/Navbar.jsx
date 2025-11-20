import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.35)]">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">SentinelGuard</p>
            <p className="text-emerald-300/70 text-xs">Cyber Security Platform</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#solutions" className="text-slate-300 hover:text-white transition">Solutions</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-emerald-400/30 text-emerald-300 hover:border-emerald-400/60 hover:text-emerald-200 transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-emerald-500 text-emerald-950 font-medium shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] hover:brightness-110 transition">Start Free Trial</button>
        </div>

        <button className="md:hidden text-white/80" onClick={() => setOpen(true)} aria-label="Open Menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-30 bg-slate-900/80 backdrop-blur-sm animate-in" onClick={() => setOpen(false)} />
      )}
      <div className={`fixed right-0 top-0 z-40 h-full w-80 bg-slate-900/95 border-l border-white/10 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-300">
            <ShieldCheck className="h-5 w-5" />
            <span className="font-medium">SentinelGuard</span>
          </div>
          <button onClick={() => setOpen(false)} className="text-white/70" aria-label="Close Menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-6 py-3 flex flex-col gap-4 text-slate-200">
          <a href="#features" onClick={() => setOpen(false)} className="hover:text-white">Features</a>
          <a href="#solutions" onClick={() => setOpen(false)} className="hover:text-white">Solutions</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-white">Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)} className="hover:text-white">FAQ</a>
          <div className="pt-4 flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-lg border border-emerald-400/30 text-emerald-300">Sign in</button>
            <button className="flex-1 px-4 py-2 rounded-lg bg-emerald-500 text-emerald-950 font-medium">Free Trial</button>
          </div>
        </div>
      </div>
    </header>
  );
}
