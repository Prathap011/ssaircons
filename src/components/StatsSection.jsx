import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { stats } from '../data/siteData'
import { HiCog, HiLightningBolt, HiStar, HiOfficeBuilding } from 'react-icons/hi'

const highlights = [
  { Icon: HiCog,           text: 'Highly Skilled & Experienced Engineers' },
  { Icon: HiOfficeBuilding, text: "We're Professional Contractors" },
  { Icon: HiLightningBolt, text: 'Service Within 24 Hours' },
  { Icon: HiStar,          text: '24 Years of Experience' },
]

function parseStat(value) {
  if (value === '24/7') return { num: 24, suffix: '/7' }
  const match = value.match(/^(\d+)(.*)$/)
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: value }
}

function AnimatedCounter({ value, isActive }) {
  const { num, suffix } = parseStat(value)
  const count = useCountUp(num, { duration: 2200, isActive })
  return <>{count}{suffix}</>
}

export default function StatsSection() {
  const { ref, inView } = useInView()

  return (
    <>
      {/* Highlights bar */}
      <section className="bg-primary-800 text-white py-6 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                className="flex items-center gap-3 group"
              >
                <motion.div
                  className="w-9 h-9 rounded-lg bg-white/12 flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 + i * 1.5, ease: 'easeInOut' }}
                >
                  <h.Icon className="w-5 h-5 text-accent-400" />
                </motion.div>
                <span className="text-sm font-medium text-blue-100 leading-snug group-hover:text-white transition-colors duration-200">
                  {h.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats counter */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
              >
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(30,58,138,0.2)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-md text-center border border-blue-50 hover:border-primary-100 transition-colors duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-800 font-heading mb-2 tabular-nums">
                    <AnimatedCounter value={stat.value} isActive={inView} />
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.5, ease: 'easeOut' }}
                    className="w-10 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mb-3 origin-left"
                  />
                  <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
