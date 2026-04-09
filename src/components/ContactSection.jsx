import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { offices, enquiryOptions } from '../data/siteData'
import SectionTitle from './SectionTitle'
import { HiPhone, HiMail, HiLocationMarker, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'

function validate(data) {
  const errors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^\+?[\d\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number'
  }
  if (!data.enquiry) errors.enquiry = 'Please select an enquiry type'
  if (!data.message.trim()) errors.message = 'Message is required'
  return errors
}

function OfficeCard({ office, index }) {
  const { ref, inView } = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
    >
      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
        <HiLocationMarker className="w-5 h-5 text-primary-700" />
      </div>
      <h3 className="font-heading font-bold text-primary-800 text-lg mb-3">{office.city}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{office.address}</p>
      <div className="space-y-2">
        <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-700 transition-colors">
          <HiPhone className="w-4 h-4 text-primary-500" />
          {office.phone}
        </a>
        {office.email.map((e) => (
          <a key={e} href={`mailto:${e}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-700 transition-colors">
            <HiMail className="w-4 h-4 text-primary-500" />
            {e}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default function ContactSection() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', enquiry: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    // Simulate API call (replace with actual endpoint)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setStatus('success')
    setForm({ name: '', email: '', phone: '', enquiry: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300'
        : 'border-slate-200 bg-slate-50 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:bg-white'
    }`

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50" id="contact">
      <div className="container-custom">
        <SectionTitle
          label="Get In Touch"
          title="Contact Us"
          subtitle="The experts at SS Aircon are always happy to help. Feel free to contact us for any of your HVAC needs."
          center
        />

        {/* Office cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {offices.map((o, i) => (
            <OfficeCard key={o.city} office={o} index={i} />
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100"
        >
          <h3 className="font-heading font-bold text-primary-800 text-2xl mb-8 text-center">
            Send Us a Message
          </h3>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6"
            >
              <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">Thank you! We'll get back to you within 24 hours.</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass('name')}
                autoComplete="name"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <HiExclamationCircle className="w-4 h-4" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass('email')}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <HiExclamationCircle className="w-4 h-4" /> {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass('phone')}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <HiExclamationCircle className="w-4 h-4" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Enquiry */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Enquiry For *</label>
              <select
                name="enquiry"
                value={form.enquiry}
                onChange={handleChange}
                className={inputClass('enquiry')}
              >
                <option value="">Select a service...</option>
                {enquiryOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.enquiry && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <HiExclamationCircle className="w-4 h-4" /> {errors.enquiry}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your requirement..."
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <HiExclamationCircle className="w-4 h-4" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : 'Submit Enquiry'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
