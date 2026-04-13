import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  HiArrowRight,
  HiCog,
  HiDeviceMobile,
  HiTemplate,
} from 'react-icons/hi'
import { MdAcUnit } from 'react-icons/md'
import { FaWind, FaFire } from 'react-icons/fa'

const services = [
  {
    id: 'ac-install',
    productId: 'precision',
    Icon: MdAcUnit,
    title: 'Precision Air Conditioning',
    description:
      'Precision air conditioner (precision cooling) is used to control the temperature and humidity to precision level for critical environments.',
    image: 'https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ac-repair',
    productId: 'ahu',
    Icon: HiCog,
    title: 'Air Handling Unit (AHU)',
    description:
      'An AHU is used to re-condition and circulate air as part of a heating & air-conditioning system, improving indoor air quality.',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4c53f0?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'heating',
    productId: 'cassette',
    Icon: FaFire,
    title: 'Cassette Air Conditioner',
    description:
      'Gives you the freedom to choose a model according to your requirements and budget for optimal ceiling-mounted cooling.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ventilation',
    productId: 'chiller',
    Icon: FaWind,
    title: 'Chillers',
    description:
      'Chiller plant works on proper refrigerant cycle where vapor compression or absorption cools fluid for large commercial applications.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'thermostat',
    productId: 'ductable',
    Icon: HiDeviceMobile,
    title: 'Ductable Air Conditioner',
    description:
      'A balanced air controlling device which makes the air capable to breathe in for large commercial and industrial spaces.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'hvac-design',
    productId: 'fcu',
    Icon: HiTemplate,
    title: 'Fan Coil Unit (FCU)',
    description:
      'A fan coil unit uses a coil and a fan to heat or cool a room without connecting to ductwork, ideal for individual room control.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
  },
]

// ─── Service card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const { Icon } = service

  return (
    <Link
      to={`/products#${service.productId}`}
      className="block"
      tabIndex={-1}
    >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border overflow-hidden cursor-pointer transition-colors duration-300"
      style={{
        background: hovered ? 'rgba(219,234,254,0.7)' : 'rgba(255,255,255,0.92)',
        borderColor: hovered ? 'rgba(37,99,235,0.35)' : 'rgba(191,219,254,0.7)',
      }}
    >
      {/* Product image */}
      <div className="relative overflow-hidden" style={{ height: 180 }}>
        {!imgError ? (
          <motion.img
            src={service.image}
            alt={service.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-primary-50 flex items-center justify-center">
            <Icon className="w-14 h-14 text-primary-200" />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/70 to-transparent pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Icon box */}
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? -6 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
          style={{
            background: hovered ? 'rgba(37,99,235,0.12)' : 'rgba(96,165,250,0.12)',
            border: hovered ? '1px solid rgba(37,99,235,0.3)' : '1px solid rgba(147,197,253,0.5)',
          }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: hovered ? '#2563eb' : '#3b82f6' }}
          />
        </motion.div>

        {/* Title */}
        <h3
          className="font-heading font-semibold text-base text-primary-800 mb-2 leading-snug transition-colors duration-300"
          style={{ color: hovered ? '#1d4ed8' : '#1e40af' }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed">
          {service.description}
        </p>

        {/* Discover link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-4 flex items-center gap-1.5 text-primary-600 text-xs font-semibold tracking-widest uppercase"
        >
          Discover
          <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
            <HiArrowRight className="w-3.5 h-3.5" />
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 origin-left"
      />

      {/* Top-left corner glow */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top left, rgba(59,130,246,0.1) 0%, transparent 70%)',
          }}
        />
      )}
    </motion.div>
    </Link>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function ProductsSection() {
  const { ref, inView } = useInView()

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 to-primary-50"
      id="products"
    >
      {/*
        Background effects in a separate div that clips itself — does NOT affect
        the sticky context of child elements.
      */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'clip' }}>
        {/* Blue grid line */}
        <div
          className="absolute inset-0"
          // style={{
          //   backgroundImage:
          //     'linear-gradient(rgba(14,116,144,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,116,144,0.06) 1px, transparent 1px)',
          //   backgroundSize: '48px 48px',
          // }}
        />
        {/* Glow blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
        />
      </div>

      {/*
        KEY: items-start on this flex row makes position:sticky work on the left child.
        The section has NO overflow:hidden so sticky is never blocked.
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start">

        {/* LEFT sticky panel — sticks to top while right column scrolls */}
        <div
          ref={ref}
          className="lg:sticky lg:top-0 lg:h-screen
                     flex flex-col justify-center
                     py-16 lg:py-0
                     w-full lg:w-[420px] lg:min-w-[420px]
                      border-primary-200 lg:pr-14"
        >
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-500" />
              <span className="text-accent-500 text-xs font-semibold uppercase tracking-widest">
                Our Products
              </span>
            </div>

            <h2
              className="font-heading font-bold text-primary-800 leading-tight mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.75rem)' }}
            >
              Top-Quality<br />
              <span className="text-primary-500">HVAC</span> Products
            </h2>

            <div className="w-12 h-0.5 bg-primary-300 mb-5" />

            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
              From precision cooling to large-scale chillers — we supply and
              install the right solution for every need.
            </p>

            <Link to="/products" className="btn-primary group">
              View All Products
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: scrollable service card grid — 2 columns, shared borders */}
        <div className="flex-1 py-16 lg:pl-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-primary-200">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}