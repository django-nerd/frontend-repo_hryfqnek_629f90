export default function Pricing({ onStart }){
  const tiers = [
    { name: 'Starter', price: 'Free', desc: 'Try prompts, 3 trips, basic export', cta: 'Start free', features: ['3 AI trips / month', 'Basic itinerary', 'Share link'] },
    { name: 'Pro', price: '$12/mo', desc: 'Unlimited prompts, smart edits, calendar export', cta: 'Go Pro', featured: true, features: ['Unlimited trips', 'Smart revise', 'Calendar & Maps export', 'Priority support'] },
    { name: 'Team', price: '$29/mo', desc: 'Collaborative planning for small groups', cta: 'Start team', features: ['Seats for 5', 'Real‑time collaboration', 'Shared collections'] },
  ]
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">Simple pricing</h2>
          <p className="text-white/70 mt-3">Start free. Upgrade when you love it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-2xl border ${t.featured ? 'border-amber-300 bg-white/10' : 'border-white/10 bg-white/5'} p-6`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{t.name}</h3>
                <span className="text-white/80">{t.price}</span>
              </div>
              <p className="text-white/70 text-sm mt-2">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map(f => (<li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-300" />{f}</li>))}
              </ul>
              <button onClick={onStart} className={`mt-6 w-full inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium ${t.featured ? 'bg-white text-slate-900 hover:bg-amber-200' : 'bg-white/10 text-white hover:bg-white/20'} transition`}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
