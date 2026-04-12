import { Helmet } from 'react-helmet-async'
import HeroSlider from '../components/HeroSlider'
import StatsSection from '../components/StatsSection'
import ProductsSection from '../components/ProductsSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import WhyUsSection from '../components/WhyUsSection'
import TestimonialsSection from '../components/TestimonialsSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SS Aircon | Best AC Service & HVAC Experts in Chennai</title>
        <meta name="description" content="SS Aircon – India's leading HVAC company since 2004. AC installation, servicing, maintenance, VRF/VRV, chillers and more." />
      </Helmet>
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <WhyUsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  )
}
