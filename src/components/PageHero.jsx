import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiChevronRight } from 'react-icons/hi'

export default function PageHero({ title, breadcrumbs = [], bg }) {
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
      <div className="relative z-10 container-custom text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          {title}
        </motion.h1>
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
