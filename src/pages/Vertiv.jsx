import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiCheckCircle, HiShieldCheck } from 'react-icons/hi'

const productLines = [
  {
    id: 'pac',
    title: 'Precision Air Conditioning',
    subtitle: 'Close Control Units (CCU)',
    description:
      'Vertiv Liebert precision cooling units maintain ±0.5°C temperature accuracy and ±2% RH humidity stability — critical for data centres, server rooms, telecom PoPs, and cleanrooms.',
    icon: '🖥️',
    features: ['±0.5°C temperature precision', 'N+1 / N+N redundancy support', 'Remote SNMP / iCOM management', 'Upflow & downflow variants'],
    color: 'from-primary-600 to-primary-500',
    light: 'bg-primary-50',
  },
  {
    id: 'inrow',
    title: 'In-Row Cooling',
    subtitle: 'Close-coupled server row cooling',
    description:
      'Vertiv Liebert XR in-row cooling eliminates hot spots by placing cooling at the source of heat. Designed for high-density data centre aisles with targeted airflow management.',
    icon: '🗄️',
    features: ['Up to 80 kW per unit', 'Hot-aisle / cold-aisle containment', 'Rear-door heat exchangers', 'EC fan technology for PUE improvement'],
    color: 'from-primary-700 to-primary-600',
    light: 'bg-primary-50',
  },
  {
    id: 'crac',
    title: 'Computer Room AC (CRAC)',
    subtitle: 'Room-level cooling for IT environments',
    description:
      'Vertiv Liebert CRAC units provide room-based precision cooling with configurable airflow and free-cooling economiser modes, reducing total operational costs for mid-sized server rooms.',
    icon: '❄️',
    features: ['3 – 60 TR capacity range', 'Multiple refrigerant options', 'Integrated free-cooling mode', 'BMS & DCIM integration'],
    color: 'from-primary-500 to-accent-500',
    light: 'bg-primary-50',
  },
  {
    id: 'chw',
    title: 'Chilled Water PAC',
    subtitle: 'Dual-fluid precision units',
    description:
      'Chilled-water precision air conditioners from Vertiv are ideal where a central chiller plant already exists. They connect directly to the building chilled water loop for highly efficient cooling.',
    icon: '💧',
    features: ['Up to 200 kW cooling capacity', 'DX or chilled-water coils', 'Supplementary DX backup coil', 'High-density room support'],
    color: 'from-primary-600 to-accent-500',
    light: 'bg-primary-50',
  },
]

const achievements = [
  {
    label: 'No. 1 Franchisee Award',
    desc: 'Ranked No. 1 among 7 Vertiv franchisees in South India for outstanding execution and service quality.',
    icon: '🏆',
  },
  {
    label: 'Tata Communications — 110 PAC Units',
    desc: 'Erection & commissioning of 110 Vertiv Liebert PAC units (~1500 TR) at Tata Communications, Chennai.',
    icon: '🏢',
  },
  {
    label: 'Bharti Airtel — 500m Piping',
    desc: 'Completed ~500 m MS chilled-water piping for Vertiv PAC at Bharti Airtel DRC, Siruseri.',
    icon: '🔧',
  },
  {
    label: 'HCL Technologies — 150 TR',
    desc: 'Erected and commissioned 20 dual-fluid Vertiv PAC units (~150 TR) at HCL Technologies, Sholinganallur.',
    icon: '💡',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Vertiv() {
  const [activeTab, setActiveTab] = useState(0)
  const current = productLines[activeTab]

  return (
    <>
      <Helmet>
        <title>Vertiv Products | SS Aircon — Authorized Franchisee</title>
        <meta
          name="description"
          content="SS Aircon is the No. 1 Vertiv authorized franchisee in South India. We supply, install and service Vertiv Liebert precision air conditioning units for data centres and critical environments."
        />
      </Helmet>

      <PageHero
        title="Vertiv Products"
        breadcrumbs={[{ label: 'Our Partners' }, { label: 'Vertiv' }]}
        bg="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Brand intro banner */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#60a5fa_0%,_transparent_70%)] pointer-events-none"
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
              <span className="text-sm font-medium text-primary-100">Authorized Franchisee — Vertiv Energy Pvt. Ltd.</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Precision Cooling for<br />Mission-Critical Environments
            </h2>
            <p className="text-primary-200 leading-relaxed max-w-xl">
              SS Aircon is the ranked <strong className="text-white">No. 1 Vertiv franchisee</strong> (formerly Emerson Network Power) in South India. We specialise in the design, supply, erection, and long-term maintenance of Vertiv Liebert precision air conditioning systems.
            </p>
          </motion.div>

          {/* Award badge pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
            className="flex-shrink-0"
          >
            <div className="relative w-44 h-44 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-primary-500/30"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.4, ease: 'easeInOut' }}
                className="absolute inset-4 rounded-full bg-primary-500/25"
              />
              <div className="relative bg-white/15 border-2 border-white/25 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center">
                <span className="text-3xl">🏆</span>
                <p className="text-white font-bold text-xs mt-1 leading-tight">No. 1<br />Franchisee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab selector */}
      <section className="py-14 bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Product Range"
            title="Vertiv Liebert Solutions"
            subtitle="Precision cooling engineered for data centres, server rooms, and critical infrastructure."
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

      {/* Key achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Project Highlights"
            title="Proven Track Record with Vertiv"
            subtitle="SS Aircon has successfully delivered high-stakes Vertiv PAC projects for India's top enterprises."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {achievements.map((a) => (
              <motion.div
                key={a.label}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: '0 16px 32px -8px rgba(37,99,235,0.15)' }}
                className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-2xl flex-shrink-0">
                  {a.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-1">{a.label}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                </div>
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
          <HiShieldCheck className="w-10 h-10 mx-auto text-primary-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">Need Precision Cooling for Your Data Centre?</h2>
            <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our certified Vertiv engineers will design, supply, and commission the right Liebert PAC solution for your critical environment.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
