import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'
import { navLinks } from '../data/siteData'
import { HiMenu, HiX, HiChevronDown, HiPhone, HiMail } from 'react-icons/hi'

export default function Navbar() {
  const scrolled = useScrolled(80)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary-900 text-white text-sm">
        <div className="container-custom flex justify-between items-center py-2">
          <span className="text-slate-300">India's Low-Cost Appliance Service — At Your Door Step</span>
          <div className="flex items-center gap-4">
            <a href="tel:8056041921" className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <HiPhone className="w-4 h-4" />
              8056041921
            </a>
            <span className="text-slate-500">|</span>
            <a href="mailto:sales@ssaircons.com" className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <HiMail className="w-4 h-4" />
              sales@ssaircons.com
            </a>
            <span className="text-slate-500">|</span>
            <a href="mailto:service@ssaircons.com" className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
              <HiMail className="w-4 h-4" />
              service@ssaircons.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg'
            : 'bg-primary-800'
        }`}
      >
        <div className="container-custom flex items-center justify-between py-1 md:py-1.5">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/assets/logo.jpg" alt="SS Aircon" className="h-12 md:h-14 w-auto object-contain" />
          </Link>
          {/* <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className={`font-heading font-bold text-xl md:text-2xl transition-colors ${scrolled ? 'text-primary-800' : 'text-white'}`}>
              SS AIRCON 
            </div>
            <div className={`hidden sm:block text-xs leading-tight transition-colors ${scrolled ? 'text-slate-500' : 'text-blue-200'}`}>
              <div>The HVAC Experts</div>
              <div>Since 2004</div>
            </div>
          </Link> */}

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => { if (link.children) setOpenDropdown(link.label) }}
                onMouseLeave={() => { if (link.children) setOpenDropdown(null) }}
              >
                {link.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                        scrolled
                          ? 'text-slate-700 hover:text-primary-700 hover:bg-primary-50'
                          : 'text-white hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 mt-1 z-50 min-w-[220px] bg-white rounded-xl shadow-xl border border-primary-100 py-1.5 overflow-hidden"
                        >
                          {link.children.map((child, ci) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: ci * 0.05, duration: 0.2 }}
                            >
                              <Link
                                to={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => {
                      if (scrolled) {
                        return `relative px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-sm'
                            : 'text-slate-700 hover:text-primary-700 hover:bg-primary-50'
                        }`
                      }
                      return `relative px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                        isActive ? 'bg-white/25 text-white' : 'text-white hover:text-white hover:bg-white/10'
                      }`
                    }}
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && scrolled && (
                          <span
                            className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 pointer-events-none z-10"
                            style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid #1d4ed8' }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
          >
            Contact Us
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {/* Top bar info on mobile */}
                <a href="tel:8056041921" className="flex items-center gap-2 text-sm text-primary-700 font-medium py-2 border-b border-slate-100 mb-2">
                  <HiPhone className="w-4 h-4" /> 8056041921
                </a>
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                          className="w-full flex justify-between items-center px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-primary-50"
                        >
                          {link.label}
                          <HiChevronDown
                            className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={() => { setMobileOpen(false); setOpenDropdown(null) }}
                                  className="block px-3 py-2 text-sm text-slate-600 hover:text-primary-700"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2.5 rounded-lg font-medium transition-colors ${
                            isActive ? 'bg-primary-700 text-white' : 'text-slate-700 hover:bg-primary-50'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}
                <a href="/contact" className="btn-primary mt-3 justify-center">
                  Contact Us
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
