export default function CTA() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Ready to level up your security posture?
          </h3>
          <p className="mt-3 text-slate-300">
            Get started in minutes with a free 14‑day trial. No credit card required.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 rounded-lg bg-emerald-500 text-emerald-950 font-medium shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] hover:brightness-110 transition">
              Start Free Trial
            </button>
            <button className="px-6 py-3 rounded-lg border border-emerald-400/30 text-emerald-300 hover:border-emerald-400/60 hover:text-emerald-200 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
