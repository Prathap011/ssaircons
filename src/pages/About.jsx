import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { capabilities, partners } from '../data/siteData'
import { HiCheckCircle, HiCog, HiLocationMarker, HiSupport } from 'react-icons/hi'
import { MdPrecisionManufacturing } from 'react-icons/md'

const sectors = [
  'IT & ITES', 'Telecom', 'Banking', 'Hospitals', 'Automobiles',
  'Factories & Offices', 'Educational Institutes', 'Hotels & Resorts',
  'Shopping Malls',
]

const team = [
  { Icon: HiCog,                    role: 'Project Team',        count: '12 Members', detail: 'Fitters, welders, brazers, plumbers & electricians' },
  { Icon: MdPrecisionManufacturing, role: 'Ducting Team',        count: '8 Members',  detail: 'Specialized ducting & insulation crew' },
  { Icon: HiLocationMarker,         role: 'Service Executives',  count: '30+ Members',detail: 'Deployed across various zones in Chennai' },
  { Icon: HiSupport,                role: 'Emergency Team',      count: '24/7',       detail: 'Dedicated breakdown service support' },
]

export default function About() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  return (
    <>
      <Helmet>
        <title>About SS Aircon | HVAC Experts Since 2004</title>
        <meta name="description" content="SS Aircon – Established 2004. Authorized dealer for Bluestar, Symphony and Vertiv. 300+ completed projects, 24+ years of HVAC excellence." />
      </Helmet>

      <PageHero
        title="About Our Company"
        breadcrumbs={[{ label: 'About Us' }]}
        bg="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&auto=format&fit=crop&q=80"
      />

      {/* About intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionTitle
                label="About SS Aircon"
                title="High Standard Trusted & Professional Services"
              />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  SS AIRCON was started on <strong>14th April 2004</strong> and is one of the leading HVAC contracting
                  companies serving the industry for the past 24+ years. We are an authorized dealer for
                  <strong> Blue Star Limited</strong> and <strong>Symphony Industrial Air Coolers</strong>.
                </p>
                <p>
                  We are also associated with <strong>Vertiv Energy Pvt Ltd</strong> (formerly known as Emerson Network
                  Power Pvt Ltd) and <strong>Trane – Ingersoll-Rand</strong> as an authorized franchisee and service partner.
                </p>
                <p>
                  From 2004 to date, we have successfully completed more than <strong>300 projects</strong> and provide
                  post-sales support, preventive maintenance, and breakdown service support for our valued customers.
                </p>
                <p>
                  At SS AIRCON, our innovative methods of servicing and engineering are a sustainable competitive advantage.
                  We deliver market-leading products and services with a touch of extravagance and innovation, leading to
                  improved energy conservation and customer-centric styling.
                </p>
              </div>
            </div>

            <div ref={ref} className="space-y-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 bg-primary-50 rounded-xl p-3.5"
                >
                  <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-50" id="experience">
        <div className="container-custom">
          <SectionTitle
            label="Our Team"
            title="Expert Team Built for Excellence"
            subtitle="Our multi-disciplinary workforce ensures end-to-end HVAC solutions with zero compromise."
            center
          />
          <div ref={ref2} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 30 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <t.Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-800 font-heading mb-1">{t.count}</div>
                <div className="font-semibold text-slate-800 mb-2">{t.role}</div>
                <p className="text-slate-500 text-sm">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
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
              <span key={s} className="bg-white/10 hover:bg-accent-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white" id="clients">
        <div className="container-custom text-center">
          <SectionTitle
            label="Our Partners"
            title="Authorized Partnerships"
            subtitle="We are proud to be the authorized partner of industry-leading HVAC brands."
            center
          />
          <div className="flex flex-wrap justify-center gap-5">
            {partners.map((p) => (
              <div key={p} className="bg-primary-50 border-2 border-primary-100 rounded-2xl px-8 py-5 font-semibold text-primary-700 hover:border-primary-400 hover:shadow-md transition-all">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
