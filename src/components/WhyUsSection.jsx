import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const reasons = [
  {
    num: '01',
    title: 'Well-Equipped Infrastructure',
    description: 'Modern tools, tackles with calibration certification, and complete PPE safety kits.',
  },
  {
    num: '02',
    title: 'Expert Team',
    description: '12-member project team with fitters, welders, plumbers, and electricians on call.',
  },
  {
    num: '03',
    title: 'Own Transport Fleet',
    description: 'Our own vehicles ensure timely delivery of materials and manpower to your site.',
  },
  {
    num: '04',
    title: '24/7 Breakdown Support',
    description: 'Dedicated round-the-clock emergency service team with required tools & tackles.',
  },
  {
    num: '05',
    title: 'Wide Coverage',
    description: '30+ service executives deployed across various zones in Chennai and beyond.',
  },
  {
    num: '06',
    title: '24+ Years of Trust',
    description: '300+ completed projects across IT, Telecom, Banking, Healthcare, and Hospitality.',
  },
]

// Orbiting dot ring
function OrbitRing({ size, duration, dotColor, dotSize = 9, clockwise = true, delay = 0 }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: clockwise ? 360 : -360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
      >
        {/* Primary dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            background: dotColor,
            top: -(dotSize / 2),
            left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: `0 0 ${dotSize * 2.5}px ${dotColor}`,
          }}
        />
        {/* Second dot, opposite side */}
        <div
          className="absolute rounded-full"
          style={{
            width: dotSize * 0.6,
            height: dotSize * 0.6,
            background: dotColor,
            bottom: -(dotSize * 0.6) / 2,
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0.45,
          }}
        />
      </motion.div>
    </div>
  )
}

// Section
export default function WhyUsSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2660 60%, #0a1a3a 100%)' }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container-custom py-20 lg:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT PANEL */}
          <div className="flex-1 w-full">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-accent-400" />
              <span className="text-accent-400 text-xs font-semibold uppercase tracking-widest">
                Our Advantage
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-bold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)' }}
            >
              Why Choose<br />
              <span className="text-accent-400">SS Aircon?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md"
            >
              Thousands of clients trust us because we deliver on every promise with
              precision and integrity.
            </motion.p>

            {/* Numbered list */}
            <div>
              {reasons.map((r, i) => (
                <motion.div
                  key={r.num}
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.09, duration: 0.5 }}
                  className="flex gap-5 group py-5 border-t border-white/10 hover:border-accent-500/40 transition-colors duration-300 cursor-default"
                >
                  <div
                    className="font-heading font-bold text-sm tracking-widest mt-0.5 select-none flex-shrink-0 w-7"
                    style={{ color: 'rgba(56,189,248,0.35)' }}
                  >
                    {r.num}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-sm mb-1.5 group-hover:text-accent-400 transition-colors duration-200">
                      {r.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL - Orbital */}
          <div className="flex items-center justify-center flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
              style={{ width: 500, height: 500 }}
            >
              {/* Orbit rings + dots */}
              <OrbitRing size={500} duration={24} dotColor="#0ea5e9" dotSize={12} clockwise />
              <OrbitRing size={340} duration={16} dotColor="#38bdf8" dotSize={10} clockwise={false} delay={1.8} />
              <OrbitRing size={230} duration={10} dotColor="#7dd3fc" dotSize={8} clockwise delay={0.9} />


              {/* Ambient glow */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 200,
                  height: 200,
                  background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
                }}
              />

              {/* Center badge */}
              <div
                className="relative z-10 flex items-center justify-center rounded-full"
                style={{
                  width: 160,
                  height: 160,
                  background: 'rgba(14,165,233,0.06)',
                  border: '1.5px solid rgba(56,189,248,0.3)',
                  boxShadow: '0 0 0 10px rgba(14,165,233,0.04), 0 0 48px rgba(14,165,233,0.18)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Inner ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: 12,
                    border: '1px solid rgba(56,189,248,0.15)',
                  }}
                />
                <div className="text-center relative z-10 px-4">
                  <div
                    className="font-heading font-bold text-white leading-none"
                    style={{ fontSize: '2.6rem' }}
                  >
                    24+
                  </div>
                  <div
                    className="text-white/45 uppercase tracking-widest leading-snug mt-1.5"
                    style={{ fontSize: '8px', letterSpacing: '0.15em' }}
                  >
                    Years of<br />Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
