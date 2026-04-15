import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiCheckCircle, HiDocumentText, HiClipboardList, HiUserGroup, HiShieldCheck } from 'react-icons/hi'

const capabilities = [
  'Engineered solutions for various HVAC applications',
  'Trained and highly skilled design and drafting team',
  'Well-experienced project delivery managers',
  'Involved from initial conceptual discussions through to final handover',
  'Safe work environment for all employees with PPE awareness',
  'Team work culture encouraging appropriate PPE for all site personnel',
]

const services = [
  { Icon: HiDocumentText, title: 'HVAC Design & Drawings', desc: 'Complete CAD-based HVAC drawings and specifications from initial concept through to detailed design.' },
  { Icon: HiClipboardList, title: 'BOQ Preparation', desc: 'Accurate Bill of Quantities preparation for tendering, vendor coordination and cost control.' },
  { Icon: HiUserGroup, title: 'Project Management', desc: 'End-to-end project execution with dedicated project delivery managers overseeing every phase.' },
  { Icon: HiShieldCheck, title: 'Safety & Compliance', desc: 'Rigorous health and safety standards with PPE requirements for all site personnel at all times.' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function EngineeringContracting() {
  return (
    <>
      <Helmet>
        <title>Engineering & Contracting | SS Aircon</title>
        <meta name="description" content="SS Aircon provides end-to-end HVAC engineering and contracting services — from design and BOQ through to installation, commissioning, and handover." />
      </Helmet>

      <PageHero
        title="Engineering & Contracting"
        breadcrumbs={[{ label: 'Services' }, { label: 'Engineering & Contracting' }]}
        bg="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&auto=format&fit=crop&q=80"
      />

      {/* ── FULL-HEIGHT SPLIT SCREEN ── */}
      <section className="lg:flex min-h-[520px]">

        {/* Left: dark panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-primary-900 text-white lg:w-1/2 flex items-center px-10 xl:px-20 py-20"
        >
          <div className="max-w-lg">
            <span className="inline-block text-accent-400 text-xs font-bold uppercase tracking-widest mb-4">HVAC Contracting</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading leading-tight mb-6">
              Engineering & Contracting Solutions
            </h2>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              SS AIRCON provides engineered solutions for various HVAC applications with a trained and highly
              skilled design and drafting team, and well-experienced project delivery managers. Irrespective of
              project size, our teams are involved from the initial conceptual discussions right through to
              final sign-off and handover.
            </p>
            <ul className="space-y-3">
              {capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-primary-200">
                  <HiCheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right: full-height image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:w-1/2 h-72 lg:h-auto overflow-hidden"
        >
          <img
            src="https://www.ssaircons.com/wp-content/uploads/2022/03/117175924_808897579849581_2949452215847255149_n-576x1024.jpg"
            alt="Engineering team on site"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle label="What We Do" title="Our Engineering Services" subtitle="Comprehensive contracting from concept through commissioning." center />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }} className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <s.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-1">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="container-custom">
          <h2 className="text-3xl font-bold font-heading mb-4">Plan Your HVAC Project With Us</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">From concept to commissioning — SS Aircon handles all engineering and contracting for HVAC projects of any size.</p>
          <Link to="/contact" className="btn-primary">Discuss Your Project <HiArrowRight className="w-4 h-4" /></Link>
        </motion.div>
      </section>
    </>
  )
}
