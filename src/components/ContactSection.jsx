import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)

    const SERVICE_ID = 'service_fvk84ye'
    const TEMPLATE_ID = 'template_8v351fw'
    const PUBLIC_KEY = 'mTeFyM1rVUxCn2GBW'

    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      user_name: formData.name,
      from_email: formData.email,
      email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // Auto dismiss success badge after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('EmailJS send error:', error)
      setErrorMessage(
        error?.text || 'Failed to dispatch message. Please try again or verify your connection.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          CONTACT <span className="text-red-500 underline decoration-red-600/60">US</span>
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Have questions about tickets, company registration, or organizing an event? Drop us a message below.
        </p>
      </div>

      {/* Centered Clean Ash-Glass Form Container */}
      <div 
        className="max-w-3xl mx-auto bg-[#22252c]/80 border border-zinc-400/25 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative"
        style={{
          boxShadow: '0 20px 45px -15px rgba(0,0,0,0.75), inset 0 1px 1px 0 rgba(255,255,255,0.18)'
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error Message Notice if any */}
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 flex items-start space-x-3 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-300 tracking-wider uppercase mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-[#14161d]/90 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all shadow-inner"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-zinc-300 tracking-wider uppercase mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-[#14161d]/90 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Row 2: Message Textarea */}
          <div>
            <label className="block text-[11px] font-mono font-bold text-zinc-300 tracking-wider uppercase mb-2">
              YOUR MESSAGE
            </label>
            <textarea
              rows={5}
              required
              placeholder="How can we assist you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-[#14161d]/90 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all resize-none shadow-inner"
            />
          </div>

          {/* Submit CTA Button + Success Tag */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(220,38,38,0.55)] hover:shadow-[0_0_45px_rgba(220,38,38,0.85)] flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>TRANSMITTING MESSAGE...</span>
                </div>
              ) : (
                <>
                  <span>SEND MESSAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Compact Success Tag */}
            {isSubmitted && (
              <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 flex items-center justify-center space-x-2 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.25)] animate-in fade-in slide-in-from-top-1 duration-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SENT SUCCESSFULLY</span>
              </div>
            )}
          </div>
        </form>

      </div>
    </section>
  )
}
