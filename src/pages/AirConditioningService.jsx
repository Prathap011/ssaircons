import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiHome, HiOfficeBuilding, HiTemplate, HiVolumeUp, HiCog, HiLightningBolt } from 'react-icons/hi'

const systemTypes = [
  { Icon: HiHome, title: 'Single & Multi-Split Systems', desc: 'Window, split, and multi-split units for homes, small offices, and retail spaces.' },
  { Icon: HiOfficeBuilding, title: 'Ducted Air Handlers', desc: 'Central ducted systems for offices, hospitals, and commercial facilities requiring uniform air distribution.' },
  { Icon: HiTemplate, title: 'Cassette & Concealed Units', desc: 'Ceiling cassette and concealed units delivering discreet, aesthetic air conditioning.' },
  { Icon: HiLightningBolt, title: 'VRF / VRV Installations', desc: 'Variable refrigerant flow systems for precise multi-zone temperature control.' },
  { Icon: HiCog, title: 'Floor-Mounted Units', desc: 'Floor-standing air handlers for spaces where ceiling mounting is not practical.' },
  { Icon: HiVolumeUp, title: 'CAD Design Service', desc: 'Full CAD drawings and design documentation for every project we undertake.' },
]

const process = [
  'Initial concept and site survey to understand requirements',
  'CAD drawing creation with full design information',
  'Equipment selection, sizing, and specification',
  'Professional installation by certified in-house engineers',
  'System commissioning and performance testing',
  'Handover on time and within budget with full documentation',
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function AirConditioningService() {
  return (
    <>
      <Helmet>
        <title>Air Conditioning | SS Aircon</title>
        <meta name="description" content="SS Aircon has extensive experience in all types of air conditioning systems — split, ducted, VRF/VRV, cassette and floor-mounted — installed on time and within budget." />
      </Helmet>

      <PageHero
        title="Air Conditioning"
        breadcrumbs={[{ label: 'Services' }, { label: 'Air Conditioning' }]}
        bg="https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* ── Centered intro text (no image) ── */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <SectionTitle label="Air Conditioning" title="Complete Air Conditioning Solutions" center />
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              SS AIRCON has extensive experience and knowledge of all types of air conditioning systems — from
              single and multiple split systems to ducted air handlers and VRF/VRV installations. Our
              in-house experts provide fast, effective, and reliable installation of any design requirement.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              From the initial concept to CAD drawings, our design team formulates the very best solution.
              The creation of full design information allows our specialist teams to deliver a project to
              the exacting needs of the end user — on time and within budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Dark card grid ── */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom">
          <SectionTitle label="Systems" title="AC Systems We Install" subtitle="Every type — from residential splits to complex multi-zone VRF systems." center className="text-white" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
          >
            {systemTypes.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.4)' }}
                className="bg-primary-800 border border-primary-700 rounded-2xl p-6 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-700 group-hover:bg-accent-500 transition-colors flex items-center justify-center mb-4">
                  <s.Icon className="w-5 h-5 text-accent-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-primary-300 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full-width image + process strip ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl overflow-hidden h-60 mb-12"
          >
            <img
              src="https://www.ssaircons.com/wp-content/uploads/2022/04/service3.jpg"
              alt="Air conditioning installation"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <SectionTitle label="Our Process" title="How We Work" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {process.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="flex items-start gap-3 bg-primary-50 rounded-xl p-4 border border-primary-100"
              >
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="container-custom">
          <h2 className="text-3xl font-bold font-heading mb-4">Get Your AC Installed by Experts</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">SS Aircon delivers reliable, on-time, within-budget air conditioning installations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8056041921" className="btn-primary">Call 8056041921</a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">Send Enquiry <HiArrowRight className="w-4 h-4" /></Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
