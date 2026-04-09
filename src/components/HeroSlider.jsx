import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../data/siteData'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const bgVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
}

// Staggered content variants
const contentContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  exit: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
}

const contentItem = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

// Floating particle data (static, decorative)
const particles = [
  { size: 5, top: '15%', left: '78%', delay: 0 },
  { size: 3, top: '65%', left: '85%', delay: 0.8 },
  { size: 7, top: '30%', left: '92%', delay: 1.5 },
  { size: 4, top: '75%', left: '72%', delay: 2.2 },
  { size: 6, top: '20%', left: '60%', delay: 0.5 },
]

export default function HeroSlider() {
  const [[page, dir], setPage] = useState([0, 0])
  const [autoplay, setAutoplay] = useState(true)

  const go = useCallback((newDir) => {
    setPage(([p]) => {
      const next = (p + newDir + heroSlides.length) % heroSlides.length
      return [next, newDir]
    })
  }, [])

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [autoplay, go])

  const slide = heroSlides[page]

  return (
    <section
      className="relative h-[92vh] min-h-[560px] overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Slide background */}
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
        >
          <img
            src={slide.bg}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={page === 0 ? 'eager' : 'lazy'}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/55 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating decorative particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent-400/30 pointer-events-none"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Content — each child staggers in */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${page}`}
              variants={contentContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="max-w-2xl"
            >
              {/* Tagline */}
              <motion.span
                variants={contentItem}
                className="inline-block text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3 border border-accent-400/30 rounded-full px-3 py-1"
              >
                {slide.tagline}
              </motion.span>

              {/* Title — word by word */}
              <motion.h1
                variants={contentItem}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-shadow mb-4 whitespace-pre-line"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={contentItem}
                className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={contentItem} className="flex flex-wrap gap-4">
                <Link to={slide.cta.href} className="btn-primary group">
                  {slide.cta.label}
                  <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="tel:8056041921" className="btn-outline">
                  Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className={`slider-dot ${i === page ? 'active' : ''}`}
            whileHover={{ scale: 1.3 }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/60 text-xs">
        <span className="tracking-widest rotate-90 origin-center translate-y-4">Scroll</span>
        <motion.div
          className="w-px bg-white/30 mt-4"
          animate={{ height: [12, 48, 12] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
