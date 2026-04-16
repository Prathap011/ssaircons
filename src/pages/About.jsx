import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { capabilities, partners, partners1 } from '../data/siteData'
import {
  HiCheckCircle, HiCog, HiLocationMarker, HiSupport,
  HiUsers, HiClock, HiStar, HiBadgeCheck,
  HiLightningBolt, HiHeart, HiGlobeAlt, HiLightBulb,
} from 'react-icons/hi'
import { MdPrecisionManufacturing } from 'react-icons/md'
import ExperienceSection from '../components/ExperienceSection'
import CertificatesSection from '../components/CertificatesSection'

const sectors = [
  'IT & ITES', 'Telecom', 'Banking', 'Hospitals', 'Automobiles',
  'Factories & Offices', 'Educational Institutes', 'Hotels & Resorts',
  'Shopping Malls',
]

const team = [
  { Icon: HiCog, role: 'Project Team', count: '12 Members', detail: 'Fitters, welders, brazers, plumbers & electricians' },
  { Icon: MdPrecisionManufacturing, role: 'Ducting Team', count: '8 Members', detail: 'Specialized ducting & insulation crew' },
  { Icon: HiLocationMarker, role: 'Service Executives', count: '30+ Members', detail: 'Deployed across various zones in Chennai' },
  { Icon: HiSupport, role: 'Emergency Team', count: '24/7', detail: 'Dedicated breakdown service support' },
]

const whyChooseUs = [
  { Icon: HiUsers, title: 'Highly Skilled Engineers', desc: 'Our highly qualified, professional and experienced team leads in developing breakthrough technologies to combat client problems.' },
  { Icon: HiCog, title: 'Professional Contractors', desc: 'We deliver market-leading products & services with a touch of extravagance and innovation, leading to improved energy conservation.' },
  { Icon: HiClock, title: 'Service Within 24 Hours', desc: 'Our dedicated support team ensures rapid response breakdown service support for all our valued customers — 365 days a year.' },
  { Icon: HiStar, title: '24 Years of Experience', desc: 'Established in 2004, SS Aircon has successfully completed 300+ projects with a strong reputation for quality workmanship.' },
]

const values = [
  { Icon: HiBadgeCheck, title: 'Integrity', desc: 'Our integrity speaks volumes about our work culture. It is considered as the cornerstone of our business and the core value of our services.' },
  { Icon: HiLightningBolt, title: 'Innovation', desc: 'We pride ourselves in powering businesses with relentless innovation in technologies, approaches, methodologies and processes.' },
  { Icon: HiLightBulb, title: 'Excellence', desc: 'We never settle, as we are constantly improving upon our work to ensure we provide you with the best possible service and most up-to-date solutions.' },
  { Icon: HiGlobeAlt, title: 'Team Work', desc: 'We encourage good relationships among our employees to promote the trade of ideas and foster a collaborative spirit that drives success for our clients.' },
]

const teamPhotos = [
  { src: '/assets/homeAbout/93642.jpg', label: 'On-Site Execution' },
  { src: '/assets/homeAbout/93645.jpeg', label: 'Piping & Cooling Systems' },
  { src: '/assets/homeAbout/93648.jpeg', label: 'Blue Star Installations' },
  { src: '/assets/homeAbout/93651.jpeg', label: 'Rooftop Plant Setup' },
  { src: '/assets/homeAbout/93666.jpeg', label: 'Precision Ducting Work' },
  { src: '/assets/homeAbout/93668.jpeg', label: 'HVAC Project Delivery' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()
  const { ref: refStrength, inView: inViewStrength } = useInView()
  const { ref: refVision, inView: inViewVision } = useInView()
  const { ref: refTeam, inView: inViewTeam } = useInView()

  return (
    <>
      <Helmet>
        <title>About SS Aircon | The HVAC Experts Since 2004</title>
        <meta name="description" content="SS Aircon – Established 2004. Authorized dealer for Bluestar, Symphony and Vertiv. 300+ completed projects, 24+ years of HVAC excellence." />
      </Helmet>

      <PageHero
        title="About Our Company"
        breadcrumbs={[{ label: 'About Us' }]}
        bg="/assets/slide1.png"
      />

      {/* ── SECTION 1 · Company Overview ───────────────────────────────────── */}
      <section id="company-overview" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle
                label="About SS Aircon"
                title="High Standard Trusted & Professional Services"
              />
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  SS AIRCON was started on <strong>14th April 2004</strong> being associated with{' '}
                  <strong>Vertiv Energy Pvt Ltd</strong> (formerly known as Emerson Network Power Pvt Ltd) &amp;{' '}
                  <strong>Trane – Ingersoll-Rand</strong> as an Authorized franchisee and service partner.
                </p>
                <p>
                  M/s. SS AIRCON is one of the <strong>leading HVAC contracting companies</strong> serving the
                  industry for over <strong>24 years</strong>, handling various types of HVAC projects, services,
                  operations and maintenance. From 2004 to date we have successfully{' '}
                  <strong>completed more than 300 projects</strong> and provide post-sales support, preventive
                  maintenance, and breakdown service support for our valued customers.
                </p>
                <p>
                  We handle projects in sectors such as IT, ITES, Telecom, Banking, Hospitals, Automobiles,
                  Factories &amp; Offices, Educational Institutes, Hotels &amp; Resorts, and Shopping Malls.
                </p>
                <p>
                  At SS AIRCON, our innovative methods of servicing and engineering are a sustainable competitive
                  advantage. We deliver market-leading products and services with a touch of extravagance and
                  innovation, leading to improved energy conservation and customer-centric styling.
                </p>
                <p>
                  Established in 2004, SS Aircon delivers outstanding services leveraging unique and cost-friendly
                  solutions. Our belief in <strong>Quality</strong> has taken us far ahead of competition —
                  Quality Assurance is the cornerstone of our success.
                </p>
              </div>
            </div>

            <div ref={ref} className="space-y-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="flex items-start gap-3 bg-primary-50 rounded-xl p-3.5 border border-primary-100"
                >
                  <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 · Our Strength ────────────────────────────────────────── */}
      {/* <section className="section-padding bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#93c5fd_0%,_transparent_60%)] pointer-events-none"
        />
        <div className="container-custom relative">
          <SectionTitle label="Our Strength" title="What Makes SS Aircon Capable" center dark />
          <div ref={refStrength} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 28 }}
                animate={inViewStrength ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/10 border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-500/30 flex items-center justify-center mb-3">
                  <span className="text-accent-400 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-white text-sm leading-relaxed">{cap}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── SECTION 3 · Why Choose Us ───────────────────────────────────────── */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Why Choose Us"
            title="Reasons to Trust SS Aircon"
            subtitle="A decade and more of excellence, professionalism, and unmatched service in HVAC contracting."
            center
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((w) => (
              <motion.div
                key={w.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm text-center transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 mx-auto">
                  <w.Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-2">{w.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ── SECTION 4 · Vision & Mission ────────────────────────────────────── */}
      <section id="vision-mission" className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle label="Vision & Mission" title="Our Purpose & Direction" center />

          <div ref={refVision} className="grid md:grid-cols-2 gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inViewVision ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <HiStar className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Our Vision</h3>
              <p className="text-primary-200 text-sm leading-relaxed mb-4">
                To commit to our clients' success by providing high-quality, professional service. To fulfill
                our social responsibilities by providing a platform to attract talents and to help them realize
                their potential.
              </p>
              <p className="text-primary-200 text-sm leading-relaxed">
                To be an innovative and technologically superior company that makes this world a better place
                for future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inViewVision ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-8 border border-primary-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <HiHeart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-800 mb-4">Our Mission</h3>
              <div className="space-y-3">
                {[
                  'Maintaining integrity throughout the organization',
                  'Providing high-quality HVAC solutions',
                  'To delight our customers by exceeding their expectations in every project through exceptional performance and professionalism exhibited by our employees',
                ].map((m) => (
                  <div key={m} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <SectionTitle label="Our Values" title="The Principles That Guide Us" center />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm text-center transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-4 mx-auto">
                  <v.Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-primary-800 text-base mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5 · Our Team ────────────────────────────────────────────── */}
      <section id="our-team" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Team"
            title="Core Team"
            subtitle={
              <>
                "We are a well-led organization with a distinct approach. Our eco-friendly style of working has also been a huge contribution. Our highly qualified, professional and experienced employees lead in developing breakthrough technologies to combat client’s problems. Our distinct and loyal workforce has pushed us to a greater level of success that is dedicated and courteous.
                <br />
                <br />
                We believe in providing not just a service, but an experience, by maintaining a trusting relationship with our clients. Always ahead of our times, we lead the giants of the industry to success."
              </>
            }
            center
          />

          <div ref={ref2} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {team.map((t, i) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <t.Icon className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-800 font-heading mb-1">{t.count}</div>
                <div className="font-semibold text-slate-800 mb-2">{t.role}</div>
                <p className="text-slate-500 text-sm">{t.detail}</p>
              </motion.div>
            ))} */}
          </div>
          {/* Center Highlight Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-lg"
          >
            {/* Image */}
            <img
              src="/assets/teams.jpeg"
              alt="Our Team"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-800/40 to-transparent flex items-center">

              {/* Content */}
              <div className="px-6 md:px-12 max-w-xl text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Driven by Expertise
                </h3>
                <p className="text-sm md:text-base text-blue-100">
                  Our skilled professionals deliver reliable HVAC solutions with precision and care.
                </p>
              </div>

            </div>
          </motion.div>


          <div ref={refTeam}>
            <SectionTitle label="Team at Work" title="Our Team in Action" center />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {teamPhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inViewTeam ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl shadow-sm border border-primary-50"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">{photo.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      <CertificatesSection />

      {/* ── Sectors ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom">
          <SectionTitle
            label="Our Reach"
            title="Industries We Serve"
            subtitle="We have handled HVAC projects across a wide spectrum of sectors."
            center
            dark
          />
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((s) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 hover:bg-accent-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────────────────────── */}
      <section id="clients" className="section-padding bg-white">
        <div className="container-custom text-center">
          <SectionTitle
            label="Our Partners"
            title="Authorized Partnerships"
            subtitle="We are proud to be the authorized partner and franchisee of industry-leading HVAC brands."
            center
          />

          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Authorized Dealer
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 mb-14">
            {partners.map((p) => (
              <img
                key={p.name}
                src={p.logo}
                alt={p.name}
                className="h-16 object-contain transition duration-300 hover:scale-110"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            ))}
          </div>

          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Authorized Franchisee
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {partners1.map((p) => (
              <img
                key={p.name}
                src={p.logo}
                alt={p.name}
                className="h-16 object-contain transition duration-300 hover:scale-110"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
