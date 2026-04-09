import { useInView } from '../hooks/useInView'
import { motion } from 'framer-motion'

/**
 * Reusable section title with animated reveal.
 * Title words fly in one by one; subtitle fades up after.
 * Props: label, title, subtitle, center (bool), dark (bool)
 */
export default function SectionTitle({ label, title, subtitle, center = false, dark = false }) {
  const { ref, inView } = useInView()
  const words = title.split(' ')

  return (
    <div ref={ref} className={`mb-12 max-w-2xl ${center ? 'text-center mx-auto' : ''}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className={`section-label block mb-2 ${dark ? 'text-accent-400' : ''}`}
        >
          {label}
        </motion.span>
      )}

      {/* Word-by-word reveal */}
      <h2 className={`section-title ${dark ? 'text-white' : ''}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 + words.length * 0.07 }}
          className={`section-subtitle ${dark ? 'text-blue-200' : ''} ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
