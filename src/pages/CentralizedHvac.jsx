import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { useInView } from '../hooks/useInView'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiCheckCircle, HiOfficeBuilding, HiHeart, HiHome, HiTag, HiCube } from 'react-icons/hi'

const buildingTypes = [
  { Icon: HiOfficeBuilding, label: 'Air Conditioning for Offices, Buildings' },
  { Icon: HiHeart, label: 'Air Conditioning for Hospitals, OT, Laboratories etc.' },
  { Icon: HiHome, label: 'Air Conditioning for Malls, Hotels, Restaurants etc.' },
  { Icon: HiTag, label: 'Air Conditioning for Retail Stores, Supermarkets etc.' },
]

const sectors = [
  'Industries',
  'Commercial Establishments',
  'Pharmaceutical Labs & Hospitals',
  'High End Residence Air Conditioning',
]

const hvacSystems = ['Chillers', 'Package Systems', 'Ductable Systems', 'VRF Systems']

const totalSolutions = [
  { step: '01', title: 'System Design', desc: 'Turnkey HVAC system design tailored to every building type and requirement.' },
  { step: '02', title: 'Project Consultancy', desc: 'Complete technical consultancy covering equipment schedules, BOQ preparation, and full project planning.' },
  { step: '03', title: 'Project Execution', desc: 'End-to-end site execution including piping, ductwork, electrical, insulation, and controls integration.' },
]

const principles = [
  { label: 'H', title: 'Heating', desc: 'Regulates heating for occupant comfort across all weather conditions.' },
  { label: 'A', title: 'Air Conditioning', desc: 'Conditions the air in the occupied space, controlling temperature and humidity.' },
  { label: 'V', title: 'Ventilation', desc: 'Ventilates the air by diluting and removing contaminants present inside the building.' },
]

const features = [
  'Air Conditioning for Offices, Buildings',
  'Air Conditioning for Hospitals, OT, Laboratories etc.',
  'Air Conditioning for Malls, Hotels, Restaurants etc.',
  'Air Conditioning for Retail Stores, Supermarkets etc.',
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function CentralizedHvac() {
  const { ref: feat, inView: featIn } = useInView()
  return (
    <>
      <Helmet>
        <title>Centralized HVAC Services | SS Aircon</title>
        <meta name="description" content="SS Aircon provides complete centralized and industrial HVAC solutions — system design, project consultancy, and project execution for offices, hospitals, malls, hotels, and industrial facilities." />
      </Helmet>

      <PageHero
        title="Centralized HVAC Services"
        breadcrumbs={[{ label: 'Products' }, { label: 'Centralized HVAC Services' }]}
        bg="https://images.unsplash.com/photo-1581094271901-8022df4c53f0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#93c5fd_0%,_transparent_60%)] pointer-events-none"
        />
        <div className="container-custom grid md:grid-cols-2 gap-10 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-100">Complete Turnkey HVAC Contractor</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-4">
              Centralized &amp; Industrial<br />HVAC Solutions
            </h2>
            <p className="text-primary-200 leading-relaxed">
              We take care of every kind of Centralized &amp; Industrial Air Conditioning Solutions (HVAC Solutions) for any building type and handle entire turnkey projects — Designing, Sales &amp; Execution — all across India.
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
              { v: '300+', l: 'Projects Delivered' },
              { v: '24 yrs', l: 'HVAC Experience' },
              { v: '30+', l: 'Service Executives' },
              { v: '100%', l: 'Turnkey Execution' },
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
            <div className="pi-frame h-full">
              <img
                src="/assets/cent-hvac1.jpg"
                alt="Precision Air Conditioning"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Centralized HVAC Services"
            />
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              We take care of every kind of Centralized & Industrial Air Conditioning Solutions (HVAC Solutions) for any building type & take care of entire turnkey projects i.e. Designing, Sales & Execution, all across India for below mentioned work:
            </p>
            <div ref={feat} className="space-y-2 mb-2">
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

      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              We are into the business of providing HVAC (Heating Ventilation and Air Conditioning) solutions all kind of requirements for Industries, Commercial Establishments, Pharmaceutical Labs & Hospitals Air Conditioning , High end Residence Air Conditioning. We offer total solution for HVAC which includes System Design, Project Consultancy & Project execution. We have a rich experience in designing and project execution of all kinds of HVAC systems i.e. Chillers, Package and Ductable Systems, VRF systems.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              We build different types of HVAC systems which are different in Design and in Operational approach, depending on the architecture design of building. SS AIRCON provide complete support by helping our clients in first calculating the heat load, Designing and further Installation & Execution. SS AIRCON has employed professionals centralized HVAC consultants on board strive together to deliver quality work.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              We also have a team of technicians and HVAC engineers who work hard in completing assigned projects in stipulated time. We pride ourselves in offering exceptional techno-commercial air-conditioning solution and project execution that ensures our client to get quality work. MG Cooling Solutions listed top in the list of Best HVAC service providers Delhi, India
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pi-card"
          >
            <div className="pi-frame h-full">
              <img
                src="/assets/cent-hvac2.jpg"
                alt="Precision Air Conditioning"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pi-card"
          >
            <div className="pi-frame h-full">
              <img
                src="/assets/cent-hvac3.jpg"
                alt="Precision Air Conditioning"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-slate-600 leading-relaxed mb-6 text-sm">
              <strong>More about Centralized Air Conditioning Solutions (HVAC)</strong>
            </h4>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              HVAC system works on three principles –Heating, Air Conditioning & Ventilation, i.e. it conditions the air in the space occupied by the building, ventilates the air by diluting and removing contaminants present inside the building. When all these three principles work together, a complete purified air conditioning environment gets created.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              When an HVAC system is installed, it provides natural ventilation, reduces exposure to air-born biological threats and regulates the temperature according to weather conditions to make the occupants comfortable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Building Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Sectors Served"
            title="Buildings We Provide HVAC For"
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {buildingTypes.map((b) => (
              <motion.div
                key={b.label}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm text-center transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 mx-auto">
                  <b.Icon className="w-7 h-7 text-primary-600" />
                </div>
                <p className="font-semibold text-primary-800 text-sm leading-snug">{b.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About & Process */}
      {/* <section className="section-padding bg-slate-50">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle label="About" title="HVAC for All Kinds of Requirements" />
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              We are in the business of providing HVAC solutions for all kinds of requirements — for Industries, Commercial Establishments, Pharmaceutical Labs &amp; Hospitals Air Conditioning, and High-end Residence Air Conditioning.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5 text-sm">
              We offer total HVAC solutions which includes System Design, Project Consultancy &amp; Project Execution. We have rich experience in designing and project execution of all kinds of HVAC systems.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {hvacSystems.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-primary-50 rounded-xl px-4 py-3 text-sm font-semibold text-primary-700 text-center border border-primary-100"
                >
                  {s}
                </motion.div>
              ))}
            </div>
            <div className="space-y-2">
              {sectors.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle label="Our Process" title="Complete Project Lifecycle" />
            <div className="space-y-5">
              {totalSolutions.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative bg-white rounded-2xl p-5 border border-primary-100 shadow-sm overflow-hidden"
                >
                  <span className="absolute top-3 right-4 text-5xl font-black text-primary-50 leading-none select-none">{s.step}</span>
                  <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm mb-3">{s.step}</div>
                  <h3 className="font-bold text-primary-800 mb-1 text-sm">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* HVAC Principles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="HVAC Principles"
            title="How HVAC Works"
            subtitle="An HVAC system works on three principles — creating a complete purified air conditioning environment."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {principles.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: '0 16px 36px -10px rgba(37,99,235,0.16)' }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 border border-primary-100 shadow-sm text-center transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {p.label}
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 bg-primary-50 rounded-2xl p-6 border border-primary-100 max-w-3xl mx-auto"
          >
            <p className="text-slate-600 text-sm leading-relaxed text-center">
              When an HVAC system is installed, it provides natural ventilation, reduces exposure to airborne biological threats, and regulates the temperature according to weather conditions — making the occupants comfortable at all times.
            </p>
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
          <h2 className="text-3xl font-bold font-heading mb-4">Plan Your Centralised HVAC System</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our experienced HVAC consultants will help you with heat load calculation, system design, and complete project execution — on time and within budget.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
