import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../data/siteData'
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiLocationMarker, HiPhone } from 'react-icons/hi'

// â”€â”€â”€ Branch locations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const locations = [
  {
    city: 'Trichy',
    address: 'No.14, Jaya Nagar, 2nd Street,\nRMS Colony, Karumandapam,\nTrichy â€“ 620 001',
    phone: '+91 80560 41921',
  },
  {
    city: 'Thanjavur',
    address: 'No.4 & 5, Sai Ram Complex,\nKamala Avenue, Alagammal Nagar,\nThanjavur â€“ 613 005',
    phone: '+91 80560 41921',
  },
  {
    city: 'Chennai',
    address: 'No.18/2, Village Road, Balaji Nagar,\nPuzhuthivakkam,\nChennai â€“ 600 091',
    phone: '+91 80560 41921',
  },
]

// â”€â”€â”€ Airflow streak â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
      transition={{ duration: 2 + delay * 0.4, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

// â”€â”€â”€ Rising particle â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function AirParticle({ leftPct, delay, size = 2.5, duration = 3 }) {
  return (
    <motion.div
      className="absolute rounded-full bg-cyan-300 pointer-events-none"
      style={{ left: `${leftPct}%`, bottom: 0, width: size, height: size * 3, opacity: 0 }}
      animate={{ y: [0, -240], opacity: [0, 0.8, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
    />
  )
}

// â”€â”€â”€ Location card with tooltip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function LocationCard({ loc, entryDelay }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: entryDelay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex flex-col items-center text-center px-4 py-4 rounded-2xl border cursor-default select-none transition-all duration-300"
        style={{
          background: hovered ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.04)',
          borderColor: hovered ? 'rgba(6,182,212,0.5)' : 'rgba(255,255,255,0.1)',
          boxShadow: hovered ? '0 0 28px rgba(6,182,212,0.16)' : 'none',
        }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center mb-2 transition-all duration-300"
          style={{ background: hovered ? 'rgba(6,182,212,0.22)' : 'rgba(255,255,255,0.06)' }}
        >
          <HiLocationMarker className="text-cyan-400 text-base" />
        </div>
        <h3 className="font-heading font-bold text-white text-sm tracking-wide">{loc.city}</h3>
        <p className="text-cyan-400/50 text-[9px] tracking-widest mt-0.5 uppercase">Branch</p>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.16 }}
            className="absolute z-50 bottom-full mb-3 left-1/2 -translate-x-1/2 pointer-events-none"
          >
            <div className="bg-slate-800 border border-cyan-500/25 rounded-xl px-4 py-3 shadow-2xl min-w-[190px]" style={{ textAlign: 'center' }}>
              <p className="font-semibold text-cyan-300 text-xs mb-1.5 text-center">{loc.city} Branch</p>
              <p className="text-slate-300 text-[11px] leading-relaxed whitespace-pre-line text-center">{loc.address}</p>
              <div className="flex items-center justify-center gap-1.5 mt-2.5 text-cyan-400 text-[11px] font-medium">
                <HiPhone />
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

// â”€â”€â”€ Slide content animation variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const bgVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
}

const contentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const contentItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

// â”€â”€â”€ Main component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Cinematic timeline:
//   0.2s  AC image fades in (scale 1.08 â†’ 1)
//   2.0s  Top + bottom curtains split open
//   2.5s  SS AIRCONS name blazes in from exhaust zone
//   3.0s  Slide content + arrows + locations animate in
export default function HeroSlider() {
  // â”€â”€ Cinematic phase â”€â”€
  const [phase, setPhase] = useState('dark')
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 200)
    const t2 = setTimeout(() => setPhase('open'),   2000)
    const t3 = setTimeout(() => setPhase('done'),   2600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const imageVisible = phase !== 'dark'
  const curtainsOpen = phase === 'open' || phase === 'done'
  const contentReady = phase === 'done'

  // â”€â”€ Slide carousel â”€â”€
  const [[page, dir], setPage] = useState([0, 0])
  const [autoplay, setAutoplay] = useState(false) // starts after intro

  const go = useCallback((newDir) => {
    setPage(([p]) => {
      const total = heroSlides.length + 1 // slide 0 = animation, 1-4 = content
      const next = (p + newDir + total) % total
      return [next, newDir]
    })
  }, [])

  // Enable autoplay only after intro is done
  useEffect(() => {
    if (contentReady) setAutoplay(true)
  }, [contentReady])

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => go(1), 5500)
    return () => clearInterval(id)
  }, [autoplay, go])

  const slide = page > 0 ? heroSlides[page - 1] : null

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950"
      style={{ height: '100vh', minHeight: 600 }}
      onMouseEnter={() => autoplay && setAutoplay(false)}
      onMouseLeave={() => contentReady && setAutoplay(true)}
    >

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          BACKGROUND â€” slides horizontally on navigate
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {/* First: the static intro image (behind everything during intro) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={imageVisible ? { opacity: contentReady ? 0 : 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&auto=format&fit=crop&q=80"
          alt="AC System"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-transparent to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-transparent to-slate-950/85" />
        <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-cyan-950/55 via-primary-900/18 to-transparent" />
      </motion.div>

      {/* Slide background images â€” visible after intro */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={page}
          custom={dir}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
          style={{ opacity: contentReady ? 1 : 0 }}
        >
          <img
            src={page > 0 ? slide.bg : 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&auto=format&fit=crop&q=80'}
            alt={page > 0 ? slide.title : 'AC System'}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
          {/* Top teal exhaust atmosphere */}
          <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-cyan-950/50 via-primary-900/15 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          CURTAINS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <motion.div
        className="absolute left-0 right-0 top-0 z-20 bg-slate-950"
        style={{ height: '50%', transformOrigin: 'top' }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: curtainsOpen ? 0 : 1 }}
        transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute left-0 right-0 bottom-0 z-20 bg-slate-950"
        style={{ height: '50%', transformOrigin: 'bottom' }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: curtainsOpen ? 0 : 1 }}
        transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          AIRFLOW (top exhaust zone)
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {contentReady && (
        <div className="absolute top-0 left-0 right-0 h-[46%] overflow-hidden z-10 pointer-events-none">
          <AirStreak topPct={8}  delay={0}    widthPx={130} opacity={0.6}  />
          <AirStreak topPct={24} delay={0.5}  widthPx={90}  opacity={0.48} />
          <AirStreak topPct={40} delay={1.1}  widthPx={170} opacity={0.72} />
          <AirStreak topPct={56} delay={0.25} widthPx={105} opacity={0.52} />
          <AirStreak topPct={72} delay={0.8}  widthPx={150} opacity={0.58} />
          <AirStreak topPct={88} delay={0.4}  widthPx={75}  opacity={0.44} />
          <AirParticle leftPct={15} delay={0}    size={2.5} duration={3.2} />
          <AirParticle leftPct={30} delay={0.5}  size={2}   duration={2.8} />
          <AirParticle leftPct={46} delay={0.9}  size={3}   duration={3.6} />
          <AirParticle leftPct={61} delay={0.3}  size={2.5} duration={2.6} />
          <AirParticle leftPct={75} delay={1.2}  size={2}   duration={3.1} />
          <AirParticle leftPct={39} delay={0.7}  size={2}   duration={2.5} />
          <AirParticle leftPct={54} delay={1.5}  size={3}   duration={3.4} />
          <AirParticle leftPct={26} delay={1}    size={2}   duration={2.9} />
        </div>
      )}

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SS AIRCONS â€” top exhaust zone (fixed)
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="absolute inset-x-0 top-0 h-[46%] flex items-center justify-center z-30 pointer-events-none px-4">
        <AnimatePresence>
          {curtainsOpen && (
            <motion.div
              className="relative text-center"
              initial={{ opacity: 0, y: 40, scale: 0.86 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="absolute inset-0 -m-20 rounded-full bg-cyan-500/8 blur-3xl" />

              <motion.h1
                className="relative font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider leading-none"
                style={{
                  background: 'linear-gradient(160deg, #cffafe 0%, #ffffff 44%, #a5f3fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{
                  filter: [
                    'drop-shadow(0 0 14px rgba(34,211,238,0.45))',
                    'drop-shadow(0 0 48px rgba(34,211,238,1))',
                    'drop-shadow(0 0 14px rgba(34,211,238,0.45))',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                SS AIRCONS
              </motion.h1>

              <motion.div
                className="flex items-center justify-center gap-3 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/55" />
                <span className="text-[10px] tracking-[0.42em] text-cyan-300/60 font-light uppercase">
                  Est. 2004 | HVAC Specialists
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/55" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SLIDE CONTENT â€” bottom 54% (left-aligned)
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="absolute inset-x-0 bottom-0 h-[54%] z-30 flex items-center">
        <div className="w-full px-8 sm:px-12 lg:px-16 max-w-3xl">
          <AnimatePresence mode="wait">
            {contentReady && page !== 0 && (
              <motion.div
                key={`slide-${page}`}
                variants={contentVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {/* Tagline badge */}
                <motion.div variants={contentItem}>
                  <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4">
                    + {slide.tagline}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  variants={contentItem}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-4 font-heading whitespace-pre-line"
                  style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                >
                  {slide.title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p variants={contentItem} className="text-white/85 text-base md:text-lg mb-6 leading-relaxed max-w-md">
                  {slide.subtitle}
                </motion.p>

                {/* CTA buttons — slide 1: Explore + Contact Us; slides 2-3: Contact Us only */}
                <motion.div variants={contentItem} className="flex flex-wrap items-center gap-4">
                  {page === 1 ? (
                    <>
                      <Link to="/about" className="btn-primary group shadow-lg shadow-accent-500/30">
                        Explore
                        <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link to="/contact" className="btn-outline">
                        Contact Us
                      </Link>
                    </>
                  ) : (
                    <Link to="/contact" className="btn-primary group shadow-lg shadow-accent-500/30">
                      Contact Us
                      <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          LEFT / RIGHT ARROWS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {contentReady && (
        <>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.92 }}
              onClick={() => go(-1)}
              className="p-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <HiChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.92 }}
              onClick={() => go(1)}
              className="p-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-colors"
              aria-label="Next slide"
            >
              <HiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </>
      )}

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          BOTTOM BAR â€” location cards + dots + scroll
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {contentReady && (
        <div className="absolute inset-x-0 bottom-0 z-40 pb-5 pt-3 px-6 flex flex-col items-center gap-3">

          {/* Location cards — ONLY on animation slide (page 0) */}
          <AnimatePresence>
            {page === 0 && (
              <motion.div
                key="locations"
                className="flex gap-3 w-full max-w-xl justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {locations.map((loc, i) => (
                  <div key={loc.city} className="flex-1">
                    <LocationCard loc={loc} entryDelay={0.25 + i * 0.1} />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slide dots — 5 total */}
          <div className="flex items-center gap-2.5">
            {Array.from({ length: heroSlides.length + 1 }, (_, i) => (
              <motion.button
                key={`dot-${i}`}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                whileHover={{ scale: 1.3 }}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === page ? 'w-7 h-2 bg-accent-500' : 'w-2 h-2 bg-white/35 hover:bg-white/65'
                }`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-1">
            <motion.div
              className="w-px rounded-full bg-white/30"
              animate={{ height: [12, 36, 12], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-white/30 text-[8px] tracking-[0.22em] uppercase">Scroll</span>
          </div>
        </div>
      )}

      {/* Slide counter (bottom right) */}
      {contentReady && (
        <div className="absolute bottom-5 right-6 z-40 hidden md:flex items-center gap-1.5 font-mono">
          <span className="text-white font-bold text-base">{String(page + 1).padStart(2, '0')}</span>
          <span className="text-white/30 text-sm">/</span>
          <span className="text-white/40 text-xs">{String(heroSlides.length + 1).padStart(2, '0')}</span>
        </div>
      )}
    </section>
  )
}

