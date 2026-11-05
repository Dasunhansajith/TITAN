import React from 'react'
import { Trophy, CheckCircle2 } from 'lucide-react'

export default function PrizePoolSection() {
  const prizes = [
    {
      place: '2ND',
      amount: '150,000',
      currency: 'LKR',
      orderClass: 'order-2 lg:order-1',
      elevation: '',
      cardBg: 'bg-gradient-to-b from-[#22262e]/90 via-[#15171c]/90 to-[#0e1014]/95',
      borderColor: 'border-slate-300/60 hover:border-white',
      shadowStyle: '0 0 40px -8px rgba(226, 232, 240, 0.28), 0 20px 40px -15px rgba(0,0,0,0.8), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
      topFlare: 'bg-gradient-to-r from-slate-400 via-white to-slate-400',
      trophyStyle: 'bg-slate-300/20 border border-slate-300/50 text-slate-100 shadow-[0_0_20px_rgba(226,232,240,0.35)]',
      rankText: 'text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-zinc-300',
      amountText: 'text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-zinc-300',
      currencyText: 'text-slate-300',
      iconColor: 'text-slate-200',
      perks: [
        'Silver Runner-Up Trophy & Silver Medals',
        'Official SLIIT Certificate of Engineering Merit',
        'Pits Sponsorship & Hardware Component Kit'
      ]
    },
    {
      place: '1ST',
      amount: '250,000',
      currency: 'LKR',
      orderClass: 'order-1 lg:order-2',
      elevation: 'lg:-translate-y-6',
      cardBg: 'bg-gradient-to-b from-[#2c2617]/90 via-[#1c180e]/90 to-[#121008]/95',
      borderColor: 'border-amber-400/80 hover:border-yellow-300',
      shadowStyle: '0 0 50px -5px rgba(245, 158, 11, 0.4), 0 25px 60px -15px rgba(0,0,0,0.9), inset 0 1px 2px rgba(254, 240, 138, 0.6)',
      topFlare: 'bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-500 shadow-[0_0_15px_#f59e0b]',
      trophyStyle: 'bg-amber-500/25 border border-amber-400/60 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.5)]',
      rankText: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500',
      amountText: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400',
      currencyText: 'text-amber-400',
      iconColor: 'text-amber-400',
      isChampion: true,
      perks: [
        'SLIIT Titan Grand Champion Trophy',
        'Gold Medals for all Team Engineers',
        'Certified National Battle Winner Title',
        'Direct Seed to International Combat Invitational'
      ]
    },
    {
      place: '3RD',
      amount: '100,000',
      currency: 'LKR',
      orderClass: 'order-3 lg:order-3',
      elevation: '',
      cardBg: 'bg-gradient-to-b from-[#2d1e15]/90 via-[#1d140e]/90 to-[#120d09]/95',
      borderColor: 'border-orange-500/60 hover:border-orange-400',
      shadowStyle: '0 0 40px -8px rgba(234, 88, 12, 0.28), 0 20px 40px -15px rgba(0,0,0,0.8), inset 0 1px 2px rgba(251, 146, 60, 0.45)',
      topFlare: 'bg-gradient-to-r from-amber-700 via-orange-400 to-amber-700',
      trophyStyle: 'bg-orange-500/20 border border-orange-500/50 text-orange-300 shadow-[0_0_20px_rgba(234,88,12,0.35)]',
      rankText: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-500 to-orange-400',
      amountText: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-400 to-orange-400',
      currencyText: 'text-orange-400',
      iconColor: 'text-orange-400',
      perks: [
        'Bronze Trophy & Bronze Medals',
        'Official SLIIT Certificate of Recognition',
        'Hardware Developer Voucher'
      ]
    }
  ]

  return (
    <section id="prizes" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background Podium Cinematic Image & Spotlight Effect */}
      <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden opacity-30 pointer-events-none">
        <img
          src="/podium.jpg"
          alt="Podium Background"
          className="w-full h-full object-cover object-bottom filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080d] via-black/70 to-[#07080d]" />
      </div>

      {/* Dramatic Top Spotlight Beam directly centered */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[380px] pointer-events-none -z-10 opacity-80"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(245, 158, 11, 0.2) 35%, transparent 70%)',
          filter: 'blur(30px)'
        }}
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-950/40 text-amber-400 text-xs font-mono uppercase tracking-widest shadow-lg shadow-amber-950/50">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>LKR 500,000 TOTAL CHAMPIONSHIP PURSE</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          PRIZE POOL &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">GLORY</span>
        </h2>
        
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Heavy metal glory meets substantial rewards. Cash prizes, custom machined national trophies, and university prestige await the top 3 combat squads.
        </p>
      </div>

      {/* 3-Tier Podium Grid (Order: 2nd Silver, 1st Gold, 3rd Bronze) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-end max-w-6xl mx-auto pt-6">
        {prizes.map((prize) => {
          return (
            <div
              key={prize.place}
              className={`${prize.orderClass} ${prize.elevation} transition-all duration-500 hover:scale-[1.02] flex flex-col`}
            >
              {/* Podium Card */}
              <div
                className={`p-7 sm:p-8 rounded-3xl ${prize.cardBg} border ${prize.borderColor} backdrop-blur-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300`}
                style={{
                  boxShadow: prize.shadowStyle
                }}
              >
                {/* Top Subtle Flare Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${prize.topFlare}`} />

                <div>
                  {/* Top Row: Rank Display + Trophy Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-4xl sm:text-5xl font-black tracking-tight ${prize.rankText}`}>
                        {prize.place}
                      </span>
                      <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                        PLACE
                      </span>
                    </div>
                    
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${prize.trophyStyle}`}>
                      <Trophy className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Cash Amount with Specific Metallic Gradient */}
                  <div className="py-4 border-y border-zinc-800/80 my-4 bg-black/20 -mx-7 px-7 sm:-mx-8 sm:px-8">
                    <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold mb-1">
                      CASH REWARD
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-xs font-mono font-bold ${prize.currencyText}`}>
                        {prize.currency}
                      </span>
                      <span className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight ${prize.amountText} drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]`}>
                        {prize.amount}
                      </span>
                    </div>
                  </div>

                  {/* Perks List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
                      AWARDS &amp; PRIVILEGES:
                    </div>
                    {prize.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${prize.iconColor}`} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
