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
          <span className="text-slate-300">India's Cheapest Appliance Service — At Your Door Step</span>
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
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-primary-800 py-3'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className={`font-heading font-bold text-xl md:text-2xl transition-colors ${scrolled ? 'text-primary-800' : 'text-white'}`}>
              <span className="text-accent-500">SS</span> AIRCON
            </div>
            <div className={`hidden sm:block text-xs leading-tight transition-colors ${scrolled ? 'text-slate-500' : 'text-blue-200'}`}>
              <div>HVAC Experts</div>
              <div>Since 2004</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                        scrolled
                          ? 'text-slate-700 hover:text-primary-700 hover:bg-primary-50'
                          : 'text-blue-100 hover:text-white hover:bg-white/10'
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
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
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
                    className={({ isActive }) => {
                      const activeClass = scrolled ? 'bg-primary-700 text-white' : 'bg-white/20 text-white'
                      const inactiveClass = scrolled ? 'text-slate-700 hover:text-primary-700 hover:bg-primary-50' : 'text-blue-100 hover:text-white hover:bg-white/10'
                      return `px-3 py-2 rounded-md font-medium text-sm transition-colors ${isActive ? activeClass : inactiveClass}`
                    }}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden lg:inline-flex btn-primary text-sm py-2.5"
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
