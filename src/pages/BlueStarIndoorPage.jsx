import React from "react";
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import { HiCheckCircle } from 'react-icons/hi'
import { Reveal, StaggerGroup } from "./ScrollReveal";
import {
  Gauge,
  Wind,
  Sparkles,
  RefreshCcw,
  Volume2,
  Building2,
  Droplets,
  Layers,
} from "lucide-react";

/**
 * Blue Star — Indoor Units Page
 * Route: /our-partners/bluestar/indoor
 *
 * Content sourced from VRF VI Plus brochure pages:
 * 53 Hi-Wall Units · 54 Four-Way Cassettes · 56 Ducatable Indoor Units
 * 57 High Sensible Ducted · 58 Low Static Ducted · 59 One-Way Cassettes
 * 62 Verticools · 63 Concealed Splits · 64 Floor Mounted Packaged Units
 * 65 Treated Fresh Air Unit
 *
 * Theme/layout parity target: /our-partners/symphony
 * Replace `placeholderImage` with extracted PDF images per unit when available.
 */

const placeholderImage =
  "https://placehold.co/640x480/f1f5f9/0a2a6b?text=Blue+Star+Unit";

const indoorUnits = [
  {
    id: "hi-wall",
    title: "Hi-Wall Units",
    capacity: "0.8 TR – 2.8 TR",
    description:
      "Aesthetically superior split units designed for residential and light commercial spaces, offering wide-angle airflow and multi-level filtration for cleaner indoor air.",
    features: [
      "Capacities: 0.8, 1.0, 1.3, 1.5, 1.7, 2.0, 2.5 & 2.8 TR",
      "Aesthetically superior with stylish design",
      "Very low noise, quiet operation",
      "Wide angle airflow for even air distribution",
      "Multi-level filtration: Active Carbon, Dust & Silver Ion filters",
      "Multi-fan speeds & multi-mode functions (Auto/Cool/Heat/Dry/Sleep)",
      "Auto restart after power cut",
      "Filter cleaning reminder",
      "Flexible airflow patterns with advanced louvres",
    ],
    icon: Wind,
    image: "/assets/indoor/indoor1.png",
  },
  {
    id: "four-way-cassette",
    title: "Four-Way Cassettes",
    capacity: "1.0 TR – 5.0 TR",
    description:
      "Ceiling-mounted cassette units delivering wide-angle four-way airflow for even distribution across the conditioned space, ideal for open offices and retail layouts.",
    features: [
      "Capacities: 1.0 to 5.0 TR across 10 variants",
      "Wide angle airflow for even air distribution",
      "Multi-mode functions: Auto, Cool, Heat, Dry, Sleep",
      "In-built drain pump with lift up to 1 metre",
      "Fresh air provision for better indoor air quality",
      "Filter clean reminder",
      "Service-friendly design with detachable grilles",
      "Saves wall and floor space",
    ],
    icon: Layers,
    image: "/assets/indoor/indoor2.png",
  },
  {
    id: "ducatable-idu",
    title: "Ducatable Indoor Units",
    capacity: "0.8 TR – 20 TR",
    description:
      "Built for long ducting runs and superior air distribution, these units suit applications demanding higher static pressure and customised duct layouts.",
    features: [
      "Wide range from 0.8 TR to 20 TR",
      "Ideal for long ducting applications",
      "Higher air quantity — wide CFM per TR options",
      "Fresh air provision (select models)",
      "Powder-coated for long life",
      "Filter clean reminder",
      "Units above 8 TR connect via AHU Kit (ordered separately)",
    ],
    icon: Building2,
    image: "/assets/indoor/indoor3.png",
  },
  {
    id: "high-sensible-ducted",
    title: "High Sensible Ducted",
    capacity: "0.8 TR – 4.0 TR",
    description:
      "Engineered to meet high sensible heat and CFM requirements, suited for spaces with high equipment loads and long duct runs.",
    features: [
      "Capacity range: 0.8 TR to 4.0 TR",
      "Designed to meet high sensible heat & CFM requirements",
      "Ideal for long ducting applications",
      "Higher air quantity per TR",
      "Powder-coated for long life",
      "Filter clean reminder",
    ],
    icon: Gauge,
    image: "/assets/indoor/indoor4.png",
  },
  {
    id: "low-static-ducted",
    title: "Low Static Ducted",
    capacity: "0.8 TR – 4.0 TR",
    description:
      "A slim, low-profile ducted unit using a BLDC motor for reduced noise and power consumption — easy to mount above a false ceiling.",
    features: [
      "Capacities: 0.8, 1.0, 1.3, 1.5, 1.7, 2.0, 2.3, 2.5, 3.2 & 4.0 TR",
      "Moderate slim construction: 200mm (0.8–2.3 TR), 260mm (2.5–4.0 TR)",
      "BLDC motor — reduced noise & power consumption",
      "In-built drain pump with lift up to 1 metre",
      "Fresh air provision",
      "Variable fan speed",
      "Hot-galvanized sheet for corrosion protection & longevity",
      "Filter clean reminder",
    ],
    icon: Volume2,
    image: "/assets/indoor/indoor5.png",
  },
  {
    id: "one-way-cassette",
    title: "One-Way Cassettes",
    capacity: "0.6 TR – 1.7 TR",
    description:
      "Ultra-slim cassette ideal for small cabins, passage areas and narrow ceiling spaces where a compact footprint is essential.",
    features: [
      "Capacities: 0.6, 0.8, 1.0, 1.3, 1.5 & 1.7 TR",
      "Compact design — only 178mm total height",
      "Ideal for small spaces, passages & narrow ceilings",
      "In-built drain pump, lift up to 1 metre",
      "Multi-mode functions and wide angle airflow",
      "Service-friendly with detachable grilles",
      "Filter clean reminder",
    ],
    icon: Sparkles,
    image: "/assets/indoor/indoor6.png",
  },
  {
    id: "verticools",
    title: "Verticools",
    capacity: "2.0 TR – 4.0 TR",
    description:
      "Floor-standing vertical units suited to large halls and spaces with ceiling space constraints, delivering powerful, far-reaching air throw.",
    features: [
      "Capacities: 2.0, 2.3, 2.8, 3.2 & 4.0 TR",
      "Ideal where ceiling space is limited",
      "Powerful air throw to cover maximum area",
      "Flexible airflow patterns with advanced louvres",
      "Auto restart after power cut",
      "Filter clean reminder",
    ],
    icon: Wind,
    image: "/assets/indoor/indoor7.png",
  },
  {
    id: "concealed-split",
    title: "Concealed Splits",
    capacity: "0.8 TR – 2.0 TR",
    description:
      "Designed to mount above a false ceiling, these ultra-slim units significantly reduce operating noise in hotel rooms, hospitals and similar small-area applications.",
    features: [
      "Capacities: 0.8, 1.0, 1.3, 1.5 & 2.0 TR",
      "Ultra slim construction — 222mm height",
      "Ideal for hotel rooms, hospitals & small areas",
      "Quiet operation — mounting above ceiling cuts noise",
      "Detachable panel for easy servicing",
      "Multi-fan speeds",
      "Powder-coated for long life",
    ],
    icon: Droplets,
    image: "/assets/indoor/indoor8.png",
  },
  {
    id: "floor-mounted-packaged",
    title: "Floor Mounted Packaged Units",
    capacity: "5.0 TR – 22 TR",
    description:
      "High-capacity floor-mounted units suited to banquet halls and large open office areas, easy to service since they sit inside the conditioned room.",
    features: [
      "Capacities: 5.0, 8.0, 10.0, 18 & 22 TR",
      "Ideal for banquet halls & large, well-defined office areas",
      "Higher air quantity advantage",
      "Fresh air designed with higher static",
      "Service-friendly — easy to maintain from inside the room",
      "Powder-coated for long life",
      "Filter clean reminder",
    ],
    icon: Building2,
    image: "/assets/indoor/indoor9.png",
  },
  {
    id: "treated-fresh-air",
    title: "Treated Fresh Air Unit",
    capacity: "3.5 TR – 6.8 TR",
    description:
      "Purpose-built for high latent load applications such as hotels, hospitals and auditoriums that demand large volumes of conditioned fresh air.",
    features: [
      "Capacities: 3.5, 5.5 & 6.8 TR",
      "Ideal for high latent load applications",
      "Suited for hotels, hospitals, auditoriums",
      "Higher air quantity advantage",
    ],
    icon: RefreshCcw,
    image: "/assets/indoor/indoor10.png",
  },
];

function UnitCard({ unit, index }) {
  const reverse = index % 2 === 1;

  return (
    <Reveal direction={reverse ? "right" : "left"} className="w-full">
      <div
        className="group grid grid-cols-1 md:grid-cols-2 items-stretch bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500"
      >
        {/* Left/Right Column: Image with zoom effect */}
        <div className={`relative min-h-[350px] md:min-h-[420px] flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 border-slate-100 ${reverse ? 'md:border-l md:order-2' : 'md:border-r md:order-1'} overflow-hidden`}>
          <img
            src={unit.image}
            alt={unit.title}
            className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className={`p-8 flex flex-col justify-start ${reverse ? 'md:order-1' : 'md:order-2'}`}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold text-primary-900">{unit.title}</h3>
            </div>

            <p className="text-sm font-semibold text-blue-700 mb-3 uppercase tracking-wide">
              Capacity: {unit.capacity}
            </p>

            <p className="text-slate-600 leading-relaxed mb-5">
              {unit.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {unit.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <HiCheckCircle
                    className="w-4 h-4 text-blue-600 mt-0.5 shrink-0"
                  />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function IndoorUnitsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom space-y-10">
        {/* Diverse Units Section */}
        <Reveal direction="up" className="w-full">
          <div
            className="group grid grid-cols-1 md:grid-cols-2 items-stretch bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500"
          >
            {/* Image Column */}
            <div className="relative min-h-[350px] md:min-h-[420px] flex items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-100 overflow-hidden">
              <img
                src="/assets/outdoor/outdoor8.png"
                alt="Diverse Indoor & Outdoor Unit Choices For Every Need"
                className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                VRF Systems
              </span>
            </div>

            {/* Content Column */}
            <div className="p-8 flex flex-col justify-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3 leading-tight">
                  Diverse Indoor & Outdoor Unit Choices For Every Need
                </h3>

                {/* Applications */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Residences', 'Hospitality', 'Commercial', 'Industry'].map(app => (
                    <span
                      key={app}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <h4 className="text-sm font-semibold text-primary-800 mb-2">Key Choices:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-4">
                  {[
                    'Hi-Wall Units',
                    'Four-Way Cassettes',
                    'Compact Cassettes',
                    'One-Way Cassettes',
                    'Two-Way Cassettes',
                    'Treated Fresh Air Unit',
                    'Air Handling Units',
                    'Floor Mounted Packaged Units',
                    'Ductable IDUs',
                    'Concealed Splits',
                    'Verticools'
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <HiCheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Range */}
              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                  Range
                </p>
                <p className="text-sm font-medium text-slate-700">
                  Hi-Wall Units, Four-Way Cassettes, One-Way Cassettes, Compact Cassettes, Two-Way Cassettes, Treated Fresh Air Unit, Air Handling Units, Floor Mounted Packaged Units, Ductable IDUs, Concealed Splits, Verticools
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Units List */}
        <StaggerGroup direction="up" step={0} className="space-y-10">
          {indoorUnits.map((unit, i) => (
            <UnitCard unit={unit} index={i} key={unit.id} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export default function BlueStarIndoorPage() {
  return (
    <div className="bg-slate-50">
      <Helmet>
        <title>Blue Star Indoor Units | SS Aircon — Authorized Dealer</title>
        <meta
          name="description"
          content="Explore Blue Star's widest range of indoor units — from sleek hi-wall splits to high-sensible ducted systems, engineered for precise comfort."
        />
      </Helmet>

      <IndoorUnitsSection />

      {/* Footer CTA strip */}
      <Reveal direction="up">
        <section className="bg-white border-t border-slate-100 py-14 px-6 text-center">
          <h2 className="text-2xl font-bold text-black mb-2">
            Need help selecting the right indoor unit?
          </h2>
          <p className="text-slate-500 mb-6">
            Our team can match capacity, airflow and ducting needs to your
            project requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </Reveal>
    </div>
  );
}
