import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import {
  HiArrowRight, HiCheckCircle, HiLightningBolt,
  HiStar, HiShieldCheck, HiCog,
} from 'react-icons/hi'

// ─── Products ─────────────────────────────────────────────────────────────────
const products = [
  {
    id: 'chiller',
    name: 'Blue Star Chillers',
    subtitle: 'Air-cooled & Water-cooled Chillers',
    description:
      'Blue Star offers Process Chillers for medical, pharmaceutical industries and varied industrial applications like plastic mould cooling, printing and lamination processes. These chillers incorporate microprocessor based controls which offer intelligent cooling and are energy efficient apart from being extremely compact with a small footprint.',
    image: '/assets/bluestar/bluestar_chiller.jpg',
    specs: [
      { label: 'Capacity', value: '10 – 2000 TR' },
      { label: 'Types', value: 'Air / Water Cooled' },
      { label: 'Variants', value: 'Scroll / Screw / Centrifugal' },
    ],
    features: [
      'High COP / BEE energy star rated',
      'Eco-friendly refrigerant options',
      'Remote monitoring & control ready',
      'Microprocessor control panel',
      'Hot gas bypass for part-load operation',
      'Anti-corrosion treatment for coastal areas',
    ],
  },
  {
    id: 'vrf',
    name: 'VRF / VRV Systems',
    subtitle: 'Variable Refrigerant Flow Technology',
    description:
      'The Blue Star VRF is an inverter compressor driven VRF system, designed with sleek and compact side air discharge outdoor units. This system is ideal for applications with limited floor space where conventional top discharge outdoor units cannot be placed.',
    image: '/assets/bluestar/bluestar_vrf.jpg',
    specs: [
      { label: 'Indoor Units', value: 'Up to 64 per ODU' },
      { label: 'Energy Savings', value: 'Up to 40%' },
      { label: 'Control', value: 'Smart Wi-Fi / BMS' },
    ],
    features: [
      'Simultaneous heating and cooling zones',
      'Heat recovery VRF option available',
      'Advanced inverter compressor technology',
      'Smart Wi-Fi and BMS integration',
      'Modular and scalable system design',
      'R-410A eco-friendly refrigerant',
    ],
  },
  {
    id: 'ductable',
    name: 'Ductable Split Units',
    subtitle: 'Ceiling Concealed & Floor Standing',
    description:
      'Ducted air conditioning provides heating or cooling through a system of ducts spread out all over your home or commercial space. A central unit, consisting of a condenser, compressor, and an air handling unit, is usually located in the basement, attic, or garage.',
    image: '/assets/bluestar/bluestar_ductable.jpg',
    specs: [
      { label: 'Capacity', value: '1 – 15 TR' },
      { label: 'Static Pressure', value: 'High ESP' },
      { label: 'Refrigerant', value: 'R-410A' },
    ],
    features: [
      '1 to 15 TR capacity range',
      'High external static pressure fans',
      'R-410A eco-friendly refrigerant',
      'Auto restart & fault diagnosis',
      'Flexible duct connection options',
      'Durable powder-coated steel cabinet',
    ],
  },
  {
    id: 'cassette',
    name: 'Cassette Air Conditioners',
    subtitle: '4-Way / 2-Way Ceiling Cassette Units',
    description:
      'Cassette air conditioners are ceiling air conditioners and are one of the main types of inverter split systems. Cassette air conditioners work like other wall-mounted split system units. The difference is that the cassette systems are mounted on the ceiling, not on the wall.',
    image: '/assets/bluestar/bluestar_cassette.jpg',
    specs: [
      { label: 'Airflow Pattern', value: '4-Way / 2-Way' },
      { label: 'Feature', value: 'Auto Swing & Clean' },
      { label: 'Technology', value: 'QuietDrive™' },
    ],
    features: [
      '360° 4-way uniform airflow distribution',
      'Auto vertical swing control',
      'Auto clean technology',
      'Compact flush ceiling profile',
      'QuietDrive™ whisper-quiet technology',
      'Energy-efficient inverter models available',
    ],
  },
  {
    id: 'split',
    name: 'Split & Window ACs',
    subtitle: 'Residential & Light Commercial',
    description:
      'Here’s an AC that thinks and adjusts according to your needs. It’s Blue Star’s Inverter AC. The compressor of this AC changes frequentl y as per the ambient load. As the frequency changes, RPM of the compressor also changes. This eliminates any temperature fluctuations and helps maintain a comfortable temperature.',
    image: '/assets/bluestar/bluestar_split_ac.jpg',
    specs: [
      { label: 'BEE Rating', value: '5-Star' },
      { label: 'Technology', value: 'Inverter' },
      { label: 'Condenser', value: '100% Copper' },
    ],
    features: [
      '5-star BEE rated models available',
      'Advanced inverter compressor',
      'Self-cleaning filter technology',
      '100% copper condenser coil',
      'Anti-bacterial and anti-fungal filter',
      'Auto restart on power restoration',
    ],
  },
]

const highlights = [
  {
    Icon: HiStar,
    label: '70+ Years of Excellence',
    desc: 'Blue Star Limited was founded in 1943 and is India\'s leading integrated HVAC-R company.',
  },
  {
    Icon: HiCog,
    label: 'Authorized Dealer — Tamil Nadu',
    desc: 'SS Aircon is an official Blue Star authorized dealer supplying and servicing the full range.',
  },
  {
    Icon: HiLightningBolt,
    label: 'Energy Star 5-Star Rated',
    desc: 'Blue Star\'s lineup features India\'s most energy-efficient residential and commercial ACs.',
  },
  {
    Icon: HiShieldCheck,
    label: 'Comprehensive Brand Warranty',
    desc: 'All Blue Star products come with manufacturer warranty and SS Aircon post-sales support.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch py-14 border-b border-slate-100 last:border-0"
    >
      <div className={isEven ? '' : 'md:order-2'}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-md min-h-[450px] h-full bg-white relative group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-transparent opacity-0" />
        </motion.div>
      </div>

      <div className={isEven ? '' : 'md:order-1'}>
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-block text-xs font-bold px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-blue-700 to-blue-500 mb-3"
        >
          {product.subtitle}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="text-2xl md:text-3xl font-bold font-heading text-primary-800 mb-3"
        >
          {product.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-slate-600 leading-relaxed text-sm mb-5"
        >
          {product.description}
        </motion.p>

        {/* Spec chips */}
        {/* <div className="flex flex-wrap gap-3 mb-5">
          {product.specs.map((s) => (
            <div key={s.label} className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-center min-w-[80px]">
              <p className="text-blue-800 font-bold text-sm leading-tight">{s.value}</p>
              <p className="text-blue-400 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div> */}

        {/* Features */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
          {product.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
              <HiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div> */}

      </div>
    </motion.div>
  )
}

export default function PartnersBluestar() {
  return (
    <>
      <Helmet>
        <title>Blue Star Products | SS Aircon — Authorized Dealer</title>
        <meta
          name="description"
          content="SS Aircon is an authorized Blue Star dealer in Chennai. Explore Blue Star chillers, VRF/VRV systems, ductable ACs, cassette units and split ACs — supply and installation across Tamil Nadu."
        />
      </Helmet>

      <PageHero
        title="Blue Star Products"
        breadcrumbs={[{ label: 'Our Partners' }, { label: 'Blue Star' }]}
        bg="/assets/bluestar-landing.jpeg"
      />

      {/* Brand Intro Banner */}
      {/* <section className="py-14 bg-gradient-to-r from-blue-800 to-blue-900 text-white overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#60a5fa_0%,_transparent_70%)] pointer-events-none"
        />
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-3">
              India's Premier HVAC &<br />Refrigeration Brand
            </h2>
            <p className="text-blue-200 leading-relaxed max-w-xl mb-6">
              SS Aircon is a proud authorized dealer of <strong className="text-white">Blue Star Limited</strong> —
              India's leading integrated HVAC-R company with 70+ years of excellence since 1943. We supply,
              install, and service the complete Blue Star product range across Tamil Nadu.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2">
                    <h.Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold text-white text-xs leading-tight">{h.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 self-center"
          >
            <div className="w-40 h-40 rounded-3xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center overflow-hidden shadow-xl p-4">
              <img src="/assets/bluestar.jpg" alt="Blue Star" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Blue Star Products"
            title="Complete HVAC Solutions"
            subtitle="From residential split ACs to large central chiller plants — the complete Blue Star lineup supplied and installed by SS Aircon across Tamil Nadu."
            center
          />
          <div>
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Blue Star + SS Aircon */}
      {/* <section className="section-padding bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Why Choose Us?"
            title="Blue Star + SS Aircon — The Right Combination"
            subtitle="As an authorized Blue Star dealer, SS Aircon brings together the best of brand reliability and local service excellence."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: 'Authorized Supply', desc: 'Genuine Blue Star products with full manufacturer warranty and official documentation.' },
              { title: 'Expert Installation', desc: 'Certified technicians handle every installation to Blue Star specifications for warranty validity.' },
              { title: 'AMC Support', desc: 'Annual maintenance contracts to keep your Blue Star systems running at peak performance.' },
              { title: 'Pan Tamil Nadu Service', desc: '30+ service executives deployed across Chennai and Trichy for rapid response.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(30,58,138,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-800 to-primary-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-lg">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-primary-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-primary-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom"
        >
          <HiLightningBolt className="w-10 h-10 mx-auto text-blue-300 mb-4" />
          <h2 className="text-3xl font-bold font-heading mb-4">Ready to Install a Blue Star System?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Talk to our certified engineers. We'll help you choose the right Blue Star product and handle the
            full supply, installation, and commissioning.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
