import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Dashboard from './components/Dashboard'

const API = import.meta.env.VITE_BACKEND_URL

function App() {
  const [token, setToken] = useState(null)
  const [view, setView] = useState('landing') // landing | dashboard

  useEffect(()=>{
    const t = localStorage.getItem('tm_token')
    if(t){ setToken(t); setView('dashboard') }
  }, [])

  const quickAuth = async () => {
    // Simple email-less demo auth: use a default demo user if exists; otherwise register
    const email = `demo+${Math.random().toString(36).slice(2,7)}@tourmaker.ai`
    const name = 'Demo Traveler'
    const password = 'demo-password'
    try{
      let res = await fetch(`${API}/api/auth/register`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })
      if(!res.ok){
        // try login with a fixed email if already registered
        res = await fetch(`${API}/api/auth/login`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
      }
      const data = await res.json()
      if(res.ok){
        setToken(data.token)
        localStorage.setItem('tm_token', data.token)
        setView('dashboard')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onLogin={quickAuth} onGoDashboard={()=>setView('dashboard')} isAuthed={!!token} />
      {view === 'landing' && (
        <>
          <Hero />
          <Features />
          <Pricing onStart={quickAuth} />
          <footer className="py-12 text-center text-white/50">Built with ❤️ — TourMaker AI</footer>
        </>
      )}
      {view === 'dashboard' && token && <Dashboard token={token} />}
    </div>
  )
}

export default App
