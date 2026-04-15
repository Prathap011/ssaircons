import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import {
  HiArrowRight, HiCheckCircle, HiShieldCheck,
  HiCog, HiLightBulb, HiOfficeBuilding,
} from 'react-icons/hi'
import { MdOutlineEmojiEvents } from 'react-icons/md'

// ─── Product Data ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 'pac',
    name: 'Vertiv (PAC)',
    subtitle: 'Precision Air Conditioning',
    description:
      'For all-time temperature and moisture control in network closets, computer rooms, and other little spaces. Its low profile allows floor-mount or wall-mount fitting and requires little or no floor space.',
    image: '/assets/vertiv/verti_pac.jpg',
    specs: [
      { label: 'Capacity Range', value: '3 – 60 TR' },
      { label: 'Temp Accuracy', value: '±0.5°C' },
      { label: 'Humidity', value: '±2% RH' },
    ],
    features: [
      'Upflow & downflow configurations',
      'DX and chilled-water refrigerant options',
      'Integrated SNMP / iCOM / BMS management',
      'N+1 / N+N redundancy support',
      'EC fan technology for energy savings',
      'Free-cooling economiser mode',
    ],
  },
  {
    id: 'pcw',
    name: 'Vertiv (PCW)',
    subtitle: 'Chilled Water Precision Cooling',
    description:
      'Liebert PCW is the ideal chilled water cooling unit, providing an efficient solution for data center and server room air conditioning. This water cooling system is available in a wide variety of configurations and capacities, ranging from 25 to 220 kW.',
    image: '/assets/vertiv/verti_pcw.jpg',
    specs: [
      { label: 'Cooling Capacity', value: 'Up to 200 kW' },
      { label: 'Cooling Type', value: 'Chilled Water' },
      { label: 'Backup Coil', value: 'DX Supplementary' },
    ],
    features: [
      'Direct building chilled water connection',
      'Supplementary DX backup coil for continuity',
      'High-density room support',
      'Variable speed EC fan motors',
      'Intelligent iCOM controller',
      'Remote DCIM / BMS monitoring ready',
    ],
  },
  {
    id: 'pdx',
    name: 'Vertiv (PDX)',
    subtitle: 'DX Close Control Precision Unit',
    description:
      'The Liebert PDX direct expansion large room cooling unit is equipped with the most advanced industry cooling system technology, which allows the unit to provide thermal management efficiency for data centers, server rooms, VFD Rooms, Electrical rooms, textile and Quality Control Labs.',
    image: '/assets/vertiv/verti_pdx.jpg',
    specs: [
      { label: 'Cooling Type', value: 'Direct Expansion' },
      { label: 'Circuits', value: 'Dual Independent' },
      { label: 'Control', value: 'iCOM / SNMP' },
    ],
    features: [
      'Dual independent refrigerant circuits',
      'Multiple airflow configurations available',
      'Intelligent iCOM main controller',
      'Remote monitoring & alert management',
      'High-efficiency EC fan technology',
      'Wide ambient temperature tolerance',
    ],
  },
  {
    id: 'pahu',
    name: 'Vertiv (PAHU)',
    subtitle: 'Precision Air Handling Unit',
    description:
      'Properly used, complete air conditioning system with high quality and energy safe, durable, long lasting performance characteristics. 5 functions: universal function, light perception, long distance.',
    image: '/assets/vertiv/verti_pahu.jpg',
    specs: [
      { label: 'Type', value: 'Central AHU' },
      { label: 'Filtration', value: 'HEPA Grade Option' },
      { label: 'Integration', value: 'BAS / DCIM Ready' },
    ],
    features: [
      'Centralised precision air treatment',
      'Optional HEPA-grade filtration module',
      'Integrated heat recovery',
      'Full BAS and DCIM integration',
      'Modular and scalable design',
      'Supports full perimeter containment',
    ],
  },
  {
    id: 'crv',
    name: 'Vertiv (CRV)',
    subtitle: 'Close Coupled Row Variable Cooling',
    description:
      'The Vertiv™ Liebert® CRV is a precision data center cooling solution, integrated within a row of data center racks and was designed to address some of the major challenges seen in high density applications. With adjustable airflow baffles and controls that independently manage airflow and temperature, the Liebert CRV can precisely deliver highly efficient cooling in the row where it’s needed. The system is available in multiple options, providing flexibility for any installation.',
    image: '/assets/vertiv/verti_crv.jpg',
    specs: [
      { label: 'Cooling Capacity', value: 'Up to 80 kW' },
      { label: 'Deployment', value: 'In-Row / Aisle' },
      { label: 'Fan Speed', value: 'Variable EC Drive' },
    ],
    features: [
      'Hot-aisle / cold-aisle containment',
      'In-row and rear-door configurations',
      'Variable speed EC fan technology',
      'Significantly reduces overall PUE',
      'Supports high-density rack loads',
      'Rapid plug-and-play commissioning',
    ],
  },
  {
    id: 'src',
    name: 'Vertiv (SRC)',
    subtitle: 'Small / Medium Room Cooling',
    description:
      'Liebert® SRC is designed for High air quantity to match equipment Sensible Load application. It is coupled with high energy efficient components and advanced control system which helps in maximum energy efficiency and guarantees proper environmental conditions inside Critical Technological rooms.',
    image: '/assets/vertiv/verti_src.jpg',
    specs: [
      { label: 'Capacity Range', value: '3 – 20 TR' },
      { label: 'Application', value: 'Small / Edge Sites' },
      { label: 'Refrigerant', value: 'R410A / R407C' },
    ],
    features: [
      'Compact design for space-constrained rooms',
      'Free-cooling economiser option',
      'Digital scroll compressor technology',
      'Integrated electrical panel',
      'Auto restart on power restoration',
      'Optional humidity control module',
    ],
  },
]

const achievements = [
  {
    label: 'No. 1 Franchisee Award',
    desc: 'Ranked No. 1 among 7 Vertiv franchisees in South India for outstanding project execution and service quality.',
    Icon: MdOutlineEmojiEvents,
  },
  {
    label: 'Tata Communications — 110 PAC Units',
    desc: 'Erection & commissioning of 110 Vertiv Liebert PAC units (~1500 TR) at Tata Communications, Swami Sivanantha Salai, Chennai.',
    Icon: HiOfficeBuilding,
  },
  {
    label: 'Bharti Airtel — 500m MS Piping',
    desc: 'Completed ~500 m MS chilled-water piping for Vertiv Liebert PAC at Bharti Airtel Data Centre, Siruseri.',
    Icon: HiCog,
  },
  {
    label: 'HCL Technologies — 150 TR Dual Fluid',
    desc: 'Erected and commissioned 20 dual-fluid Vertiv Liebert PAC units (~150 TR) at HCL Technologies, Sholinganallur.',
    Icon: HiLightBulb,
  },
  {
    label: 'Scope International — 400 TR Live DC',
    desc: 'Handled ~400 TR dual-fluid Precision ACs with complete MS & copper piping in a live Data Centre at Scope International, Nungambakkam.',
    Icon: HiShieldCheck,
  },
  {
    label: 'Bharti Data Centre — 100 TR HDPAC',
    desc: 'Installed ~100 TR High-Density Precision ACs (XDC, XDP, XDV & XDO) at Bharti Data Centre, Siruseri.',
    Icon: HiOfficeBuilding,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch py-14 border-b border-slate-100 last:border-0"
    >
      <div className={isEven ? '' : 'md:order-2'}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-2xl min-h-[450px] h-full bg-white relative group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>

      <div className={isEven ? '' : 'md:order-1'}>
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-block text-xs font-bold px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-primary-800 to-primary-500 mb-3"
        >
          {product.subtitle}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="text-2xl md:text-3xl font-bold font-heading text-primary-800 mb-3"
        >
          {product.name}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="text-slate-600 leading-relaxed text-sm mb-5"
        >
          {product.description}
        </motion.p>

        {/* <div className="flex flex-wrap gap-3 mb-5">
          {product.specs.map((s) => (
            <div key={s.label} className="bg-primary-50 border border-primary-100 rounded-xl px-4 py-2 text-center min-w-[80px]">
              <p className="text-primary-800 font-bold text-sm leading-tight">{s.value}</p>
              <p className="text-primary-400 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
          {product.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
              <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div> */}

      </div>
    </motion.div>
  )
}

export default function Vertiv() {
  return (
    <>
      <Helmet>
        <title>Vertiv Products | SS Aircon — No. 1 Authorized Franchisee</title>
        <meta
          name="description"
          content="SS Aircon is the No. 1 Vertiv authorized franchisee in South India. We supply, install and service Vertiv Liebert PAC, PCW, PDX, PAHU, CRV and SRC precision cooling units for data centres."
        />
      </Helmet>

      <PageHero
        title="Vertiv Products"
        breadcrumbs={[{ label: 'Our Partners' }, { label: 'Vertiv' }]}
        bg="/assets/vertiv-landing.jpeg"
      />

      {/* Brand Intro Banner */}
      {/* <section className="py-14 bg-gradient-to-r from-primary-800 to-primary-900 text-white overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#60a5fa_0%,_transparent_70%)] pointer-events-none"
        />
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-300 animate-pulse" />
              <span className="text-sm font-medium text-primary-100">
                Authorized Franchisee — Vertiv Energy Pvt. Ltd.
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Precision Cooling for<br />Mission-Critical Environments
            </h2>
            <p className="text-primary-200 leading-relaxed max-w-xl mb-6">
              SS Aircon is ranked <strong className="text-white">No. 1 Vertiv franchisee</strong> (formerly
              Emerson Network Power) in South India. We specialise in design, supply, erection, testing,
              commissioning, and long-term maintenance of Vertiv Liebert precision air conditioning systems
              for data centres and critical IT environments.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: '110+', l: 'PAC Units Installed' },
                { v: 'No. 1', l: 'Vertiv Franchisee' },
                { v: '24/7', l: 'Service Support' },
                { v: '24 yr', l: 'Industry Experience' },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-white/10 border border-white/15 rounded-xl p-3 text-center"
                >
                  <p className="text-xl font-bold text-white">{s.v}</p>
                  <p className="text-primary-300 text-xs mt-0.5">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
            className="flex-shrink-0 self-center"
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
                <MdOutlineEmojiEvents className="w-9 h-9 text-yellow-300 mx-auto" />
                <p className="text-white font-bold text-xs mt-1 leading-tight">No. 1<br />Franchisee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Vertiv Liebert Products"
            title="Precision Cooling Solutions"
            subtitle="From close-control units to in-row cooling — the complete Vertiv Liebert range supplied, installed, and serviced by SS Aircon."
            center
          />
          <div>
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="section-padding bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="container-custom">
          <SectionTitle
            label="Project Highlights"
            title="Proven Track Record with Vertiv"
            subtitle="SS Aircon has successfully delivered high-stakes Vertiv PAC projects for India's top enterprises across data centres, DRCs, and critical IT facilities."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((a) => (
              <motion.div
                key={a.label}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.15)' }}
                className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <a.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 mb-1 text-sm">{a.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Why SS Aircon + Vertiv */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle label="Why SS Aircon + Vertiv?" title="Your Trusted Vertiv Partner" />
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              SS Aircon has been an authorized Vertiv franchisee since the days of Emerson Network Power. Our
              factory-trained team has hands-on experience with every Liebert product — from installation
              through long-term AMC and CAMC support.
            </p>
            <div className="space-y-2.5">
              {[
                'Factory-trained & certified Vertiv engineers',
                'Own transportation for equipment & materials',
                '24/7 dedicated breakdown service team',
                'Complete MS & copper piping in-house capability',
                'BMS / SNMP / DCIM integration expertise',
                'Annual Maintenance Contracts (AMC / CAMC)',
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Talk to Our Experts <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { v: 'No. 1', l: 'Among 7 Franchisees', bg: 'bg-yellow-50 border-yellow-100', tc: 'text-yellow-700' },
              { v: '300+', l: 'Projects Delivered', bg: 'bg-primary-50 border-primary-100', tc: 'text-primary-700' },
              { v: '1500 TR', l: 'Tata Comms Alone', bg: 'bg-primary-50 border-primary-100', tc: 'text-primary-700' },
              { v: '24/7', l: 'Uptime Maintenance', bg: 'bg-primary-50 border-primary-100', tc: 'text-primary-700' },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className={`${s.bg} border rounded-2xl p-6 text-center`}
              >
                <p className={`text-3xl font-black ${s.tc}`}>{s.v}</p>
                <p className="text-slate-500 text-xs mt-1">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
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
            Our certified Vertiv engineers will design, supply, and commission the right Liebert PAC solution
            for your critical environment — backed by 24/7 support.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section> */}
    </>
  )
}
