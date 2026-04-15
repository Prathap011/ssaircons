import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiDatabase, HiLightningBolt, HiHome, HiCog, HiRefresh, HiChartBar } from 'react-icons/hi'

const systemTypes = [
  { Icon: HiDatabase, title: 'Chilled Water Systems', desc: 'Ensure balanced chilled water distribution to every AHU and FCU coil for optimal cooling performance.' },
  { Icon: HiLightningBolt, title: 'Heating Water Systems', desc: 'Balance hot water circuits in HVAC heating applications to eliminate temperature stratification.' },
  { Icon: HiHome, title: 'Domestic Water Systems', desc: 'Balance domestic cold and hot water circuits in commercial and residential buildings.' },
  { Icon: HiChartBar, title: 'Condenser Water Systems', desc: 'Optimise cooling tower and condenser loop flow distribution to maximise chiller COP.' },
  { Icon: HiCog, title: 'Process Cooling Systems', desc: 'Balance industrial process cooling circuits for consistent equipment temperatures and product quality.' },
  { Icon: HiRefresh, title: 'Primary-Secondary Loops', desc: 'Balance variable-flow primary-secondary chilled water loops with decoupler legs for energy optimisation.' },
]

const benefits = [
  'Eliminates inadequate flow to terminal units',
  'Prevents chiller and pump hunting / cycling',
  'Reduces operational energy costs by up to 20%',
  'Ensures system delivers designed capacity',
  'Avoids premature pump and coil failures',
  'Provides documented baseline for future maintenance',
  'Mandatory for LEED credits and green building audits',
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function WaterBalancing() {
  const { ref: ben, inView: benIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Water Balancing | SS Aircon</title>
        <meta name="description" content="SS Aircon provides professional hydronic water balancing services for chilled, heating, condenser, and process water HVAC systems across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="Water Balancing"
        breadcrumbs={[{ label: 'Products' }, { label: 'Water Balancing' }]}
        bg="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&auto=format&fit=crop&q=80"
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
              src="/assets/water-filling-aircon.jpg"
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
              title="Water Balancing"
            />
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Water balancing crosses a large expanse of different type systems. Chilled, Heating, Domestic, Condenser, and Process water systems require adjustment and balancing for proper operation. Unbalanced distribution of any type of fluid results in inefficiencies and causes the system served to work improperly.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Proper water balance has long been ignored in existing facilities and has proven to be the cause of many systems’ failure. Air Balancing Company understands that proper water balancing is as important as air balancing. Through this understanding ABC has become a premier water balancing company.                  </p>
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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#bfdbfe_0%,_transparent_60%)] pointer-events-none"
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
              <span className="text-sm font-medium text-primary-100">Hydronic Systems Specialist</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Hydronic Water Balancing<br />for HVAC Systems
            </h2>
            <p className="text-primary-200 leading-relaxed">
              Water balancing is essential for any hydronic HVAC system. Unbalanced fluid distribution results in inefficiencies, cold/hot spots, and premature equipment failure. SS Aircon's specialists measure, adjust, and document all water system circuits to design specification.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/10 border border-white/15 rounded-2xl p-6"
          >
            <p className="text-sm text-primary-100 leading-relaxed">
              Proper water balance has long been overlooked in existing facilities, and has proven to be the root cause of many system failures. SS Aircon understands that water balancing is as critical as air balancing — and we bring the instruments, expertise, and documentation to prove it.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* System types */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Coverage"
            title="Water Systems We Balance"
            subtitle="SS Aircon covers every type of hydronic circuit found in commercial and industrial HVAC systems."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {systemTypes.map((s) => (
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
      </section> */}

      {/* Benefits */}
      {/* <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div ref={ben}>
            <SectionTitle label="Why Balance?" title="Benefits of Proper Water Balancing" />
            <div className="space-y-2.5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: 24 }}
                  animate={benIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  {b}
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Schedule a Survey <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-72 flex items-center justify-center border border-primary-100 shadow-sm"
          >
            <HiDatabase className="w-32 h-32 text-primary-300" />
          </motion.div>
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
          <h2 className="text-3xl font-bold font-heading mb-4">Fix Unbalanced Water Systems Today</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            An unbalanced hydronic system wastes energy and shortens equipment life. Our specialists will restore your system to design specification.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
