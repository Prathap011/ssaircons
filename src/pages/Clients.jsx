import { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { clientLogos, completedProjects, partners, partners1 } from '../data/siteData'
import { HiArrowRight } from 'react-icons/hi'

const industryCategories = [
  {
    label: 'IT Industry',
    images: [
      '/assets/It_Industry/it1.jpg', '/assets/It_Industry/it2.jpg', '/assets/It_Industry/it3.jpg',
      '/assets/It_Industry/it5.jpg', '/assets/It_Industry/it6.jpg', '/assets/It_Industry/it7.jpg',
      '/assets/It_Industry/it8.jpg', '/assets/It_Industry/it9.jpg', '/assets/It_Industry/it10.jpg',
      '/assets/It_Industry/it11.jpg', '/assets/It_Industry/it12.jpg', '/assets/It_Industry/it13.jpg',
      '/assets/It_Industry/it14.jpg', '/assets/It_Industry/it15.jpg', '/assets/It_Industry/it16.jpg',
      '/assets/It_Industry/it17.jpg', '/assets/It_Industry/it18.jpg', '/assets/It_Industry/it19.jpg',
      '/assets/It_Industry/it20.jpg', '/assets/It_Industry/it21.jpg', '/assets/It_Industry/it22.jpg',
    ],
  },
  {
    label: 'Automobile Industry',
    images: ['/assets/automobile/auto1.jpg', '/assets/automobile/auto2.jpg'],
  },
  {
    label: 'Bank',
    images: [
      '/assets/bank/bank1.jpg', '/assets/bank/bank2.jpg', '/assets/bank/bank3.jpg',
      '/assets/bank/bank4.jpg', '/assets/bank/bank5.jpg', '/assets/bank/bank6.jpg',
    ],
  },
  {
    label: 'College & University',
    images: ['/assets/college/college1.jpg', '/assets/college/college2.jpg', '/assets/college/college3.jpg'],
  },
  {
    label: 'Hospital',
    images: [
      '/assets/hospital/hospital1.jpg', '/assets/hospital/hospital2.jpg',
      '/assets/hospital/hospital3.jpg', '/assets/hospital/hospital4.jpg',
    ],
  },
  {
    label: 'Office',
    images: [
      '/assets/office/office1.jpg', '/assets/office/office2.jpg', '/assets/office/office3.jpg',
      '/assets/office/office4.jpg', '/assets/office/office5.jpg', '/assets/office/office6.jpg',
      '/assets/office/office7.jpg', '/assets/office/office8.jpg',
    ],
  },
  {
    label: 'Telecom',
    images: [
      '/assets/tele/tele1.jpg', '/assets/tele/tele2.jpg', '/assets/tele/tele3.jpg',
      '/assets/tele/tele4.jpg', '/assets/tele/tele5.jpg',
    ],
  },
  {
    label: 'Hotels & Malls',
    images: [
      '/assets/hotal/hotal1.jpg', '/assets/hotal/hotal2.jpg', '/assets/hotal/hotal3.jpg',
      '/assets/hotal/hotal4.jpg', '/assets/hotal/hotal5.jpg',
    ],
  },
]

const VISIBLE = 6

function IndustryCarousel({ images }) {
  const [start, setStart] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = images.length
  const canSlide = total > VISIBLE
  const visible = images.slice(start, start + VISIBLE)

  // Auto-play: advance one image every 2.5 s, loop back to start
  useEffect(() => {
    setStart(0)
    setDirection(1)
  }, [images])

  useEffect(() => {
    if (!canSlide) return
    const timer = setInterval(() => {
      setDirection(1)
      setStart((s) => {
        const next = s + 1
        return next + VISIBLE > total ? 0 : next
      })
    }, 2500)
    return () => clearInterval(timer)
  }, [canSlide, total])

  const isLessThan6 = total <= VISIBLE

  return (
    <div className="mt-8">
      {/* Slider window */}
      <div className="overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={start}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={
              isLessThan6
                ? 'flex flex-wrap justify-center gap-5'
                : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5'
            }
          >
            {visible.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="overflow-hidden rounded-xl group cursor-default"
                style={{ width: '280px', height: '150px', maxWidth: '100%' }}
              >
                <img
                  src={img}
                  alt="client"
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      {canSlide && (
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => { setDirection(i > start ? 1 : -1); setStart(i) }}
              className={`rounded-full transition-all duration-200 ${
                i === start ? 'w-5 h-2 bg-primary-600' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function IndustrySection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const tabsRef = useRef(null)

  const handleCategory = (i) => {
    setActiveCategory(i)
    // Scroll active tab into view on mobile
    if (tabsRef.current) {
      const btn = tabsRef.current.querySelectorAll('button')[i]
      btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const cat = industryCategories[activeCategory]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionTitle
            label="Our Clients"
            title="Industries We Serve"
            subtitle="SS Aircon delivers precision HVAC solutions across a wide spectrum of industries — from IT campuses and hospitals to hotels, banks, and manufacturing plants. Explore the sectors we proudly serve."
            center
          />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          ref={tabsRef}
          className="flex flex-nowrap overflow-x-auto gap-0 justify-start lg:justify-center pb-1 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {industryCategories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => handleCategory(i)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap ${
                i === activeCategory
                  ? 'text-primary-700 border-primary-600'
                  : 'text-slate-500 border-transparent hover:text-primary-600 hover:border-primary-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <IndustryCarousel images={cat.images} key={activeCategory} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

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

      {/* Industry Clients Section */}
      <IndustrySection />

      {/* Client logos grid */}
      {/* <section className="section-padding bg-slate-50">
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
      </section> */}

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
