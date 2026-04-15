import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import {
  HiCheckCircle, HiArrowRight, HiStar,
  HiLightningBolt, HiShieldCheck, HiGlobe,
} from 'react-icons/hi'
import { MdOutlineAir, MdOutlineEnergySavingsLeaf } from 'react-icons/md'

// ─── Product Data ─────────────────────────────────────────────────────────────

const xlSeries = [
  {
    name: 'Symphony XL 100G',
    series: 'XL Series',
    airflow: '8,500 m³/hr',
    power: '215 W',
    throw: '25 m',
    image: '/assets/symphony/symphony-XL100G.jpg',
    description:
      'A high-performance XL-series industrial air cooler delivering 8,500 m³/hr of fresh, filtered air. Equipped with a digital touchscreen remote and 3-side honeycomb cooling pads for wide-area spot cooling in factories, workshops, and large open spaces.',
    highlights: ['Powerful 25m air throw for faster cooling', '3-side high efficiency honeycomb cooling', 'Robust weather resistant body long life'],
    features: [
      '8500 m³/hr Air Delivery',
      'Digital Touchscreen Full Control Remote',
      'Empty Water Tank Alarm',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 215W Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
  {
    name: 'Symphony XL 200G',
    series: 'XL Series',
    airflow: '8,500 m³/hr',
    power: '215 W',
    throw: '25 m',
    image: '/assets/symphony/symphony-XL200G.jpg',
    description:
      'The XL 200G features Symphony\'s exclusive Cool Flow Dispenser for enhanced evaporative efficiency, distributing water uniformly across 3-side honeycomb cooling pads. Ideal for medium-sized industrial bays, loading docks, and large retail spaces.',
    highlights: ['Powerful 25m air throw for faster cooling', '3-side high efficiency honeycomb cooling', 'Robust weather resistant body long life'],
    features: [
      '8500 m³/hr Air Delivery',
      'Cool Flow Dispenser for Enhanced Cooling',
      'Empty Water Tank Alarm',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 215W Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
  {
    name: 'Symphony XL 200i',
    series: 'XL Series',
    airflow: '8,500 m³/hr',
    power: '215 W',
    throw: '25 m',
    image: '/assets/symphony/symphony-XL200i.jpg',
    description:
      'An upgraded XL model with automatic vertical swing for even air distribution across the full height of the workspace. The digital touchscreen remote gives operators full speed and louver control, making it ideal for large production floors and assembly areas.',
    highlights: ['Powerful 25m air throw for faster cooling', '3-side high efficiency honeycomb cooling', 'Robust weather resistant body long life'],
    features: [
      '8500 m³/hr Air Delivery',
      'Digital Touchscreen Full Control Remote',
      'Auto Vertical Swing',
      'Empty Water Tank Alarm',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 215W Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
  {
    name: 'Symphony DD 125',
    series: 'DD Series',
    airflow: '8,500 m³/hr',
    power: '215 W',
    throw: '25 m',
    image: '/assets/symphony/symphony-DD125.jpg',
    description:
      'The DD 125 (Dual Discharge) delivers 8,500 m³/hr through dual cooling pad sections for broader horizontal coverage from a single unit. The Cool Flow Dispenser ensures consistent, high-efficiency evaporative cooling across large open areas.',
    highlights: ['Powerful 25m air throw for faster cooling', '3-side high efficiency honeycomb cooling', 'Robust weather resistant body long life'],
    features: [
      '8500 m³/hr Air Delivery',
      'Cool Flow Dispenser for Enhanced Cooling',
      'Dual-discharge honeycomb cooling media',
      'Empty Water Tank Alarm',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 215W Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
  {
    name: 'Symphony L 2001',
    series: 'Dual Unit',
    airflow: '8,500 + 8,500 m³/hr',
    power: '215 W × 2',
    throw: '25 m × 2',
    image: '/assets/symphony/symphony-L-2001.jpg',
    description:
      'A unique dual-blower configuration housing two independent cooling units in one chassis, delivering a combined 17,000 m³/hr. Designed for superior coverage across very large industrial spaces, warehouses, and exhibition halls where a single unit is insufficient.',
    highlights: ['Two cooling units for uniform wide area cooling', 'Powerful 25m / 25m air throw for faster cooling', '3-side high efficiency honeycomb cooling pads for superior cooling', 'Robust weather resistant body long life'],
    features: [
      '8500 + 8500 m³/hr Air Delivery',
      'Cool Flow Dispenser for Enhanced Cooling',
      'Auto Vertical Swing',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 215W × 2 Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
]

const heavySeries = [
  {
    name: 'Symphony LSV',
    series: 'Heavy Industrial',
    airflow: '18,000 m³/hr',
    power: '580 W',
    throw: '26 m',
    image: '/assets/symphony/symphony-LSV.jpg',
    description:
      'The flagship Symphony heavy-duty industrial cooler with a powerful 18,000 m³/hr airflow and 26-metre throw. Built for large-scale factory floors, aircraft hangars, and warehouses where standard-capacity units fall short. Features a large water inlet door for easy topping up.',
    highlights: ['Powerful 26m air throw for faster cooling', '3-side high efficiency honeycomb cooling pads for superior cooling', 'Robust weather resistant body long life'],
    features: [
      '18000 m³/hr Air Delivery',
      'Low Power Consumption – 580W Only',
      'Cool Flow Dispenser for Enhanced Cooling',
      'Large Water Inlet Door',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
  {
    name: 'Symphony Movicool L125',
    series: 'Heavy Industrial',
    airflow: '18,000 m³/hr',
    power: '580 W',
    throw: '26 m',
    image: '/assets/symphony/symphony_movicool-L125.jpg',
    description:
      'An 18,000 m³/hr industrial air cooler engineered for large-scale manufacturing plants, textile mills, and foundries. The Movicool L125 combines a large water tank capacity with the Cool Flow Dispenser for sustained high-performance cooling during extended shifts.',
    highlights: ['Powerful 26m air throw for faster cooling', '3-side high efficiency honeycomb cooling pads for superior cooling', 'Robust weather resistant body long life'],
    features: [
      '18000 m³/hr Air Delivery',
      'Low Power Consumption – 580W Only',
      'Cool Flow Dispenser for Enhanced Cooling',
      'Large Water Inlet Door',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
  {
    name: 'Symphony Movicool 65iS',
    series: 'Heavy Industrial',
    airflow: '18,000 m³/hr',
    power: '580 W',
    throw: '30 m',
    image: '/assets/symphony/symphony-Movicool-65is.jpg',
    description:
      'Top-end heavy-duty cooler delivering 18,000 m³/hr with an extended 30-metre air throw. The digital touchscreen and auto vertical swing make the 65iS the preferred choice for airports, sports halls, auditoriums, and large event venues.',
    highlights: ['Powerful 30m air throw for faster cooling', '3-side high efficiency honeycomb cooling pads for superior cooling', 'Robust weather resistant body long life'],
    features: [
      '18000 m³/hr Air Delivery',
      'Digital Touchscreen Full Control Remote',
      'Empty Water Tank Alarm',
      'Auto Vertical Swing',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 580W Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
]

const jumboSeries = [
  {
    name: 'Symphony XXL Movicool',
    series: 'Jumbo Series',
    airflow: '20,000 m³/hr',
    power: '1,100 W',
    throw: '30 m',
    image: '/assets/symphony/symphony-xxl_movicool.jpg',
    description:
      'Symphony\'s most powerful unit — 20,000 m³/hr of cool air distributed through 4-side honeycomb cooling pads with an incredible 30-metre throw. Designed for mega warehouses, large event spaces, sports complexes, and demanding outdoor industrial operations.',
    highlights: ['Powerful 30m air throw for faster cooling', '4-side high efficiency honeycomb cooling pads for superior cooling', 'Robust weather resistant body long life'],
    features: [
      '20000 m³/hr Air Delivery',
      'Cool Flow Dispenser for Enhanced Cooling',
      'Auto Vertical Swing',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 1100W Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '4-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels',
    ],
  },
  {
    name: 'Symphony Movi-cool',
    series: 'Movicool Series',
    airflow: '8,500 m³/hr',
    power: '215 W',
    throw: '25 m',
    image: '/assets/symphony/symphony_movi-cool.jpg',
    description:
      'A compact yet powerful Movicool unit offering 8,500 m³/hr with all-terrain lockable heavy-duty wheels for easy repositioning. Perfect for temporary events, construction sites, garments factories, and seasonal spot-cooling where flexibility is essential.',
    highlights: ['Powerful 25m air throw for faster cooling', '3-side high efficiency honeycomb cooling', 'Robust weather resistant body long life'],
    features: [
      '8500 m³/hr Air Delivery',
      'Cool Flow Dispenser for Enhanced Cooling',
      'Fully Closable Horizontal Louvers',
      'Low Power Consumption – 215W Only',
      'Powerful 3 Speed Fan',
      'Easily Removable & Cleanable Cooling Pads',
      '3-Side Dust Filters for Pure Healthy Air',
      'Float Valve for Auto Water Filling',
      'Lockable Heavy-Duty Wheels – All-terrain',
    ],
  },
]

const stats = [
  { value: '20,000', label: 'm³/hr Max Airflow', Icon: MdOutlineAir },
  { value: '90%', label: 'Less Energy vs AC', Icon: MdOutlineEnergySavingsLeaf },
  { value: '30 m', label: 'Max Air Throw', Icon: HiArrowRight },
  { value: '10+', label: 'Models Available', Icon: HiStar },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function SeriesDivider({ label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-10"
    >
      <span className="section-label whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent" />
    </motion.div>
  )
}

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 md:grid-cols-2 items-stretch bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image — full height, white background */}
      <div className={`relative min-h-[420px] bg-white ${isEven ? '' : 'md:order-2'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary-800 to-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.series}
        </span>
      </div>

      {/* Content */}
      <div className={`p-8 flex flex-col justify-between ${isEven ? '' : 'md:order-1'}`}>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-3">
            {product.name}
          </h3>

          {/* Spec chips */}
          {/* <div className="flex flex-wrap gap-2 mb-4">
            {[
              { label: 'Airflow', val: product.airflow },
              { label: 'Power', val: product.power },
              { label: 'Throw', val: product.throw },
            ].map(({ label, val }) => (
              <div key={label} className="bg-primary-50 border border-primary-100 rounded-xl px-4 py-2 text-center min-w-[90px]">
                <p className="text-primary-800 font-bold text-sm leading-tight">{val}</p>
                <p className="text-primary-400 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div> */}

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>

          {/* Highlights */}
          {/* {product.highlights && (
            <div className="mb-4 space-y-1">
              {product.highlights.map((h) => (
                <p key={h} className="text-sm text-primary-700 font-medium flex items-start gap-1.5">
                  <span className="text-primary-500 mt-0.5">›</span>{h}
                </p>
              ))}
            </div>
          )} */}

          {/* Full feature list */}
          {/* <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                <HiCheckCircle className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Symphony() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Symphony Industrial Air Coolers — SS Aircon</title>
        <meta
          name="description"
          content="SS Aircon is an authorised Symphony dealer offering the complete range of industrial air coolers — XL, DD, LSV, Movicool, XXL Jumbo and more — across Tamil Nadu."
        />
      </Helmet>

      <PageHero
        title="Symphony Industrial Air Coolers"
        breadcrumbs={[{ label: 'Our Partners' }, { label: 'Symphony' }]}
        bg="/assets/symphony-landing.jpeg"
      />

      {/* ── Brand Banner ───────────────────────────────────────────────────────── */}
      {/* <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex flex-col gap-5"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 w-fit">
                <img src="/assets/sympothy.jpeg" alt="Symphony Logo" className="h-20 object-contain" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">Authorised Symphony Dealer</h2>
                <p className="text-primary-200 leading-relaxed">
                  Symphony is India's No. 1 industrial air cooler brand. SS Aircon brings the complete
                  Symphony portfolio — from compact XL units to massive Jumbo coolers — with expert
                  installation and after-sales support across Tamil Nadu.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ value, label, Icon }) => (
                <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex flex-col gap-2">
                  <Icon className="w-6 h-6 text-primary-300" />
                  <p className="text-2xl font-extrabold text-white">{value}</p>
                  <p className="text-primary-200 text-sm">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ── XL & DD Series (5 products) ────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <SectionTitle
            title="XL & DD Series Products"
            subtitle="Versatile, portable industrial air coolers for medium to large spaces"
          />
          <SeriesDivider label="XL / DD Series — 8,500 m³/hr" />
          <div className="space-y-10">
            {xlSeries.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Heavy Industrial Series (3 products) ───────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Heavy Industrial Series Products"
            subtitle="High-capacity coolers delivering 18,000 m³/hr for demanding industrial environments"
          />
          <SeriesDivider label="Heavy Industrial — 18,000 m³/hr" />
          <div className="space-y-10">
            {heavySeries.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Jumbo / Movicool Series (2 products) ───────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <SectionTitle
            title="Jumbo & Movicool Series Products"
            subtitle="Maximum cooling power — up to 20,000 m³/hr with a 30-metre air throw"
          />
          <SeriesDivider label="Jumbo / Movicool — 20,000 m³/hr" />
          <div className="space-y-10">
            {jumboSeries.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SS Aircon + Symphony ─────────────────────────────────────────────── */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Our Partnership</span>
              <h2 className="section-title mt-2 mb-4">Why Choose SS Aircon for Symphony?</h2>
              <p className="section-subtitle mb-6">
                As an authorised Symphony dealer, SS Aircon provides genuine products, professional site
                surveys, expert installation, and prompt after-sales service across Tamil Nadu.
              </p>
              <ul className="space-y-3">
                {[
                  'Genuine Symphony products with manufacturer warranty',
                  'Free site assessment & cooler capacity calculation',
                  'Professional installation by trained technicians',
                  'Annual Maintenance Contracts (AMC) available',
                  'Spare parts & consumable supply across Tamil Nadu',
                  'Emergency service support — fast response times',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <HiCheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { metric: '10+', label: 'Symphony Models', Icon: HiStar },
                { metric: '100+', label: 'Cooler Installations', Icon: HiGlobe },
                { metric: '24/7', label: 'Service Support', Icon: HiShieldCheck },
                { metric: 'Pan TN', label: 'Service Coverage', Icon: HiLightningBolt },
              ].map(({ metric, label, Icon }) => (
                <div key={label} className="bg-primary-50 border border-primary-100 rounded-xl p-5 text-center">
                  <Icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-primary-900">{metric}</p>
                  <p className="text-xs text-slate-600 mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ── CTA ──────────────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-r from-primary-800 to-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MdOutlineAir className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Cool Your Industrial Space?
            </h2>
            <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
              Get a free site assessment and the right Symphony model for your factory, warehouse, or
              event venue. Contact SS Aircon today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-800 font-bold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
