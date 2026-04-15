import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiClock, HiShieldCheck, HiTruck, HiDocumentText } from 'react-icons/hi'
import { MdSupportAgent } from 'react-icons/md'

const highlights = [
  { Icon: HiClock, title: '2-4 Hour Response', desc: '24/7 dedicated emergency breakdown service team with 2 to 4 hours response time.' },
  { Icon: HiTruck, title: 'Mobile Service Teams', desc: 'Teams equipped with fast-moving company vehicles carrying all essential tools and spare parts.' },
  { Icon: HiShieldCheck, title: 'Centralized Monitoring', desc: 'All service engineer movements centrally monitored; nearest engineer assigned to every call.' },
  { Icon: HiDocumentText, title: 'Service Reports', desc: 'All checks, observations, and recommendations documented in detailed written service reports.' },
]

const ppmScope = [
  '24/7 emergency breakdown service with 2-4 hr response and 24-48 hr turnaround',
  'Own vehicles with essential tools and basic spare parts for fast on-site resolution',
  'Centrally monitored dispatch — nearest engineer assigned to every breakdown call',
  'Planned preventive maintenance dates agreed in writing with each client',
  'PPM team completes all visual and physical checks within stipulated time frames',
  'Full observations and recommendations captured in written service reports',
  'CAMC (Comprehensive Annual Maintenance Contract) and NCAMC options available',
]

const responseStats = [
  { num: '24/7', label: 'Always Available' },
  { num: '2-4hr', label: 'Response Time' },
  { num: '24-48hr', label: 'Turnaround Time' },
  { num: 'CAMC', label: 'Contract Options' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function PlannedMaintenance() {
  return (
    <>
      <Helmet>
        <title>Planned Maintenance & Breakdown Support | SS Aircon</title>
        <meta name="description" content="SS Aircon provides 24/7 emergency breakdown support with 2-4 hour response, plus planned preventive maintenance contracts for all HVAC systems." />
      </Helmet>

      <PageHero
        title="Planned Maintenance & Breakdown Support"
        breadcrumbs={[{ label: 'Services' }, { label: 'Planned Maintenance' }]}
        bg="https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* ── Full-bleed image with text anchored to bottom ── */}
      <section className="relative h-[380px] overflow-hidden">
        <img
          src="https://www.ssaircons.com/wp-content/uploads/2022/03/69976319_551710165568325_1461633102324432896_n-1024x768.jpg"
          alt="Service team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
              Planned Maintenance & Breakdown Support
            </h2>
            <p className="text-primary-200 text-sm leading-relaxed max-w-2xl">
              Dedicated 24/7 emergency breakdown service team with required tools and tackles — 2 to 4 hours
              response time and 24 to 48 hours turnaround from time of call receipt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Response stats strip ── */}
      <section className="bg-primary-800 py-8">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {responseStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div className="text-3xl font-black text-accent-400 mb-1">{s.num}</div>
              <div className="text-primary-300 text-xs tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Numbered PPM scope steps ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Commitment"
            title="What's Included in Our Service"
            subtitle="From emergency breakdown to planned preventive maintenance — we cover it all."
            center
          />
          <div className="space-y-3 mt-10 max-w-3xl mx-auto">
            {ppmScope.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="flex items-start gap-4 bg-primary-50 border-l-4 border-primary-600 rounded-r-2xl rounded-l-none pl-5 pr-6 py-4"
              >
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle label="Service Coverage" title="What Makes Our Support Different" subtitle="Round-the-clock reliability with a team committed to keeping your HVAC systems running." center />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((h) => (
              <motion.div key={h.title} variants={fadeUp} whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }} className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <h.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-1">{h.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="container-custom">
          <MdSupportAgent className="w-12 h-12 mx-auto text-primary-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">24/7 Emergency Breakdown Support</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">Responds within 2 to 4 hours, any time of day or night.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8056041921" className="btn-primary">Call Now: 8056041921</a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">Request AMC <HiArrowRight className="w-4 h-4" /></Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
