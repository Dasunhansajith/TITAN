import React, { useState } from 'react'
import { AlertTriangle, CheckCircle2, Lock, Radio, Zap, Scale, ChevronDown } from 'lucide-react'

export default function RulesSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleRule = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const rules = [
    {
      id: '01',
      icon: Scale,
      title: 'Weight & Size Restrictions',
      badge: 'Featherweight Class',
      items: [
        'Combat Class: 15.00 KG Featherweight (Max allowable weight: 15.05 KG).',
        'Starting Box: Bot must fit within an 800mm x 800mm x 600mm sizing boundary.',
        'Cluster bots permitted provided total combined weight does not exceed 15.00 KG.'
      ]
    },
    {
      id: '02',
      icon: Lock,
      title: 'Weapon Safety & Locking Pins',
      badge: 'Safety Inspection',
      items: [
        'Mandatory physical weapon locking pin must be inserted at all times outside the battle arena.',
        'Weapon spin-down time must be less than 60 seconds upon power disarm.',
        'High-velocity blades must be rated for minimum 2.5x max operating RPM shock load.'
      ]
    },
    {
      id: '03',
      icon: Radio,
      title: 'Radio Control & Failsafes',
      badge: '2.4 GHz RF Link',
      items: [
        'Mandatory 2.4 GHz digital spread spectrum system (DSM2/DSMX/AFHDS).',
        'Automatic RF Failsafe: bot drive and weapons must instantly halt if signal is lost.',
        'Visible external master power kill switch and removable link accessible in 5 seconds.'
      ]
    },
    {
      id: '04',
      icon: Zap,
      title: 'Battery & Power Chemistry',
      badge: '24V Max Voltage',
      items: [
        'Maximum voltage: 24V nominal (6S LiPo maximum battery pack configuration).',
        'All batteries must be enclosed in minimum 2mm puncture-resistant armor casing.',
        'Dedicated LiPo charging fire-safety bags mandatory inside pit areas.'
      ]
    }
  ]

  const forbidden = [
    'No untethered projectile weapons, high explosives, or untethered projectiles.',
    'No chemical flammables, liquid flame projectors, smoke canisters, or corrosive liquids.',
    'No radio jamming equipment, high-voltage tasers, EMP emitters, or electrical arcing devices.',
    'No entangling nets, liquid glue, foams, or arena flooring sabotage devices.'
  ]

  return (
    <section id="rules" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Rules &amp; <span className="text-red-500 underline decoration-red-600/60">Conditions</span>
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Safety in the arena is non-negotiable. Click each rule category below to view detailed tech specifications and mandatory clearance guidelines.
        </p>
      </div>

      {/* Rules Dropdowns (Accordion List) with Ash Glass Highlight */}
      <div className="max-w-4xl mx-auto space-y-4 mb-12">
        {rules.map((rule, idx) => {
          const Icon = rule.icon
          const isOpen = openIndex === idx

          return (
            <div
              key={rule.title}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#262932]/95 border-red-500/60 shadow-2xl shadow-red-950/40 backdrop-blur-2xl'
                  : 'bg-[#22252c]/75 border-zinc-400/25 hover:border-zinc-300/40 hover:bg-[#282c35]/85 backdrop-blur-xl shadow-xl shadow-black/60'
              }`}
              style={{
                boxShadow: isOpen
                  ? '0 20px 40px -15px rgba(0,0,0,0.8), inset 0 1px 1px 0 rgba(255,255,255,0.25)'
                  : '0 10px 30px -10px rgba(0,0,0,0.6), inset 0 1px 1px 0 rgba(255,255,255,0.18)'
              }}
            >
              {/* Dropdown Header Button */}
              <button
                type="button"
                onClick={() => toggleRule(idx)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer focus:outline-none transition-colors group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-4">
                  {/* Category Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
                      isOpen
                        ? 'bg-red-600/25 border border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                        : 'bg-zinc-800/80 border border-zinc-500/30 text-white shadow-md group-hover:border-zinc-400/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center space-x-2.5">
                      <span className="text-xs font-mono font-bold text-red-500">{rule.id}</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-red-100 transition-colors">
                        {rule.title}
                      </h3>
                    </div>
                    <span className="text-xs text-zinc-300 hidden sm:inline-block font-mono mt-0.5">
                      {rule.badge} &bull; {rule.items.length} Specifications
                    </span>
                  </div>
                </div>

                {/* Prominent Red Color "VIEW RULES" / "COLLAPSE" Button */}
                <div className="flex items-center shrink-0 ml-3 sm:ml-4">
                  <div
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 shadow-md cursor-pointer ${
                      isOpen
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] ring-2 ring-red-400/50'
                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-900/50 hover:shadow-red-600/60 transform group-hover:scale-105'
                    }`}
                  >
                    <span>{isOpen ? 'COLLAPSE' : 'VIEW RULES'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Dropdown Content */}
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-zinc-600/40 animate-in fade-in slide-in-from-top-2 duration-200">
                  <ul className="space-y-3 pt-3">
                    {rule.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-100 bg-[#16181f]/85 p-4 rounded-xl border border-zinc-600/30 shadow-inner"
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Forbidden Weapons Box with Matching Ash Highlight */}
      <div 
        className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#22252c]/85 border border-red-500/50 backdrop-blur-2xl relative overflow-hidden shadow-2xl"
        style={{
          boxShadow: '0 15px 35px -10px rgba(0,0,0,0.7), inset 0 1px 1px 0 rgba(255,255,255,0.18)'
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 border-b border-red-900/50 pb-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-500 animate-bounce" />
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              Strictly Prohibited Weapons &amp; Equipment
            </h3>
          </div>
          <span className="text-[11px] font-mono text-red-400 bg-red-950/60 px-3 py-1 rounded-full border border-red-500/40 self-start sm:self-auto font-semibold">
            IMMEDIATE DISQUALIFICATION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {forbidden.map((text, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-zinc-200 bg-[#16181f]/80 p-3.5 rounded-xl border border-red-900/30">
              <span className="text-red-500 font-bold">&times;</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
