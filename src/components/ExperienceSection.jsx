import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView' // adjust path as needed
import SectionTitle from './SectionTitle'       // adjust path as needed

const services = [
  {
    label: 'HVAC System Design & Selection',
    badge: 'Engineering',
    title: 'HVAC System Design & Selection',
    body: 'Our certified engineers evaluate your space, load requirements, and operational needs to recommend the optimal HVAC system — from split units to central air handling plants.',
    stats: [
      { num: '500+', lbl: 'Projects Designed' },
      { num: '15+', lbl: 'Years Experience' },
    ],
  },
  {
    label: 'HVAC Project Executions',
    badge: 'Installation',
    title: 'End-to-End Project Executions',
    body: 'We handle complete turnkey HVAC project execution — from site survey and design to procurement, installation, testing, and commissioning — on time and within budget.',
    stats: [
      { num: '300+', lbl: 'Projects Delivered' },
      { num: '98%', lbl: 'On-Time Rate' },
    ],
  },
  {
    label: 'HVAC Services & Maintenance Works',
    badge: 'Maintenance',
    title: 'HVAC Services & Maintenance Works',
    body: 'Comprehensive AMC and NAMC packages to keep your systems running at peak efficiency. Our certified technicians perform scheduled servicing, filter changes, and performance checks.',
    stats: [
      { num: '1000+', lbl: 'Units Maintained' },
      { num: '24/7', lbl: 'Support' },
    ],
  },
  {
    label: 'Ventilation System Design & Installation',
    badge: 'Ventilation',
    title: 'Ventilation System Design & Installation',
    body: 'Expert design and installation of fresh-air ventilation, exhaust, and pressurisation systems for commercial, industrial, and institutional buildings to ensure healthy indoor air quality.',
    stats: [
      { num: '200+', lbl: 'Systems Installed' },
      { num: '100%', lbl: 'Code Compliant' },
    ],
  },
  {
    label: 'ITC of Domestic & Industrial A/C Systems',
    badge: 'Testing',
    title: 'ITC of All Type of Domestic & Industrial A/C Systems',
    body: 'Initial testing and commissioning (ITC) of all domestic and industrial air-conditioning systems, ensuring correct operation, optimal performance, and compliance with manufacturer specifications.',
    stats: [
      { num: '400+', lbl: 'Systems Commissioned' },
      { num: '100%', lbl: 'First-Pass Rate' },
    ],
  },
  {
    label: 'Planned Preventive Maintenance (CAMC/NCAMC)',
    badge: 'AMC',
    title: 'Planned Preventive Maintenance Services (CAMC/NCAMC)',
    body: 'Structured CAMC and NCAMC contracts with scheduled visits, performance audits, and priority response, keeping your HVAC assets in peak condition and extending equipment life.',
    stats: [
      { num: '150+', lbl: 'Active AMC Clients' },
      { num: '30%', lbl: 'Energy Savings' },
    ],
  },
  {
    label: 'Emergency / Breakdown Support',
    badge: 'Emergency',
    title: 'Emergency / Breakdown Service Support',
    body: 'Round-the-clock emergency response for critical failures. Our rapid deployment team reaches your site within 30 minutes across our service zones, minimising downtime.',
    stats: [
      { num: '<30 min', lbl: 'Response Time' },
      { num: '365', lbl: 'Days a Year' },
    ],
  },
  {
    label: 'Rental / Standby A/C Solutions',
    badge: 'Rental',
    title: 'Rental / Standby A/C Solutions',
    body: 'Flexible short-term and long-term rental of portable and packaged air-conditioning units for events, construction sites, server rooms, and disaster-recovery situations.',
    stats: [
      { num: '50+', lbl: 'Rental Units' },
      { num: 'Same Day', lbl: 'Deployment' },
    ],
  },
  {
    label: 'Complete Ducting Solutions',
    badge: 'Ducting',
    title: 'Complete Ducting Solutions',
    body: 'Design, fabrication, and installation of GI, pre-insulated, and flexible ducting systems for efficient air distribution across commercial, industrial, and cleanroom environments.',
    stats: [
      { num: '10,000+', lbl: 'Sq ft Ducted' },
      { num: '15+', lbl: 'Years Expertise' },
    ],
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
    <path d="M3 8l3.5 3.5L13 4.5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ExperienceSection() {
  const { ref, inView } = useInView()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive(prev => (prev + 1) % services.length)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const current = services[active]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Experience & Knowledge"
          title="Engineered HVAC Solutions for Every Need"
          subtitle="SS Aircon is proud to offer precision-engineered HVAC solutions as part of our comprehensive business portfolio."
          center
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center mt-12">
          {/* Left — service list */}
          <div className="flex flex-col gap-3">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                onClick={() => setActive(i)}
                className={`flex items-start gap-3 px-4 py-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                  active === i
                    ? 'border-primary-400 bg-primary-50'
                    : 'border-primary-100 bg-white hover:bg-primary-50'
                }`}
              >
                <div className="w-7 h-7 rounded-md bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <span className="text-sm text-slate-700 leading-snug">{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Right — animated detail panel */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-primary-100 p-8 flex flex-col gap-5 shadow-sm"
              >
                <span className="inline-block text-xs font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full w-fit">
                  {current.badge}
                </span>
                <h3 className="text-xl font-medium text-slate-800 leading-snug">{current.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{current.body}</p>
                <div className="flex gap-8 pt-2 border-t border-primary-50">
                  {current.stats.map(st => (
                    <div key={st.lbl} className="flex flex-col gap-0.5">
                      <span className="text-2xl font-medium text-primary-700">{st.num}</span>
                      <span className="text-xs text-slate-400">{st.lbl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 justify-center mt-5">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === active ? 'bg-primary-600 scale-125' : 'bg-primary-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}