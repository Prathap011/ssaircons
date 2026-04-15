import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiRefresh, HiChartBar, HiScale, HiBeaker, HiVolumeUp, HiDocumentText } from 'react-icons/hi'

const balancingTasks = [
  { Icon: HiRefresh, title: 'Airflow Distribution', desc: 'Set up the correct amount of airflow distributed from each air diffuser for uniform conditioning.' },
  { Icon: HiChartBar, title: 'Total Airflow Measurement', desc: 'Measure total airflow on all A/C, supply, and exhaust systems against design specifications.' },
  { Icon: HiScale, title: 'Grille Balancing', desc: 'Balance airflow on each supply and exhaust grille to match the design intent precisely.' },
  { Icon: HiBeaker, title: 'Water System Balance', desc: 'Balance water flow on all pumps, cooling towers, chillers, boilers, and AHU coils.' },
  { Icon: HiVolumeUp, title: 'Sound & Vibration', desc: 'Measure and report sound and vibration levels across HVAC equipment where required.' },
  { Icon: HiDocumentText, title: 'TAB Report', desc: 'Issue a detailed test and balance report with all measured vs design parameters documented.' },
]

const whyBalance = [
  'Eliminates hot and cold spots across large spaces',
  'Reduces energy consumption by up to 25%',
  'Extends equipment life by reducing stress on components',
  'Ensures compliance with ASHRAE / SMACNA balancing standards',
  'Improves indoor air quality and occupant comfort',
  'Mandatory for LEED / green building certification',
]

const features = [
  'Set up the amount of airflow that is distributed from each air diffuser.',
  'Measure total airflow on all A/C and exhaust systems.',
  'Balance airflow on each supply and exhaust grille.',
  'Balance water flow on all pumps, cooling towers, chillers, boilers, and air handling unit coils.',
  'Sound and vibration if required.'
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function AirTesting() {
  const { ref: why, inView: whyIn } = useInView()
  const { ref: feat, inView: featIn } = useInView()
    const { ref: proc, inView: procIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Air Testing & Balancing | SS Aircon</title>
        <meta name="description" content="SS Aircon provides professional air testing and balancing (TAB) services for commercial HVAC and ventilation systems across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="Air Testing & Balancing"
        breadcrumbs={[{ label: 'Products' }, { label: 'Air Testing & Balancing' }]}
        bg="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&auto=format&fit=crop&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl h-full overflow-hidden shadow-sm border border-primary-100"
          >
            <img
              src="/assets/air-testing.jpg"
              alt="Precision Air Conditioning"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="Precision Cooling"
              title="What Is Precision Air Conditioning?"
            />
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Air balancing is testing, adjusting, and balancing (TAB) commercial air conditioning and ventilation systems. The need for balancing first came in the early 1980’s when new and more advanced A/C systems were being developed and installed. As these systems began to get more complex, the need for balancing increased. Most companies were not equipped to handle the TAB inspections. Independent TAB companies were created to handle these tasks.
            </p>
            <div ref={feat} className="space-y-2">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  animate={featIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  {f}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro banner */}
      {/* <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#60a5fa_0%,_transparent_70%)] pointer-events-none"
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
              <span className="text-sm font-medium text-primary-100">ASHRAE / SMACNA Standards</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Professional Air Testing,<br />Adjusting & Balancing (TAB)
            </h2>
            <p className="text-primary-200 leading-relaxed">
              Air balancing is the process of testing, adjusting, and balancing commercial HVAC and ventilation systems to ensure each zone receives its designed airflow. SS Aircon's TAB specialists use calibrated instruments to measure and document every parameter.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/10 border border-white/15 rounded-2xl p-6"
          >
            <p className="text-primary-100 text-sm leading-relaxed">
              The need for air balancing first emerged in the early 1980s as HVAC systems grew more complex. As buildings expanded and multi-zone conditioning became standard, precise airflow distribution became critical to comfort, energy efficiency, and equipment reliability. SS Aircon provides independent TAB services across commercial, industrial, and cleanroom environments.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Balancing tasks */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="What We Do"
            title="Air Balancing Tasks"
            subtitle="Our certified TAB technicians cover every aspect of air-side measurement and adjustment."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {balancingTasks.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <t.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-1">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Why balance */}
      {/* <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-72 flex items-center justify-center border border-primary-100 shadow-sm"
          >
            <HiScale className="w-32 h-32 text-primary-300" />
          </motion.div>
          <div ref={why}>
            <SectionTitle label="Why It Matters" title="Benefits of Air Balancing" />
            <div className="space-y-2.5">
              {whyBalance.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: 24 }}
                  animate={whyIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  {b}
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Book a TAB Service <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom"
        >
          <HiRefresh className="w-10 h-10 mx-auto text-primary-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">Get Your HVAC System Properly Balanced</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Improve comfort, reduce energy wastage, and extend equipment life. Contact our TAB specialists today.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
