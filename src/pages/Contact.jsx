import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | SS Aircon HVAC</title>
        <meta name="description" content="Contact SS Aircon for AC service, HVAC installation, and maintenance. Offices in Chennai and Trichy." />
      </Helmet>

      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us' }]}
        bg="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&auto=format&fit=crop&q=80"
      />

      <ContactSection />

      {/* Map embed (static placeholder) */}
      <section className="h-80 bg-slate-200 relative overflow-hidden">
        <iframe
          title="SS Aircon Chennai Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8906419219695!2d80.21083!3d12.9735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzI0LjYiTiA4MMKwMTInMzkuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
