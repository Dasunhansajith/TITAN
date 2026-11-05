import React from 'react'
import { Trophy, Target, Shield, Users, MapPin, Sparkles, Award } from 'lucide-react'

export default function AboutArenaSection() {
  const highlights = [
    {
      icon: Trophy,
      title: 'Sri Lanka’s 1st Heavyweight Combat Arena',
      desc: 'SLIIT makes history by constructing the nation’s first certified high-kinetic combat robotics containment cage, featuring bulletproof 12mm polycarbonate shielding.'
    },
    {
      icon: Users,
      title: 'Inter-University & National Teams',
      desc: 'Welcoming collegiate engineering teams, independent makers, and robotics innovators from across the island to clash for supremacy.'
    },
    {
      icon: Award,
      title: 'LKR 500,000+ Total Prize Purse',
      desc: 'Champion trophies, cash purses, and sponsor awards for Champion, Runner Up, Most Destructive Robot, and Best Autonomous Innovation.'
    },
    {
      icon: Target,
      title: 'High-Speed Telemetry & 4K Slow-Mo',
      desc: 'Live broadcast with arena pit cameras, real-time kinetic impact sensors, and 1000 FPS slow-motion replays on arena LED screens.'
    }
  ]

  return (
    <section id="about" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Container */}
      <div className="rounded-3xl p-8 sm:p-14 bg-zinc-900/50 border border-zinc-700/40 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        
        {/* Subtle red background flare */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-red-500/30 bg-red-950/40 text-red-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE INAUGURAL ERA &bull; SEASON 01</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
              Engineering Meets <br />
              <span className="text-red-500 underline decoration-red-600/60">Raw Destruction.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Organized by the **Sri Lanka Institute of Information Technology (SLIIT)**, TITAN Bot Battle is the country’s landmark inaugural combat robotics spectacle.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Undergraduate engineers put their custom mechanics, brush-less drive trains, and high-tensile armor to the ultimate survival trial inside an electrified steel arena. When the cage locks, only one bot walks away operating.
            </p>

            <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 pt-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>SLIIT Malabe Campus, New Kandy Road, Malabe, Sri Lanka</span>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-black/40 border border-zinc-800 space-y-2.5 hover:border-red-500/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>

      </div>

    </section>
  )
}

