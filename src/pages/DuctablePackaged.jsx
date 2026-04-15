import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiCheckCircle, HiCog, HiHome, HiOfficeBuilding, HiTemplate } from 'react-icons/hi'

const features = [
  'Expert design and installation of ductable split units',
  'Custom fabricated GI and insulated flexible duct networks',
  'Packaged air conditioners for self-contained cooling and heating',
  'Optimized for low static pressure and uniform airflow',
  'Acoustic lining for noise reduction in occupied spaces',
  'HVAC factor analysis: heating, cooling, humidity and ventilation',
]

const systemTypes = [
  { Icon: HiTemplate, title: 'Packaged AC Units', desc: 'Self-contained units housing all cooling and heating components in a single cabinet — ideal for commercial spaces.' },
  { Icon: HiCog, title: 'Ductable Split AC', desc: 'Indoor units connected to centralised ductwork for uniform air distribution across large spaces.' },
  { Icon: HiHome, title: 'GI Ductwork', desc: 'Galvanised iron duct fabrication designed for low static pressure drop and long operational life.' },
  { Icon: HiOfficeBuilding, title: 'Insulated Flex Ducts', desc: 'Flexible, pre-insulated duct sections for complex layout areas where rigid ductwork is impractical.' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function DuctablePackaged() {
  return (
    <>
      <Helmet>
        <title>Ductable & Packaged AC | SS Aircon</title>
        <meta name="description" content="SS Aircon offers expert designing and installation of ductable split units and packaged air conditioners with custom GI ductwork across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="Ductable & Packaged AC"
        breadcrumbs={[{ label: 'Services' }, { label: 'Ductable & Packaged AC' }]}
        bg="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&auto=format&fit=crop&q=80"
      />

      {/* ── BENTO GRID intro ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-6 min-h-[480px]">

            {/* Large image card — 3 of 5 cols */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-3 rounded-3xl overflow-hidden relative"
            >
              <img
                src="https://www.ssaircons.com/wp-content/uploads/2022/04/Flat-Oval-duct-2-1024x768.jpg"
                alt="Ductable AC installation"
                className="w-full h-full object-cover min-h-[340px]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-primary-900 to-transparent">
                <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  HVAC Installation
                </span>
              </div>
            </motion.div>

            {/* Right column — 2 of 5 cols, split vertically */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Dark content card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="bg-primary-900 text-white rounded-3xl p-7 flex-1"
              >
                <span className="text-accent-400 text-xs font-bold uppercase tracking-widest block mb-2">Designing & Installation</span>
                <h2 className="text-2xl font-bold font-heading leading-snug mb-4">
                  Ductable & Packaged AC Services
                </h2>
                <p className="text-primary-200 text-sm leading-relaxed">
                  We design and install complete ductable split units and packaged air conditioners.
                  Custom ductwork from GI or insulated flexible ducts — optimised for low static pressure,
                  uniform airflow, and quiet performance.
                </p>
              </motion.div>

              {/* Feature checklist card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="bg-primary-50 border border-primary-100 rounded-3xl p-7 flex-1"
              >
                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-4">What We Cover</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── System types ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="System Types"
            title="Solutions We Provide"
            subtitle="From packaged units to complete ductwork fabrication — we handle every aspect."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="container-custom">
          <h2 className="text-3xl font-bold font-heading mb-4">Need Ductable or Packaged AC Installation?</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">Our expert team handles complete design, fabrication, and installation for any building size or type.</p>
          <Link to="/contact" className="btn-primary">Get a Quote <HiArrowRight className="w-4 h-4" /></Link>
        </motion.div>
      </section>
    </>
  )
}
