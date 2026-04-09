import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { services } from '../data/siteData'
import { HiArrowRight } from 'react-icons/hi'

function ServiceDetailCard({ service, index }) {
  const { ref, inView } = useInView()
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={isEven ? '' : 'md:order-2'}>
        <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
          {!imgError ? (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-200 to-primary-400 text-6xl">❄️</div>
          )}
        </div>
      </div>
      <div className={isEven ? '' : 'md:order-1'}>
        <span className="section-label block mb-2">Service</span>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-4">{service.title}</h2>
        <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
        <Link to="/contact" className="btn-primary">
          Book Service <HiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | SS Aircon HVAC</title>
        <meta name="description" content="SS Aircon offers AC maintenance, gas filling, VRF/VRV, centralized HVAC, chiller plant design, air balancing and more." />
      </Helmet>

      <PageHero
        title="Our Services"
        breadcrumbs={[{ label: 'Services' }]}
        bg="https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Grid overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="What We Offer"
            title="Comprehensive HVAC Services"
            subtitle="From installations to maintenance — we have all your HVAC needs covered."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="bg-primary-50 rounded-2xl p-5 border border-primary-100 hover:border-primary-400 hover:shadow-md transition-all group cursor-default"
              >
                <div className="text-3xl mb-3">❄️</div>
                <h3 className="font-semibold text-primary-800 font-heading mb-2 group-hover:text-primary-600 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{s.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed alternating layout */}
          <div className="space-y-20">
            {services.map((s, i) => (
              <ServiceDetailCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-heading mb-4">Need HVAC Service? We're Here 24/7</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            From emergency breakdown support to planned maintenance, our team is always ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8056041921" className="btn-primary">Call 8056041921</a>
            <Link to="/contact" className="btn-outline">Send Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
