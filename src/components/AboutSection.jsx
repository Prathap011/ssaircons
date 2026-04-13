import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { capabilities, partners, partners1 } from '../data/siteData'
import SectionTitle from './SectionTitle'
import { HiCheckCircle, HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const slides = [
  {
    id: 'slide-sales',
    src: '/assets/homeAbout/93648.jpeg',
    alt: 'Blue Star AC units — Sales',
    category: 'Sales',
    title: 'AC Sales & Supply',
    subtitle: 'Authorised dealer for Blue Star, Daikin & more leading brands',
    accent: 'from-blue-600 to-cyan-400',
  },
  {
    id: 'slide-service',
    src: '/assets/homeAbout/93666.jpeg',
    alt: 'HVAC ductwork service',
    category: 'Service',
    title: 'HVAC Service & Repairs',
    subtitle: 'Certified technicians delivering peak-performance servicing',
    accent: 'from-primary-600 to-blue-400',
  },
  {
    id: 'slide-project',
    src: '/assets/homeAbout/93642.jpg',
    alt: 'SS Aircon project execution team',
    category: 'Project & Execution',
    title: 'End-to-End Project Execution',
    subtitle: 'Turnkey HVAC delivery — on time, within budget',
    accent: 'from-orange-500 to-yellow-400',
  },
  {
    id: 'slide-manpower',
    src: '/assets/homeAbout/93668.jpeg',
    alt: 'SS Aircon manpower team on site',
    category: 'Manpower',
    title: 'Expert Manpower Deployment',
    subtitle: 'Skilled, safety-trained field teams across Tamil Nadu',
    accent: 'from-green-600 to-teal-400',
  },
  {
    id: 'slide-om',
    src: '/assets/homeAbout/93651.jpeg',
    alt: 'Large rooftop HVAC plant — Operation & Maintenance',
    category: 'Operation & Maintenance',
    title: 'Operations & Maintenance',
    subtitle: 'AMC / CAMC packages ensuring maximum uptime year-round',
    accent: 'from-violet-600 to-purple-400',
  },
  {
    id: 'slide-om2',
    src: '/assets/homeAbout/93645.jpeg',
    alt: 'Industrial HVAC piping system',
    category: 'Operation & Maintenance',
    title: 'Industrial Plant Maintenance',
    subtitle: 'Comprehensive care for chillers, cooling towers & piping systems',
    accent: 'from-violet-600 to-purple-400',
  },
]

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.06,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function AboutSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  // Auto-advance every 5 s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx) => {
    if (idx === current) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % slides.length)
  }

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* ── LEFT: Full-height image slider ─────────────────────────── */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden"
            style={{ minHeight: '580px' }}
          >
            {/* Slides */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Ken Burns zoom on image */}
                <motion.img
                  src={slides[current].src}
                  alt={slides[current].alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6, ease: 'easeOut' }}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Layered gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none z-10" />

            {/* Slide text — above bottom bar */}
            <div className="absolute bottom-20 left-0 right-0 px-7 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`txt-${current}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="flex flex-col gap-2"
                >
                  {/* Animated category badge */}
                  <motion.span
                    initial={{ opacity: 0, x: -16, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
                    className={`inline-flex items-center self-start gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${slides[current].accent} shadow-lg backdrop-blur-sm`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block" />
                    {slides[current].category}
                  </motion.span>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="text-white font-bold text-xl lg:text-2xl leading-snug drop-shadow-lg"
                  >
                    {slides[current].title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.22 }}
                    className="text-white/70 text-sm drop-shadow"
                  >
                    {slides[current].subtitle}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom bar — arrows + animated dots */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-7 py-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
              {/* Arrows */}
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={prev}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.35)' }}
                  whileTap={{ scale: 0.94 }}
                  className="w-9 h-9 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Previous slide"
                >
                  <HiChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={next}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.35)' }}
                  whileTap={{ scale: 0.94 }}
                  className="w-9 h-9 rounded-full bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Next slide"
                >
                  <HiChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Animated pill dots */}
              <div className="flex items-center gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="flex items-center"
                  >
                    <motion.div
                      animate={{
                        width: i === current ? 30 : 8,
                        backgroundColor: i === current ? '#ffffff' : 'rgba(255,255,255,0.35)',
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="h-2 rounded-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ──────────────────────────────────────────── */}
          <div ref={ref2} className="flex flex-col justify-between gap-8">

            {/* Top: text content */}
            <div>
              <SectionTitle
                label="About SS Aircon"
                title="High Standard Trusted & Professional Services"
                subtitle="Established on 2004, SS Aircon is one of the leading HVAC contracting companies serving the industry with distinction."
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView2 ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  <strong>SS AIRCON</strong> is one of the <strong>leading HVAC contracting company</strong> serving the industry for the past <strong>14 years</strong>. We have handled various types of <strong>HVAC projects, services, operations & maintenance</strong>. From <strong>2004 to till date</strong>, we have successfully completed more than <strong>300 projects</strong> and are providing <strong>post-sales support, preventive maintenance service, and breakdown service support</strong> for our valued customers while maintaining <strong>maximum uptime</strong>.
                </p>


                <div className="space-y-2 mb-7">
                  {capabilities.slice(0, 5).map((cap, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 24 }}
                      animate={inView2 ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      {cap}
                    </motion.div>
                  ))}
                </div>

                {/* Partners - Combined Row */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">

                  {/* Authorized Dealer */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Authorized Dealer
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partners.map((p) => (
                        <motion.span
                          key={p.name}
                          whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
                          transition={{ duration: 0.2 }}
                          className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full cursor-default"
                        >
                          {p.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Franchise Dealer */}
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Franchise Dealer
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partners1.map((p) => (
                        <motion.span
                          key={p.name}
                          whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
                          transition={{ duration: 0.2 }}
                          className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full cursor-default"
                        >
                          {p.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </div>


                <Link to="/about" className="btn-primary group inline-flex items-center gap-2">
                  Learn More About Us
                  <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
