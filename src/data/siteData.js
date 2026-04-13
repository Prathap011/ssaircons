// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    // children: [
    //   { label: 'Company Overview', href: '/about' }
    // ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Precision Air Conditioning', href: '/products#precision' },
      { label: 'Bluestar Chiller / VRF / Ductable', href: '/products#bluestar' },
      { label: 'Symphony Air Coolers', href: '/products#symphony' },
      { label: 'Air Testing & Balancing', href: '/services' },
      { label: 'Water Balancing', href: '/services' },
      { label: 'VRF / VRV', href: '/services' },
      { label: 'Ventilation System', href: '/services' },
      { label: 'Centralized HVAC Services', href: '/services' },
    ],
  },
  { label: 'Services', href: '/services' },
  {
    label: 'Our Projects',
    href: '/our-projects',
    children: [
      { label: 'Achievements', href: '/our-projects#achievements' },
      { label: 'Our Vertiv Project', href: '/our-projects#vertiv-project' },
      { label: 'Completed Projects', href: '/our-projects#completed-projects' },
    ],
  },
  { label: 'Clients', href: '/clients' },
]

// ─── Hero Slides ──────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    id: 1,
    tagline: 'Comfort For Every Season',
    title: 'BRING HOME\nALL WEATHER COMFORT',
    subtitle: 'With Air Conditioner',
    cta: { label: 'Explore', href: '/about' },
    bg: '/assets/hvaclanding02.jpeg',
  },
  {
    id: 2,
    tagline: '24 Years of Excellence',
    title: 'HVAC CONTRACTING\nCOMPANY WHO IS SERVING',
    subtitle: 'The Industry for the Past 24 Years',
    cta: { label: 'Contact Us', href: '/contact' },
    bg: '/assets/hvaclanding03.jpeg',
  },
  {
    id: 3,
    tagline: 'Industrial Heating Solutions',
    title: 'HEATER BANK',
    subtitle: 'Provide Electrical Heating to Condition Supply Air in Commercial & Industrial Applications',
    cta: { label: 'Contact Us', href: '/contact' },
    bg: '/assets/hvaclanding04.jpeg',
  },
  {
    id: 4,
    tagline: "India's Best Value",
    title: "INDIA'S LOW-COST\nAPPLIANCE SERVICE",
    subtitle: 'At Your Door Step',
    cta: { label: 'Contact Us', href: '/contact' },
    bg: '/assets/hvaclanding05.jpeg',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '300+', label: 'Projects Completed' },
  { value: '24+', label: 'Years of Experience' },
  { value: '24/7', label: 'Service Support' },
  { value: '30+', label: 'Service Executives' },
]

// ─── Products ─────────────────────────────────────────────────────────────────
export const products = [
  {
    id: 'precision',
    title: 'Precision Air Conditioning',
    description:
      'Precision air conditioner (precision cooling) is used to control the temperature and humidity to precision level for critical environments.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ahu',
    title: 'Air Handling Unit (AHU)',
    description:
      'An AHU is used to re-condition and circulate air as part of a heating & air-conditioning system, improving indoor air quality.',
    image:
      'https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'cassette',
    title: 'Cassette Air Conditioner',
    description:
      'Gives you the freedom to choose a model according to your requirements and budget for optimal ceiling-mounted cooling.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'chiller',
    title: 'Chillers',
    description:
      'Chiller plant works on proper refrigerant cycle where vapor compression or absorption cools fluid for large commercial applications.',
    image:
      'https://images.unsplash.com/photo-1581094271901-8022df4c53f0?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ductable',
    title: 'Ductable Air Conditioner',
    description:
      'A balanced air controlling device which makes the air capable to breathe in for large commercial and industrial spaces.',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'fcu',
    title: 'Fan Coil Unit (FCU)',
    description:
      'A fan coil unit uses a coil and a fan to heat or cool a room without connecting to ductwork, ideal for individual room control.',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=80',
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 'maintenance',
    title: 'AC Maintenance',
    description:
      'Grab the best deal on AC maintenance here. Contact our service center and book maintenance services for your AC unit.',
    icon: 'wrench',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'cooling',
    title: 'AC Cooling Issue',
    description:
      'Common central air conditioning problems occur when rooms are closed off and air flow through the home is disrupted.',
    icon: 'thermometer',
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'service',
    title: 'Air Conditioner Service',
    description:
      'Get AC service with a certified technician. Hire expert professionals for all brands and types of air conditioners.',
    icon: 'cog',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'gas',
    title: 'Gas Filling',
    description:
      'Book your AC gas filling services at SS Aircon. Our AC technician will provide you world-class experience.',
    icon: 'droplets',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'air-testing',
    title: 'Air Testing & Balancing',
    description:
      'Air balancing is testing, adjusting, and balancing (TAB) commercial air conditioning and ventilation systems.',
    icon: 'wind',
    image:
      'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'vrv',
    title: 'VRF / VRV Systems',
    description:
      'We specialize in HVAC domain and provide VRV (Variable Refrigerant Volume) & VRF (Variable Refrigerant Flow) services.',
    icon: 'activity',
    image:
      'https://images.unsplash.com/photo-1621873495914-1c1c58e9f9e0?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ventilation',
    title: 'Ventilation System',
    description:
      'Ventilation contractor for industrial ventilation, pollution control, and acoustics services for all building types.',
    icon: 'airVent',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'hvac',
    title: 'Centralized HVAC Services',
    description:
      'We take care of every kind of centralized & industrial air conditioning solutions for any building type with full turnkey.',
    icon: 'building',
    image:
      'https://images.unsplash.com/photo-1581094271901-8022df4c53f0?w=600&auto=format&fit=crop&q=80',
  },
]

// ─── Highlights (why choose us) ───────────────────────────────────────────────
export const highlights = [
  { icon: 'users', label: 'Highly Skilled & Experienced Engineers' },
  { icon: 'hardhat', label: "We're Professional Contractors" },
  { icon: 'clock', label: 'Service Within 24 Hours' },
  { icon: 'award', label: '24 Years of Experience' },
]

// ─── About capabilities ───────────────────────────────────────────────────────
export const capabilities = [
  'Well-equipped office set up',
  'Complete set of modern tools & tackles with calibration certification',
  'Complete set of PPE / Safety kit for all kind of hot works',
  'Own transportation vehicles for material & manpower movement',
  '12-member project team including fitter, welder, brazer, plumber & electrician',
  'Own 8-member ducting and insulation team',
  '30 service executives deployed across Chennai',
  'Dedicated 24/7 breakdown service team',
  'Tie-up with reputed piping & ducting contractors for emergency support',
]

// ─── Offices / Contact ────────────────────────────────────────────────────────
export const offices = [
  {
    city: 'Chennai',
    address: 'No.18/2, Village Road, Balaji Nagar, Puzhuthivakkam, Chennai - 600091.',
    phone: '8056041921',
    email: ['sales@ssaircons.com', 'service@ssaircons.com'],
  },
  {
    city: 'Trichy',
    address: 'No.14, Jaya Nagar, 2nd Street, RMS Colony, Karumandapam, Trichy - 620 001',
    phone: '8056041921',
    email: ['sales@ssaircons.com', 'tnj@ssaircons.com'],
  },
]

// ─── Clients / Partners ───────────────────────────────────────────────────────
// logo: place image files in public/assets/ using these filenames
export const partners = [
  { name: 'BLUE STAR', logo: '/assets/bluestar.jpg', type: 'Authorized Dealer' },
  { name: 'SYMPHONY', logo: '/assets/sympothy.jpeg', type: 'Authorized Dealer' },
]

export const partners1 = [
  { name: 'VERTIV', logo: '/assets/vertiv.jpg', type: 'Authorized Franchisee' },
]

// flat list for text use (backward compat)
export const partnerNames = ['BLUE STAR', 'SYMPHONY', 'VERTIV']

// ─── Achievements ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    title: 'No.1 Franchisee Award',
    description:
      'Out of 7 Vertiv franchisees, SS Aircon secured the No. 1 position for outstanding project execution and service quality.',
    icon: 'award',
  },
  {
    title: 'Tata Communications — 110 PAC Units',
    description:
      'Erection & commissioning of 110 Precision Air Conditioning units (~1500 TR) at Tata Communications, Swami Sivanantha Salai, Chennai. Deputed 3-man power in general shift and maintained uptime for 3 years.',
    icon: 'server',
  },
  {
    title: 'Scope International — Dual Fluid PAC',
    description:
      'Handled ~400 TR dual-fluid Precision Air Conditioners with complete MS & copper piping in a live Data Center at Scope International, Nungambakkam.',
    icon: 'cpu',
  },
  {
    title: 'Bharti Airtel — 500m MS Piping',
    description:
      'Completed MS piping work of ~500 meters for chilled water-type Precision Air Conditioning at Bharti Airtel DRC, Siruseri.',
    icon: 'zap',
  },
  {
    title: 'Bharti Data Center — 100 TR HDPAC',
    description:
      'Installed ~100 TR High-Density Precision Air Conditioners (XDC, XDP, XDV & XDO — CHW & DX supplementary cooling) at Bharti Data Center, Siruseri.',
    icon: 'wind',
  },
  {
    title: 'HCL Technologies — 150 TR Dual Fluid',
    description:
      'Erected & commissioned ~150 TR dual-fluid imported PAC units (20 systems) at HCL Technologies, Sholinganallur.',
    icon: 'settings',
  },
]

// ─── Our Vertiv Project images ─────────────────────────────────────────────────
export const vertivProjectImages = [
  {
    src: 'https://www.ssaircons.com/wp-content/uploads/2022/04/our-vertiv-project-1.jpg',
    alt: 'Vertiv Precision AC Installation - Data Center',
  },
  {
    src: 'https://www.ssaircons.com/wp-content/uploads/2022/04/our-vertiv-project-2.jpg',
    alt: 'Vertiv Project - CRAC Unit Setup',
  },
  {
    src: 'https://www.ssaircons.com/wp-content/uploads/2022/04/our-vertiv-project-3.jpg',
    alt: 'Vertiv Project - Server Room Cooling',
  },
  {
    src: 'https://www.ssaircons.com/wp-content/uploads/2022/04/our-vertiv-project-4.jpg',
    alt: 'Vertiv Project - Precision Air Conditioning',
  },
  {
    src: 'https://www.ssaircons.com/wp-content/uploads/2022/04/our-vertiv-project-5.jpg',
    alt: 'Vertiv Project - Industrial HVAC',
  },
  {
    src: 'https://www.ssaircons.com/wp-content/uploads/2022/04/our-vertiv-project-6.jpg',
    alt: 'Vertiv Project - Commissioning Work',
  },
]

// ─── Completed Projects (client companies) ────────────────────────────────────
export const completedProjects = [
  'Bank of America', 'State Bank of India', 'Airtel Limited', 'BHEL',
  'Caterpillar', 'Citi Bank', 'HCL Technologies', 'Hyundai Motors',
  'IBM DLF', 'VI (Vodafone Idea)', 'IGCAR Kalpakkam', 'KVB Bank',
  'L & T', 'NLC Neyveli', 'Nokia Siemens', 'Mahindra Satyam',
  'Sutherland', 'Renault Nissan', 'Sify Technologies', 'NetMagic Solutions',
  'Hexaware Technologies', 'Infosys Technologies', 'National Stock Exchange',
  'Tata Communications', 'Tata Consultancy Services', 'Scope International',
]

// ─── Clients (logo images from website) ───────────────────────────────────────
export const clientLogos = [
  { name: 'Bank of America', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bank_of_America_logo.svg/320px-Bank_of_America_logo.svg.png' },
  { name: 'State Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/200px-State_Bank_of_India_logo.svg.png' },
  { name: 'Airtel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Bharti_Airtel_Logo.svg/320px-Bharti_Airtel_Logo.svg.png' },
  { name: 'BHEL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/BHEL_logo.svg/200px-BHEL_logo.svg.png' },
  { name: 'Caterpillar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Caterpillar_logo.svg/320px-Caterpillar_logo.svg.png' },
  { name: 'Citi Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/320px-Citi.svg.png' },
  { name: 'HCL Technologies', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/HCL_Technologies_logo.svg/320px-HCL_Technologies_logo.svg.png' },
  { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hyundai_Motor_Company_logo.svg/320px-Hyundai_Motor_Company_logo.svg.png' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png' },
  { name: 'L & T', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Larsen_%26_Toubro_logo.svg/320px-Larsen_%26_Toubro_logo.svg.png' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png' },
  { name: 'National Stock Exchange', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/National_Stock_Exchange_of_India_logo.svg/200px-National_Stock_Exchange_of_India_logo.svg.png' },
  { name: 'Tata Communications', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/320px-Tata_Consultancy_Services_Logo.svg.png' },
  { name: 'Hexaware', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hexaware_Technologies_logo.svg/320px-Hexaware_Technologies_logo.svg.png' },
  { name: 'Renault', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Renault_2021_Text.svg/320px-Renault_2021_Text.svg.png' },
]

// ─── Enquiry dropdown options ─────────────────────────────────────────────────
export const enquiryOptions = [
  'AC Installation',
  'AC Service & Maintenance',
  'Gas Filling',
  'HVAC Contracting',
  'Precision Air Conditioning',
  'Chiller Plant',
  'VRF / VRV System',
  'Ventilation System',
  'Other',
]
