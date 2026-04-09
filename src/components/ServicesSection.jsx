import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { services } from '../data/siteData'
import SectionTitle from './SectionTitle'
import { HiCog, HiArrowRight } from 'react-icons/hi'
import { MdAir, MdBusiness, MdOutlineWaterDrop } from 'react-icons/md'
import { FaCog, FaWind } from 'react-icons/fa'

const iconMap = {
  wrench: HiCog,
  thermometer: FaCog,
  cog: FaCog,
  droplets: MdOutlineWaterDrop,
  wind: FaWind,
  activity: MdAir,
  airVent: MdAir,
  building: MdBusiness,
}

function ServiceCard({ service, index }) {
  const { ref, inView } = useInView()
  const [imgError, setImgError] = useState(false)
  const Icon = iconMap[service.icon] || FaCog

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[280px] flex flex-col"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {!imgError ? (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col flex-grow justify-end">
        <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-accent-400" />
        </div>
        <h3 className="text-white font-heading font-semibold text-lg mb-2">{service.title}</h3>
        <p className="text-blue-100 text-sm leading-relaxed line-clamp-3 mb-4">{service.description}</p>
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-accent-400 font-semibold text-sm hover:text-accent-300 transition-colors group/link"
        >
          View More
          <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 to-primary-900" id="services">
      <div className="container-custom">
        <SectionTitle
          label="Our Services"
          title="Comprehensive HVAC Services"
          subtitle="From routine maintenance to full HVAC installations — we handle it all with expert precision."
          center
          dark
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-outline border-accent-400 text-accent-400 hover:bg-accent-500 hover:text-white hover:border-accent-500">
            View All Services <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
