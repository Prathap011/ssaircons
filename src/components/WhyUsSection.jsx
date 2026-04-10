import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import {
  HiCog,
  HiUserGroup,
  HiTruck,
  HiSupport,
  HiLocationMarker,
  HiStar,
} from 'react-icons/hi'

const reasons = [
  {
    Icon: HiCog,
    title: 'Well-Equipped Infrastructure',
    description: 'Modern tools, tackles with calibration certification, and complete PPE safety kits.',
  },
  {
    Icon: HiUserGroup,
    title: 'Expert Team',
    description: '12-member project team with fitters, welders, plumbers, and electricians on call.',
  },
  {
    Icon: HiTruck,
    title: 'Own Transport Fleet',
    description: "Our own vehicles ensure timely delivery of materials and manpower to your site.",
  },
  {
    Icon: HiSupport,
    title: '24/7 Breakdown Support',
    description: 'Dedicated round-the-clock emergency service team with required tools & tackles.',
  },
  {
    Icon: HiLocationMarker,
    title: 'Wide Coverage',
    description: '30+ service executives deployed across various zones in Chennai and beyond.',
  },
  {
    Icon: HiStar,
    title: '18+ Years of Trust',
    description: '300+ completed projects across IT, Telecom, Banking, Healthcare, and Hospitality.',
  },
]

const cardVariants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  hover: { y: -8, boxShadow: '0 24px 48px -12px rgba(14,116,144,0.2)' },
}

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 8, transition: { duration: 0.35 } },
}

const topBarVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function WhyUsSection() {
  const { ref, inView } = useInView()

  return (
    <section className="section-padding bg-primary-50" id="why-us">
      <div className="container-custom">
        <SectionTitle
          label="Why Choose Us"
          title="Reasons to Choose SS Aircon"
          subtitle="Trusted by leading organizations across Tamil Nadu for 18+ years of reliable HVAC expertise."
          center
        />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 group cursor-default relative overflow-hidden h-full"
              >
                {/* Animated top accent bar */}
                <motion.div
                  variants={topBarVariants}
                  style={{ originX: 0 }}
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 to-accent-400 rounded-t-2xl"
                />

                {/* Icon in a fixed-size box — scale is contained, never overflows */}
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 overflow-hidden flex-shrink-0">
                  <motion.div variants={iconVariants}>
                    <r.Icon className="w-6 h-6 text-primary-700" />
                  </motion.div>
                </div>

                <h3 className="font-heading font-semibold text-primary-800 text-lg mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {r.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
