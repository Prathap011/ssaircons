import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const ventTypes = [
  { icon: '🍳', title: 'Commercial Kitchen Ventilation', desc: 'Grease exhaust hoods, make-up air systems, and fire suppression integration for restaurants and central kitchens.' },
  { icon: '🏭', title: 'Industrial Ventilation', desc: 'Dilution and local exhaust ventilation (LEV) for factories, chemical plants, and manufacturing environments.' },
  { icon: '🏠', title: 'Roof / Ceiling Ventilation', desc: 'Natural and mechanical roof ventilators to remove heat and moisture from large industrial buildings.' },
  { icon: '🏗️', title: 'Factory & Warehouse Ventilation', desc: 'High-volume fresh-air systems for large open facilities to maintain safe working conditions and reduce heat stress.' },
  { icon: '🅿️', title: 'Basement & Parking Ventilation', desc: 'CO-detection-based jet fan systems and extract fans for underground car parks meeting NBC/NFPA norms.' },
  { icon: '🌿', title: 'Pollution Control Systems', desc: 'Dust collectors, fume extraction, and scrubber systems for manufacturing and industrial environments.' },
]

const purposes = [
  'Maintain adequate supply of oxygen in the work area',
  'Control hazardous concentration of toxic materials in air',
  'Remove undesirable / unpleasant odours from a given area',
  'Remove contaminants at their source before they enter the workplace',
  'Control temperature and humidity for personnel comfort',
  'Comply with factory and building safety regulations',
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function VentilationSystem() {
  const { ref: purp, inView: purpIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Ventilation System | SS Aircon</title>
        <meta name="description" content="SS Aircon designs and installs industrial ventilation systems — commercial kitchen exhaust, factory ventilation, basement parking, and pollution control systems across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="Ventilation System"
        breadcrumbs={[{ label: 'Products' }, { label: 'Ventilation System' }]}
        bg="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro banner */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#60a5fa_0%,_transparent_70%)] pointer-events-none"
        />
        <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-100">Industrial & Commercial Ventilation Contractor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Ventilation, Pollution Control<br />& Acoustics Services
            </h2>
            <p className="text-primary-200 leading-relaxed">
              SS Aircon designs and installs comprehensive ventilation systems for industrial, commercial, and institutional buildings. From kitchen exhaust to factory LEV and basement parking jet fans, we ensure safe, healthy indoor air for every application.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-3"
          >
            {['Kitchen', 'Industrial', 'Roof', 'Factory', 'Parking', 'Pollution\nControl'].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="bg-white/10 border border-white/15 rounded-xl p-3 text-center"
              >
                <p className="text-white text-xs font-semibold leading-tight whitespace-pre-line">{t}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ventilation types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Services"
            title="Ventilation Systems We Design & Install"
            subtitle="Comprehensive ventilation contracting for every environment."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ventTypes.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm"
              >
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-bold text-primary-800 text-base mb-1">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div ref={purp}>
            <SectionTitle label="Why Ventilate?" title="Purpose of Industrial Ventilation" />
            <div className="space-y-2.5">
              {purposes.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: 24 }}
                  animate={purpIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  {p}
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Get a Ventilation Quote <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-72 flex items-center justify-center text-9xl border border-primary-100 shadow-sm"
          >
            🌬️
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom"
        >
          <span className="text-5xl block mb-4">🏭</span>
          <h2 className="text-3xl font-bold font-heading mb-4">Need an Industrial Ventilation System?</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our ventilation engineers will survey your facility, design the right system, and handle complete installation and commissioning.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
