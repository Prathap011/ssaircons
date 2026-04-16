import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiClock, HiShieldCheck, HiTruck, HiDocumentText } from 'react-icons/hi'
import { MdSupportAgent } from 'react-icons/md'

const highlights = [
  { Icon: HiClock, title: '2–4 Hour Response', desc: '24/7 dedicated emergency breakdown service team with 2 to 4 hours response time from the time of call receipt.' },
  { Icon: HiTruck, title: 'Mobile Service Teams', desc: 'Teams equipped with fast-moving company vehicles carrying all essential tools and basic spare parts for on-site repairs.' },
  { Icon: HiShieldCheck, title: 'Centralized Monitoring', desc: 'All service engineer movements centrally monitored; nearest engineer assigned to reduce travel time and deliver quick response.' },
  { Icon: HiDocumentText, title: 'Service Reports', desc: 'All observations, checks performed, and recommendations documented in detailed service reports after every PPM visit.' },
]

const ppmScope = [
  '24/7 emergency breakdown service with 2–4 hr response and 24–48 hr turnaround',
  'Own vehicles with essential tools and basic spare parts for fast on-site resolution',
  'Centrally monitored dispatch — nearest engineer assigned to every breakdown call',
  'Planned preventive maintenance dates agreed in writing with each client',
  'PPM team completes all visual and physical checks within stipulated time frames',
  'Full observations and recommendations captured in written service reports',
  'CAMC (Comprehensive Annual Maintenance Contract) and NCAMC options available',
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function PlannedMaintenance() {
  const { ref, inView } = useInView()

  return (
    <>
      <Helmet>
        <title>Planned Maintenance & Breakdown Support | SS Aircon</title>
        <meta name="description" content="SS Aircon provides 24/7 emergency breakdown support with 2–4 hour response, plus planned preventive maintenance (PPM) contracts for all HVAC systems." />
      </Helmet>

      <PageHero
        title="Planned Maintenance & Breakdown Support"
        breadcrumbs={[{ label: 'Services' }, { label: 'Planned Maintenance' }]}
        bg="https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=1600&auto=format&fit=crop&q=80"
      />

      <section className="section-padding bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
        <div className="absolute -top-28 -right-28 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pi-card"
          >
            <div className="pi-frame h-[420px]">
              <img
                src="https://www.ssaircons.com/wp-content/uploads/2022/03/69976319_551710165568325_1461633102324432896_n-1024x768.jpg"
                alt="Planned Maintenance"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              label="24/7 Support"
              title="Planned Maintenance & Breakdown Support"
            />
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              We have a dedicated 24/7 emergency breakdown service support team equipped with the required tools and tackles to support our clients with 2 to 4 hours response time and 24 to 48 hours turnaround time from the time of call receipt.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Planned maintenance regimes are managed by the service department and dates for all types of PPM are agreed through written communication direct with the client. Our dedicated PM team carries out preventive maintenance within the stipulated time frame, completing all visual and physical checks as required by each piece of equipment.
            </p>
            <div ref={ref} className="space-y-2">
              {ppmScope.map((p, i) => (
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
            label="Service Coverage"
            title="What Makes Our Support Different"
            subtitle="Round-the-clock reliability with a team committed to keeping your HVAC systems running."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <h.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-1">{h.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
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
          <MdSupportAgent className="w-12 h-12 mx-auto text-primary-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">24/7 Emergency Breakdown Support</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Don't let an HVAC failure disrupt your operations. Our team responds within 2 to 4 hours, any time of day or night.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:8056041921" className="btn-primary">Call Now: 8056041921</a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">
              Request AMC <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
