import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiLocationMarker, HiPhone } from 'react-icons/hi'

// ─── Branch data ──────────────────────────────────────────────────────────────
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

// ─── Airflow streak ───────────────────────────────────────────────────────────
function AirStreak({ topPct, delay, widthPx, opacity = 0.65 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        top: `${topPct}%`,
        height: '1.5px',
        width: widthPx,
        background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.9), rgba(103,232,249,1), transparent)',
        opacity,
        left: 0,
      }}
      animate={{ x: [-300, 2400] }}
      transition={{ duration: 2 + delay * 0.45, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

// ─── Rising air particle ──────────────────────────────────────────────────────
function AirParticle({ leftPct, delay, size = 2.5, duration = 3 }) {
  return (
    <motion.div
      className="absolute rounded-full bg-cyan-300 pointer-events-none"
      style={{ left: `${leftPct}%`, bottom: '0%', width: size, height: size * 3, opacity: 0 }}
      animate={{ y: [0, -240], opacity: [0, 0.8, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
    />
  )
}

// ─── Location card with tooltip ───────────────────────────────────────────────
function LocationCard({ loc, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      <div
        className="flex flex-col items-center text-center p-6 rounded-2xl border cursor-default select-none transition-all duration-300"
        style={{
          background: hovered ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.04)',
          borderColor: hovered ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.08)',
          boxShadow: hovered ? '0 0 32px rgba(6,182,212,0.18)' : 'none',
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

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 bottom-full mb-3 left-1/2 -translate-x-1/2 pointer-events-none"
          >
            <div className="bg-slate-800 backdrop-blur-sm border border-cyan-500/25 rounded-xl px-5 py-4 shadow-2xl min-w-[210px] text-center">
              <p className="font-semibold text-cyan-300 text-sm mb-2">{loc.city} Branch</p>
              <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line">{loc.address}</p>
              <div className="flex items-center justify-center gap-1.5 mt-3 text-cyan-400 text-xs font-medium">
                <HiPhone className="text-sm" />
                <span>{loc.phone}</span>
              </div>
            </div>
            <div className="flex justify-center -mt-px">
              <div className="w-3 h-3 rotate-45" style={{ background: 'rgb(30,41,59)', borderRight: '1px solid rgba(6,182,212,0.25)', borderBottom: '1px solid rgba(6,182,212,0.25)' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Main Landing Page ────────────────────────────────────────────────────────
// Cinematic sequence:
//  0.0s  Dark screen
//  0.3s  AC image fades in from dark (scale 1.08 → 1.0) — "powering on"
//  2.0s  Top & bottom curtains SPLIT OPEN like AC louvres opening
//  2.3s  Company name blazes in from exhaust zone
//  3.0s  Tagline appears
//  3.4s  Location cards stagger in
//  3.9s  CTA button slides up
export default function LandingPage() {
  const [phase, setPhase] = useState('dark')   // dark | reveal | open | done

  useEffect(() => {
    // Step 1: fade in the AC image
    const t1 = setTimeout(() => setPhase('reveal'), 100)
    // Step 2: open the curtains (louvre animation)
    const t2 = setTimeout(() => setPhase('open'), 2000)
    // Step 3: everything else animates in via their own delays
    const t3 = setTimeout(() => setPhase('done'), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const imageReady = phase !== 'dark'
  const curtainsOpen = phase === 'open' || phase === 'done'
  const contentVisible = phase === 'done'

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — full-screen cinematic AC reveal
      ══════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 520 }}>

        {/* ── AC image — fades & zooms in ── */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={imageReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&auto=format&fit=crop&q=80"
            alt="AC Unit"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dark overlay keeps contrast */}
          <div className="absolute inset-0 bg-slate-950/60" />
          {/* Edge vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80" />
        </motion.div>

        {/* ── TOP CURTAIN (slides up) ── */}
        <motion.div
          className="absolute left-0 right-0 top-0 z-20 bg-slate-950 origin-top"
          initial={{ scaleY: 1 }}
          animate={curtainsOpen ? { scaleY: 0 } : { scaleY: 1 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          style={{ height: '50%', transformOrigin: 'top' }}
        />

        {/* ── BOTTOM CURTAIN (slides down) ── */}
        <motion.div
          className="absolute left-0 right-0 bottom-0 z-20 bg-slate-950 origin-bottom"
          initial={{ scaleY: 1 }}
          animate={curtainsOpen ? { scaleY: 0 } : { scaleY: 1 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          style={{ height: '50%', transformOrigin: 'bottom' }}
        />

        {/* ── Teal exhaust-glow atmosphere ── */}
        {contentVisible && (
          <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-cyan-950/50 via-primary-900/15 to-transparent pointer-events-none z-10" />
        )}

        {/* ── Airflow streaks (loop forever after reveal) ── */}
        {contentVisible && (
          <div className="absolute top-0 left-0 right-0 h-[52%] overflow-hidden z-10 pointer-events-none">
            <AirStreak topPct={10}  delay={0}    widthPx={130} opacity={0.65} />
            <AirStreak topPct={24}  delay={0.5}  widthPx={90}  opacity={0.50} />
            <AirStreak topPct={38}  delay={1.1}  widthPx={170} opacity={0.75} />
            <AirStreak topPct={54}  delay={0.25} widthPx={100} opacity={0.55} />
            <AirStreak topPct={70}  delay={0.8}  widthPx={150} opacity={0.60} />
            <AirStreak topPct={86}  delay={0.4}  widthPx={75}  opacity={0.45} />
            <AirParticle leftPct={18} delay={0}    size={2.5} duration={3.2} />
            <AirParticle leftPct={33} delay={0.5}  size={2}   duration={2.8} />
            <AirParticle leftPct={48} delay={0.9}  size={3}   duration={3.6} />
            <AirParticle leftPct={63} delay={0.3}  size={2.5} duration={2.6} />
            <AirParticle leftPct={76} delay={1.2}  size={2}   duration={3.1} />
            <AirParticle leftPct={41} delay={0.7}  size={2}   duration={2.5} />
            <AirParticle leftPct={56} delay={1.5}  size={3}   duration={3.4} />
            <AirParticle leftPct={27} delay={1}    size={2}   duration={2.9} />
          </div>
        )}

        {/* ── COMPANY NAME — emerges from the exhaust zone as curtains open ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[16vh] z-30 pointer-events-none">
          <AnimatePresence>
            {curtainsOpen && (
              <motion.div
                className="relative text-center px-4"
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                {/* Radial glow behind name */}
                <div className="absolute inset-0 -m-20 rounded-full bg-cyan-500/10 blur-3xl" />

                {/* Company name */}
                <motion.h1
                  className="relative font-heading font-black text-6xl sm:text-7xl md:text-8xl tracking-wider leading-none"
                  style={{
                    background: 'linear-gradient(170deg, #cffafe 0%, #ffffff 42%, #a5f3fc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{
                    filter: [
                      'drop-shadow(0 0 12px rgba(34,211,238,0.45))',
                      'drop-shadow(0 0 44px rgba(34,211,238,1))',
                      'drop-shadow(0 0 12px rgba(34,211,238,0.45))',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  SS AIRCONS
                </motion.h1>

                {/* Sub-label with lines */}
                <motion.div
                  className="flex items-center justify-center gap-3 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.7 }}
                >
                  <div className="h-px w-14 bg-gradient-to-r from-transparent to-cyan-400/55" />
                  <span className="text-[10px] tracking-[0.45em] text-cyan-300/65 font-light uppercase">
                    Est. 2004 · HVAC Specialists
                  </span>
                  <div className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-400/55" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── TAGLINE — lower portion of hero ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 z-30 pointer-events-none px-4">
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl sm:text-2xl tracking-[0.34em] text-cyan-300 uppercase font-light font-heading">
                  Experts in HVAC
                </p>
                <motion.div
                  className="mx-auto mt-3 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: '8rem' }}
                  transition={{ duration: 1.2, delay: 0.45 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          LOCATION CARDS
      ══════════════════════════════════════════════════════ */}
      <div className="mt-14 px-6 max-w-3xl w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
        {contentVisible
          ? locations.map((loc, i) => (
              <LocationCard key={loc.city} loc={loc} delay={i * 0.15} />
            ))
          : locations.map((loc) => (
              <div key={loc.city} className="h-[130px] rounded-2xl bg-white/[0.02] border border-white/[0.04]" />
            ))}
      </div>

      {/* ══════════════════════════════════════════════════════
          CTA BUTTON
      ══════════════════════════════════════════════════════ */}
      <div className="flex justify-center mt-12 mb-16 px-4">
        <AnimatePresence>
          {contentVisible && (
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/home"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-cyan-400 text-white font-semibold text-base px-10 py-4 rounded-full shadow-lg shadow-primary-900/40 hover:shadow-cyan-500/25 hover:shadow-2xl transition-all duration-300"
              >
                Visit Our Full Website
                <HiArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
