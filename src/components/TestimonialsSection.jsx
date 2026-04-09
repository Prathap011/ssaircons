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
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-7 border border-primary-100 hover:shadow-lg transition-shadow relative"
            >
              <FaQuoteLeft className="w-8 h-8 text-primary-200 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} className="w-3.5 h-3.5 text-accent-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
