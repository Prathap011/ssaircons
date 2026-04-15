import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from './SectionTitle'

const certificates = [
  {
    name: 'Appreciation Certificate',
    sub: 'Gunasekaran Hospitals Pvt Ltd',
    image: '/assets/certificates/cert1.jpeg', // 👈 your uploaded image
  },
  {
    name: 'ISO 9001:2015',
    sub: 'Quality Management System',
    image: '/assets/certificates/cert2.jpeg',
  },
  {
    name: 'ISO 14001:2015',
    sub: 'Environmental Management',
    image: '/assets/certificates/cert3.jpeg',
  },
  {
    name: 'OHSAS 18001:2007',
    sub: 'Occupational Health & Safety',
    image: '/assets/certificates/cert4.jpeg',
  },
  {
    name: 'Certificate of Excellence',
    sub: 'For Outstanding Service in HVAC Solutions',
    image: '/assets/certificates/cert5.jpeg',
  },
  {
    name: 'Energy Efficiency Award',
    sub: 'Recognizing Commitment to Sustainable HVAC Practices',
    image: '/assets/certificates/cert6.jpeg',
  },
  {
    name: 'Customer Satisfaction Award',
    sub: 'For Exceptional Client Service and Support',
    image: '/assets/certificates/cert7.jpeg',
  },
  {
    name: 'Safety Excellence Certificate',
    sub: 'For Maintaining High Safety Standards in HVAC Installations',
    image: '/assets/certificates/cert8.jpeg',
  },
  {
    name: 'Innovation in HVAC Solutions',
    sub: 'Awarded for Implementing Cutting-Edge HVAC Technologies',
    image: '/assets/certificates/cert9.jpeg',
  },
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
                  className="rounded-2xl w-full h-full object-contain shadow-lg bg-white"
                  style={{
                    width: isActive ? 340 : 240,
                    height: isActive ? 400 : 280, // 👈 taller like real certificate
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>


                {/* TEXT OUTSIDE (ONLY ACTIVE) */}
                {/* <AnimatePresence>
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
                </AnimatePresence> */}
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
              className={`transition-all duration-300 rounded-full ${i === active ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
