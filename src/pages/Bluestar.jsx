import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiCheckCircle, HiLightningBolt, HiDatabase, HiRefresh, HiArrowUp, HiCollection, HiSun, HiStar, HiCog, HiShieldCheck } from 'react-icons/hi'

const productLines = [
  {
    id: 'chiller',
    title: 'Chillers',
    subtitle: 'Water-cooled & Air-cooled',
    description:
      'Blue Star chillers deliver energy-efficient, large-scale cooling for commercial buildings, data centres, hospitals and industrial facilities. Available in scroll, screw and centrifugal variants.',
    Icon: HiDatabase,
    features: ['Up to 2000 TR capacity', 'High COP / energy star rated', 'Remote monitoring ready', 'Low noise operation'],
    color: 'from-blue-600 to-cyan-500',
    light: 'bg-blue-50',
  },
  {
    id: 'vrf',
    title: 'VRF / VRV Systems',
    subtitle: 'Variable Refrigerant Flow',
    description:
      'Blue Star VRF systems provide simultaneous heating and cooling across multiple zones. Ideal for office complexes, hotels, and malls with centralised control and exceptional energy savings.',
    Icon: HiRefresh,
    features: ['Up to 64 indoor units per system', 'Simultaneous heat recovery', 'Inverter compressor technology', 'Smart Wi-Fi control'],
    color: 'from-indigo-600 to-blue-500',
    light: 'bg-indigo-50',
  },
  {
    id: 'ductable',
    title: 'Ductable Split Units',
    subtitle: 'Ceiling Concealed & Floor Standing',
    description:
      'Blue Star ductable split systems are designed for large open plan spaces — offices, showrooms and retail. High static pressure fans ensure uniform air distribution across extended duct runs.',
    Icon: HiArrowUp,
    features: ['1 to 15 TR range', 'High ESP for long duct runs', 'R-410A eco-friendly refrigerant', 'Auto restart & fault diagnosis'],
    color: 'from-sky-600 to-blue-400',
    light: 'bg-sky-50',
  },
  {
    id: 'cassette',
    title: 'Cassette Air Conditioners',
    subtitle: '4-Way / 2-Way Ceiling Cassette',
    description:
      'Ceiling-flush cassette units blend seamlessly into any interior while delivering powerful, uniform cooling in four directions. Perfect for boardrooms, restaurants, and retail stores.',
    Icon: HiCollection,
    features: ['360° airflow distribution', 'Auto swing & auto clean', 'Compact aesthetics', 'QuietDrive technology'],
    color: 'from-blue-500 to-teal-400',
    light: 'bg-teal-50',
  },
  {
    id: 'split',
    title: 'Split & Window ACs',
    subtitle: 'Residential & Light Commercial',
    description:
      'Blue Star split ACs are designed to deliver precise, fast cooling with ultra-quiet operation for homes, offices, and small commercial spaces — backed by advanced inverter technology.',
    Icon: HiSun,
    features: ['5-star BEE rated models', 'Inverter compressor', 'Self-clean filter', '100% copper condenser'],
    color: 'from-cyan-600 to-blue-500',
    light: 'bg-cyan-50',
  },
]

const highlights = [
  { Icon: HiStar, label: '70+ Years', desc: 'Blue Star heritage since 1943' },
  { Icon: HiCog, label: 'Authorized Dealer', desc: 'SS Aircon — official Blue Star partner' },
  { Icon: HiLightningBolt, label: 'Energy Efficient', desc: '5-star rated, inverter-driven range' },
  { Icon: HiShieldCheck, label: '5-Year Warranty', desc: 'Comprehensive brand warranty' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Bluestar() {
  const [activeTab, setActiveTab] = useState(0)
  const current = productLines[activeTab]

  return (
    <>
      <Helmet>
        <title>Blue Star Products | SS Aircon — Authorized Dealer</title>
        <meta
          name="description"
          content="SS Aircon is an authorized Blue Star dealer in Chennai. Explore Blue Star chillers, VRF/VRV systems, ductable ACs, cassette units and split ACs at the best prices."
        />
      </Helmet>

      <PageHero
        title="Blue Star Products"
        breadcrumbs={[{ label: 'Our Partners' }, { label: 'Blue Star' }]}
        bg="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Brand intro banner */}
      <section className="py-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#60a5fa_0%,_transparent_70%)] pointer-events-none"
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
              <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-sm font-medium text-blue-100">Authorized Dealer — Blue Star Ltd</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              India's Premier HVAC &<br />Refrigeration Brand
            </h2>
            <p className="text-blue-200 leading-relaxed max-w-xl">
              SS Aircon is a proud authorized dealer of Blue Star Limited — India's leading integrated HVAC-R company with 70+ years of excellence. We supply, install, and service the full Blue Star product range across Tamil Nadu.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4 flex-shrink-0"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-1.5">
                  <h.Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-white mt-1.5 text-sm">{h.label}</p>
                <p className="text-blue-200 text-xs mt-0.5">{h.desc}</p>
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
            title="Blue Star HVAC Solutions"
            subtitle="From residential split ACs to large central chiller plants — explore the complete Blue Star lineup."
            center
          />

          {/* Animated tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {productLines.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActiveTab(i)}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250 border flex items-center gap-1.5 ${
                  activeTab === i
                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-md`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary-400 hover:text-primary-700'
                }`}
              >
                <p.Icon className="w-4 h-4" />
                {p.title}
              </motion.button>
            ))}
          </div>

          {/* Animated detail panel */}
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
                  className="text-slate-600 leading-relaxed mb-6"
                >
                  {current.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="space-y-2 mb-8"
                >
                  {current.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <HiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
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
                className={`${current.light} rounded-2xl h-64 md:h-80 flex items-center justify-center shadow-inner`}
              >
                <current.Icon className="w-32 h-32 text-primary-400" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All products grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Full Lineup"
            title="All Blue Star Products"
            subtitle="Explore every category we stock and service."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {productLines.map((p) => (
              <motion.div
                key={p.id}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(30,58,138,0.18)' }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${p.light} flex items-center justify-center mb-4`}>
                  <p.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-lg mb-1">{p.title}</h3>
                <p className="text-xs text-slate-400 font-medium mb-3">{p.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
                <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${p.color}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom"
        >
          <HiLightningBolt className="w-10 h-10 mx-auto text-blue-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">Ready to Install a Blue Star System?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Talk to our certified engineers. We'll help you choose the right Blue Star product and handle the full installation.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
