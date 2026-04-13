import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { clientLogos, completedProjects, partners, partners1 } from '../data/siteData'
import { HiArrowRight } from 'react-icons/hi'

function ClientLogo({ client, index }) {
  const [error, setError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: (index % 4) * 0.08 }}
      className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all group"
    >
      {error ? (
        <div className="h-12 flex items-center justify-center text-sm font-semibold text-primary-700 text-center px-2">
          {client.name}
        </div>
      ) : (
        <img
          src={client.logo}
          alt={client.name}
          className="h-12 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          onError={() => setError(true)}
          loading="lazy"
        />
      )}
      <p className="text-xs text-slate-400 mt-3 font-medium text-center">{client.name}</p>
    </motion.div>
  )
}

export default function Clients() {
  const { ref: introRef, inView: introIn } = useInView()

  return (
    <>
      <Helmet>
        <title>Our Clients | SS Aircon HVAC Experts</title>
        <meta
          name="description"
          content="SS Aircon serves India's top enterprises — Tata, HCL, Infosys, Airtel, IBM and 300+ clients. Authorized partner of Blue Star, Symphony and Vertiv."
        />
      </Helmet>

      <PageHero
        title="Our Clients"
        breadcrumbs={[{ label: 'Clients' }]}
        bg="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Intro strip */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div ref={introRef} className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={introIn ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                label="Our Clients"
                title="Trusted by India's Leading Organisations"
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                SS Aircon has successfully delivered <strong>300+ HVAC projects</strong> for some of India's
                most recognized companies spanning IT, Banking, Telecom, Automobile, Public Sector and
                more.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                As an authorized franchisee of <strong>Vertiv Energy Pvt Ltd</strong> and an authorized dealer
                for <strong>Blue Star</strong> and <strong>Symphony</strong>, we bring world-class
                precision cooling solutions to every client we serve.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Become a Client <HiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { number: '300+', label: 'Projects Delivered' },
                { number: '24+', label: 'Years Serving Clients' },
                { number: '30+', label: 'Service Executives' },
                { number: '24/7', label: 'Support Available' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={introIn ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-primary-50 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold font-heading text-primary-800">{s.number}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client logos grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            label="Client Portfolio"
            title="Companies That Trust Us"
            subtitle="A selection of corporate and enterprise clients who have partnered with SS Aircon for their HVAC needs."
            center
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
            {clientLogos.map((client, i) => (
              <ClientLogo key={client.name} client={client} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* All client names as pills */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Full Client List"
            title="300+ Projects Across Industries"
            subtitle="Every name on this list represents a successful HVAC project executed with precision, quality, and on-time delivery."
            center
          />

          <div className="flex flex-wrap justify-center gap-3">
            {completedProjects.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: i * 0.025 }}
                className="bg-primary-50 text-primary-800 text-sm font-medium px-5 py-2.5 rounded-full border border-primary-100 hover:bg-primary-100 transition-colors cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Partners section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center">
          <SectionTitle
            label="Our Partners"
            title="Authorized Brand Partnerships"
            subtitle="We are proud to be the authorized dealer and franchisee of industry-leading HVAC brands."
            center
            dark
          />

          <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-6">
            Authorized Dealer
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
            {partners.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl px-8 py-4">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 object-contain"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            ))}
          </div>

          <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-6">
            Authorized Franchisee
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
            {partners1.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl px-8 py-4">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 object-contain"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            ))}
          </div>

          <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
            Get in Touch <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
