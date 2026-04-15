import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
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
  const { ref, inView } = useInView()

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
              src="https://www.ssaircons.com/wp-content/uploads/2022/04/Flat-Oval-duct-2-1024x768.jpg"
              alt="Ductable & Packaged AC"
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
              label="HVAC Installation"
              title="Designing & Installation Services"
            />
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              We offer expert Designing and Installation Services for ductable split units and packaged air conditioners. Our packaged air conditioner is a self-contained unit that houses all cooling and heating components in a single cabinet.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Ductable AC systems distribute conditioned air through a carefully designed duct network — optimized for low static pressure, uniform airflow, and acoustic performance. Our HVAC analysis covers all factors: heating, cooling, humidity control, and ventilation.
            </p>
            <div ref={ref} className="space-y-2">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
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

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="System Types"
            title="Solutions We Provide"
            subtitle="From packaged units to complete ductwork fabrication — we handle every aspect of ductable AC installation."
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

      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Need Ductable or Packaged AC Installation?</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our expert team handles complete design, fabrication, and installation for any building size or type.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Quote <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
