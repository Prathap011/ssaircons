import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { stats } from '../data/siteData'

const highlights = [
  { emoji: '🔧', text: 'Highly Skilled & Experienced Engineers' },
  { emoji: '🏗️', text: "We're Professional Contractors" },
  { emoji: '⚡', text: 'Service Within 24 Hours' },
  { emoji: '🏆', text: '18 Years of Experience' },
]

function Counter({ value }) {
  return <span>{value}</span>
}

export default function StatsSection() {
  const { ref, inView } = useInView()

  return (
    <>
      {/* Highlights bar */}
      <section className="bg-primary-800 text-white py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">{h.emoji}</span>
                <span className="text-sm font-medium text-blue-100 leading-snug">{h.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats counter */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 200 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-800 font-heading mb-2">
                  {inView ? <Counter value={stat.value} /> : '0'}
                </div>
                <div className="text-slate-500 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
