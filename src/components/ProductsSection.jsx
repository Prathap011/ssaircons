import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { products } from '../data/siteData'
import SectionTitle from './SectionTitle'
import { HiArrowRight } from 'react-icons/hi'

function ProductCard({ product, index }) {
  const { ref, inView } = useInView()
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      <div className="relative h-52 overflow-hidden bg-slate-100">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 text-5xl">
            ❄️
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-heading font-semibold text-primary-800 text-lg mb-2">{product.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-grow">{product.description}</p>
        <Link
          to="/products"
          className="mt-4 inline-flex items-center gap-1 text-primary-700 font-semibold text-sm hover:text-accent-500 transition-colors group/link"
        >
          More Info
          <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white" id="products">
      <div className="container-custom">
        <SectionTitle
          label="Our Products"
          title="Top-Quality HVAC Products"
          subtitle="From precision cooling to large-scale chillers — we supply and install the right solution for every need."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary">
            View All Products <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
