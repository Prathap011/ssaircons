import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { HiArrowRight, HiCheckCircle, HiOfficeBuilding, HiHeart, HiHome, HiTag, HiAcademicCap, HiLibrary } from 'react-icons/hi'


const applications = [
    { Icon: HiHeart, label: 'Hospitals' },
    { Icon: HiAcademicCap, label: 'Auditoriums' },
    { Icon: HiLibrary, label: 'Supermarkets' },
    { Icon: HiOfficeBuilding, label: 'Malls' },
    { Icon: HiHome, label: 'Hotels' },
    { Icon: HiTag, label: 'Buildings' },
]

const solutions = [
    'Centralized air conditioning for home & offices',
    'Centralized air conditioning for hospitals',
    'Centralized air conditioning for buildings',
    'Centralized air conditioning for hotels',
    'Centralized air conditioning for auditoriums etc.',
]

const features = [
    'No matter if you are looking for centralized air conditioning solutions for a small or large area, it will be easily and quickly done',
    'You will get centralized air conditioning services within minimal cost investment',
    'Blower, compressor, condenser, and other equipments will be properly tested before installation',
    'Our engineers are not only engaged in installation of centralized air conditioning machines but also they take care of ventilation and heating issues',
    'No matter in which area you want installation of air conditioners, the process will be easily executed without any problem',
]

const features1 = [
    'Hospitals',
    'Auditoriums',
    'Supermarkets',
    'Malls',
    'Hotels',
    'Buildings',
]

const features2 = [
    'Centralized air conditioning for home & offices',
    'Centralized air conditioning for hospitals',
    'Centralized air conditioning for buildings',
    'Centralized air conditioning for hotels',
    'Centralized air conditioning for auditoriums etc.'
]

const features3 = [
    'No matter if you are looking centralized air conditioning solutions to be installed in small or large area, it will be easily and quickly done.',
    'You will get centralized air conditioning services within minimal cost investment.',
    'Blower, compressor, condenser, and other equipments will be properly tested before installation.',
    'Our engineers are not only engaged in installation of centralized air conditioning machines but also they take care of ventilation and heating issues.',
    'No matter in which area you want installation of air conditioners, the process will be easily executed without any problem.',
]

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function CentralizedAC() {
    const { ref: feat, inView: featIn } = useInView()
    const { ref: sol, inView: solIn } = useInView()

    return (
        <>
            <Helmet>
                <title>Centralized Air Conditioning | SS Aircon</title>
                <meta name="description" content="SS Aircon provides the best centralized air conditioning solutions for hospitals, auditoriums, supermarkets, malls, hotels, and buildings across Tamil Nadu." />
            </Helmet>

            <PageHero
                title="Centralized Air Conditioning"
                breadcrumbs={[{ label: 'Products' }, { label: 'Centralized Air Conditioning' }]}
                bg="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80"
            />

            {/* Intro */}
            <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 0.08, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#93c5fd_0%,_transparent_70%)] pointer-events-none"
                />
                <div className="container-custom grid md:grid-cols-2 gap-10 items-center relative">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-4">
                            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                            <span className="text-sm font-medium text-primary-100">Best Centralized AC Solutions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-4">
                            Centralized Air Conditioning<br />for Every Space
                        </h2>
                        <p className="text-primary-200 leading-relaxed mb-3">
                            Centralized air conditioning is a system designed to control and regulate indoor air conditions, ensuring a comfortable and consistent environment across large spaces such as homes, offices, and commercial buildings.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-3 gap-3"
                    >
                        {applications.map((app, i) => (
                            <motion.div
                                key={app.label}
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                                className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover:bg-white/20 transition-colors cursor-default"
                            >
                                <app.Icon className="w-7 h-7 text-accent-400 mx-auto mb-2" />
                                <p className="text-white text-xs font-semibold">{app.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl h-full overflow-hidden shadow-sm border border-primary-100"
                    >
                        <img
                            src="/assets/cen1.jpg"
                            alt="Precision Air Conditioning"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle
                            // label="Centralized Air Conditioning"
                            title="Centralized Air Conditioning"
                        />
                        <h4 className="text-slate-600 leading-relaxed mb-4 text-sm">
                            <strong>SS AIRCON – The Expert in Centralized Air Conditioning for Listed Properties :</strong>
                        </h4>
                        {/* <div ref={feat} className="space-y-2 mb-2">
                            {features1.map((f, i) => (
                                <motion.div
                                    key={f}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={featIn ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    className="flex items-center gap-2.5 text-sm text-slate-700"
                                >
                                    <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                                    {f}
                                </motion.div>
                            ))}
                        </div> */}
                        <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                            These systems work by distributing conditioned air evenly to every corner of the space through a network of ducts, improving overall air quality and maintaining uniform temperature levels. Centralized AC solutions are ideal for large indoor areas where consistent cooling and comfort are essential.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                            Basically, air conditioning machines are used to manage the refrigeration cycle due to which air temperature remains cool. Often, evaporation or free cooling also works to keep the temperature down.
                        </p>

                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">


                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle
                            label=""
                            title="Our Scope of Centralized Air Conditioning Services"
                        />
                        <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                            Offering best suited centralized air conditioning solutions is prime factor which will be never compromised if you are getting facilities from SS AIRCON. We have best Centralized Air Conditioning solutions for all properties, like :
                        </p>
                        <div ref={feat} className="space-y-2 mb-2">
                            {features2.map((f, i) => (
                                <motion.div
                                    key={f}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={featIn ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    className="flex items-center gap-2.5 text-sm text-slate-700"
                                >
                                    <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                                    {f}
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                            However, our AC design & installation services are not limited for aforementioned specific areas only. We customise and extend our Centralized Air Conditioning services according to your needs.
                        </p>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl h-full overflow-hidden shadow-sm border border-primary-100"
                    >
                        <img
                            src="/assets/cen2.jpg"
                            alt="Precision Air Conditioning"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* <section className="section-padding bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl h-full overflow-hidden shadow-sm border border-primary-100"
                    >
                        <img
                            src="/assets/cen3.jpg"
                            alt="Precision Air Conditioning"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle
                            title="Cooling, Ventilation and Heating Solutions Together"
                        />
                        <div ref={feat} className="space-y-2 mb-2">
                            {features3.map((f, i) => (
                                <motion.div
                                    key={f}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={featIn ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    className="flex items-center gap-2.5 text-sm text-slate-700"
                                >
                                    <HiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                                    {f}
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                            No matter in which area you want installation of air conditioners, the process will be easily executed without any problem.
                        </p>

                    </motion.div>
                </div>
            </section> */}

            {/* Applications */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionTitle
                        label="Applications"
                        title="Centralized AC for All Properties"
                        subtitle="Offering best suited centralized air conditioning solutions is our prime factor — we have best solutions for all properties."
                        center
                    />
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
                    >
                        {applications.map((app) => (
                            <motion.div
                                key={app.label}
                                variants={fadeUp}
                                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(37,99,235,0.18)' }}
                                className="bg-white rounded-2xl p-5 border border-primary-100 shadow-sm text-center transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-3 mx-auto">
                                    <app.Icon className="w-7 h-7 text-primary-600" />
                                </div>
                                <p className="font-bold text-primary-800 text-sm">{app.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Solutions */}
            {/* <section className="section-padding bg-slate-50">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-primary-50 to-accent-400/10 rounded-3xl h-80 flex items-center justify-center border border-primary-100 shadow-sm"
                    >
                        <HiOfficeBuilding className="w-32 h-32 text-primary-300" />
                    </motion.div>

                    <div ref={sol}>
                        <SectionTitle label="Our Solutions" title="Centralized AC for Every Property Type" />
                        <div className="space-y-3">
                            {solutions.map((s, i) => (
                                <motion.div
                                    key={s}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={solIn ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="flex items-start gap-3 text-sm text-slate-700 bg-white rounded-xl p-4 border border-primary-50 shadow-sm"
                                >
                                    <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                    <span>{s}</span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-slate-500 text-sm mt-4 italic">
                            Our AC design &amp; installation services are not limited to the above specific areas — we customise and extend our services according to your needs.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Features */}
            <section className="section-padding bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                    <div ref={feat}>
                        <SectionTitle label="Why SS Aircon?" title="What Sets Our Service Apart" />
                        <div className="space-y-3">
                            {features.map((f) => (
                                <motion.div
                                    key={f}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={featIn ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: features.indexOf(f) * 0.1, duration: 0.4 }}
                                    className="flex items-start gap-2.5 text-sm text-slate-700"
                                >
                                    <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                    <span>{f}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl h-full overflow-hidden shadow-sm border border-primary-100"
                    >
                        <img
                            src="/assets/cen3.jpg"
                            alt="Precision Air Conditioning"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="container-custom"
                >
                    <span className="text-5xl block mb-4">❄️</span>
                    <h2 className="text-3xl font-bold font-heading mb-4">Looking for Centralized Air Conditioning?</h2>
                    <p className="text-primary-200 mb-8 max-w-xl mx-auto">
                        Contact us today and get the best centralized air conditioning solutions at minimal cost — for any space, any size, anywhere in Tamil Nadu.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                        Contact Us <HiArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </section>
        </>
    )
}
