import React from 'react'
import { Shield, Sparkles, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-black/80 backdrop-blur-2xl relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-600/40 flex items-center justify-center p-1.5 shadow-md">
                <img
                  src="/titan-logo.png"
                  alt="TITAN Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                />
              </div>
              <div>
                <span className="font-extrabold tracking-widest text-white text-lg block">
                  TITAN &bull; BOT BATTLE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase -mt-0.5 block">
                  SLIIT&apos;S INAUGURAL COMBAT ARENA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Sri Lanka&apos;s first-ever premier collegiate combat robotics tournament. Designed, hosted, and engineered at the Sri Lanka Institute of Information Technology (SLIIT).
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>LIVE COMBAT SYSTEM &bull; SEASON 01 &bull; 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-300 font-mono mb-4">
              Arena Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 font-mono">
              <li><a href="#home" className="hover:text-white transition-colors">&gt; Home Arena</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">&gt; About SLIIT Battle</a></li>
              <li><a href="#rules" className="hover:text-red-400 text-red-400/90 transition-colors">&gt; Rules &amp; Conditions</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">&gt; Contact &amp; Support</a></li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-300 font-mono mb-4">
              Venue &amp; Dates
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li className="text-white font-semibold">SLIIT Malabe Campus</li>
              <li>SLIIT Quadrangle</li>
              <li>New Kandy Road, Malabe</li>
              <li className="pt-2 text-red-400 font-mono font-bold">2027 FEB 12 &bull; 9:00 AM</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>&copy; 2026 TITAN Bot Battle &bull; Sri Lanka Institute of Information Technology (SLIIT). All Rights Reserved.</p>
          <div className="flex items-center space-x-2 text-zinc-400 font-mono text-[11px]">
            <span>POWERED BY</span>
            <span className="text-white font-bold">SLIIT ROBOTICS</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

