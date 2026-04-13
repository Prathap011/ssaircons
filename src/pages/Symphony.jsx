import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const productLines = [
  {
    id: 'diet',
    title: 'Diet Series',
    subtitle: 'Mid-range commercial coolers',
    description:
      'The Symphony Diet series is designed for medium commercial spaces — gyms, workshops, and small warehouses. Compact frame, powerful 25 m air throw, and ultra-low 215 W power consumption.',
    icon: '🌀',
    airflow: '8,500 m³/hr',
    power: '215 W',
    throw: '25 m',
    features: ['3-side honeycomb cooling pads', 'Digital touchscreen remote', 'Auto vertical swing', 'Float valve auto water filling'],
    color: 'from-primary-600 to-primary-500',
    light: 'bg-primary-50',
  },
  {
    id: 'cloud',
    title: 'Cloud Series',
    subtitle: 'Large commercial air coolers',
    description:
      'Symphony Cloud series coolers are engineered for large factories, warehouses, and event halls. Twin-unit design delivers dual 25+25 m air throws for wide-area rapid cooling.',
    icon: '☁️',
    airflow: '8,500 + 8,500 m³/hr',
    power: '215 W × 2',
    throw: '25 m × 2',
    features: ['4-side honeycomb cooling pads', 'Cool Flow Dispenser enhanced cooling', 'Auto vertical swing', 'Lockable heavy-duty wheels'],
    color: 'from-primary-500 to-accent-400',
    light: 'bg-primary-50',
  },
  {
    id: 'industrial',
    title: 'Industrial Series',
    subtitle: 'Heavy-duty plant cooling',
    description:
      'Built for demanding industrial environments, the Symphony Industrial series delivers 18,000 m³/hr airflow across 26 m — suitable for large manufacturing plants, textile mills, and logistics hubs.',
    icon: '🏗️',
    airflow: '18,000 m³/hr',
    power: '580 W',
    throw: '26 m',
    features: ['3-side HDPE honeycomb pads', 'Powder-coated steel chassis', 'Cool Flow Dispenser', 'Large water inlet door'],
    color: 'from-primary-500 to-accent-500',
    light: 'bg-primary-50',
  },
  {
    id: 'jumbo',
    title: 'Jumbo Series',
    subtitle: 'Maximum capacity coolers',
    description:
      'The Symphony Jumbo series is designed for massive open spaces — aircraft hangars, stadiums, and large warehouses. Delivers 20,000 m³/hr with 4-side cooling pads for superior coverage.',
    icon: '🦣',
    airflow: '20,000 m³/hr',
    power: '1,100 W',
    throw: '30 m',
    features: ['4-side dust filter system', 'Auto vertical swing', 'Cool Flow Dispenser', 'Float valve for auto water filling'],
    color: 'from-primary-700 to-primary-600',
    light: 'bg-primary-50',
  },
]

const advantages = [
  { icon: '💧', label: 'Water-Based Cooling', desc: 'No compressor — 90% lower power vs AC' },
  { icon: '🌿', label: 'Eco-Friendly', desc: 'Zero refrigerant, zero ozone impact' },
  { icon: '💨', label: 'Fresh Air', desc: 'Continuously draws in fresh outside air' },
  { icon: '🔇', label: 'Low Noise', desc: 'Whisper-quiet operation in large spaces' },
  { icon: '🔧', label: 'Easy Maintenance', desc: 'Removable & washable honeycomb pads' },
  { icon: '🏆', label: 'Authorized Dealer', desc: 'SS Aircon — official Symphony partner' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Symphony() {
  const [activeTab, setActiveTab] = useState(0)
  const current = productLines[activeTab]

  return (
    <>
      <Helmet>
        <title>Symphony Air Coolers | SS Aircon — Authorized Dealer</title>
        <meta
          name="description"
          content="SS Aircon is an authorized Symphony Industrial Air Cooler dealer. Explore the Diet, Cloud, Industrial, and Jumbo series — eco-friendly, high-airflow cooling for factories and warehouses."
        />
      </Helmet>

      <PageHero
        title="Symphony Air Coolers"
        breadcrumbs={[{ label: 'Our Partners' }, { label: 'Symphony' }]}
        bg="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Brand intro banner */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#60a5fa_0%,_transparent_60%)] pointer-events-none"
        />
        <div className="container-custom flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-300 animate-pulse" />
              <span className="text-sm font-medium text-primary-100">Authorized Dealer — Symphony Ltd.</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Industrial Air Cooling.<br />Powerful. Efficient. Natural.
            </h2>
            <p className="text-primary-100 leading-relaxed max-w-xl">
              SS Aircon is a proud authorized dealer of <strong className="text-white">Symphony Ltd.</strong> — the world's largest air cooler company. We supply and maintain Symphony's full industrial cooler range across Tamil Nadu — delivering powerful, eco-friendly cooling for factories, warehouses, and open-air venues.
            </p>
          </motion.div>

          {/* Animated stat chips */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 flex-shrink-0"
          >
            {[
              { num: '20,000', lbl: 'm³/hr max airflow' },
              { num: '90%', lbl: 'less energy than AC' },
              { num: '30 m', lbl: 'air throw distance' },
              { num: '4-side', lbl: 'honeycomb pad cooling' },
            ].map((s, i) => (
              <motion.div
                key={s.lbl}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white/15 backdrop-blur border border-white/20 rounded-xl px-5 py-3 flex items-center gap-4"
              >
                <span className="text-2xl font-bold text-white">{s.num}</span>
                <span className="text-primary-100 text-sm">{s.lbl}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tab selector */}
      <section className="py-14 bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Product Range"
            title="Symphony Cooler Series"
            subtitle="From medium commercial to heavy-duty industrial — the right cooler for every application."
            center
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {productLines.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActiveTab(i)}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250 border ${
                  activeTab === i
                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-md`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary-400 hover:text-primary-700'
                }`}
              >
                <span className="mr-1.5">{p.icon}</span>
                {p.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full text-white bg-gradient-to-r ${current.color} mb-4`}
                >
                  {current.subtitle}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl md:text-3xl font-bold font-heading text-primary-800 mb-4"
                >
                  {current.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-600 leading-relaxed mb-5"
                >
                  {current.description}
                </motion.p>

                {/* Specs row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.22 }}
                  className="flex gap-4 mb-6"
                >
                  {[
                    { l: 'Airflow', v: current.airflow },
                    { l: 'Power', v: current.power },
                    { l: 'Air Throw', v: current.throw },
                  ].map((s) => (
                    <div key={s.l} className="flex flex-col gap-0.5">
                      <span className={`text-lg font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                        {s.v}
                      </span>
                      <span className="text-xs text-slate-400">{s.l}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.27 }}
                  className="space-y-2 mb-8"
                >
                  {current.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </motion.div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get a Quote <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className={`${current.light} rounded-2xl h-64 md:h-80 flex items-center justify-center text-8xl shadow-inner`}
              >
                {current.icon}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why air coolers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Why Symphony?"
            title="Advantages of Industrial Air Coolers"
            subtitle="Air coolers are the smart, eco-friendly alternative to conventional AC for large semi-open spaces."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advantages.map((a) => (
              <motion.div
                key={a.label}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: '0 16px 32px -8px rgba(37,99,235,0.15)' }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center"
              >
                <span className="text-4xl">{a.icon}</span>
                <h3 className="font-bold text-primary-800 text-base mt-3 mb-1">{a.label}</h3>
                <p className="text-slate-500 text-sm">{a.desc}</p>
              </motion.div>
            ))}
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
          <span className="text-5xl mb-4 block">🌬️</span>
          <h2 className="text-3xl font-bold font-heading mb-4">Cool Your Facility the Smart Way</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Let our team help you choose the right Symphony cooler series for your factory, warehouse, or venue — and handle supply, installation, and AMC.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
