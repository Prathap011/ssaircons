import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { products } from '../data/siteData'
import { HiArrowRight, HiCube } from 'react-icons/hi'

function ProductDetailCard({ product, index }) {
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      id={product.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-10 items-center py-10 border-b border-slate-100 last:border-0`}
    >
      <div className={isEven ? '' : 'md:order-2'}>
        <div className="rounded-2xl overflow-hidden h-72 shadow-xl">
          {!imgError ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-300"><HiCube className="w-20 h-20 text-primary-400" /></div>
          )}
        </div>
      </div>
      <div className={isEven ? '' : 'md:order-1'}>
        <span className="section-label block mb-2">Product</span>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-800 font-heading mb-4">{product.title}</h2>
        <p className="text-slate-600 leading-relaxed text-lg mb-6">{product.description}</p>
        <div className="flex gap-4">
          <Link to="/contact" className="btn-primary">
            Get a Quote <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | SS Aircon HVAC</title>
        <meta name="description" content="SS Aircon supplies precision air conditioners, AHUs, cassette ACs, chillers, ductable units, fan coil units and more." />
      </Helmet>

      <PageHero
        title="Our Products"
        breadcrumbs={[{ label: 'Products' }]}
        bg="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Quick nav grid */}
      <section className="py-12 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100 hover:border-primary-400 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center mb-2"><HiCube className="w-7 h-7 text-primary-600" /></div>
                <p className="text-xs font-semibold text-primary-800 leading-tight">{p.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed list */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            label="Product Range"
            title="Top-Quality HVAC Products"
            subtitle="We supply and install industry-leading HVAC equipment for residential, commercial, and industrial applications."
            center
          />
          <div>
            {products.map((p, i) => (
              <ProductDetailCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-heading mb-4">Looking for a Specific Product?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Contact us today to discuss your requirements. We'll help you choose the right HVAC solution.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
