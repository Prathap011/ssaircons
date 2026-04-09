import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { capabilities, partners } from '../data/siteData'
import SectionTitle from './SectionTitle'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'

const images = [
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80', alt: 'HVAC technician at work', offset: false },
  { src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80', alt: 'AC installation', offset: true },
  { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80', alt: 'Industrial HVAC', offset: false },
  { src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80', alt: 'Air conditioning unit', offset: true },
]

export default function AboutSection() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image collage with staggered animations */}
          <div ref={ref} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.03, zIndex: 1 }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${img.offset ? 'mt-8' : ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* Floating badge with pulsing ring */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 14 }}
              whileHover={{ scale: 1.08, rotate: 4 }}
              className="absolute -bottom-4 -right-4 bg-accent-500 text-white rounded-2xl p-5 shadow-xl text-center z-10"
            >
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-accent-400"
                animate={{ scale: [1, 1.18, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="text-3xl font-bold font-heading relative z-10">18+</div>
              <div className="text-xs font-medium mt-0.5 relative z-10">Years of<br />Excellence</div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div ref={ref2}>
            <SectionTitle
              label="About SS Aircon"
              title="High Standard Trusted & Professional Services"
              subtitle="Established on 14th April 2004, SS Aircon is one of the leading HVAC contracting companies serving the industry with distinction."
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView2 ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-slate-600 leading-relaxed mb-6">
                SS AIRCON is associated with <strong>VERTIV ENERGY PVT LTD</strong> (formerly Emerson Network Power) and <strong>TRANE–Ingersoll-Rand</strong> as an authorized franchisee and service partner.
                We have successfully completed <strong>300+ projects</strong> across IT, ITES, Telecom, Banking, Hospitals, Hotels, and more.
              </p>

              <div className="space-y-2 mb-8">
                {capabilities.slice(0, 6).map((cap, i) => (
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

              {/* Partners */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Authorized Partner of</p>
                <div className="flex flex-wrap gap-2">
                  {partners.map((p) => (
                    <motion.span
                      key={p}
                      whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
                      transition={{ duration: 0.2 }}
                      className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full cursor-default"
                    >
                      {p}
                    </motion.span>
                  ))}
                </div>
              </div>

              <Link to="/about" className="btn-primary group">
                Learn More About Us{' '}
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
