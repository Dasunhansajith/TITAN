import React from 'react'
import { ShieldAlert, AlertTriangle, CheckCircle2, Lock, Radio, Zap, Scale, FileText } from 'lucide-react'

export default function RulesSection() {
  const rules = [
    {
      icon: Scale,
      title: 'Weight & Size Restrictions',
      items: [
        'Combat Class: 15.00 KG Featherweight (Max allowable weight: 15.05 KG).',
        'Starting Box: Bot must fit within an 800mm x 800mm x 600mm sizing boundary.',
        'Cluster bots permitted provided total combined weight does not exceed 15.00 KG.'
      ]
    },
    {
      icon: Lock,
      title: 'Weapon Safety & Locking Pins',
      items: [
        'Mandatory physical weapon locking pin must be inserted at all times outside the battle arena.',
        'Weapon spin-down time must be less than 60 seconds upon power disarm.',
        'High-velocity blades must be rated for minimum 2.5x max operating RPM shock load.'
      ]
    },
    {
      icon: Radio,
      title: 'Radio Control & Failsafes',
      items: [
        'Strict 2.4 GHz digital spread spectrum radio systems with confirmed failsafe.',
        'Immediate engine shutdown: Bot must completely halt drive and weapon within 1.0s of signal loss.',
        'All robots subject to mandatory live transmitter power-cut safety inspection before qualification.'
      ]
    },
    {
      icon: Zap,
      title: 'Power & Battery Safety',
      items: [
        'Lithium batteries (LiPo/LiFePO4) must be encased in a rigid 3mm metal armored enclosure.',
        'Externally accessible Master Power Switch or Removable Link to kill all voltage instantly.',
        'Maximum system electrical voltage capped at 48V DC.'
      ]
    }
  ]

  const forbidden = [
    'Liquids, foams, or flammable gases of any kind.',
    'Untethered projectiles or explosives.',
    'Radio frequency jammers, tasers, or EMP generation.',
    'Entanglement nets, fishing lines, or magnetic floor clamping exceeding safety limits.'
  ]

  return (
    <section id="rules" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-mono uppercase tracking-widest">
          <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
          <span>OFFICIAL RULEBOOK &bull; SLIIT 2026</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Rules &amp; <span className="text-red-500 underline decoration-red-600/60">Conditions</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Safety in the arena is non-negotiable. All competitor bots must strictly pass the mandatory SLIIT Tech Inspection before being granted clearance to battle.
        </p>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {rules.map((rule) => {
          const Icon = rule.icon
          return (
            <div
              key={rule.title}
              className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-700/50 backdrop-blur-xl space-y-5 hover:border-red-500/40 transition-colors"
            >
              <div className="flex items-center space-x-3 pb-3 border-b border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {rule.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {rule.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* Forbidden Weapons Box */}
      <div className="p-8 rounded-3xl bg-red-950/30 border border-red-600/40 backdrop-blur-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-red-900/50 pb-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-500 animate-bounce" />
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              Strictly Prohibited Weapons &amp; Equipment
            </h3>
          </div>
          <span className="text-xs font-mono text-red-400 bg-red-900/40 px-3 py-1 rounded-full border border-red-500/30 self-start sm:self-auto">
            IMMEDIATE DISQUALIFICATION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {forbidden.map((text, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm text-zinc-300 bg-black/40 p-3.5 rounded-xl border border-red-900/30">
              <span className="text-red-500 font-bold">&times;</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

