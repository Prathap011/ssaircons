import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { capabilities, partners } from '../data/siteData'
import SectionTitle from './SectionTitle'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'

export default function AboutSection() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image collage */}
          <div ref={ref} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80"
                alt="HVAC technician at work"
                className="rounded-2xl w-full h-52 object-cover shadow-lg"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80"
                alt="AC installation"
                className="rounded-2xl w-full h-52 object-cover shadow-lg mt-8"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80"
                alt="Industrial HVAC"
                className="rounded-2xl w-full h-52 object-cover shadow-lg"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80"
                alt="Air conditioning unit"
                className="rounded-2xl w-full h-52 object-cover shadow-lg mt-8"
                loading="lazy"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-4 -right-4 bg-accent-500 text-white rounded-2xl p-5 shadow-xl text-center"
            >
              <div className="text-3xl font-bold font-heading">18+</div>
              <div className="text-xs font-medium mt-0.5">Years of<br/>Excellence</div>
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07 }}
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
                    <span key={p} className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/about" className="btn-primary">
                Learn More About Us <HiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
