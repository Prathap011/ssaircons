import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { achievements, vertivProjectImages, completedProjects } from '../data/siteData'
import {
  HiAcademicCap, HiLightningBolt, HiCog, HiWifi, HiArrowRight,
} from 'react-icons/hi'
import { MdOutlineEmojiEvents, MdVerified } from 'react-icons/md'

// Map icon strings to components
const iconMap = {
  award: MdOutlineEmojiEvents,
  server: HiCog,
  cpu: HiAcademicCap,
  zap: HiLightningBolt,
  wind: HiWifi,
  settings: HiCog,
}

function AchievementCard({ item, index }) {
  const { ref, inView } = useInView()
  const Icon = iconMap[item.icon] || MdVerified

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent-500" />
      </div>
      <h3 className="text-lg font-bold font-heading text-primary-800 mb-2">{item.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  )
}

function ProjectImage({ item, index }) {
  const [error, setError] = useState(false)
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
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

export default function OurProjects() {
  const { ref: statsRef, inView: statsIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Our Projects | SS Aircon HVAC Experts</title>
        <meta
          name="description"
          content="SS Aircon's project portfolio — 300+ completed HVAC projects for Tata, HCL, Airtel, IBM and many more. Achievements, Vertiv projects and client list."
        />
      </Helmet>

      <PageHero
        title="Our Projects"
        breadcrumbs={[{ label: 'Our Projects' }]}
        bg="https://images.unsplash.com/photo-1581094271901-8022df4c53f0?w=1600&auto=format&fit=crop&q=80"
      />

      {/* ── Section 1: Achievements ── */}
      <section className="section-padding bg-slate-50" id="achievements">
        <div className="container-custom">
          <SectionTitle
            label="Achievements"
            title="Award-Winning Project Excellence"
            subtitle="Recognised as the No.1 Vertiv Franchisee among 7 partners — built on critical precision air conditioning projects across India's top enterprises."
            center
          />

          {/* Highlight stat strip */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14"
          >
            {[
              { number: '300+', label: 'Projects Completed' },
              { number: '#1', label: 'Vertiv Franchisee Rank' },
              { number: '24+', label: 'Years of Experience' },
              { number: '1500+', label: 'TR Capacity Installed' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-800 rounded-2xl p-5 text-center text-white"
              >
                <div className="text-3xl font-bold font-heading text-accent-400">{s.number}</div>
                <div className="text-sm text-blue-200 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, i) => (
              <AchievementCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Our Vertiv Project (photo gallery) ── */}
      <section className="section-padding bg-white" id="vertiv-project">
        <div className="container-custom">
          <SectionTitle
            label="Our Vertiv Project"
            title="Precision Cooling in Action"
            subtitle="A glimpse of our data-centre precision air conditioning installations executed across top-tier enterprise clients."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vertivProjectImages.map((item, i) => (
              <ProjectImage key={item.src} item={item} index={i} />
            ))}
          </div>

          {/* Fallback note if images fail to load */}
          <p className="text-center text-slate-400 text-sm mt-6">
            Images sourced from our project documentation. Contact us for full portfolio.
          </p>
        </div>
      </section>

      {/* ── Section 3: Completed Projects ── */}
      <section className="section-padding bg-primary-800 text-white" id="completed-projects">
        <div className="container-custom">
          <SectionTitle
            label="Completed Projects"
            title="Trusted by Industry Leaders"
            subtitle="Over 300 successful HVAC projects delivered across India's leading corporations, banks, IT parks, and public-sector enterprises."
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
