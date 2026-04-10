import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiLocationMarker, HiPhone } from 'react-icons/hi'

// ─── Real branch data ─────────────────────────────────────────────────────────
const locations = [
  {
    city: 'Trichy',
    address: 'No.14, Jaya Nagar, 2nd Street,\nRMS Colony, Karumandapam,\nTrichy – 620 001',
    phone: '+91 80560 41921',
  },
  {
    city: 'Thanjavur',
    address: 'No.4 & 5, Sai Ram Complex,\nKamala Avenue, Alagammal Nagar,\nThanjavur – 613 005',
    phone: '+91 80560 41921',
  },
  {
    city: 'Chennai',
    address: 'No.18/2, Village Road, Balaji Nagar,\nPuzhuthivakkam,\nChennai – 600 091',
    phone: '+91 80560 41921',
  },
]

// ─── Airflow streak (horizontal) ─────────────────────────────────────────────
function AirStreak({ topPct, delay, widthPx, opacity = 0.65 }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        top: `${topPct}%`,
        height: '1.5px',
        width: widthPx,
        background:
          'linear-gradient(90deg, transparent, rgba(34,211,238,0.9), rgba(103,232,249,1), transparent)',
        opacity,
        left: 0,
      }}
      animate={{ x: [-300, 2400] }}
      transition={{
        duration: 2 + delay * 0.45,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

// ─── Rising air particle ──────────────────────────────────────────────────────
function AirParticle({ leftPct, delay, size = 2.5, duration = 3 }) {
  return (
    <motion.div
      className="absolute rounded-full bg-cyan-300"
      style={{
        left: `${leftPct}%`,
        bottom: '0%',
        width: size,
        height: size * 3,
        opacity: 0,
      }}
      animate={{ y: [0, -220], opacity: [0, 0.75, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
    />
  )
}

// ─── Location card with tooltip ───────────────────────────────────────────────
function LocationCard({ loc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
    >
      {/* Card body */}
      <div
        className="flex flex-col items-center text-center p-6 rounded-2xl border cursor-default select-none transition-all duration-300"
        style={{
          background: hovered ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.04)',
          borderColor: hovered ? 'rgba(6,182,212,0.45)' : 'rgba(255,255,255,0.08)',
          boxShadow: hovered ? '0 0 28px rgba(6,182,212,0.14)' : 'none',
        }}
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center mb-3 transition-all duration-300"
          style={{ background: hovered ? 'rgba(6,182,212,0.24)' : 'rgba(255,255,255,0.06)' }}
        >
          <HiLocationMarker className="text-cyan-400 text-xl" />
        </div>
        <h3 className="font-heading font-bold text-white text-lg tracking-wide">{loc.city}</h3>
        <p className="text-cyan-400/50 text-[11px] tracking-widest mt-1 uppercase">Branch Office</p>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 bottom-full mb-3 left-1/2 -translate-x-1/2 pointer-events-none"
          >
            <div className="bg-slate-800/97 backdrop-blur-sm border border-cyan-500/25 rounded-xl px-5 py-4 shadow-2xl shadow-slate-950/60 min-w-[210px] text-center">
              <p className="font-semibold text-cyan-300 text-sm mb-2">{loc.city} Branch</p>
              <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line">
                {loc.address}
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-3 text-cyan-400 text-xs font-medium">
                <HiPhone className="text-sm" />
                <span>{loc.phone}</span>
              </div>
            </div>
            {/* Arrow pointing down */}
            <div className="flex justify-center -mt-[1px]">
              <div
                className="w-3 h-3 rotate-45"
                style={{
                  background: 'rgba(30,41,59,0.97)',
                  borderRight: '1px solid rgba(6,182,212,0.25)',
                  borderBottom: '1px solid rgba(6,182,212,0.25)',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Main Landing Page ────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center overflow-x-hidden">

      {/* ══ HERO SECTION: AC image + exhaust-zone company name ══ */}
      <div className="relative w-full" style={{ height: '65vh', minHeight: 440 }}>

        {/* Base AC / HVAC image */}
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&auto=format&fit=crop&q=80"
          alt="HVAC / AC System"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/55 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />

        {/* Teal exhaust-glow layer */}
        <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-cyan-950/55 via-primary-900/20 to-transparent" />

        {/* ── Airflow animation zone (top 55% = AC exhaust area) ── */}
        <div className="absolute top-0 left-0 right-0 h-[55%] overflow-hidden">
          {/* Horizontal air streaks flowing →  */}
          <AirStreak topPct={12}  delay={0}    widthPx={120} opacity={0.65} />
          <AirStreak topPct={26}  delay={0.55} widthPx={85}  opacity={0.52} />
          <AirStreak topPct={40}  delay={1.1}  widthPx={165} opacity={0.78} />
          <AirStreak topPct={56}  delay={0.28} widthPx={95}  opacity={0.58} />
          <AirStreak topPct={70}  delay={0.85} widthPx={145} opacity={0.62} />
          <AirStreak topPct={84}  delay={0.45} widthPx={72}  opacity={0.47} />

          {/* Rising particles from the exhaust fan area */}
          <AirParticle leftPct={18} delay={0}    size={2.5} duration={3.2} />
          <AirParticle leftPct={33} delay={0.55} size={2}   duration={2.8} />
          <AirParticle leftPct={48} delay={0.9}  size={3}   duration={3.6} />
          <AirParticle leftPct={63} delay={0.3}  size={2.5} duration={2.6} />
          <AirParticle leftPct={76} delay={1.2}  size={2}   duration={3.1} />
          <AirParticle leftPct={41} delay={0.7}  size={2}   duration={2.5} />
          <AirParticle leftPct={56} delay={1.5}  size={3}   duration={3.4} />
          <AirParticle leftPct={27} delay={1}    size={2}   duration={2.9} />
        </div>

        {/* ── Company name displayed in the exhaust zone ── */}
        <div className="absolute top-0 left-0 right-0 h-[55%] flex items-center justify-center z-10">
          <motion.div
            className="relative text-center px-4"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Soft radial glow behind the name */}
            <div className="absolute inset-0 -m-16 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />

            {/* Company name – pulsing glow animation */}
            <motion.h1
              className="relative font-heading font-black text-6xl sm:text-7xl md:text-8xl tracking-wider leading-none"
              style={{
                background: 'linear-gradient(170deg, #cffafe 0%, #ffffff 45%, #a5f3fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                filter: [
                  'drop-shadow(0 0 16px rgba(34,211,238,0.5))',
                  'drop-shadow(0 0 40px rgba(34,211,238,0.9))',
                  'drop-shadow(0 0 16px rgba(34,211,238,0.5))',
                ],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              SS AIRCONS
            </motion.h1>

            {/* Sub-label */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-14 bg-gradient-to-r from-transparent to-cyan-400/55" />
              <span className="text-[10px] tracking-[0.45em] text-cyan-300/65 font-light uppercase">
                Est. 2004 · HVAC Specialists
              </span>
              <div className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-400/55" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══ TAGLINE ══ */}
      <motion.div
        className="text-center mt-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        <p className="text-xl sm:text-2xl tracking-[0.34em] text-cyan-300 uppercase font-light font-heading">
          Experts in HVAC
        </p>
        <motion.div
          className="mx-auto mt-4 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '8rem' }}
          transition={{ duration: 1.2, delay: 1.05 }}
        />
      </motion.div>

      {/* ══ LOCATION CARDS ══ */}
      <motion.div
        className="mt-12 px-6 max-w-3xl w-full grid grid-cols-1 sm:grid-cols-3 gap-5"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.9 }}
      >
        {locations.map((loc) => (
          <LocationCard key={loc.city} loc={loc} />
        ))}
      </motion.div>

      {/* ══ CTA BUTTON ══ */}
      <motion.div
        className="flex justify-center mt-12 mb-16 px-4"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 1.1 }}
      >
        <Link
          to="/home"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-cyan-400 text-white font-semibold text-base px-10 py-4 rounded-full shadow-lg shadow-primary-900/40 hover:shadow-primary-500/30 hover:shadow-2xl transition-all duration-300"
        >
          Visit Our Full Website
          <HiArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </motion.div>
    </div>
  )
}
