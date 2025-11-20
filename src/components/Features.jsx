import { Sparkles, CalendarCheck2, Receipt, Share2 } from 'lucide-react'

export default function Features(){
  const items = [
    { icon: Sparkles, title: 'Prompt to Plan', desc: 'Turn a single sentence into a curated, multi‑day itinerary.' },
    { icon: CalendarCheck2, title: 'Smart Scheduling', desc: 'Balanced days with travel time, rest, and must‑see highlights.' },
    { icon: Receipt, title: 'Budget Aware', desc: 'Shoestring to luxury — plans adapt to your style and spend.' },
    { icon: Share2, title: 'Share & Collaborate', desc: 'Invite friends, tweak together, export to maps & calendars.' },
  ]
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to plan the perfect trip</h2>
          <p className="text-white/70 mt-3">Built for weekend escapes and once‑in‑a‑lifetime adventures</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon,title,desc})=> (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 grid place-items-center mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
