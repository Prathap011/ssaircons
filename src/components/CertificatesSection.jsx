import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from './SectionTitle'

const certificates = [
  { name: 'ISO 9001:2015', sub: 'Quality Management System', badge: 'ISO', color: '#1d4ed8', bg: '#dbeafe' },
  { name: 'ISO 14001:2015', sub: 'Environmental Management', badge: 'ISO', color: '#0f6e56', bg: '#d1fae5' },
  { name: 'ASHRAE Member', sub: 'American Society of HVAC Engineers', badge: 'ASHRAE', color: '#854f0b', bg: '#fef3c7' },
  { name: 'Bureau of Energy', sub: 'BEE Star Rating Certified', badge: 'BEE', color: '#6d28d9', bg: '#ede9fe' },
  { name: 'ESIC Registered', sub: 'Employee State Insurance Corp.', badge: 'ESIC', color: '#065f46', bg: '#d1fae5' },
  { name: 'MSME Certified', sub: 'Ministry of MSME, Govt. of India', badge: 'MSME', color: '#9a3412', bg: '#ffedd5' },
]

export default function CertificatesSection() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const total = certificates.length

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total)
    }, 3000)

    return () => clearInterval(timerRef.current)
  }, [total])

  // position mapping
  const getPosition = (index) => {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          label="Certifications"
          title="Our Accreditations & Certificates"
          subtitle="Recognised and certified by leading industry bodies for quality, safety, and engineering excellence."
          center
        />

        {/* CAROUSEL */}
        <div className="relative h-[420px] flex items-center justify-center">

          {certificates.map((cert, i) => {
            const pos = getPosition(i)

            // show only 5 items
            if (pos < -2 || pos > 2) return null

            const isActive = pos === 0

            const styles = {
              0: { x: 0, scale: 1, zIndex: 5, opacity: 1 },
              1: { x: 220, scale: 0.8, zIndex: 4, opacity: 0.7 },
              2: { x: 360, scale: 0.65, zIndex: 3, opacity: 0.4 },
              [-1]: { x: -220, scale: 0.8, zIndex: 4, opacity: 0.7 },
              [-2]: { x: -360, scale: 0.65, zIndex: 3, opacity: 0.4 },
            }

            const style = styles[pos]

            return (
              <motion.div
                key={i}
                animate={style}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute flex flex-col items-center"
              >
                {/* CARD */}
                <div
                  className="rounded-2xl shadow-lg flex items-center justify-center"
                  style={{
                    width: isActive ? 260 : 160,
                    height: isActive ? 260 : 160,
                    background: cert.bg,
                  }}
                >
                  <span
                    className="px-3 py-1 rounded-full font-semibold"
                    style={{ color: cert.color, background: '#fff' }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* TEXT OUTSIDE (ONLY ACTIVE) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-center"
                    >
                      <p className="text-lg font-semibold">{cert.name}</p>
                      <p className="text-sm text-gray-400">{cert.sub}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
