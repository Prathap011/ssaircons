import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

const clients = [
  {
    name: 'Apollo Hospitals',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Cognizant',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'TCS Chennai',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Ashok Leyland',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'BHEL Trichy',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Infosys',
    img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'HCL Technologies',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Hyundai India',
    img: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'TNEB',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'SRM Institute',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop&q=80',
  },
]

const PER_PAGE = 5

const groupVariants = {
  enter: {
    y: '100%',
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: '-100%',
    opacity: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView()
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(clients.length / PER_PAGE)

  useEffect(() => {
    const t = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages)
    }, 5000)
    return () => clearInterval(t)
  }, [totalPages])

  const visible = clients.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          label="Our Clients"
          title="Trusted by Leading Companies"
          subtitle="Hundreds of businesses and institutions across Tamil Nadu rely on SS Aircon for their HVAC needs."
          center
        />

        <div ref={ref} className="relative" style={{ minHeight: '200px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={groupVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5"
            >
              {visible.map((client, i) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ y: -6, boxShadow: '0 16px 32px -8px rgba(30,58,138,0.2)' }}
                  className="rounded-2xl overflow-hidden border border-primary-100 bg-white shadow-sm cursor-default"
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                  </div>
                  <div className="px-3 py-2.5 bg-white">
                    <p className="text-xs font-semibold text-primary-800 text-center leading-tight truncate">
                      {client.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Page dots */}
        <div className="flex gap-2 justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, i) => {
            const groupKey = clients[i * PER_PAGE]?.name ?? `group-${i}`
            return (
              <button
                key={groupKey}
                onClick={() => setPage(i)}
                aria-label={`Go to client group ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === page ? 'bg-primary-600 w-6' : 'bg-primary-200 w-2'
                  }`}
              />
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/clients" className="btn-outline border-accent-400 text-accent-400 hover:bg-accent-500 hover:text-white hover:border-accent-500">
            View more clients <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
