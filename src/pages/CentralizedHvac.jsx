import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const sectors = [
  { icon: '🏢', title: 'Offices & Buildings', desc: 'Full turnkey HVAC for corporate headquarters, IT parks, and commercial towers.' },
  { icon: '🏥', title: 'Hospitals & OT / Labs', desc: 'NABH-compliant precision HVAC for operating theatres, ICUs, and pathology labs.' },
  { icon: '🏨', title: 'Malls, Hotels & Restaurants', desc: 'Energy-efficient central HVAC for high foot-traffic hospitality and retail environments.' },
  { icon: '🛒', title: 'Retail Stores & Supermarkets', desc: 'Integrated HVAC and cold-room systems keeping products and shoppers comfortable.' },
  { icon: '🏭', title: 'Industrial Facilities', desc: 'Process cooling, comfort cooling, and clean-room HVAC for manufacturing plants.' },
  { icon: '🎓', title: 'Educational Institutions', desc: 'Centralised HVAC for schools, colleges, and auditoriums ensuring healthy learning environments.' },
]

const scope = [
  { step: '01', title: 'Heat Load Calculation', desc: 'Rigorous ASHRAE-based heat load analysis of every zone to size equipment accurately.' },
  { step: '02', title: 'System Design', desc: 'Optimal selection of chillers, AHUs, FCUs, VRF, or ductable systems based on building architecture.' },
  { step: '03', title: 'Project Consultancy', desc: 'Full technical consultancy including equipment schedules, single-line drawings, and BOQ preparation.' },
  { step: '04', title: 'Execution & Installation', desc: 'Complete site execution with piping, ductwork, electrical, insulation, and controls.' },
  { step: '05', title: 'Testing & Commissioning', desc: 'Airflow testing, water balancing, controls integration, and performance handover documentation.' },
  { step: '06', title: 'AMC / CAMC Support', desc: 'Long-term annual maintenance contracts to sustain system performance and maximise uptime.' },
]

const highlights = [
  'Over 300 centralised HVAC projects delivered',
  'Chillers, VRF, ductable, and AHU-based systems',
  'ASHRAE heat load analysis for every project',
  'In-house ducting and insulation team',
  '30 service executives deployed across Chennai',
  'Tie-up with leading piping contractors for large projects',
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function CentralizedHvac() {
  const { ref: hi, inView: hiIn } = useInView()
  const { ref: sc, inView: scIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Centralized HVAC Services | SS Aircon</title>
        <meta name="description" content="SS Aircon provides complete centralised and industrial HVAC solutions — system design, project execution, and AMC for offices, hospitals, malls, hotels, and industrial facilities." />
      </Helmet>

      <PageHero
        title="Centralized HVAC Services"
        breadcrumbs={[{ label: 'Products' }, { label: 'Centralized HVAC Services' }]}
        bg="https://images.unsplash.com/photo-1581094271901-8022df4c53f0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro banner */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#93c5fd_0%,_transparent_60%)] pointer-events-none"
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
              <span className="text-sm font-medium text-primary-100">Complete Turnkey HVAC Contractor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Full-Scope Centralised &<br />Industrial HVAC Solutions
            </h2>
            <p className="text-primary-200 leading-relaxed">
              SS Aircon handles every kind of centralised and industrial air conditioning project — from system design and consultancy to procurement, installation, and long-term maintenance. Our turnkey HVAC services cover all building types across Tamil Nadu.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { v: '300+', l: 'Projects Delivered' },
              { v: '24 yrs', l: 'HVAC Experience' },
              { v: '30+', l: 'Service Executives' },
              { v: '100%', l: 'Turnkey Execution' },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center"
              >
                <p className="text-2xl font-bold text-white">{s.v}</p>
                <p className="text-primary-300 text-xs mt-1">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What is centralized HVAC */}
      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="About"
              title="What Is Centralised Air Conditioning?"
            />
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              Centralised air conditioning distributes conditioned air from a central plant to every corner of a building. It works on the refrigeration cycle — via chillers, AHUs, FCUs, or VRF systems — providing consistent comfort across large commercial and industrial spaces.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              An HVAC system works on three principles — Heating, Air Conditioning, and Ventilation. When all three operate together, it creates a fully purified and conditioned indoor environment with natural ventilation, reduced biological threats, and regulated temperature.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              SS Aircon provides total HVAC solutions including system design, project consultancy, and project execution — with a rich track record in chillers, packaged, ductable, and VRF systems for all building types.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-80 flex items-center justify-center text-9xl border border-primary-100 shadow-sm"
          >
            🏗️
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Sectors Served"
            title="Buildings We HVAC for"
            subtitle="From small offices to large industrial plants — we have the expertise to handle any scale."
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
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm"
              >
                <span className="text-4xl block mb-3">{s.icon}</span>
                <h3 className="font-bold text-primary-800 text-base mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scope of work */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Process"
            title="Complete Project Lifecycle"
            subtitle="SS Aircon handles everything — from heat load calculation to long-term post-handover AMC."
            center
          />
          <div ref={sc} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scope.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                animate={scIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white rounded-2xl p-6 border border-primary-100 shadow-sm overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-5xl font-black text-primary-50 leading-none select-none">{s.step}</span>
                <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="font-bold text-primary-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key highlights */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-72 flex items-center justify-center text-9xl border border-primary-100 shadow-sm"
          >
            🏆
          </motion.div>
          <div ref={hi}>
            <SectionTitle label="Why SS Aircon?" title="Our HVAC Capabilities" />
            <div className="space-y-2.5">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 24 }}
                  animate={hiIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  {h}
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Start Your HVAC Project <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
          <span className="text-5xl block mb-4">🌐</span>
          <h2 className="text-3xl font-bold font-heading mb-4">Plan Your Centralised HVAC System</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our experienced HVAC consultants will perform an on-site heat load study and recommend the optimal central plant for your building — within budget and on schedule.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
