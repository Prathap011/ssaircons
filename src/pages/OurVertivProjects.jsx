import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { achievements, vertivProjectImages, completedProjects } from '../data/siteData'
import {
  HiArrowRight, HiCheckCircle, HiChevronDown, HiChevronUp, HiCog,
  HiAcademicCap, HiLightningBolt, HiWifi,
} from 'react-icons/hi'
import { MdOutlineEmojiEvents, MdVerified } from 'react-icons/md'

const iconMap = {
  award: MdOutlineEmojiEvents,
  server: HiCog,
  cpu: HiAcademicCap,
  zap: HiLightningBolt,
  wind: HiWifi,
  settings: HiCog,
}

const customerCategories = [
  {
    category: 'Project Management Consultants (PMCs)',
    items: ['JLLM', 'Johnson Controls', 'CBRE', 'Cushman & Wakefield'],
  },
  {
    category: 'Architects',
    items: ['CS Designs', 'Edifice', 'Modarch', 'N&V Architects', 'IBS Gulf', 'Equis', 'Adriane Group'],
  },
  {
    category: 'HVAC Consultants',
    items: ['Arco Consultants', 'Air Treatment', 'Air Design', 'CB Consultants', 'Vaithiyanathan Consultants'],
  },
  {
    category: 'Builders & Developers',
    items: ['DLF', 'India Land', 'KTPL', 'TVH', 'Tamarai Tech Park', 'Raheja', 'Olympia', 'Ascendas', 'Tidel', 'Arihant', 'RMZ', 'Sri Someshwara', 'Ramanujam IT Park'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const INIT_ACHIEVEMENTS = 3
const INIT_PHOTOS = 4

function AchievementCard({ item }) {
  const Icon = iconMap[item.icon] || MdVerified
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.15)' }}
      className="flex flex-col gap-3 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <div>
        <h3 className="font-bold text-primary-800 mb-2 text-sm">{item.title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

function ProjectPhoto({ item, index }) {
  const [error, setError] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="rounded-2xl overflow-hidden shadow-md group"
    >
      {error ? (
        <div className="w-full h-56 bg-gradient-to-br from-primary-100 to-primary-300 flex items-center justify-center">
          <HiCog className="w-14 h-14 text-primary-400" />
        </div>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setError(true)}
          loading="lazy"
        />
      )}
      <div className="p-3 bg-white">
        <p className="text-xs text-slate-500 font-medium">{item.alt}</p>
      </div>
    </motion.div>
  )
}

export default function OurVertivProjects() {
  const [showAllAchievements, setShowAllAchievements] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [showAboutMore, setShowAboutMore] = useState(false)

  const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, INIT_ACHIEVEMENTS)
  const displayedPhotos = showAllPhotos ? vertivProjectImages : vertivProjectImages.slice(0, INIT_PHOTOS)

  return (
    <>
      <Helmet>
        <title>Our Vertiv Projects | SS Aircon — Precision Cooling Excellence</title>
        <meta
          name="description"
          content="SS Aircon has completed 300+ Vertiv precision air conditioning projects for Tata Communications, HCL, Airtel, Scope International and more across India."
        />
      </Helmet>

      <PageHero
        title="Our Vertiv Projects"
        breadcrumbs={[{ label: 'Services' }, { label: 'Our Vertiv Projects' }]}
        bg="/assets/vertivlanding.jpeg"
      />

      {/* Stats Strip */}
      <section className="py-10 bg-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '300+', label: 'Projects Completed' },
              { num: 'No. 1', label: 'Vertiv Franchisee' },
              { num: '20+', label: 'Years Experience' },
              { num: '24/7', label: 'Service Support' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl font-bold text-accent-400 font-heading">{s.num}</div>
                <div className="text-sm text-blue-200 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Partnership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image — top on mobile, left on md+ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-50 to-white"
            >
              <img
                src="https://www.ssaircons.com/wp-content/uploads/2022/04/New_Project__7_-removebg-preview.png"
                alt="Vertiv Precision AC"
                className="w-full h-72 md:h-96 object-contain p-6"
              />
            </motion.div>

            {/* Content — bottom on mobile, right on md+ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-primary-800 to-primary-500 mb-3">
                Authorized Franchisee — Since 2004
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-800 mb-4">
                Precision Cooling Excellence Since 2004
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Since 2004, SS Aircon has been an authorized Vertiv (formerly Emerson Network Power) franchisee,
                completing <strong className="text-primary-700">300+ precision cooling projects</strong> across
                India — serving the country's leading data centres, corporate campuses, and banking institutions.
              </p>

              {showAboutMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="text-slate-600 text-sm leading-relaxed space-y-3 mb-4">
                    <p>
                      Our customers were reached through M/s. Emerson Network Power (I) Pvt. Ltd. and include Project
                      Management Consultants such as JLLM, Johnson Controls, CBRE and Cushman &amp; Wakefield, leading
                      architects, HVAC consultants, and major builders like DLF, RMZ, Ascendas, and Embassy Group.
                    </p>
                    <p>
                      We are ranked <strong className="text-primary-700">No. 1 among 7 Vertiv franchisees</strong> in
                      South India. Our factory-trained engineers handle every stage — from feasibility and design to
                      installation, commissioning, and long-term annual maintenance contracts.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {[
                        'Factory-trained Vertiv engineers',
                        '24/7 dedicated breakdown support',
                        'Complete MS & copper piping',
                        'BMS / SNMP / DCIM integration',
                        'AMC & CAMC contracts',
                        'Own transport for site work',
                      ].map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                          <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <button
                onClick={() => setShowAboutMore(!showAboutMore)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors mt-1"
              >
                {showAboutMore ? (
                  <><HiChevronUp className="w-4 h-4" /> Show Less</>
                ) : (
                  <><HiChevronDown className="w-4 h-4" /> View More</>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Project Highlights"
            title="Proven Track Record"
            subtitle="Key precision cooling milestones delivered by SS Aircon across India's top enterprises."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedAchievements.map((item) => (
              <AchievementCard key={item.title} item={item} />
            ))}
          </motion.div>

          {achievements.length > INIT_ACHIEVEMENTS && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllAchievements(!showAllAchievements)}
                className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                {showAllAchievements ? (
                  <><HiChevronUp className="w-4 h-4" /> Show Less</>
                ) : (
                  <><HiChevronDown className="w-4 h-4" /> View More ({achievements.length - INIT_ACHIEVEMENTS} more)</>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Project Gallery"
            title="Precision Cooling in Action"
            subtitle="A glimpse of our data-centre and critical-environment precision AC installations."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPhotos.map((item, i) => (
              <ProjectPhoto key={item.src} item={item} index={i} />
            ))}
          </div>

          {vertivProjectImages.length > INIT_PHOTOS && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllPhotos(!showAllPhotos)}
                className="inline-flex items-center gap-2 bg-white border border-primary-200 hover:bg-primary-50 text-primary-800 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                {showAllPhotos ? (
                  <><HiChevronUp className="w-4 h-4" /> Show Less</>
                ) : (
                  <><HiChevronDown className="w-4 h-4" /> View More Photos</>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Customer Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Our Customers"
            title="Trusted Partners Across Industries"
            subtitle="Projects executed through Vertiv (Emerson Network Power) for India's leading organisations."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 0.55 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xs font-bold text-primary-800 mb-4 uppercase tracking-wider">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="bg-primary-50 text-primary-700 border border-primary-100 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom">
          <SectionTitle
            label="Completed Projects"
            title="Trusted by Industry Leaders"
            subtitle="Over 300 successful HVAC projects delivered across India's leading corporations, banks, and IT parks."
            center
            dark
          />
          <div className="flex flex-wrap justify-center gap-3">
            {completedProjects.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white/10 hover:bg-accent-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-default border border-white/10 hover:border-accent-500"
              >
                {name}
              </motion.span>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
              Start Your Project <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
