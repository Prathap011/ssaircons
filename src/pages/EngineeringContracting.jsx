import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
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
  const { ref, inView } = useInView()

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

      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-sm border border-primary-100 h-[420px]"
          >
            <img
              src="https://www.ssaircons.com/wp-content/uploads/2022/03/117175924_808897579849581_2949452215847255149_n-576x1024.jpg"
              alt="Engineering & Contracting"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="HVAC Contracting"
              title="Engineering & Contracting"
            />
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              SS AIRCON provides engineered solutions for various HVAC applications with a trained and highly skilled design and drafting team, and well-experienced project delivery managers.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Irrespective of project size, our design, planning and project execution teams are involved from the initial conceptual discussions right through to the final sign-off and handover. We maintain a safe work environment with appropriate PPE for all site personnel.
            </p>
            <div ref={ref} className="space-y-2">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="What We Do"
            title="Our Engineering Services"
            subtitle="Comprehensive contracting services from concept through commissioning."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm"
              >
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

      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Plan Your HVAC Project With Us</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            From concept to commissioning — SS Aircon handles all engineering and contracting for HVAC projects of any size.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Project <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
