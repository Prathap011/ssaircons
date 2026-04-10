import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'IT Manager, Chennai',
    text: 'SS Aircon installed precision cooling for our data centre. The work was impeccable and the team was very professional. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Facility Manager, Thanjavur',
    text: 'Their 24/7 breakdown support saved us during a critical server room failure. Response time was under 30 minutes. Outstanding service!',
    rating: 5,
  },
  {
    name: 'Suresh Balaji',
    role: 'Operations Head, Trichy',
    text: 'Best HVAC contractor in the region. We have been with them for 5 years and they never disappoint. Competitive pricing too.',
    rating: 5,
  },
]

const cardVariants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  hover: { y: -6, boxShadow: '0 24px 48px -12px rgba(30,58,138,0.25)' },
}

const glowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
}

const quoteVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.08, rotate: -6, transition: { duration: 0.3 } },
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView()

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by hundreds of businesses and homeowners across Tamil Nadu."
          center
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-7 border border-primary-100 relative overflow-hidden h-full flex flex-col cursor-default group"
              >
                {/* Hover glow overlay */}
                <motion.div
                  variants={glowVariants}
                  className="absolute inset-0 bg-gradient-to-br from-primary-100/60 to-blue-100/60 rounded-2xl pointer-events-none"
                />

                {/* Quote icon — constrained in a fixed box so it never overflows the card */}
                <div className="w-10 h-10 mb-4 overflow-hidden relative z-10 flex-shrink-0">
                  <motion.div variants={quoteVariants}>
                    <FaQuoteLeft className="w-8 h-8 text-primary-200 group-hover:text-primary-400 transition-colors duration-300" />
                  </motion.div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow relative z-10">{t.text}</p>

                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0"
                  >
                    {t.name.charAt(0)}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary-800 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                  {/* Stars cascade in one by one */}
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{
                          delay: i * 0.15 + 0.35 + j * 0.08,
                          type: 'spring',
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <FaStar className="w-3.5 h-3.5 text-accent-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
