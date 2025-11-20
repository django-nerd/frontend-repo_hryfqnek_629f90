import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function Dashboard({ token }){
  const [profile, setProfile] = useState(null)
  const [prompt, setPrompt] = useState('5 days in Kyoto. Slow mornings, gardens, tea, budget: standard')
  const [days, setDays] = useState(5)
  const [destination, setDestination] = useState('Kyoto')
  const [budget, setBudget] = useState('standard')
  const [loading, setLoading] = useState(false)
  const [trips, setTrips] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/me`, { headers: { Authorization: `Bearer ${token}` }})
      .then(r=> r.ok ? r.json() : Promise.reject())
      .then(setProfile)
      .catch(()=> setProfile(null))
  }, [token])

  const createTrip = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const res = await fetch(`${API}/api/trips`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ prompt, days, destination, budget })
      })
      const data = await res.json()
      if(res.ok){
        setTrips([data, ...trips])
      }
    } finally {
      setLoading(false)
    }
  }

  const loadTrips = async () => {
    const r = await fetch(`${API}/api/trips`, { headers: { Authorization: `Bearer ${token}` }})
    if(r.ok){ setTrips(await r.json()) }
  }

  useEffect(()=>{ loadTrips() }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-semibold">Welcome{profile ? `, ${profile.name}` : ''}</h2>
          <p className="text-white/70">Create a plan with a single prompt</p>
        </div>

        <form onSubmit={createTrip} className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-8">
          <label className="block text-white/80 text-sm mb-2">Your prompt</label>
          <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} rows={3} className="w-full rounded-xl bg-slate-900/60 border border-white/10 text-white p-3" />
          <div className="grid sm:grid-cols-3 gap-3 mt-3">
            <input value={destination} onChange={e=>setDestination(e.target.value)} placeholder="Destination" className="rounded-xl bg-slate-900/60 border border-white/10 text-white p-3" />
            <select value={budget} onChange={e=>setBudget(e.target.value)} className="rounded-xl bg-slate-900/60 border border-white/10 text-white p-3">
              <option value="shoestring">Shoestring</option>
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
            </select>
            <input type="number" min={1} max={30} value={days} onChange={e=>setDays(parseInt(e.target.value)||1)} className="rounded-xl bg-slate-900/60 border border-white/10 text-white p-3" />
          </div>
          <button disabled={loading} className="mt-4 inline-flex items-center px-4 py-2 rounded-xl bg-white text-slate-900 font-medium hover:bg-amber-200 disabled:opacity-50">{loading ? 'Creating…' : 'Create plan'}</button>
        </form>

        <div className="grid lg:grid-cols-2 gap-4">
          {trips.map(t => (
            <div key={t._id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">{t.title}</h3>
                <span className="text-white/60 text-sm">{t.days} days</span>
              </div>
              <p className="text-white/70 text-sm mb-3">{t.destination} • {t.budget}</p>
              <div className="space-y-2">
                {t.itinerary?.slice(0,3).map(d => (
                  <div key={d.day} className="text-white/80 text-sm">
                    <span className="text-white/60">Day {d.day}:</span> {d.morning}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
