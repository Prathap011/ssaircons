import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiOfficeBuilding, HiHeart, HiLightningBolt, HiCreditCard, HiShoppingBag, HiStar } from 'react-icons/hi'

const solutions = [
  'HVAC System Design and Selection',
  'HVAC Project Executions',
  'HVAC Services and Maintenance Works',
  'Ventilation System Design and Installation',
  'ITC of all types of domestic and industrial A/C systems',
  'Planned Preventive Maintenance services (CAMC / NCAMC)',
  'Emergency / Breakdown service support',
  'Rental / Standby A/C solutions',
  'Complete Ducting solutions',
]

const sectors = [
  { Icon: HiLightningBolt, label: 'IT & ITES', clients: 'Tata Communications, TCS, HCL, Cognizant, Infosys, SIFY Technologies, Net Magic IT Services, Mahindra Research Valley, Sutherland Global' },
  { Icon: HiOfficeBuilding, label: 'Telecom', clients: 'Telecom infrastructure and network facilities across Tamil Nadu and South India.' },
  { Icon: HiHeart, label: 'Hospitals & Educational Institutes', clients: 'Leading hospitals, clinics and educational institutions requiring precise environmental control.' },
  { Icon: HiCreditCard, label: 'Banking Sectors', clients: 'Banks and financial institutions requiring precision climate control for data and operations.' },
  { Icon: HiShoppingBag, label: 'Hotels & Shopping Malls', clients: 'Hospitality and retail complexes requiring centralized and zone-controlled air conditioning.' },
]

const stats = [
  { num: '20+', label: 'Years Since 2004' },
  { num: '300+', label: 'Projects Completed' },
  { num: '5', label: 'Key Sectors' },
  { num: '24/7', label: 'Service Support' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function ExperienceKnowledge() {
  return (
    <>
      <Helmet>
        <title>Experience & Knowledge | SS Aircon</title>
        <meta name="description" content="SS Aircon brings 20+ years of HVAC expertise — authorized dealers for Bluestar, Symphony, and Vertiv serving IT, Telecom, Hospitals, Banks and Hotels across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="Experience & Knowledge"
        breadcrumbs={[{ label: 'Services' }, { label: 'Experience & Knowledge' }]}
        bg="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&auto=format&fit=crop&q=80"
      />

      {/* ── Stats band ── */}
      <section className="bg-primary-900 py-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-black text-accent-400 mb-1">{s.num}</div>
                <div className="text-primary-300 text-sm tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About text + full-width image ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle label="Since 2004" title="Experience & Knowledge" center />
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              SS AIRCON was started on 14th April 2004. We are authorized dealers for BLUESTAR LIMITED and
              SYMPHONY INDUSTRIAL AIR COOLERS, and an authorized franchisee and service partner with VERTIV
              ENERGY PVT LTD (formerly Emerson Network Power).
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We also carry out all kinds of MS/SS fabrication, roofing works, GI/PVC plumbing, and
              GI/Aluminium/PUF ducting works — including PAC IDU/ODU stands, Chiller Base frames, MS support,
              Drain and fresh water connections, and Kitchen exhaust duct fabrication.
            </p>
          </div>

          {/* full-width image strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl overflow-hidden h-64 mb-12"
          >
            <img
              src="https://www.ssaircons.com/wp-content/uploads/2022/03/booyco_havc_systems-1024x555.jpg"
              alt="HVAC team at work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Solutions grid with large numbers */}
          <SectionTitle label="What We Offer" title="Engineered HVAC Solutions" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {solutions.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="relative overflow-hidden bg-primary-50 border border-primary-100 rounded-2xl p-5"
              >
                <span className="absolute -bottom-3 -right-1 text-7xl font-black text-primary-100 leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="relative text-primary-800 text-sm font-medium leading-relaxed">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Sectors Served"
            title="Industries We Serve"
            subtitle="Deep HVAC experience across diverse industries that demand reliable performance."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sectors.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <s.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-2">{s.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.clients}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="container-custom">
          <HiStar className="w-10 h-10 mx-auto text-primary-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">20+ Years of HVAC Excellence</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">Trusted by leading IT companies, hospitals, banks, and hotels — SS Aircon brings unmatched HVAC expertise.</p>
          <Link to="/contact" className="btn-primary">Work With Us <HiArrowRight className="w-4 h-4" /></Link>
        </motion.div>
      </section>
    </>
  )
}
