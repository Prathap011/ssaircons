import { Helmet } from 'react-helmet-async'
import HeroSlider from '../components/HeroSlider'
import StatsSection from '../components/StatsSection'
import ProductsSection from '../components/ProductsSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import WhyUsSection from '../components/WhyUsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import { partners, partners1 } from '../data/siteData'

function PartnersStrip() {
  const all = [...partners, ...partners1]

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="container-custom text-center">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Authorized Dealer &amp; Franchisee
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {all.map((p) => (
            <img
              key={p.name}
              src={p.logo}
              alt={p.name}
              className="h-14 object-contain transition-transform duration-300 hover:scale-110"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  return (
    <>
      <Helmet>
        <title>SS Aircon | Best AC Service &amp; The HVAC Experts in Chennai</title>
        <meta name="description" content="SS Aircon – India's leading HVAC company since 2004. AC installation, servicing, maintenance, VRF/VRV, chillers and more." />
      </Helmet>
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <WhyUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <PartnersStrip />
    </>
  )
}
