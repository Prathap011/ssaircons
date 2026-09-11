import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import {
  HiArrowRight, HiCheckCircle, HiLightningBolt,
  HiStar, HiShieldCheck, HiCog,
} from 'react-icons/hi'
import { IndoorUnitsSection } from './BlueStarIndoorPage'
import { OutdoorUnitsSection } from './PartnersBluestarOutdoor'

// ─── Products ─────────────────────────────────────────────────────────────────
const products = [
  {
    id: 'chiller',
    name: 'Blue Star Chillers',
    subtitle: 'Air-cooled & Water-cooled Chillers',
    description:
      'Blue Star offers Process Chillers for medical, pharmaceutical industries and varied industrial applications like plastic mould cooling, printing and lamination processes. These chillers incorporate microprocessor based controls which offer intelligent cooling and are energy efficient apart from being extremely compact with a small footprint.',
    image: '/assets/outdoor/outdoor9.png',
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
    name: 'VRF Systems',
    subtitle: 'Variable Refrigerant Flow Technology',
    description:
      'The Blue Star VRF is an inverter compressor driven VRF system, designed with sleek and compact side air discharge outdoor units. This system is ideal for applications with limited floor space where conventional top discharge outdoor units cannot be placed.',
    image: '/assets/outdoor/outdoor5.png',
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
    image: '/assets/outdoor/outdoor1.png',
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 md:grid-cols-2 items-stretch bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500"
    >
      {/* Image — full height */}
      <div className={`relative min-h-[350px] md:min-h-[420px] flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 border-slate-100 ${isEven ? 'md:border-r md:order-1' : 'md:border-l md:order-2'} overflow-hidden`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.subtitle}
        </span>
      </div>

      {/* Content */}
      <div className={`p-8 flex flex-col justify-start ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary-800 mb-3">
            {product.name}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm mb-5">
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Bluestar() {
  return (
    <>
      <Helmet>
        <title>Blue Star Products | SS Aircon — Authorized Dealer</title>
        <meta
          name="description"
          content="SS Aircon is an authorized Blue Star dealer in Chennai. Explore Blue Star chillers, VRF systems, ductable ACs, cassette units and split ACs — supply and installation across Tamil Nadu."
        />
      </Helmet>

      <PageHero
        title="Blue Star Products"
        breadcrumbs={[{ label: 'Products' }, { label: 'Blue Star' }]}
        bg="/assets/ourbluestar1.jpg"
        overlayOpacity={30}
        fullHeight={true}
      />

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Blue Star Products"
            title="Complete HVAC Solutions"
            subtitle="From residential split ACs to large central chiller plants — the complete Blue Star lineup supplied and installed by SS Aircon across Tamil Nadu."
            center
          />
          <div className="space-y-10">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Indoor Units Design */}
      <IndoorUnitsSection />

      {/* Outdoor Units Design */}
      <OutdoorUnitsSection />

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
