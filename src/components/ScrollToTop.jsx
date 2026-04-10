import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

/**
 * Handles two concerns:
 * 1. Scroll to top on every route change
 * 2. Renders:
 *    - A scroll-progress bar pinned at the very top of the viewport
 *    - A floating "back to top" button in the bottom-right corner
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [scrollPct, setScrollPct] = useState(0)
  const [showBtn, setShowBtn] = useState(false)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  // Track scroll position
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollPct(docH > 0 ? (y / docH) * 100 : 0)
      setShowBtn(y > 350)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // init
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Scroll progress bar ─────────────────── */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[200] pointer-events-none"
        style={{
          width: `${scrollPct}%`,
          background: 'linear-gradient(90deg, #f97316, #22d3ee)',
          transition: 'width 80ms linear',
        }}
      />

      {/* ── Back-to-top button ───────────────────── */}
      <AnimatePresence>
        {showBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.4, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              boxShadow: '0 8px 24px rgba(249,115,22,0.4)',
            }}
          >
            {/* Pulsing ring */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-accent-400"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <HiArrowUp className="w-5 h-5 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
