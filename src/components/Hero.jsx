import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Live demo
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Plan jaw‑dropping trips from a single prompt
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Describe your vibe and budget. We craft a day‑by‑day itinerary, places to stay, and reservations — ready to share.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#pricing" className="inline-flex items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-amber-200 transition">Get started</a>
              <a href="#features" className="inline-flex items-center px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition">See features</a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950 pointer-events-none" />
    </section>
  )
}
