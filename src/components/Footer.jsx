import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Company Profile', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Our Projects', href: '/about#projects' },
  { label: 'Clients', href: '/about#clients' },
  { label: 'Contact Us', href: '/contact' },
]

const productLinks = [
  { label: 'Precision Air Conditioning', href: '/products#precision' },
  { label: 'Bluestar Chiller / VRF / Ductable', href: '/products#bluestar' },
  { label: 'Symphony Air Coolers', href: '/products#symphony' },
  { label: 'Air Testing & Balancing', href: '/services' },
  { label: 'Water Balancing', href: '/services' },
  { label: 'VRF / VRV', href: '/services' },
  { label: 'Ventilation System', href: '/services' },
  { label: 'Centralized HVAC Services', href: '/services' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <div className="font-heading font-bold text-2xl">
              <span className="text-accent-800">SS AIRCON</span>
            </div>
            <div className="text-xs text-primary-300 mt-0.5">HVAC Experts Since 2004</div>
          </Link>
          <p className="text-white text-sm leading-relaxed mb-5">
            SS AIRCON was started on 14th April 2004. We are an authorized dealer for Blue Star Limited
            and Symphony Industrial Air Coolers, and an authorized franchisee of Vertiv Energy Pvt Ltd.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/AirconSs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5 text-white border-b border-white/10 pb-3">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-white text-sm hover:text-accent-300 inline-flex items-center gap-1.5 transition-all duration-200 group hover:translate-x-1"
                >
                  <span className="text-accent-400 group-hover:translate-x-1 transition-transform duration-200">&rsaquo;</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5 text-white border-b border-white/10 pb-3">
            Products &amp; Services
          </h4>
          <ul className="space-y-2.5">
            {productLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-white text-sm hover:text-accent-300 inline-flex items-center gap-1.5 transition-all duration-200 group hover:translate-x-1"
                >
                  <span className="text-accent-400 group-hover:translate-x-1 transition-transform duration-200">&rsaquo;</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5 text-white border-b border-white/10 pb-3">
            Contact Info
          </h4>
          <div className="space-y-5">
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 text-accent-400">Chennai</p>
              <div className="flex gap-2 text-white text-sm">
                <HiLocationMarker className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-400" />
                <span>No.18/2, Village Road, Balaji Nagar, Puzhuthivakkam, Chennai - 600091</span>
              </div>
            </div>
            <div className="flex gap-2 text-white text-sm">
              <HiPhone className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-400" />
              <a href="tel:8056041921" className="hover:text-accent-300 transition-colors">8056041921</a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:sales@ssaircons.com"
                className="flex items-center gap-2 text-white text-sm hover:text-accent-300 transition-colors"
              >
                <HiMail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                sales@ssaircons.com
              </a>
              <a
                href="mailto:service@ssaircons.com"
                className="flex items-center gap-2 text-white text-sm hover:text-accent-300 transition-colors"
              >
                <HiMail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                service@ssaircons.com
              </a>
            </div>
            <div>
              <p className="text-accent-400 text-xs font-bold uppercase tracking-widest mb-2">Thanjavur</p>
              <div className="flex gap-2 text-white text-sm">
                <HiLocationMarker className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-400" />
                <span>No.4 &amp; 5, Sai Ram Complex, Kamala Avenue, Alagammal Nagar, Thanjavur - 613 005</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/80">
          <span>&copy; {year} SS Aircon. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Crafted with <HiLocationMarker className="w-4 h-4 text-accent-400" /> in Chennai
          </span>
        </div>
      </div>
    </footer>
  )
}
