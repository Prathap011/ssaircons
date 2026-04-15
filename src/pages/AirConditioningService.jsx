import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiHome, HiOfficeBuilding, HiTemplate, HiVolumeUp, HiCog, HiLightningBolt } from 'react-icons/hi'

const systemTypes = [
  { Icon: HiHome, title: 'Single & Multi-Split Systems', desc: 'Window, split, and multi-split units for homes, small offices, and retail spaces.' },
  { Icon: HiOfficeBuilding, title: 'Ducted Air Handlers', desc: 'Central ducted systems for offices, hospitals, and commercial facilities requiring uniform air distribution.' },
  { Icon: HiTemplate, title: 'Cassette & Concealed Units', desc: 'Ceiling cassette and concealed units delivering discreet, aesthetic air conditioning.' },
  { Icon: HiLightningBolt, title: 'VRF / VRV Installations', desc: 'Variable refrigerant flow systems for precise multi-zone temperature control.' },
  { Icon: HiCog, title: 'Floor-Mounted Units', desc: 'Floor-standing air handlers for spaces where ceiling mounting is not practical.' },
  { Icon: HiVolumeUp, title: 'CAD Design Service', desc: 'Full CAD drawings and design documentation for every project we undertake.' },
]

const process = [
  'Initial concept and site survey to understand requirements',
  'CAD drawing creation with full design information',
  'Equipment selection, sizing, and specification',
  'Professional installation by certified in-house engineers',
  'System commissioning and performance testing',
  'Handover on time and within budget with full documentation',
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function AirConditioning() {
  const { ref, inView } = useInView()

  return (
    <>
      <Helmet>
        <title>Air Conditioning | SS Aircon</title>
        <meta name="description" content="SS Aircon has extensive experience in all types of air conditioning systems — split, ducted, VRF/VRV, cassette and floor-mounted — installed on time and within budget." />
      </Helmet>

      <PageHero
        title="Air Conditioning"
        breadcrumbs={[{ label: 'Services' }, { label: 'Air Conditioning' }]}
        bg="https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=1600&auto=format&fit=crop&q=80"
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
              src="https://www.ssaircons.com/wp-content/uploads/2022/04/service3.jpg"
              alt="Air Conditioning"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="Air Conditioning"
              title="Complete Air Conditioning Solutions"
            />
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              SS AIRCON has extensive experience and knowledge of all types of air conditioning systems — from single and multiple split systems to ducted air handlers and VRF/VRV installations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Our team of in-house air conditioning experts provides key project solutions enabling fast, effective, and reliable installation of any design requirement. From the initial concept to CAD drawings, our design team formulates the very best solution for the application.
            </p>
            <div ref={ref} className="space-y-2">
              {process.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Systems"
            title="AC Systems We Install"
            subtitle="From basic residential splits to complex multi-zone VRF systems — we handle every type of air conditioning installation."
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
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Get Your AC Installed by Experts</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            SS Aircon delivers reliable, on-time, within-budget air conditioning installations. Contact us to discuss your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8056041921" className="btn-primary">Call 8056041921</a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">
              Send Enquiry <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
