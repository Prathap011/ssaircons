import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiLightningBolt, HiRefresh, HiChartBar, HiCog } from 'react-icons/hi'

const chillerTypes = [
  { Icon: HiLightningBolt, title: 'Air-Cooled Chillers', desc: 'Ideal for facilities without a dedicated cooling tower. Uses ambient air to reject heat from the refrigerant cycle.' },
  { Icon: HiRefresh, title: 'Water-Cooled Chillers', desc: 'Higher efficiency option paired with cooling towers for large commercial and industrial applications.' },
  { Icon: HiCog, title: 'Skidded Chillers', desc: 'Factory-assembled chiller plants mounted on a structural skid for rapid deployment and easy relocation.' },
  { Icon: HiChartBar, title: 'Green / Modular Chillers', desc: 'Energy-efficient modular systems that can be scaled up or down as building load requirements change.' },
]

const designFeatures = [
  'Complete refrigerant cycle design: evaporator, compressor, condenser and expansion valve sizing',
  'Cooling tower selection and water circuit design for water-cooled systems',
  'Pump sizing and piping layout for primary and secondary circuits',
  'BMS integration for energy monitoring and remote diagnostics',
  'Commissioning and performance verification against design load',
  'Chiller plant retrofits and energy optimisation audits',
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function ChillerPlant() {
  return (
    <>
      <Helmet>
        <title>Chiller Plant Design & Installation | SS Aircon</title>
        <meta name="description" content="SS Aircon provides expert chiller plant design and installation — air-cooled, water-cooled, skidded and modular chillers for commercial and industrial buildings." />
      </Helmet>

      <PageHero
        title="Chiller Plant Design & Installation"
        breadcrumbs={[{ label: 'Services' }, { label: 'Chiller Plant' }]}
        bg="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&auto=format&fit=crop&q=80"
      />

      {/* ── Full-bleed image banner with overlay ── */}
      <section className="relative h-[360px] overflow-hidden">
        <img
          src="https://www.ssaircons.com/wp-content/uploads/2022/04/chiller-unit.jpg"
          alt="Chiller Plant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/70 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="max-w-xl text-white"
            >
              <span className="inline-block bg-accent-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Chiller Systems
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-4">
                Best Chiller Plant Design & Installation
              </h2>
              <p className="text-primary-200 text-sm leading-relaxed">
                Our chiller plant operates on a refrigerant cycle — the refrigerant absorbs heat from the water
                in the evaporator, cooling it. The chilled water then circulates through the building.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Numbered design features ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Scope"
            title="What Our Chiller Plant Service Includes"
            subtitle="End-to-end design, installation and commissioning for every type of chiller plant."
            center
          />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {designFeatures.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="flex items-start gap-4 bg-primary-50 rounded-2xl p-5 border border-primary-100"
              >
                <span className="text-3xl font-black text-primary-200 leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-slate-700 text-sm leading-relaxed">{f}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiller types ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Our Solutions"
            title="Chiller Types We Install"
            subtitle="We supply, install, and commission all major chiller types for any application."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {chillerTypes.map((s) => (
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
          <h2 className="text-3xl font-bold font-heading mb-4">Plan Your Chiller Plant with Us</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">From load calculation to final commissioning — SS Aircon delivers turnkey chiller plant solutions.</p>
          <Link to="/contact" className="btn-primary">Request a Design Consultation <HiArrowRight className="w-4 h-4" /></Link>
        </motion.div>
      </section>
    </>
  )
}
