import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiShieldCheck, HiServer, HiDatabase, HiBeaker, HiOfficeBuilding, HiDesktopComputer, HiStar } from 'react-icons/hi'

const applications = [
  { Icon: HiServer, title: 'Data Centres', desc: 'Mission-critical precision cooling with redundancy support for 24/7 uptime.' },
  { Icon: HiDatabase, title: 'Server Rooms', desc: 'Compact close-control units maintaining exact temperature & humidity.' },
  { Icon: HiBeaker, title: 'Research Labs', desc: 'Stable climate for sensitive research instruments and specimens.' },
  { Icon: HiOfficeBuilding, title: 'IT / Call Centres', desc: 'High-density cooling for large numbers of workstations and servers.' },
  { Icon: HiDesktopComputer, title: 'Control Rooms', desc: 'Reliable precision cooling for 24‑hour operational control environments.' },
  { Icon: HiStar, title: 'Luxury Hotels', desc: 'Silent, efficient climate control integrated into premium interiors.' },
]

const features = [
  'Temperature controlled to ±0.5°C accuracy',
  'Relative humidity stability ±2% RH',
  'N+1 / N+N redundancy configurations',
  'Remote SNMP / BMS / DCIM integration',
  'Upflow, downflow, and in-row variants',
  'Chilled-water and DX refrigerant options',
  'EC fan technology for energy savings',
  'Integrated free-cooling economiser mode',
]

const process = [
  { step: '01', title: 'Site Survey', desc: 'Our engineers assess your space, heat load, and criticality level to define the right precision cooling architecture.' },
  { step: '02', title: 'System Design', desc: 'We design a redundant precision cooling layout — unit placement, piping, electrical, and controls — tailored to your facility.' },
  { step: '03', title: 'Supply & Install', desc: 'Certified installation of Vertiv Liebert precision AC units with full MS / copper piping and electrical work.' },
  { step: '04', title: 'Testing & Commissioning', desc: 'End-to-end ITC, BMS integration, alarm testing, and performance validation before handover.' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function PrecisionAC() {
  const { ref: feat, inView: featIn } = useInView()
  const { ref: proc, inView: procIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Precision Air Conditioning | SS Aircon</title>
        <meta name="description" content="SS Aircon offers complete precision air conditioning solutions — supply, installation, testing & commissioning for data centres, server rooms, IT cooling, research labs and control rooms." />
      </Helmet>

      <PageHero
        title="Precision Air Conditioning"
        breadcrumbs={[{ label: 'Products' }, { label: 'Precision Air Conditioning' }]}
        bg="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro banner */}
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#93c5fd_0%,_transparent_70%)] pointer-events-none"
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
              <span className="text-sm font-medium text-primary-100">Vertiv (Liebert) Authorized Partner</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Mission-Critical Precision<br />Cooling Solutions
            </h2>
            <p className="text-primary-200 leading-relaxed">
              SS Aircon delivers complete precision air conditioning solutions — from system design and supply to installation, testing, and long-term commissioning. In partnership with <strong className="text-white">Vertiv (formerly Emerson Network Power)</strong>, we protect your critical infrastructure 24/7.
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
              { v: '±0.5°C', l: 'Temperature Accuracy' },
              { v: '±2% RH', l: 'Humidity Stability' },
              { v: '24/7', l: 'Continuous Operation' },
              { v: 'N+N', l: 'Redundancy Ready' },
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

      {/* What is section */}
      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
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
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              Precision air conditioning is a specialised form of close-control cooling designed to maintain exact temperature and humidity conditions for sensitive electrical and electronic equipment. Unlike comfort cooling, a precision AC maintains stable conditions to the last degree throughout the year.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              In data centres and server room operations, continuous precision cooling ensures the high availability of computer systems. The technology is indispensable wherever high volumes of heat must be dissipated reliably.
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
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-80 flex items-center justify-center shadow-sm border border-primary-100"
          >
            <HiServer className="w-32 h-32 text-primary-300" />
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Applications"
            title="Where Precision Cooling Is Essential"
            subtitle="Any environment where sensitive electronics operate 24/7 requires close-control precision air conditioning."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {applications.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <a.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-1">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Process"
            title="End-to-End Execution"
            subtitle="SS Aircon manages every stage from design to long-term service."
            center
          />
          <div ref={proc} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                animate={procIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative bg-white rounded-2xl p-6 border border-primary-100 shadow-sm overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-5xl font-black text-primary-50 leading-none select-none">{p.step}</span>
                <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm mb-4">{p.step}</div>
                <h3 className="font-bold text-primary-800 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
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
          <HiShieldCheck className="w-10 h-10 mx-auto text-accent-400 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">Protect Your Critical Infrastructure</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Talk to our precision cooling specialists. We'll design and deliver a fail-safe PAC solution for your data centre or server room.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Quote <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
