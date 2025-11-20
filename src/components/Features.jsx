import { Shield, Radar, Fingerprint, Cloud, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Threat Prevention',
    desc: 'Block attacks across endpoints, cloud and network with adaptive policies.',
  },
  {
    icon: Radar,
    title: 'Real-time Monitoring',
    desc: 'Detect anomalies and insider threats with streaming analytics.',
  },
  {
    icon: Fingerprint,
    title: 'Identity Security',
    desc: 'Enforce least-privilege and MFA everywhere with zero trust.',
  },
  {
    icon: Cloud,
    title: 'Cloud Posture',
    desc: 'Continuously scan for misconfigurations across AWS, Azure and GCP.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Built for modern security teams
          </h2>
          <p className="mt-3 text-slate-300">
            Everything you need to prevent, detect and respond — all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-emerald-400/20 bg-slate-900/50 p-6 hover:border-emerald-400/40 transition">
              <div className="h-11 w-11 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="text-slate-300/90 text-sm mt-1">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-300 text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span>Enterprise-grade</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
