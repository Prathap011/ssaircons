import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../data/siteData'
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'

// ─── Animation variants ───────────────────────────────────────────────────────
const bgVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
}

const contentWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.3 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

// Right-side floating stat cards
const floatingCards = [
  { icon: '🏗️', value: '300+', label: 'Projects Done' },
  { icon: '🏆', value: '18+',  label: 'Years of Trust' },
  { icon: '⚡', value: '24/7', label: 'Support' },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [[page, dir], setPage] = useState([0, 0])
  const [autoplay, setAutoplay] = useState(true)
  const [videoOpen, setVideoOpen] = useState(false)

  const go = useCallback((newDir) => {
    setPage(([p]) => {
      const next = (p + newDir + heroSlides.length) % heroSlides.length
      return [next, newDir]
    })
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => go(1), 5500)
    return () => clearInterval(id)
  }, [autoplay, go])

  // Close video modal with Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setVideoOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const slide = heroSlides[page]

  return (
    <>
      <section
        className="relative h-screen min-h-[600px] overflow-hidden"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {/* ── Background image (slides horizontally) ── */}
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.78, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.bg}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={page === 0 ? 'eager' : 'lazy'}
            />
            {/* Half-shadow: LEFT is dark, RIGHT reveals the photo clearly */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/80 lg:via-primary-900/60 to-primary-900/25 lg:to-primary-900/5" />
            {/* Bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-900/70 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* ── Floating ambient particles ─────────────── */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute rounded-full pointer-events-none hidden lg:block"
            style={{
              width: 4 + i * 2,
              height: 4 + i * 2,
              top: `${12 + i * 12}%`,
              right: `${6 + i * 4}%`,
              background: i % 2 === 0 ? 'rgba(34,211,238,0.25)' : 'rgba(249,115,22,0.2)',
            }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
          />
        ))}

        {/* ── Floating stats — RIGHT SIDE (desktop only) ── */}
        <div className="hidden xl:flex flex-col gap-4 absolute right-10 top-1/2 -translate-y-1/2 z-20">
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, x: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/15 shadow-xl min-w-[130px]"
            >
              <div className="text-2xl mb-1">{card.icon}</div>
              <div className="text-2xl font-bold text-white font-heading leading-none">{card.value}</div>
              <div className="text-cyan-200 text-xs font-medium mt-0.5">{card.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── LEFT content ─────────────────────────────── */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${page}`}
                variants={contentWrap}
                initial="hidden"
                animate="show"
                exit="exit"
                className="max-w-xl lg:max-w-[54%]"
              >
                {/* Tagline badge */}
                <motion.div variants={item}>
                  <span className="inline-flex items-center gap-2 bg-accent-500/15 border border-accent-500/35 text-accent-300 font-semibold text-xs uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                    ✦ {slide.tagline}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  variants={item}
                  className="text-4xl sm:text-5xl md:text-[3.5rem] xl:text-[3.8rem] font-bold text-white leading-[1.1] mb-5 font-heading whitespace-pre-line text-shadow"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={item}
                  className="text-cyan-100/85 text-lg md:text-xl mb-8 leading-relaxed max-w-md"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA row */}
                <motion.div variants={item} className="flex flex-wrap items-center gap-4">
                  <Link
                    to={slide.cta.href}
                    className="btn-primary group shadow-lg shadow-accent-500/30"
                  >
                    {slide.cta.label}
                    <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a href="tel:8056041921" className="btn-outline">
                    Call Us Now
                  </a>

                  {/* Video play button */}
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="inline-flex items-center gap-3 text-white/75 hover:text-white transition-colors group"
                    aria-label="Watch company video"
                  >
                    <div className="relative w-12 h-12 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:border-accent-400 group-hover:bg-accent-500/20 transition-all">
                      <FaPlay className="w-3.5 h-3.5 ml-0.5 text-white" />
                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-white/25"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="hidden sm:block text-left">
                      <div className="text-sm font-semibold leading-none">Watch Our Work</div>
                      <div className="text-xs text-white/45 mt-0.5">Company Overview</div>
                    </div>
                  </button>
                </motion.div>

                {/* Quick stat strip — mobile / tablet (hidden on xl where floating cards show) */}
                <motion.div
                  variants={item}
                  className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10 xl:hidden"
                >
                  {floatingCards.map((card) => (
                    <div key={card.label} className="text-center">
                      <div className="text-lg font-bold text-white font-heading">{card.value}</div>
                      <div className="text-cyan-300 text-[10px] font-medium uppercase tracking-wide">{card.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Prev / Next buttons ───────────────────── */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.92 }}
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-colors"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.92 }}
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10 transition-colors"
          aria-label="Next slide"
        >
          <HiChevronRight className="w-6 h-6" />
        </motion.button>

        {/* ── Animated slide dots ───────────────────── */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {heroSlides.map((_, i) => (
            <motion.button
              key={`dot-${i}`}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              whileHover={{ scale: 1.3 }}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === page ? 'w-8 h-2.5 bg-accent-500' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* ── Slide counter (bottom right) ─────────── */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 font-mono">
          <span className="text-white font-bold text-lg">{String(page + 1).padStart(2, '0')}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/40 text-sm">{String(heroSlides.length).padStart(2, '0')}</span>
        </div>

        {/* ── Scroll indicator (bottom left) ───────── */}
        <div className="absolute bottom-8 left-8 z-20 hidden md:flex flex-col items-center gap-2">
          <motion.div
            className="w-px rounded-full bg-white/30"
            animate={{ height: [14, 44, 14], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="text-white/40 text-[10px] font-medium tracking-[0.2em]"
            style={{ writingMode: 'vertical-rl' }}
          >
            SCROLL
          </span>
        </div>
      </section>

      {/* ── Video modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.75, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.75, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-primary-900 border border-white/10"
              style={{ aspectRatio: '16/9' }}
            >
              {/* Replace the video ID below with your own YouTube video ID */}
              <iframe
                src="https://www.youtube.com/embed/Bey4XXJAqS8?autoplay=1&rel=0&modestbranding=1"
                title="SS Aircon Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-accent-500 transition-colors"
              >
                <HiX className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}