import Spline from '@splinetool/react-spline';
import { ShieldCheck, Lock, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 md:pt-16 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs">New</span>
            <span className="text-xs text-emerald-200/70">AI-driven threat detection</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Secure your cloud with confidence
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            A modern cyber security platform that prevents breaches, monitors posture, and automates compliance — powered by real-time analytics and AI.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-lg bg-emerald-500 text-emerald-950 font-medium shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] hover:brightness-110 transition">
              Start Free Trial
            </button>
            <button className="px-5 py-3 rounded-lg border border-emerald-400/30 text-emerald-300 hover:border-emerald-400/60 hover:text-emerald-200 transition">
              Book a Demo
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span>Zero Trust Controls</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-emerald-400" />
              <span>End‑to‑end Encryption</span>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden border border-emerald-400/20 bg-black/20">
            <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
