import React from 'react'
import { Users } from 'lucide-react'

const PARTNERS = [
  {
    acronym: 'SIS',
    fullName: 'Student Interactive Society',
    logo: '/SIS.jpg',
    description:
      'Student Interactive Society (SIS) is the largest student representative body and the leading student organization at SLIIT, dedicated to representing, connecting, and empowering students across all faculties and schools. SIS is committed to enhancing the student experience by creating opportunities that promote leadership, innovation, collaboration, volunteerism, professional development, and community engagement. Through university-wide initiatives, flagship events, strategic partnerships, and student-led projects, SIS empowers students to develop as responsible leaders and make meaningful contributions to society.'
  },
  {
    acronym: 'FCSC',
    fullName: 'Faculty of Computing Student Community',
    logo: '/FCSC.png',
    description:
      'Faculty of Computing Student Community (FCSC), currently the largest active student society of SLIIT. All clubs and societies affiliated with the Faculty of Computing are managed and supervised by the FCSC. We are committed to assisting you with any academic or non-academic problems that may arise and we are the only authorized society that represents the students of the Faculty of Computing.'
  },
  {
    acronym: 'CSSC',
    fullName: 'Computer Science Student Community',
    logo: '/CSSC.jpg',
    description:
      'The Computer Science Student Community (CSSC) of SLIIT, established in June 2025, is a student-driven initiative dedicated to fostering growth, collaboration, and innovation among undergraduates. We provide a platform where students can expand their technical expertise, share knowledge, and develop essential soft skills to thrive in both academic and professional environments. Through workshops, tech talks, coding competitions, networking sessions, and industry collaborations, CSSC empowers students to go beyond the classroom, preparing them to meet real-world challenges with confidence.'
  }
]

export default function OrganizingPartners() {
  return (
    <section id="partners" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background Ambient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-red-500/40 bg-red-950/40 text-red-400 text-xs font-mono uppercase tracking-widest shadow-lg shadow-red-950/40">
          <Users className="w-3.5 h-3.5" />
          <span>OFFICIAL ORGANIZING BODIES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          ORGANIZING <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">PARTNERS</span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          TITAN Bot Battle is engineered and brought to life through the collaborative vision of SLIIT&apos;s leading student governing councils and technical societies.
        </p>
      </div>

      {/* 3 Partners Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PARTNERS.map((partner) => (
          <div
            key={partner.acronym}
            className="rounded-3xl p-7 sm:p-8 bg-[#1e2025]/85 border border-zinc-700/60 backdrop-blur-2xl shadow-xl flex flex-col justify-start hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group"
            style={{
              boxShadow: '0 15px 35px -10px rgba(0,0,0,0.6), inset 0 1px 1px 0 rgba(255,255,255,0.15)'
            }}
          >
            {/* Partner Header (Logo + Society Name) */}
            <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-zinc-800/80">
              {/* Logo Frame */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-zinc-950/80 border border-zinc-700/60 p-2 shadow-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.acronym} Logo`}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Society Name (Right next to the logo) */}
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-red-400 transition-colors">
                  {partner.acronym}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-300 tracking-wide mt-0.5 leading-snug">
                  {partner.fullName}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-justify">
              {partner.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
