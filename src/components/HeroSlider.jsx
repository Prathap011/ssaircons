import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../data/siteData'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const variants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
}

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
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.bg}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={page === 0 ? 'eager' : 'lazy'}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${page}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span className="inline-block text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3">
                {slide.tagline}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-shadow mb-4 whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={slide.cta.href} className="btn-primary group">
                  {slide.cta.label}
                  <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="tel:8056041921" className="btn-outline">
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-xs transition-all"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-xs transition-all"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className={`slider-dot ${i === page ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/60 text-xs">
        <span className="tracking-widest rotate-90 origin-center translate-y-4">Scroll</span>
        <div className="w-px h-12 bg-white/30 mt-4" />
      </div>
    </section>
  )
}
