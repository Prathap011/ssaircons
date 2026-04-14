import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiLightningBolt, HiVolumeOff, HiLockClosed, HiTemplate, HiRefresh, HiOfficeBuilding } from 'react-icons/hi'

const advantages = [
  {
    Icon: HiLightningBolt,
    title: 'Energy Efficiency',
    desc: 'VRF systems regulate refrigerant flow precisely to match the current cooling or heating demand — running less frequently and at lower partial loads, saving up to 40% in energy vs conventional systems.',
  },
  {
    Icon: HiVolumeOff,
    title: 'Quiet Operation',
    desc: 'The condensing unit is placed outside. Indoor air handlers are compact and whisper-quiet, making VRF ideal for offices, hotels, and healthcare environments.',
  },
  {
    Icon: HiTemplate,
    title: 'Consistent Comfort',
    desc: 'The compressor detects the exact requirement of each zone and supplies the precise refrigerant needed — eliminating hot and cold spots and maintaining steady humidity.',
  },
  {
    Icon: HiLockClosed,
    title: 'Less Downtime',
    desc: 'Designed to run under partial load with fewer on/off cycles, VRF systems experience less wear. If one air handler fails, the others remain unaffected.',
  },
  {
    Icon: HiOfficeBuilding,
    title: 'Space Saving',
    desc: 'Without bulky ducts, VRF air handlers fit into tight ceiling spaces, preserving the high ceilings and clean interiors your architects intended.',
  },
  {
    Icon: HiRefresh,
    title: 'Heat Recovery',
    desc: 'Heat recovery VRF systems capture rejected heat from cooling zones and reuse it where heating is needed simultaneously — ideal for mixed-use buildings.',
  },
]

const applications = [
  'Corporate offices & IT parks',
  'Luxury hotels & serviced apartments',
  'Hospitals & healthcare facilities',
  'Educational institutions',
  'Retail malls & showrooms',
  'High-density residential towers',
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function VrfVrv() {
  const { ref: app, inView: appIn } = useInView()

  return (
    <>
      <Helmet>
        <title>VRF / VRV Systems | SS Aircon</title>
        <meta name="description" content="SS Aircon designs, supplies, and installs Variable Refrigerant Flow (VRF/VRV) systems for commercial buildings, hotels, hospitals, and large office complexes across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="VRF / VRV Systems"
        breadcrumbs={[{ label: 'Products' }, { label: 'VRF / VRV' }]}
        bg="https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=1600&auto=format&fit=crop&q=80"
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
              <span className="text-sm font-medium text-primary-100">Blue Star Authorised Dealer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              Variable Refrigerant Flow —<br />Smart Multi-Zone Cooling
            </h2>
            <p className="text-primary-200 leading-relaxed">
              VRF (Variable Refrigerant Flow) and VRV (Variable Refrigerant Volume) are modern, sophisticated HVAC technologies that regulate refrigerant flow to multiple indoor units simultaneously. SS Aircon delivers complete turnkey VRF solutions — from design to commissioning — across Tamil Nadu.
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
              { v: '64', l: 'Indoor units per outdoor unit' },
              { v: '40%', l: 'Energy savings vs conventional' },
              { v: '3.5 yr', l: 'Average payback period' },
              { v: '100%', l: 'Turnkey — design to commissioning' },
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

      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Why VRF / VRV?"
            title="Key Advantages of VRF Systems"
            subtitle="A smarter, more efficient alternative to conventional centralised and split HVAC systems."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advantages.map((a) => (
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

      {/* Applications */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-72 flex items-center justify-center border border-primary-100 shadow-sm"
          >
            <HiOfficeBuilding className="w-32 h-32 text-primary-300" />
          </motion.div>
          <div ref={app}>
            <SectionTitle label="Applications" title="Where VRF Is the Ideal Choice" />
            <div className="space-y-2.5">
              {applications.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: 24 }}
                  animate={appIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  {a}
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Get a VRF Quote <HiArrowRight className="w-4 h-4" />
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
          <span className="text-5xl block mb-4">⚡</span>
          <h2 className="text-3xl font-bold font-heading mb-4">Upgrade to VRF — Smarter Multi-Zone Cooling</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our engineers will design the optimal VRF layout for your building and manage supply, installation, and commissioning end-to-end.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
