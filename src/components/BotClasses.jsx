import React from 'react'
import { Flame, Shield, Swords, Zap, Crosshair, Cpu } from 'lucide-react'

const BOT_ARCHETYPES = [
  {
    title: 'KINETIC SPINNERS',
    type: 'Offensive Heavy Hitter',
    rpm: '6,000 - 9,000 RPM',
    impact: '15,000+ Joules',
    desc: 'High-speed rotating steel bars and discs designed to transfer devastating kinetic energy on contact, ripping opponent armor to shreds.',
    icon: Flame,
    color: 'from-red-500/20 to-orange-500/10',
    borderColor: 'border-red-500/30'
  },
  {
    title: 'PNEUMATIC FLIPPERS',
    type: 'Arena Control Launcher',
    rpm: 'Instant Release',
    impact: '1000 PSI Pressure',
    desc: 'Equipped with compressed CO2 systems capable of hurling a 15KG opponent 8 feet into the air or out-of-the-arena bounds.',
    icon: Zap,
    color: 'from-amber-500/20 to-yellow-500/10',
    borderColor: 'border-amber-500/30'
  },
  {
    title: 'TITANIUM WEDGES',
    type: 'Defensive Ground Game',
    rpm: 'Torque Monster',
    impact: 'Pure Traction Power',
    desc: 'Low-ground clearance titanium ramps engineered to deflect spinner blows and push opponents straight into the arena killsaws and hazards.',
    icon: Shield,
    color: 'from-zinc-500/20 to-slate-500/10',
    borderColor: 'border-zinc-500/30'
  },
  {
    title: 'CRUSHERS & HAMMERS',
    type: 'Precision Piercer',
    rpm: 'Hydraulic Clamp',
    impact: '4 Tons Clamping Force',
    desc: 'Hardened steel claws and overhead hammers designed to puncture lithium battery packs and crush drive systems with lethal accuracy.',
    icon: Swords,
    color: 'from-purple-500/20 to-red-500/10',
    borderColor: 'border-purple-500/30'
  }
]

export default function BotClasses() {
  return (
    <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-950/40 text-red-400 text-xs font-mono uppercase tracking-widest">
          <Crosshair className="w-3.5 h-3.5" />
          <span>ARENA BOT ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Choose Your <span className="text-red-500 underline decoration-red-600/60">Destruction</span> Class
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          From high-velocity spinning blades to 1000 PSI pneumatic launchers, build your engineering masterpiece to withstand the brutal SLIIT arena.
        </p>
      </div>

      {/* Grid of Classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BOT_ARCHETYPES.map((bot) => {
          const Icon = bot.icon
          return (
            <div
              key={bot.title}
              className={`p-6 rounded-3xl bg-zinc-900/50 border ${bot.borderColor} backdrop-blur-xl flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl shadow-black/50 group`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center mb-5 group-hover:border-red-500/50 transition-colors">
                  <Icon className="w-6 h-6 text-red-400 group-hover:text-red-300" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                  {bot.type}
                </div>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  {bot.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {bot.desc}
                </p>
              </div>

              {/* Bot Specs Bar */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between text-zinc-400">
                  <span>DISC / SPEED:</span>
                  <span className="text-white font-bold">{bot.rpm}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>KINETIC FORCE:</span>
                  <span className="text-red-400 font-bold">{bot.impact}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}

