import React from 'react'
import Navbar from './components/Navbar'
import ArenaCountdown from './components/ArenaCountdown'
import PrizePoolSection from './components/PrizePoolSection'
import AboutArenaSection from './components/AboutArenaSection'
import OrganizingPartners from './components/OrganizingPartners'
import RulesSection from './components/RulesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { ArrowRight, Swords, Calendar, MapPin, Clock } from 'lucide-react'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Background Video (High-Contrast Black & White Industrial/Robotics Atmosphere) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20 grayscale contrast-125 brightness-[0.70] pointer-events-none"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Deep Dark Arena Vignette Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 -z-10 pointer-events-none" />

      {/* Floating Ash-Tinted Glassmorphic Navbar with Spartan Helmet Logo */}
      <Navbar />

      {/* Main Content Arena */}
      <main className="relative z-10 w-full">
        
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between">
          
          {/* Top / Main Hero Content (Left-aligned) */}
          <div className="space-y-6 max-w-2xl text-left">
            {/* Main Arena Headline with Official Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              BUILT TO BATTLE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">BORN TO WIN.</span>
            </h1>

            {/* Narrative description */}
            <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed">
              <span className="text-white font-semibold">TITAN 2026</span> is an exciting robot combat competition where innovation, engineering, and creativity collide. Talented competitors design, build, and battle powerful robots in an action-packed arena, showcasing their technical skills and strategies. Get ready for intense battles, thrilling moments, and ultimate victory.
            </p>

            {/* Single CTA Action Button: REGISTER ONLY */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all shadow-xl shadow-red-900/40 hover:shadow-red-600/60 transform hover:-translate-y-0.5"
              >
                <Swords className="w-4 h-4" />
                <span>REGISTER YOUR BOT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Unified Bottom Row: Date/Venue/Time on Left + Countdown on Right (Exact Same Level) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end pt-12 mt-10 border-t border-zinc-800/80 w-full">
            
            {/* Left: Event Key Info Badges (Date, Venue, Time) */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                {/* DATE */}
                <div 
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#2a2d34]/45 border border-zinc-400/30 backdrop-blur-xl shadow-lg shadow-black/40 flex flex-col justify-center"
                  style={{ boxShadow: '0 10px 25px -10px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.2)' }}
                >
                  <div className="flex items-center space-x-1.5 text-red-500 text-[10px] mb-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>DATE</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white tracking-tight">2027 FEB 12</div>
                  <div className="text-[10px] text-zinc-400 tracking-wider mt-0.5">THE CLASH</div>
                </div>

                {/* VENUE */}
                <div 
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#2a2d34]/45 border border-red-500/40 backdrop-blur-xl shadow-lg shadow-black/40 flex flex-col justify-center"
                  style={{ boxShadow: '0 10px 25px -10px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.2)' }}
                >
                  <div className="flex items-center space-x-1.5 text-red-400 text-[10px] mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>VENUE</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-red-400 tracking-tight truncate">SLIIT QUADRANGLE</div>
                  <div className="text-[10px] text-zinc-400 tracking-wider mt-0.5">MALABE CAMPUS</div>
                </div>

                {/* TIME */}
                <div 
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#2a2d34]/45 border border-zinc-400/30 backdrop-blur-xl shadow-lg shadow-black/40 flex flex-col justify-center"
                  style={{ boxShadow: '0 10px 25px -10px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.2)' }}
                >
                  <div className="flex items-center space-x-1.5 text-zinc-300 text-[10px] mb-1 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>TIME</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white tracking-tight">9:00 AM</div>
                  <div className="text-[10px] text-zinc-400 tracking-wider mt-0.5">ONWARDS</div>
                </div>
              </div>
            </div>

            {/* Right: Countdown Timer (Exact Same Horizontal Baseline) */}
            <div className="lg:col-span-5 xl:col-span-5 w-full">
              <ArenaCountdown />
            </div>

          </div>

        </section>

        {/* ================= PRIZE POOL SECTION ================= */}
        <PrizePoolSection />

        {/* ================= ABOUT SLIIT BATTLE ARENA ================= */}
        <AboutArenaSection />

        {/* ================= ORGANIZING PARTNERS (SIS, FCSC, CSSC) ================= */}
        <OrganizingPartners />

        {/* ================= RULES & CONDITIONS SECTION ================= */}
        <RulesSection />

        {/* ================= CONTACT & ORGANIZERS SECTION ================= */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
