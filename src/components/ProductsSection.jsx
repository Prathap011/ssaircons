import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { products } from '../data/siteData'
import SectionTitle from './SectionTitle'
import { HiArrowRight } from 'react-icons/hi'

const cardVariants = {
  rest: { y: 0, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.08)' },
  hover: { y: -10, boxShadow: '0 25px 50px -12px rgba(30,58,138,0.25)' },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.5, ease: 'easeOut' } },
}

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
}

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 5, transition: { duration: 0.2 } },
}

function ProductCard({ product, index }) {
  const { ref, inView } = useInView()
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
    >
      <motion.div
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col h-full cursor-default"
      >
        <div className="relative h-52 overflow-hidden bg-slate-100">
          {!imgError ? (
            <motion.img
              variants={imageVariants}
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 text-5xl">
              ❄️
            </div>
          )}
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-primary-600/10"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-heading font-semibold text-primary-800 text-lg mb-2 group-hover:text-primary-600 transition-colors duration-200">
            {product.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed flex-grow">{product.description}</p>
          <Link
            to="/products"
            className="mt-4 inline-flex items-center gap-1 text-primary-700 font-semibold text-sm hover:text-accent-500 transition-colors"
          >
            More Info
            <motion.span variants={arrowVariants}>
              <HiArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/products" className="btn-primary group">
            View All Products{' '}
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
