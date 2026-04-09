import { useInView } from '../hooks/useInView'
import { motion } from 'framer-motion'

/**
 * Reusable section title with animated reveal.
 * Props: label, title, subtitle, center (bool), dark (bool)
 */
export default function SectionTitle({ label, title, subtitle, center = false, dark = false }) {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className={`mb-12 ${center ? 'text-center mx-auto' : ''} max-w-2xl ${center ? 'mx-auto' : ''}`}>
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
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`section-title ${dark ? 'text-white' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`section-subtitle ${dark ? 'text-blue-200' : ''} ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
