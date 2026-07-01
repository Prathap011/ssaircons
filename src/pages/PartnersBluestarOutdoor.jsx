import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { Reveal } from './ScrollReveal'
import { Wind, Layers, Gauge, Cpu } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const DUMMY_IMG = 'https://via.placeholder.com/700x520/eef2f7/64748b?text=Blue+Star'

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const outdoorProducts = [
  {
    id: 'next-gen-inverter-ducted',
    page: 9,
    category: 'Ducted Systems',
    title: 'Next Generation Inverter Ducted Split & Packaged System',
    range: 'Air-Cooled Ducted Splits: 7HP, 11HP, 14HP, 21HP, 28HP | Air-Cooled Packaged Units: 6.25HP, 10HP, 14HP, 21HP, 28HP',
    applications: ['Hospital', 'Retail', 'Hotels', 'Offices'],
    image: "/assets/outdoor/outdoor1.png",
    features: [
      'Advanced Inverter Compressors',
      'Precise temperature control with special electronic expansion valve ensures consistent comfort across varying loads',
      'High ambient operation with a specially designed outdoor unit',
      'Long refrigerant pipe lengths up to 60m and enhanced aesthetics',
      'Compatibility with AHUs for special applications',
      'Special touch-screen controller with user-friendly interface',
      'Advanced Control Options: Group control, BMS integration, and web-based control',
      'Available in both floor and ceiling mounted configurations',
      'Operation at higher ambient temperatures, up to 52°C',
      'BIS-certified'
    ]
  },
  {
    id: 'air-cooled-ducted-packaged',
    page: 11,
    category: 'Ducted Systems',
    title: 'Air-Cooled Ducted Split and Packaged Air Conditioners',
    range: 'Air-Cooled Ducted Splits: 3TR, 4.3TR, 5.5TR, 8.5TR, 11TR, 16.5TR, 22TR | Air-Cooled Packaged Units: 5.5TR, 8.5TR, 11TR, 16.5TR, 23TR',
    applications: ['Banquets', 'Hotels', 'Offices', 'Cafeterias'],
    image: "/assets/outdoor/outdoor2.png",
    features: [
      'Adaptable installation with packaged and ducted split choices for versatile cooling needs',
      'Intelligent microcontroller for smart system control and protection',
      'Powerful cooling with reduced energy consumption for efficient performance',
      'Even air distribution ensures consistent comfort across the space',
      'Dependable performance backed by durable components and rigorous testing',
      'Non-stop operation even at high ambient temperatures up to 50°C',
      'Wireless operation support for ducted split systems for user convenience',
      'Blue fin condenser and corrosion-resistant body for long-lasting durability',
      'Outdoor unit designed for easy servicing with accessible compressors and control panel',
      'BIS-certified for safety, reliability, and performance assurance'
    ]
  },
  {
    id: 'water-cooled-ducted-packaged',
    page: 12,
    category: 'Ducted Systems',
    title: 'Water-Cooled Ducted Split and Packaged Air Conditioners',
    range: 'Ductable Split Units: 3TR, 5.5TR, 11TR | Packaged Units: 5.5TR, 11TR, 16.5TR | Mini Series: 1TR, 1.5TR, 2TR, 2.5TR',
    applications: ['Mall', 'Retail', 'Hotels', 'Offices'],
    image: "/assets/outdoor/outdoor3.png",
    features: [
      'Space-saving ceiling suspended systems maximize usable floor space',
      '1 TR to 16.5 TR capacity range meets varied cooling needs for different room sizes',
      'Water-cooled systems deliver efficient performance even during peak summers',
      'Optimal cooling performance with reduced electricity consumption',
      'Indoor unit options include concealed, Hi-Wall, and cassette types',
      'BIS-certified for assured safety, quality, and performance',
      'Independent control and billing offers tenant-level control and transparency',
      'Flexible installation with units mountable within tenant premises',
      'Phased investment enables capital deployment in stages, reducing upfront cost',
      'Enhanced aesthetics with concealed installation and no exposed outdoor units'
    ]
  },
  {
    id: 'hiper-plus',
    page: 13,
    category: 'Ducted Systems',
    title: 'HiPer+ Packaged and Ducted Split Air Conditioners',
    range: '5.5TR, 8.5TR, 11TR, 17TR',
    applications: ['Retail', 'Healthcare', 'Offices', 'Industry'],
    image: "/assets/outdoor/outdoor4.png",
    features: [
      'HiPer+ systems provide effective cooling with minimal energy usage',
      'Maintains rated cooling capacity even at 45°C ambient',
      'Offers up to 20% power savings over conventional packaged systems',
      'Designed for applications demanding higher airflow and temperature resilience',
      'Energy-efficient scroll compressors ensure optimal performance',
      'Ceiling and floor-mounted options offer flexible indoor unit placement',
      'Advanced microprocessor controller with multiple intelligent control features',
      'ECBC-compliant design meets national energy efficiency standards',
      'Suitable for IT parks, malls, showrooms, healthcare, and industrial spaces',
      'Reliable and efficient even in demanding conditions, ensuring long-term durability'
    ]
  },
  {
    id: 'vrf-v-plus',
    page: 15,
    category: 'VRF Systems',
    title: 'VRF V Plus — Top Discharge System',
    range: 'VRF V Plus (Cool Only & Heat Pump): 8HP, 10HP, 12HP, 14HP, 16HP, 18HP, 20HP, 22HP, 24HP, 26HP, 28HP | Modular Systems: Upto 112HP',
    applications: ['Healthcare', 'Commercial Application', 'Mall', 'Educational Institutes'],
    image: "/assets/outdoor/outdoor5.png",
    features: [
      'All Inverter Compressor system with special control logic',
      'Maintains 100% Capacity at 43°C, unique to Blue Star VRF',
      'Longer refrigerant piping up to 1 kilometer',
      'Operates across wide voltage range, 320 to 460 Volts',
      'Tenant Billing System for multi-tenant facilities',
      'Quiet mode and demand control operations',
      'Operation at higher ambient temperatures, up to 56°C',
      'Weather-proof ODU design',
      'Compatible with AHUs and equipped with emergency backup operation',
      'Multiple Controller options: Central Controller, Web-based control, and BMS Interface'
    ]
  },
  {
    id: 'vrf-v-s',
    page: 16,
    category: 'VRF Systems',
    title: 'VRF V S — Side Discharge System',
    range: 'VRF V S (Cool only & Heat Pump): 4HP, 5HP, 6HP, 8HP, 10HP, 12HP, 14HP, 16HP',
    applications: ['Residences', 'Hospital', 'Hotels', 'Offices', 'Industry'],
    image: "/assets/outdoor/outdoor6.png",
    features: [
      'Precise temperature control with an efficient inverter compressor',
      'Sleek and compact design ideal for space-saving installations',
      'Reliable cooling performance even at extreme ambient temperatures up to 56°C',
      'Quiet operation with demand control options for enhanced comfort',
      'AHU compatibility through an AHU kit for specialised applications',
      'Heat Pump option available for year-round heating and cooling',
      'Multiple controller options including Central Controller, Web-based control, and BMS interface',
      'Wide range of indoor unit types to suit various layout and aesthetic needs',
      'Maintains 100% Capacity at 43°C, unique to Blue Star VRF',
      'Sophisticated control options for smart, customised comfort management'
    ]
  },
  {
    id: 'vrf-lite',
    page: 17,
    category: 'VRF Systems',
    title: 'VRF Lite — Mini VRF',
    range: 'VRF Lite (Cool Only & Heat Pump): 4HP, 5HP, 6HP',
    applications: ['Residences', 'Hotels', 'Offices'],
    image: "/assets/outdoor/outdoor7.png",
    features: [
      'Sleek and compact design with specially engineered inverter compressor',
      'Quieter operation for enhanced comfort in indoor environments',
      'High ambient performance – runs efficiently even at 56°C',
      'Available in both cooling-only and heat pump configurations',
      'Refrigerant distribution kit enables flexible and efficient installation layouts',
      'Wide compatibility with multiple types of indoor units',
      'Variety of smart controller options including central, web-based, and BMS integration',
      'Wide voltage range (185V–265V) for uninterrupted air conditioning performance',
      'Weather-proof ODU design',
      'Demand Control Mode enables non-stop cooling for critical zones'
    ]
  },
  {
    id: 'diverse-units',
    page: 18,
    category: 'VRF Systems',
    title: 'Diverse Indoor & Outdoor Unit Choices For Every Need',
    range: 'Hi-Wall Units, Four-Way Cassettes, One-Way Cassettes, Compact Cassettes, Two-Way Cassettes, Treated Fresh Air Unit, Air Handling Units, Floor Mounted Packaged Units, Ductable IDUs, Concealed Splits, Verticools',
    applications: ['Residences', 'Hospitality', 'Commercial', 'Industry'],
    image: "/assets/outdoor/outdoor8.png",
    features: [
      'Hi-Wall Units',
      'Four-Way Cassettes',
      'Compact Cassettes',
      'One-Way Cassettes',
      'Two-Way Cassettes',
      'Treated Fresh Air Unit',
      'Air Handling Units',
      'Floor Mounted Packaged Units',
      'Ductable IDUs',
      'Concealed Splits',
      'Verticools'
    ]
  },
  {
    id: 'air-cooled-screw-chillers',
    page: 21,
    category: 'Chillers',
    title: 'Air-Cooled Screw Chillers (VFD & Fixed Speed)',
    range: '70TR – 540TR',
    applications: ['Hospitality', 'Healthcare', 'Commercial', 'Industry'],
    image: "/assets/outdoor/outdoor9.png",
    features: [
      'Customized mix-and-match design offers flexibility in providing optimised solution',
      'Twin rotor semi-hermetic compressors ensure reliable performance and long life',
      'Highest full-load and part-load efficiency',
      'Optional coil and fin coating increases durability in corrosive environments',
      'Project-based selection covers capacity, flow rate, dimensions, pressure drops, noise, and ambient conditions',
      'ASME-stamped pressure vessel option for high-pressure operation',
      'Easy installation with Victaulic joints, factory testing, and service-friendly layout',
      'Low noise and vibration with bird-wing fans, isolators, and acoustic enclosures',
      'Available with single or twin independent refrigerant circuits for added redundancy',
      'Environmentally friendly R-134a refrigerant',
      'BMS compatible'
    ]
  },
  {
    id: 'water-cooled-screw-chillers',
    page: 22,
    category: 'Chillers',
    title: 'Water-Cooled Screw Chillers (VFD & Fixed Speed)',
    range: '80TR – 600TR',
    applications: ['Hospitality', 'Healthcare', 'Commercial', 'Industry'],
    image: "/assets/outdoor/outdoor10.png",
    features: [
      'Flexible mix-and-match design to suit various applications and project needs',
      'Twin rotor semi-hermetic compressors ensure long-lasting and reliable performance',
      'Highest full-load and part-load efficiency',
      'Single or twin independent refrigerant circuits enhance system redundancy',
      'ASME-stamped pressure vessels ensure global compliance',
      'VFD ensures low starting current and efficient part-load operation',
      'Advanced microcontroller offers flexible control both pre- and post-commissioning',
      'Compact and lightweight design simplifies installation and saves space',
      'Exceeds international (ASHRAE) and domestic (ECBC) energy efficiency norms',
      'Quiet operation and programmable speeds improve comfort and reduce energy use'
    ]
  },
  {
    id: 'air-cooled-scroll-chillers',
    page: 23,
    category: 'Chillers',
    title: 'Air-Cooled Scroll Chillers (Inverter & Fixed Speed)',
    range: '10TR – 120TR',
    applications: ['Hospitality', 'Healthcare', 'Commercial', 'Industry'],
    image: "/assets/outdoor/outdoor11.png",
    features: [
      'Multiple refrigerant circuits provide maximum redundancy and ensure continuous operation',
      'Supports chilled water leaving temperature range from 5°C to 15°C',
      'Offers precise chilled water temperature control up to ±0.1°C (optional)',
      'BMS compatible for seamless integration with building automation systems',
      'Pre-charged and pre-wired at the factory for quick and hassle-free installation',
      'Rapid cooling mode reaches 100% capacity within 2 minutes using intelligent logic',
      'Reliable operation even at 52°C ambient without tripping',
      'Smart PID-based microprocessor controller maintains temperature within ±0.3°C',
      'Equipped with advanced safety protections including HP/LP, anti-freeze, overload, phase loss'
    ]
  },
  {
    id: 'water-cooled-scroll-chillers',
    page: 24,
    category: 'Chillers',
    title: 'Water-Cooled Scroll Chillers (Inverter & Fixed Speed)',
    range: '10TR – 85TR',
    applications: ['Hospitality', 'Healthcare', 'Commercial', 'Industry'],
    image: "/assets/outdoor/outdoor12.png",
    features: [
      'Multiple refrigerant circuits provide maximum redundancy and ensure continuous operation',
      'Supports chilled water leaving temperature range from 5°C to 15°C',
      'Offers precise chilled water temperature control up to ±0.1°C (optional)',
      'BMS compatible for seamless integration with building automation systems',
      'Pre-charged and pre-wired at the factory for quick and hassle-free installation',
      'Rapid cooling mode reaches 100% capacity within 2 minutes using intelligent logic',
      'Smart PID-based microprocessor controller maintains temperature within ±0.3°C',
      'Built-in condenser health prediction alerts de-scaling requirements',
      'Equipped with advanced safety protections including HP/LP, anti-freeze, overload, phase loss'
    ]
  },
  {
    id: 'oil-free-configured-chillers',
    page: 25,
    category: 'Chillers',
    title: 'Oil-Free Configured Chillers',
    range: '70TR – 450TR',
    applications: ['Hospitality', 'Healthcare', 'Commercial', 'Industry'],
    image: "/assets/outdoor/outdoor13.png",
    features: [
      'Magnetic levitation compressors eliminate oil, ensuring higher efficiency and zero mechanical contact',
      'All oil-related performance losses are removed, significantly reducing maintenance needs',
      'Inbuilt VFD precisely controls compressor speed for maximum part-load efficiency',
      'Custom-designed for each project using a wide range of coolers, condensers, and compressors',
      'Available in single and twin circuits for maximum redundancy',
      'Capable of delivering chilled water temperatures up to 20°C',
      'Compact footprint allows easy installation through standard doorways',
      'Highest full-load and part-load efficiency',
      'Starts with less than 2 amps current, helping optimize DG sizing',
      'Restarts within 30 seconds and runs silently at 70 dBA @ 1 meter'
    ]
  },
  {
    id: 'centrifugal-chillers',
    page: 26,
    category: 'Chillers',
    title: 'Centrifugal Chillers (VFD & Fixed Speed)',
    range: 'Up to 1000TR',
    applications: ['Hospitality', 'Healthcare', 'Commercial', 'Industry'],
    image: "/assets/outdoor/outdoor14.png",
    features: [
      'Best COP and ISEER (Star labelled) to meet ECSBC guidelines',
      'Energy Optimization Feature that intelligently locks the chiller based on actual capacity requirement',
      'Refrigerant Leak Detection to proactively popup leak alarms, first in the industry',
      'GPRS-based Remote Monitoring System for real-time chiller performance tracking',
      'Condenser Health Prediction - indication for descaling',
      'Double-stage semi-hermetic compressor with refrigerant-cooled motor',
      'Precisely pre-charged A1 safety-classified refrigerant at the factory',
      '100% capacity at 32°C condenser entry temperature (no deration under Indian conditions)',
      'Unit mounted VFD ensures compact design and eliminates external mounting / losses'
    ]
  },
  {
    id: 'cassette-ac',
    page: 31,
    category: 'Light Commercial Systems',
    title: 'Cassette Air Conditioners',
    range: 'Inverter: 1.5TR, 2TR, 3TR, 4TR | Fixed Speed: 1.5TR, 2TR, 3TR, 4TR',
    applications: ['Offices', 'Retail Stores', 'Salons', 'Home'],
    image: "/assets/outdoor/outdoor15.png",
    features: [
      'Elegant design, seamlessly blending with interiors',
      'Super Silent operation powered by BLDC motor',
      'Eco-friendly low GWP R-32 refrigerant for responsible cooling',
      'Inbuilt drain pump for hassle-free continuous operation',
      'Special blue fins for enhanced corrosion protection',
      'ON/OFF timer operation for convenience',
      '5-step swing louvres for customisable air flow',
      'Precise temperature control (0.5°C accuracy)',
      '360° air flow for uniform cooling',
      'Available in 3 Star, 5 Star',
      'Fresh air intake provision for improved AQ',
      'Maximum air flow with multispeed options'
    ]
  },
  {
    id: 'concealed-splits',
    page: 32,
    category: 'Light Commercial Systems',
    title: 'Concealed Splits',
    range: 'Fixed Speed: 1.5TR, 2TR | Inverter Cool Only: 1.5TR, 2TR | Inverter Heat Pump: 1.5TR, 2TR',
    applications: ['Hospital', 'Hotels', 'Retail', 'Offices'],
    image: "/assets/outdoor/outdoor16.png",
    features: [
      'Compact and sleek indoor units',
      'Minimal noise for enhanced comfort',
      'Flexible to install and improved aesthetics',
      'Eco-friendly, R32 energy-efficient refrigerant',
      'Outdoor unit features a variable capacity inverter rotary compressor, highly efficient',
      'Available with cooling-only and Heat pump options with inverter compressor',
      'Operates efficiently even at ambient temperatures up to 52°C',
      'Designed in accordance with IS8148 standards',
      'Features anti-corrosion coating and blue fins for enhanced outdoor unit durability',
      'Wide operating voltage range: 185V to 265V'
    ]
  }
]

const categories = [...new Set(outdoorProducts.map(p => p.category))]

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

function getCategoryIcon(category) {
  switch (category) {
    case 'Ducted Systems':
      return Wind
    case 'VRF Systems':
      return Layers
    case 'Chillers':
      return Gauge
    case 'Light Commercial Systems':
    default:
      return Cpu
  }
}

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0
  const isImageAvailable = product.image && 
                           !product.image.includes('via.placeholder') && 
                           !product.image.includes('placeholder.com') && 
                           !product.image.includes('placehold.co')
  const Icon = getCategoryIcon(product.category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 md:grid-cols-2 items-stretch bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image — full height, white background */}
      <div className={`relative min-h-[420px] flex items-center justify-center overflow-hidden ${isEven ? '' : 'md:order-2'}`}>
        {isImageAvailable ? (
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 hover:bg-primary-50/50 transition-colors duration-500">
            <Icon className="w-24 h-24 text-primary-600/20 transition-transform duration-700 group-hover:scale-110" />
          </div>
        )}
        <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary-800 to-primary-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
          {product.title}
        </span>
      </div>

      {/* Content */}
      <div className={`p-8 flex flex-col justify-between ${isEven ? '' : 'md:order-1'}`}>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary-900 mb-3">
            {product.title}
          </h3>

          {/* Applications */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.applications.map(app => (
              <span
                key={app}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100"
              >
                {app}
              </span>
            ))}
          </div>

          {/* Features */}
          {product.features?.length > 0 && (
            <h4 className="text-sm font-semibold text-primary-800 mb-2">Key Features:</h4>
          )}
          {product.features?.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                  <HiCheckCircle className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Range */}
        <div className="pt-4 mt-6 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
            Range
          </p>
          <p className="text-sm font-medium text-slate-700">{product.range}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function PartnersBluestarOutdoor() {
  return (
    <>
      <Helmet>
        <title>Blue Star Outdoor Products | SS Aircon — Authorized Dealer</title>
        <meta
          name="description"
          content="Explore Blue Star outdoor air conditioning systems, VRF condenser units, outdoor chillers, and heat pumps, supplied and installed by SS Aircon."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6 text-center bg-white border-b border-slate-100">
        <Reveal direction="fade">
          <p className="text-blue-700 tracking-[0.3em] text-xs font-semibold mb-4 uppercase">
            Blue Star Outdoor
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Outdoor Units & Systems
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A comprehensive range of Blue Star outdoor condensing units — ducted splits & packaged systems, VRF outdoor units, chillers, and light commercial outdoor units — engineered for India's toughest ambient conditions.
          </p>
        </Reveal>
      </section>

      {/* Sub Navigation Bar */}
      <div className="border-b border-slate-100 bg-white">
        <div className="container-custom py-4 flex justify-center gap-4">
          <NavLink
            to="/our-partners/bluestar"
            end
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/our-partners/bluestar/indoor"
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Indoor
          </NavLink>
          <NavLink
            to="/our-partners/bluestar/outdoor"
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Outdoor
          </NavLink>
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((cat, catIdx) => {
        const catProducts = outdoorProducts.filter(p => p.category === cat)
        return (
          <section
            key={cat}
            className={`section-padding ${catIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="container-custom">
              <SeriesDivider label={cat} />
              <div className="space-y-10">
                {catProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="section-padding bg-primary-700">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need help selecting the right Blue Star outdoor unit?
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Our engineers can help you size and specify the right outdoor condensing unit, VRF system, or chiller for your project.
            </p>
            <NavLink
              to="/contact"
              className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to Our Team
            </NavLink>
          </motion.div>
        </div>
      </section>
    </>
  )
} 