import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiChevronRight } from 'react-icons/hi'

export default function PageHero({ title, breadcrumbs = [], bg }) {
  const words = title.split(' ')

  return (
    <section
      className="relative py-24 md:py-32 flex items-center"
      style={{
        backgroundImage: bg ? `url(${bg})` : undefined,
        backgroundColor: bg ? undefined : '#1e3a8a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary-900/75" />

      {/* Subtle animated gradient shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-800/30 via-transparent to-accent-900/20 pointer-events-none"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 container-custom text-white">
        {/* Word-by-word title reveal */}
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: words.length * 0.08 + 0.1, duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-blue-200"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <HiChevronRight className="w-4 h-4" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{b.label}</span>
                ) : (
                  <Link to={b.href} className="hover:text-white transition-colors">{b.label}</Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}
      </div>
    </section>
  )
}
