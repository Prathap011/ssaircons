import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
    {
        id: 1,
        cat: "Testing",
        title: "Air Testing & Balancing",
        internalRoute: "/products/air-testing",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/03/air-balancing-1.jpg",
        desc: "Air balancing is testing, adjusting, and balancing (TAB) commercial air conditioning and ventilation systems. The need for balancing first came in the early 1980s when new and more advanced A/C systems were being developed and installed. As these systems became more complex, the need for balancing increased. Independent TAB companies were created to handle these tasks.",
        extra: {
            title: "Balancing Tasks",
            points: [
                "Set up the amount of airflow that is distributed from each air diffuser.",
                "Measure total airflow on all A/C and exhaust systems.",
                "Balance airflow on each supply and exhaust grille.",
                "Balance water flow on all pumps, cooling towers, chillers, boilers, and AHU coils.",
                "Sound and vibration if required.",
            ]
        }
    },
    {
        id: 2,
        cat: "Testing",
        title: "Water Balancing",
        internalRoute: "/products/water-balancing",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/9.-Water-Balancing.jpg",
        desc: "Water balancing crosses a large expanse of different type systems. Chilled, Heating, Domestic, Condenser, and Process water systems require adjustment and balancing for proper operation. Unbalanced distribution of any type of fluid results in inefficiencies and causes the system served to work improperly. Proper water balance has long been ignored in existing facilities and has proven to be the cause of many systems failures. SS AIRCON understands that proper water balancing is as important as air balancing.",
        tags: ["Chilled Water", "Heating Water", "Domestic Water", "Condenser Water", "Process Water"],
    },
    {
        id: 3,
        cat: "Cooling",
        title: "Centralized Air Conditioning",
        internalRoute: "/products/centralized-ac",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/03/hvac.jpg",
        desc: "Centralized Air conditioning is a well-known process used for changing the behavior of air to make the environment more comfortable. The defined aim of centralized air conditioning is to distribute the air at every corner of the space where it is installed. It is designed to offer more comfort by improving air quality within homes, offices or other big indoor areas. Air conditioning machines manage the refrigeration cycle to keep the air temperature cool.",
        tags: ["Hospitals", "Auditoriums", "Supermarkets", "Malls", "Hotels", "Buildings"],
        extra: {
            title: "Applications",
            points: [
                "Hospitals and healthcare facilities requiring precise temperature and air quality control.",
                "Auditoriums and large assembly halls with high occupancy loads.",
                "Supermarkets and retail spaces needing consistent ambient conditions.",
                "Shopping malls and commercial complexes with multi-zone requirements.",
                "Hotels and hospitality venues for guest comfort.",
                "Office buildings and corporate campuses.",
            ]
        }
    },
    {
        id: 4,
        cat: "VRF/VRV",
        title: "VRF / VRV Systems",
        internalRoute: "/products/vrf-vrv",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/7.-VRF-VRV-UNIT.jpg",
        desc: "As we specialize in HVAC Domain, we provide VRV (Variable Refrigerant Volume) and VRF (Variable Refrigerant Flow) services to our clients on a turnkey basis. We are leading VRF and VRV air conditioning manufacturers providing service all across India. VRV/VRF is a modern and sophisticated technology which helps in reducing electricity consumption by regulating refrigerant flow of liquid, performing efficiently with a payback period of approximately three and a half years.",
        extra: {
            title: "Key Advantages of VRF / VRV Systems",
            points: [
                "Energy Efficiency: VRF systems use less energy - designed to provide exactly the amount of cooling needed, running less frequently and at lower capacity. Heat from the cooling process is captured and reused in other areas that may need heating.",
                "Quiet Operation: In a VRF system, the noisier condensing unit is typically outside, and the indoor air handlers are smaller and quieter than a traditional split system.",
                "Consistent Comfort: The compressor can detect the precise requirements of each zone and send the exact amount of refrigerant needed - consistently comfortable with well-controlled humidity and no hot or cold spots.",
                "Less Downtime: Designed to run only when needed and under partial-load conditions, resulting in less wear and tear. If something goes wrong with one air handler, others are often unaffected.",
                "Requires Less Space: Since air handlers are smaller and VRF systems do not usually require ducts, they do not take up as much wall and ceiling space.",
            ]
        }
    },
    {
        id: 5,
        cat: "Ventilation",
        title: "Ventilation System",
        internalRoute: "/products/ventilation",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/3.-Ventilation_Services-removebg-preview.png",
        desc: "Ventilation Contractor for Industrial Ventilation, Pollution Control, and Acoustics Services. SS AIRCON provides Industrial Ventilation Services across India for all types of commercial and industrial spaces.",
        tags: ["Commercial Kitchen Ventilation", "Industrial Ventilation", "Roof (Ceiling) Ventilation", "Factory Ventilation", "Building Ventilation", "Basement Ventilation", "Parking Ventilation", "Warehouse Ventilation", "Pollution Control System"],
        extra: {
            title: "Ventilation System is Required for",
            points: [
                "To maintain adequate supply of oxygen in the work area.",
                "To control hazardous concentration of toxic materials in the air.",
                "To remove any undesirable or unpleasant odors from a given area.",
                "To remove undesirable contaminants at their source before they enter the workplace air.",
                "To control temperature and humidity.",
            ]
        }
    },
    {
        id: 6,
        cat: "Cooling",
        title: "Centralized HVAC Services",
        internalRoute: "/products/centralized-hvac",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/03/Gurgaon-HVAC-Service-Repair-Maintenance-Installation-Maxwell-Builders-9999402080.jpg",
        desc: "From feasibility study to final handover, we manage the complete HVAC lifecycle - load calculations, equipment selection, MEP coordination, installation, commissioning, and O&M training for hospitals, data centers, malls, and more. Our team handles every kind of centralized and industrial air conditioning solution for any building type on a full turnkey basis.",
        tags: ["Industrial", "Turnkey", "O&M", "MEP Coordination", "Data Centers"],
    },
    {
        id: 7,
        cat: "Cooling",
        title: "Ductable & Packaged AC",
        internalRoute: "/services/ductable-packaged",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/Flat-Oval-duct-2-1024x768.jpg",
        desc: "We offer expert Designing and Installation Services for ductable split units and packaged air conditioners. Our packaged air conditioner is a self-contained unit that houses all cooling and heating components in a single cabinet, while ductable AC systems distribute conditioned air through a carefully designed duct network - optimized for low static pressure, uniform airflow, and acoustic performance.",
        tags: ["GI Ducts", "Flex Ducts", "Packaged Units", "Duct Design", "Acoustic Lining"],
    },
    {
        id: 8,
        cat: "Chiller",
        title: "Chiller Plant Design & Installation",
        internalRoute: "/services/chiller-plant",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/chiller-unit.jpg",
        desc: "SS AIRCON is the best Chiller Plant Design and Installation Service Provider. Our chiller plant operates on a refrigerant cycle - the refrigerant absorbs heat from the water in the evaporator, cooling it down. The chilled water then circulates through the building to cool it. We offer Air-Cooled Chillers, Water-Cooled Chillers, Skidded Chillers, and Green / Modular Chillers.",
        tags: ["Air-Cooled", "Water-Cooled", "Skidded", "Green / Modular", "Cooling Towers"],
    },
    {
        id: 9,
        cat: "Precision",
        title: "Precision Air Conditioning",
        internalRoute: "/products/precision-ac",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/Precision-AC1-1024x768.jpg",
        desc: "Precision air conditioner (precision cooling) is used to control temperature and humidity to a precision level. It is specifically designed for spaces such as data centers, server rooms, internet data rooms, medical equipment rooms, and any environment requiring critical environmental control. We are an Authorized Vertiv (formerly Emerson Network Power) franchisee and service partner.",
        tags: ["Data Centers", "Server Rooms", "Vertiv / Emerson", "Humidity Control", "24/7 Support"],
    },
    {
        id: 10,
        cat: "Precision",
        title: "Our Vertiv Projects",
        internalRoute: "/products/vertiv",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/New_Project__7_-removebg-preview.png",
        desc: "As an authorized Vertiv (Emerson Network Power) franchisee, we have delivered 300+ precision cooling projects across India. Our customers include Project Management Consultants (JLLM, Johnson Controls, CBRE, Cushman & Wakefield), leading architects, HVAC consultants, and builders such as DLF, RMZ, Ascendas, and Embassy Group.",
        tags: ["300+ Projects", "Vertiv / Emerson", "PMC Clients", "DLF", "RMZ"],
    },
    {
        id: 11,
        cat: "Engineering",
        title: "Experience & Knowledge",
        internalRoute: "/services/experience-knowledge",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/03/booyco_havc_systems-1024x555.jpg",
        desc: "SS AIRCON was started on 14th April 2004. We are authorized dealers for BLUESTAR LIMITED and SYMPHONY INDUSTRIAL AIR COOLERS, and an authorized franchisee and service partner with VERTIV ENERGY PVT LTD (formerly Emerson Network Power). We also carry out all kinds of MS/SS fabrication, roofing works, GI/PVC plumbing, and GI/Aluminium/PUF ducting works.",
        tags: ["IT & ITES", "Telecom", "Hospitals", "Banking", "Hotels & Malls"],
        extra: {
            title: "Engineered HVAC Solutions We Offer",
            points: [
                "HVAC System Design and Selection",
                "HVAC Project Executions",
                "HVAC Services and Maintenance Works",
                "Ventilation System Design and Installation",
                "ITC of all types of domestic and industrial A/C systems",
                "Planned Preventive Maintenance services (CAMC / NCAMC)",
                "Emergency / Breakdown service support",
                "Rental / Standby A/C solutions",
                "Complete Ducting solutions",
            ]
        }
    },
    {
        id: 12,
        cat: "Engineering",
        title: "Engineering & Contracting",
        internalRoute: "/services/engineering-contracting",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/03/117175924_808897579849581_2949452215847255149_n-576x1024.jpg",
        desc: "SS AIRCON provides engineered solutions for various HVAC applications with a trained and highly skilled design and drafting team, and well-experienced project delivery managers. Irrespective of project size, our design, planning and project execution teams are involved from the initial conceptual discussions right through to the final sign-off and handover. We maintain a safe work environment with appropriate PPE for all site personnel.",
        tags: ["Design-Build", "BOQ", "Site Supervision", "PMC", "Safe Work Environment"],
    },
    {
        id: 13,
        cat: "Cooling",
        title: "Air Conditioning",
        internalRoute: "/services/air-conditioning",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/04/service3.jpg",
        desc: "SS AIRCON has extensive experience and knowledge of all types of air conditioning systems - from single and multiple split systems to ducted air handlers and VRF/VRV installations. Our team of in-house air conditioning experts provide key project solutions enabling fast, effective, and reliable installation of any design requirement. From the initial concept to CAD drawings, our design team formulates the very best solution for the application.",
        tags: ["Split Systems", "Ducted Air Handlers", "VRF/VRV", "CAD Design", "Blue Star"],
    },
    {
        id: 14,
        cat: "Maintenance",
        title: "Planned Maintenance & Breakdown Support",
        internalRoute: "/services/planned-maintenance",
        img: "https://www.ssaircons.com/wp-content/uploads/2022/03/69976319_551710165568325_1461633102324432896_n-1024x768.jpg",
        desc: "We have a dedicated 24/7 emergency breakdown service support team with required tools and tackles to support our clients with 2 to 4 hours response time and 24 to 48 hours turnaround time from the time of call receipt. Our service teams are equipped with fast-moving transport and carry all essential tools and basic spare parts. Planned maintenance dates are agreed through written communication and our dedicated PM team carries out preventive maintenance within the stipulated time frame.",
        tags: ["24/7 Support", "2-4 Hr Response", "PPM", "CAMC / NCAMC", "Service Reports"],
    },
];

function useIntersectionObserver(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, ...options }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}

function ServiceRow({ service, index }) {
    const isEven = index % 2 === 0;
    const [ref, visible] = useIntersectionObserver();
    const [imgError, setImgError] = useState(false);

    const textAnim = {
        opacity: visible ? 1 : 0,
        transform: visible
            ? "translateX(0) translateY(0)"
            : `translateX(${isEven ? "-48px" : "48px"}) translateY(16px)`,
        transition: "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)",
        transitionDelay: "0.08s",
    };

    const imgAnim = {
        opacity: visible ? 1 : 0,
        transform: visible
            ? "translateX(0) translateY(0) scale(1)"
            : `translateX(${isEven ? "48px" : "-48px"}) translateY(16px) scale(0.97)`,
        transition: "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)",
        transitionDelay: "0s",
    };

    return (
        <div
            ref={ref}
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                minHeight: "500px",
                position: "relative",
                background: isEven
                    ? "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)"
                    : "#ffffff",
                borderBottom: "1px solid #e0ecff",
                overflow: "hidden",
            }}
        >
{/* Image side */}
            <div
                style={{
                    order: isEven ? 2 : 1,
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "500px",
                }}
            >
                <div style={{ ...imgAnim, position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                    {!imgError ? (
                        <img
                            src={service.img}
                            alt={service.title}
                            onError={() => setImgError(true)}
                            loading="lazy"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                display: "block",
                                transition: "transform 0.55s cubic-bezier(.22,1,.36,1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.06)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(135deg, #bfdbfe, #60a5fa)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "64px",
                            }}
                        >
                            ❄️
                        </div>
                    )}
                </div>

                {/* Category pill overlay on image */}
                <div
                    style={{
                        position: "absolute",
                        top: "20px",
                        ...(isEven ? { right: "20px" } : { left: "20px" }),
                        background: "rgba(30,58,138,0.88)",
                        color: "#bfdbfe",
                        fontSize: "11px",
                        fontWeight: "600",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "5px 14px",
                        borderRadius: "999px",
                        backdropFilter: "blur(6px)",
                        zIndex: 2,
                    }}
                >
                    {service.cat}
                </div>
            </div>

            {/* Text side */}
            <div
                style={{
                    order: isEven ? 1 : 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "48px 52px",
                    position: "relative",
                    zIndex: 1,
                    ...textAnim,
                }}
            >
{/* Title */}
                <h2
                    style={{
                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        fontWeight: "700",
                        color: "#1e3a8a",
                        lineHeight: 1.2,
                        marginBottom: "16px",
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                >
                    {service.title}
                </h2>

                {/* Accent line */}
                <div
                    style={{
                        width: "48px",
                        height: "3px",
                        background: "linear-gradient(90deg, #2563eb, #38bdf8)",
                        borderRadius: "2px",
                        marginBottom: "20px",
                    }}
                />

                {/* Description */}
                <p
                    style={{
                        fontSize: "15px",
                        color: "#475569",
                        lineHeight: "1.75",
                        marginBottom: "20px",
                    }}
                >
                    {service.desc}
                </p>

                {/* Tags */}
                {service.tags && service.tags.length > 0 && (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginBottom: "20px",
                        }}
                    >
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    background: "#eff6ff",
                                    color: "#1d4ed8",
                                    fontSize: "11px",
                                    fontWeight: "600",
                                    padding: "4px 12px",
                                    borderRadius: "999px",
                                    border: "1px solid #bfdbfe",
                                    letterSpacing: "0.03em",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Extra Section */}
                {service.extra && (
                    <div style={{ marginBottom: "24px" }}>
                        <h4
                            style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "#1e3a8a",
                                marginBottom: "8px",
                            }}
                        >
                            {service.extra.title}
                        </h4>
                        <ul style={{ paddingLeft: "18px" }}>
                            {service.extra.points.map((point, i) => (
                                <li
                                    key={i}
                                    style={{
                                        fontSize: "14px",
                                        color: "#475569",
                                        marginBottom: "6px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* View More CTA */}
                <div>
                    <Link
                        to={service.internalRoute}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                            color: "#fff",
                            fontSize: "13px",
                            fontWeight: "600",
                            padding: "11px 24px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            letterSpacing: "0.03em",
                            transition: "transform 0.18s, box-shadow 0.18s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(29,78,216,0.35)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        View More
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 8h10M9 4l4 4-4 4"
                                stroke="white"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Subtle diagonal accent on even rows */}
            {isEven && (
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        background: "linear-gradient(90deg, #3b82f6 0%, #38bdf8 50%, transparent 100%)",
                        opacity: 0.35,
                    }}
                />
            )}
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
            {/* Section header */}
            <div
                style={{
                    background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0284c7 100%)",
                    padding: "72px 24px 80px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Grid pattern overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div style={{ position: "relative" }}>
                    <span
                        style={{
                            display: "inline-block",
                            background: "rgba(56,189,248,0.18)",
                            color: "#7dd3fc",
                            border: "1px solid rgba(56,189,248,0.3)",
                            fontSize: "11px",
                            fontWeight: "700",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "5px 18px",
                            borderRadius: "999px",
                            marginBottom: "16px",
                        }}
                    >
                        HVAC Specialists Since 2004
                    </span>
                    <h1
                        style={{
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                            fontWeight: "800",
                            color: "#ffffff",
                            marginBottom: "12px",
                            fontFamily: "'Georgia', serif",
                            lineHeight: 1.15,
                        }}
                    >
                        Our Services
                    </h1>
                    <p style={{ color: "#93c5fd", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
                        14 professional HVAC solutions — installations, maintenance & 24/7 support
                    </p>

                    {/* Stats row */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "40px",
                            marginTop: "40px",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { num: "14", label: "Services" },
                            { num: "300+", label: "Projects" },
                            { num: "20+", label: "Years" },
                            { num: "24/7", label: "Support" },
                        ].map((s) => (
                            <div key={s.label} style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: "28px",
                                        fontWeight: "800",
                                        color: "#38bdf8",
                                        lineHeight: 1,
                                    }}
                                >
                                    {s.num}
                                </div>
                                <div
                                    style={{ fontSize: "12px", color: "#93c5fd", marginTop: "4px", letterSpacing: "0.06em" }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Alternating service rows */}
            <div>
                {services.map((service, index) => (
                    <ServiceRow key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* Bottom CTA */}
            <div
                style={{
                    background: "linear-gradient(135deg, #1e3a8a, #1d4ed8)",
                    padding: "56px 24px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "radial-gradient(circle at 20% 50%, rgba(56,189,248,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(96,165,250,0.1) 0%, transparent 50%)",
                    }}
                />
                <div style={{ position: "relative" }}>
                    <h2
                        style={{
                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                            fontWeight: "700",
                            color: "#fff",
                            marginBottom: "10px",
                            fontFamily: "'Georgia', serif",
                        }}
                    >
                        Need HVAC Service? We are Here 24/7
                    </h2>
                    <p style={{ color: "#93c5fd", fontSize: "15px", marginBottom: "28px" }}>
                        Emergency breakdown support to planned maintenance — our team is always ready.
                    </p>
                    <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                        <a
                            href="tel:8056041921"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "#38bdf8",
                                color: "#0c1a40",
                                fontWeight: "700",
                                fontSize: "14px",
                                padding: "12px 28px",
                                borderRadius: "8px",
                                textDecoration: "none",
                                transition: "opacity 0.18s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                        >
                            Call 8056041921
                        </a>
                        <a
                            href="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "transparent",
                                color: "#fff",
                                fontWeight: "700",
                                fontSize: "14px",
                                padding: "12px 28px",
                                borderRadius: "8px",
                                textDecoration: "none",
                                border: "1.5px solid rgba(255,255,255,0.4)",
                                transition: "border-color 0.18s, background 0.18s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#fff";
                                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            Send Enquiry
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
