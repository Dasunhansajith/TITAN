import React, { useState, useEffect } from 'react'

export default function ArenaCountdown() {
  const calculateTimeLeft = () => {
    // Target Date: 2027 FEB 12, 09:00 AM Sri Lanka Time (GMT+05:30)
    const targetDate = new Date('2027-02-12T09:00:00+05:30').getTime()
    const now = new Date().getTime()
    const diff = targetDate - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ]

  return (
    <div className="w-full">
      {/* 4 Countdown Boxes with Navbar's Ash Color Blur & Highlight Effect */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 w-full">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="py-4 px-2 sm:py-5 sm:px-3 rounded-2xl sm:rounded-3xl bg-[#2a2d34]/45 hover:bg-[#32363f]/60 border border-zinc-400/30 hover:border-zinc-300/50 backdrop-blur-xl flex flex-col items-center justify-center space-y-1 transition-all duration-300 group hover:-translate-y-0.5"
            style={{
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.22)'
            }}
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono tracking-tight group-hover:text-slate-100 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-300 font-bold uppercase group-hover:text-white transition-colors">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
