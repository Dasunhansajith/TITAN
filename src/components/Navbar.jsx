import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('HOME')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position to adjust navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Section detection
      const sections = [
        { id: 'home', name: 'HOME' },
        { id: 'about', name: 'ABOUT US' },
        { id: 'rules', name: 'RULES & CONDITIONS' },
        { id: 'contact', name: 'CONTACT' },
      ]

      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'RULES & CONDITIONS', href: '#rules' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const handleNavClick = (name, href) => {
    setActiveTab(name)
    setIsMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const REGISTER_FORM_URL = 'https://forms.gle/ACN75DHLQ2AEiSoZ9'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-5 transition-all duration-300">
      {/* Floating Ash-Tinted Glassmorphic Container */}
      <nav
        className={`w-full max-w-6xl rounded-2xl sm:rounded-full transition-all duration-500 ease-out flex items-center justify-between px-5 sm:px-7 py-3 border ${
          isScrolled
            ? 'bg-[#1e2025]/75 backdrop-blur-2xl border-zinc-400/25 shadow-2xl shadow-black/80'
            : 'bg-[#2a2d34]/45 backdrop-blur-xl border-zinc-400/20 shadow-xl shadow-black/50'
        }`}
        style={{
          boxShadow: isScrolled
            ? '0 20px 40px -15px rgba(0,0,0,0.7), inset 0 1px 1px 0 rgba(255,255,255,0.15)'
            : '0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.2)'
        }}
      >
        {/* Brand Logo with Spartan/Titan Helmet */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('HOME', '#home')
          }}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          {/* Spartan Helmet Logo Container */}
          <div className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-500/30 flex items-center justify-center p-1.5 group-hover:bg-zinc-700/80 group-hover:border-zinc-300/50 transition-all duration-300 shadow-md backdrop-blur-md group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <img
              src="/titan-logo.png"
              alt="TITAN Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-extrabold tracking-widest text-white text-base sm:text-lg group-hover:text-slate-200 transition-colors">
            TITAN
          </span>
        </a>

        {/* Desktop Navigation Links (Ash Track) */}
        <div className="hidden md:flex items-center space-x-1.5 p-1 rounded-full bg-zinc-800/40 border border-zinc-500/20 backdrop-blur-md shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab === item.name
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.name, item.href)
                }}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white bg-zinc-600/50 shadow-md shadow-black/40 border border-zinc-400/40 backdrop-blur-xl'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-700/30 hover:backdrop-blur-md'
                }`}
              >
                <span>{item.name}</span>

                {/* Active Indicator Underline (Red with subtle neon glow) */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
                )}
              </a>
            )
          })}
        </div>

        {/* Desktop REGISTER CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={REGISTER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer bg-zinc-200/90 hover:bg-white text-zinc-950 shadow-md shadow-black/40 hover:shadow-zinc-300/20"
          >
            <span>REGISTER</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-800/50 border border-zinc-500/20 backdrop-blur-md focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Ash Theme) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-4 right-4 rounded-2xl bg-[#1e2025]/95 backdrop-blur-2xl border border-zinc-500/30 p-5 shadow-2xl shadow-black/90 space-y-2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => {
            const isActive = activeTab === item.name
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.name, item.href)
                }}
                className={`relative flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-all ${
                  isActive
                    ? 'text-white bg-zinc-600/50 border border-zinc-400/40 shadow-sm'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
                )}
              </a>
            )
          })}

          <div className="pt-2 border-t border-zinc-700/40">
            <a
              href={REGISTER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider text-white bg-red-600 hover:bg-red-500 transition-colors shadow-lg"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
