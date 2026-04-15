import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { HiArrowRight, HiLightningBolt, HiVolumeOff, HiTemplate, HiLockClosed, HiViewGrid } from 'react-icons/hi'

const advantages = [
  {
    Icon: HiLightningBolt,
    title: 'Energy Efficiency',
    desc: 'VRF systems are designed to provide exactly the amount of cooling needed for the current conditions, which means it runs less frequently and at a lower capacity. The VRF system is also designed to capture heat from the cooling process and reuse it in other areas that may need heating.',
  },
  {
    Icon: HiVolumeOff,
    title: 'Quiet Operation',
    desc: 'In a VRF system, the noisier condensing unit is typically outside, and the indoor air handlers are smaller and quieter than a traditional split system.',
  },
  {
    Icon: HiTemplate,
    title: 'Consistent Comfort',
    desc: "The VRF system's compressor can detect the precise requirements of each zone, and send the precise amount of refrigerant needed to do the job. As a result, each area of your space is consistently comfortable with well-controlled humidity and no hot or cold spots.",
  },
  {
    Icon: HiLockClosed,
    title: 'Less Downtime',
    desc: 'Since the VRF system is designed to run only when needed and under partial-load conditions, there is less wear and tear on the parts. That means fewer breakdowns. Also, if something goes wrong with one air handler, often the others are unaffected. That means your whole space won\'t be without air conditioning all at once.',
  },
  {
    Icon: HiViewGrid,
    title: 'Requires Less Space',
    desc: "Since the air handlers are smaller and VRF systems don't usually require ducts, they don't require as much wall and ceiling space for the equipment. That means you get to keep those gorgeous high ceilings in your building.",
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function VrfVrv() {
  return (
    <>
      <Helmet>
        <title>VRF / VRV System | SS Aircon</title>
        <meta name="description" content="SS Aircon — Leading VRV and VRF air conditioning service providers in India. Variable Refrigerant Flow systems on a turnkey basis across Tamil Nadu." />
      </Helmet>

      <PageHero
        title="VRF / VRV System"
        breadcrumbs={[{ label: 'Products' }, { label: 'VRF / VRV' }]}
        bg="https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">

        {/* Background glow */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#93c5fd_0%,_transparent_70%)] pointer-events-none"
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
            <div className="h-full rounded-3xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src="/assets/vrf.jpg" // 👉 change image path
                alt="VRF VRV System"
                className="w-full h-full object-cover"
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-6">
              Leading VRV and VRF Air Conditioning<br />Manufacturers in India
            </h2>

            <p className="text-primary-200 leading-relaxed mb-4">
              As we specialize in HVAC Domain, provide VRV( Variable Refrigerant Volume) & VRF( Variable Refrigerant Flow) services to our clients on turnkey basis. We’re leading VRF abd VRV air conditioning manufactures and providing VRF VRV air conditioning service all across India.
            </p>

            <p className="text-primary-200 leading-relaxed mb-6">
              VRV / VRF is a modern and sophisticated technology which helps in reducing electricity consumption by regualting refrigerant flow of liquid. Hence, the machine performs efficiently according to human occupancy, oreintation, direction of sun, heat generating equipment with a pay back period of approximately three and half years.
            </p>

            {/* Stats */}
            <div className="flex gap-5 flex-wrap">
              {[
                { v: '3.5 yr', l: 'Payback' },
                { v: '100%', l: 'Turnkey' },
                { v: '24 yrs', l: 'Experience' },
                { v: 'Pan India', l: 'Coverage' },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                  className="bg-white/10 border border-white/15 rounded-2xl px-5 py-3 text-center min-w-[110px]"
                >
                  <p className="text-xl font-bold text-white">{s.v}</p>
                  <p className="text-primary-300 text-xs mt-1">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Why VRF / VRV?"
            title="Key Advantages of VRF Systems"
            subtitle="A smarter, energy-efficient alternative to conventional HVAC systems."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className={`bg-white rounded-2xl p-6 border border-primary-100 shadow-sm transition-shadow${i === 4 ? ' sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <a.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-2">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
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
          {/* <span className="text-5xl block mb-4">⚡</span> */}
          <h2 className="text-3xl font-bold font-heading mb-4">Upgrade to VRF / VRV — Smart Multi-Zone Cooling</h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            Our engineers will design the optimal VRF layout for your building and manage supply, installation, and commissioning end-to-end.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
