import React, { useState } from 'react'
import { Mail, MapPin, Phone, Clock, ChevronDown, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Query',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        inquiryType: 'General Query',
        message: ''
      })
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtitle / Header (Matching User Reference Image) */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <p className="text-zinc-300 text-sm sm:text-base font-normal tracking-wide">
          Have questions about tickets, company registration, or organizing an event? Drop us a message below.
        </p>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

        {/* ================= LEFT COLUMN: INQUIRY FORM ================= */}
        <div className="lg:col-span-7 bg-[#12141a]/85 border border-zinc-800/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-black/80 relative">

          {isSubmitted && (
            <div className="absolute inset-0 bg-[#12141a]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center text-red-500 mb-3 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Message Transmitted!</h3>
              <p className="text-zinc-300 text-sm mt-1 max-w-md">
                Thank you for contacting the TITAN Arena team. We will respond to your inquiry shortly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: YOUR NAME & EMAIL ADDRESS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 tracking-wider uppercase mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/90 border border-zinc-800/90 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 transition-colors shadow-inner"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-300 tracking-wider uppercase mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/90 border border-zinc-800/90 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 transition-colors shadow-inner"
                />
              </div>
            </div>

            {/* Row 2: INQUIRY TYPE */}
            <div>
              <label className="block text-[11px] font-bold text-zinc-300 tracking-wider uppercase mb-2">
                INQUIRY TYPE
              </label>
              <div className="relative">
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/90 border border-zinc-800/90 text-white text-sm focus:outline-none focus:border-red-500 transition-colors appearance-none pr-10 cursor-pointer shadow-inner"
                >
                  <option value="General Query" className="bg-zinc-900 text-white">General Query</option>
                  <option value="Bot Registration" className="bg-zinc-900 text-white">Bot Registration</option>
                  <option value="Tickets &amp; Passes" className="bg-zinc-900 text-white">Tickets &amp; Passes</option>
                  <option value="Sponsorship &amp; Partnership" className="bg-zinc-900 text-white">Sponsorship &amp; Partnership</option>
                  <option value="Organizing an Event" className="bg-zinc-900 text-white">Organizing an Event</option>
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Row 3: YOUR MESSAGE */}
            <div>
              <label className="block text-[11px] font-bold text-zinc-300 tracking-wider uppercase mb-2">
                YOUR MESSAGE
              </label>
              <textarea
                rows={4}
                required
                placeholder="How can we assist you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/90 border border-zinc-800/90 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none shadow-inner"
              />
            </div>

            {/* Row 4: SEND MESSAGE BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(220,38,38,0.55)] hover:shadow-[0_0_45px_rgba(220,38,38,0.85)] flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>SEND MESSAGE</span>
                <span className="text-lg leading-none">&rarr;</span>
              </button>
            </div>
          </form>

        </div>

        {/* ================= RIGHT COLUMN: 4 STACKED CARDS ================= */}
        <div className="lg:col-span-5 space-y-4">

          {/* Card 1: EMAIL SUPPORT */}
          <div className="rounded-2xl bg-[#12141a]/85 border border-zinc-800/90 backdrop-blur-2xl p-5 sm:p-6 flex items-center space-x-4 sm:space-x-5 shadow-xl shadow-black/60 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#181a22]">
            <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase font-mono">
                EMAIL SUPPORT
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                <a href="mailto:xchangesrilanka@gmail.com" className="hover:text-white transition-colors">
                  titan@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Card 2: HEADQUARTERS */}


          {/* Card 3: DIRECT HOTLINE */}
          <div className="rounded-2xl bg-[#12141a]/85 border border-zinc-800/90 backdrop-blur-2xl p-5 sm:p-6 flex items-center space-x-4 sm:space-x-5 shadow-xl shadow-black/60 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#181a22]">
            <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase font-mono">
                DIRECT HOTLINE
              </h4>
              <div className="flex flex-col text-xs sm:text-sm text-zinc-400 font-mono space-y-0.5">
                <a href="tel:+94701675173" className="hover:text-white transition-colors">
                  +94 70 167 5173
                </a>
                <a href="tel:+94766414622" className="hover:text-white transition-colors">
                  +94 76 641 4622
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: OPERATING HOURS */}
          <div className="rounded-2xl bg-[#12141a]/85 border border-zinc-800/90 backdrop-blur-2xl p-5 sm:p-6 flex items-center space-x-4 sm:space-x-5 shadow-xl shadow-black/60 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#181a22]">
            <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase font-mono">
                OPERATING HOURS
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Monday &ndash; Sunday: 8:00 AM &ndash; 10:00 PM
              </p>
              <p className="text-xs font-semibold text-red-500 tracking-wide">
                Instant Digital Support 24/7
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
