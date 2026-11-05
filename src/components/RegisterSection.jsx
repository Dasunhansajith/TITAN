import React, { useState } from 'react'
import { UserPlus, ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react'

export default function RegisterSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    teamName: '',
    botName: '',
    institution: 'SLIIT Malabe Campus',
    category: 'Kinetic Vertical Spinner',
    captainEmail: '',
    phone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="register" className="py-24 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="rounded-3xl p-8 sm:p-12 bg-zinc-900/60 border border-zinc-700/50 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-mono uppercase tracking-widest">
            <UserPlus className="w-3.5 h-3.5 text-red-500" />
            <span>PILOT &amp; TEAM REGISTRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Enter the <span className="text-red-500 underline decoration-red-600/60">Titan Arena</span>
          </h2>
          <p className="text-zinc-400 text-sm">
            Register your battle robot and engineering squad for Sri Lanka&apos;s 1st official collegiate combat championship at SLIIT.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-red-500/40 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center mx-auto text-red-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">
              Registration Transmitted!
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Your bot application for <span className="text-red-400 font-semibold">{formData.botName || 'TITAN BOT'}</span> has been queued. The SLIIT Tech Inspection Committee will review your blueprint and email your verification slot.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 transition-colors"
            >
              REGISTER ANOTHER BOT
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SLIIT Cyber Mech"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Robot Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Havoc Razor"
                  value={formData.botName}
                  onChange={(e) => setFormData({ ...formData, botName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Institution / University
                </label>
                <input
                  type="text"
                  required
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Weapon Archetype
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                >
                  <option value="Kinetic Vertical Spinner">Kinetic Vertical Spinner (Disc/Bar)</option>
                  <option value="Horizontal Drum Spinner">Horizontal Blade / Drum Spinner</option>
                  <option value="Pneumatic Flipper">Pneumatic Launcher / Flipper</option>
                  <option value="Titanium Wedge / Pusher">Titanium Wedge / Ground Pusher</option>
                  <option value="Overhead Hammer / Crusher">Overhead Hammer / Piercing Crusher</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Captain Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="captain@sliit.lk"
                  value={formData.captainEmail}
                  onChange={(e) => setFormData({ ...formData, captainEmail: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  WhatsApp Contact
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+94 7X XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-red-900/40 hover:shadow-red-700/60 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>SUBMIT TEAM &amp; BOT REGISTRATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Free registration for collegiate engineering teams &bull; SLIIT verified</span>
            </div>
          </form>
        )}

      </div>
    </section>
  )
}

