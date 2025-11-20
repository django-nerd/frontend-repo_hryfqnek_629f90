import { useState } from 'react'
import { Menu, X, Compass, LogIn, User, LayoutDashboard } from 'lucide-react'

export default function Navbar({ onLogin, onGoDashboard, isAuthed }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 grid place-items-center shadow-lg">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">TourMaker AI</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-white/70 hover:text-white transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {isAuthed ? (
            <button onClick={onGoDashboard} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-amber-200 transition font-medium">
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </button>
          ) : (
            <button onClick={onLogin} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-amber-200 transition font-medium">
              <LogIn className="w-4 h-4" /> Sign in
            </button>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3 bg-slate-900/80">
            <a href="#features" className="text-white/80">Features</a>
            <a href="#pricing" className="text-white/80">Pricing</a>
            <a href="#faq" className="text-white/80">FAQ</a>
            <button onClick={onLogin} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">
              <User className="w-4 h-4" /> Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
