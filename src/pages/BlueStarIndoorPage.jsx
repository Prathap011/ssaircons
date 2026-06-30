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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
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
    image: placeholderImage,
  },
];

function UnitCard({ unit, index }) {
  const Icon = unit.icon;
  const reverse = index % 2 === 1;

  return (
    <Reveal direction={reverse ? "right" : "left"} className="w-full">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/10 transition-shadow duration-500`}
      >
        {/* Left/Right Column: Icon (Symbol) with merged margin gaps */}
        <div className={`w-full lg:w-2/5 flex items-center justify-center bg-slate-50 p-12 transition-colors duration-500 hover:bg-blue-50/50 min-h-[250px] lg:min-h-full shrink-0 border-b lg:border-b-0 border-slate-100 ${reverse ? 'lg:border-l' : 'lg:border-r'}`}>
          <Icon className="w-24 h-24 text-blue-600/20 transition-transform duration-700 hover:scale-110" />
        </div>

        <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-blue-700">
              <Icon size={22} />
            </span>
            <h3 className="text-2xl font-bold text-slate-900">{unit.title}</h3>
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
    </Reveal>
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

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6 text-center bg-white border-b border-slate-100">
        <Reveal direction="fade">
          <p className="text-blue-700 tracking-[0.3em] text-xs font-semibold mb-4 uppercase">
            Blue Star · VRF VI Plus
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Indoor Units
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Blue Star's widest range of indoor units — from sleek hi-wall
            splits to high-sensible ducted systems — engineered for precise
            comfort across every application.
          </p>
        </Reveal>
      </section>

      {/* Sub Navigation Bar */}
      <div className="border-b border-slate-100 bg-white">
        <div className="container-custom py-4 flex justify-center gap-4">
          <NavLink
            to="/our-partners/bluestar"
            end
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/our-partners/bluestar/indoor"
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Indoor
          </NavLink>
          <NavLink
            to="/our-partners/bluestar/outdoor"
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Outdoor
          </NavLink>
        </div>
      </div>

      {/* Units List */}
      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col gap-14">
        <StaggerGroup direction="up" step={0}>
          {indoorUnits.map((unit, i) => (
            <UnitCard unit={unit} index={i} key={unit.id} />
          ))}
        </StaggerGroup>
      </section>

      {/* Footer CTA strip */}
      <Reveal direction="up">
        <section className="bg-white border-t border-slate-100 py-14 px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
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
