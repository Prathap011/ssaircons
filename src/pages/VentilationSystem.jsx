import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiHome, HiCube, HiLocationMarker, HiRefresh, HiDatabase, HiOfficeBuilding, HiViewGrid } from 'react-icons/hi'

const ventTypes = [
  { Icon: HiHome, title: 'Commercial Kitchen Ventilation' },
  { Icon: HiCube, title: 'Industrial Ventilation' },
  { Icon: HiDatabase, title: 'Roof (Ceiling) Ventilation' },
  { Icon: HiOfficeBuilding, title: 'Factory Ventilation' },
  { Icon: HiOfficeBuilding, title: 'Building Ventilation' },
  { Icon: HiLocationMarker, title: 'Basement Ventilation' },
  { Icon: HiViewGrid, title: 'Parking Ventilation' },
  { Icon: HiCube, title: 'Warehouse Ventilation' },
  { Icon: HiRefresh, title: 'Pollution Control System' },
]

const purposes = [
  'To maintain adequate supply of oxygen in the work area',
  'To control hazardous concentration of toxic materials in the air',
  'To remove any undesirable / unpleasant odors from a given area',
  'To remove undesirable contaminants at their source before they enter workplace air',
  'To control temperature and humidity',
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function VentilationSystem() {
  const { ref: purp, inView: purpIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Ventilation System | SS Aircon</title>
        <meta name="description" content="SS Aircon — Ventilation contractor for industrial ventilation, pollution control, and acoustics services. Commercial kitchen, factory, basement, parking, and warehouse ventilation across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="Ventilation System"
        breadcrumbs={[{ label: 'Products' }, { label: 'Ventilation System' }]}
        bg="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="py-14 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
  
  {/* Background glow */}
  <motion.div
    initial={{ opacity: 0, scale: 1.1 }}
    whileInView={{ opacity: 0.08, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#60a5fa_0%,_transparent_70%)] pointer-events-none"
  />

  <div className="container-custom grid md:grid-cols-2 gap-10 items-center relative z-10">

    {/* LEFT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <div className="h-full rounded-3xl overflow-hidden border border-white/10 shadow-lg group">
        <img
          src="/assets/ventilation.jpg" // 👉 change image
          alt="Industrial Ventilation"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl"
    >
      <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-5">
        <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
        <span className="text-sm font-medium text-primary-100">
          Industrial & Commercial Ventilation Contractor
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-4">
        Industrial Ventilation, Pollution<br />Control & Acoustics Services
      </h2>

      <p className="text-primary-200 leading-relaxed">
        SS Aircon is a specialist ventilation contractor providing comprehensive ventilation solutions for industrial, commercial, and institutional buildings — from commercial kitchen exhaust and factory ventilation to basement parking and pollution control systems.
      </p>
    </motion.div>

  </div>
</section>


      {/* Ventilation Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Services"
            title="Ventilation Systems We Design & Install"
            subtitle="Ventilation Contractor for Industrial Ventilation, Pollution Control, Acoustics Services."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-5"
          >
            {ventTypes.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 16px 36px -10px rgba(37,99,235,0.16)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm text-center transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 mx-auto">
                  <v.Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-sm leading-snug">{v.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div ref={purp}>
            <SectionTitle label="Why Ventilate?" title="Purpose of Industrial Ventilation" />
            <div className="space-y-3">
              {purposes.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: 24 }}
                  animate={purpIn ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="flex items-start gap-3 text-sm text-slate-700 bg-white rounded-xl p-4 border border-primary-50 shadow-sm"
                >
                  <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Get a Ventilation Quote <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <motion.div
  initial={{ opacity: 0, scale: 0.94 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl overflow-hidden border border-primary-100 shadow-sm group"
>
  <img
    src="/assets/ventilation1.jpg"
    alt="Ventilation System"
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
</motion.div>

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
          <HiCube className="w-10 h-10 mx-auto text-primary-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">Need an Industrial Ventilation System?</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our ventilation engineers will survey your facility, design the right system, and handle complete installation and commissioning.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
