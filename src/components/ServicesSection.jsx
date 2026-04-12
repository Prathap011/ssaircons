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

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.3 } },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.5, ease: 'easeOut' } },
}

const iconBoxVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 12, transition: { duration: 0.3 } },
}

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.2 } },
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
    >
      <motion.div
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 min-h-[280px] flex flex-col cursor-default"
      >
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          {!imgError ? (
            <motion.img
              variants={imageVariants}
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
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
          <motion.div
            variants={iconBoxVariants}
            className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mb-3 origin-center"
          >
            <Icon className="w-5 h-5 text-accent-400" />
          </motion.div>
          <h3 className="text-white font-heading font-semibold text-lg mb-2">{service.title}</h3>
          <p className="text-blue-100 text-sm leading-relaxed line-clamp-3 mb-4">{service.description}</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-accent-400 font-semibold text-sm hover:text-accent-300 transition-colors"
          >
            View More
            <motion.span variants={arrowVariants}>
              <HiArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    // <section className="section-padding bg-gradient-to-br from-slate-900 to-primary-900" id="services">
    <section className="section-padding" id="services">
      <div className="container-custom">
        <SectionTitle
          label="Our Services"
          title="Comprehensive HVAC Services"
          subtitle="From routine maintenance to full HVAC installations — we handle it all with expert precision."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/services" className="btn-outline border-accent-400 text-accent-400 hover:bg-accent-500 hover:text-white hover:border-accent-500">
            View All Services <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
