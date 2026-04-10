// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '/home' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Company Overview', href: '/about' },
      { label: 'Experience & Knowledge', href: '/about#experience' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Precision Air Conditioning', href: '/products#precision' },
      { label: 'Bluestar Chiller / VRF / Ductable', href: '/products#bluestar' },
      { label: 'Symphony Air Coolers', href: '/products#symphony' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Our Projects', href: '/about#projects' },
  { label: 'Clients', href: '/about#clients' },
  { label: 'Contact Us', href: '/contact' },
]

// ─── Hero Slides ──────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    id: 1,
    tagline: 'Comfort For Every Season',
    title: 'BRING HOME\nALL WEATHER COMFORT',
    subtitle: 'With Air Conditioner',
    cta: { label: 'Discover More', href: '/about' },
    bg: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    tagline: '18+ Years of Excellence',
    title: 'HVAC CONTRACTING\nCOMPANY WHO IS SERVING',
    subtitle: 'The Industry for the Past 18 Years',
    cta: { label: 'Contact Us', href: '/contact' },
    bg: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    tagline: 'Industrial Heating Solutions',
    title: 'HEATER BANK',
    subtitle: 'Provide Electrical Heating to Condition Supply Air in Commercial & Industrial Applications',
    cta: { label: 'Contact Us', href: '/contact' },
    bg: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    tagline: "India's Best Value",
    title: "INDIA'S CHEAPEST\nAPPLIANCE SERVICE",
    subtitle: 'At Your Door Step',
    cta: { label: 'Contact Us', href: '/contact' },
    bg: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&auto=format&fit=crop&q=80',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '300+', label: 'Projects Completed' },
  { value: '18+', label: 'Years of Experience' },
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
  { icon: 'award', label: '18 Years of Experience' },
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
    city: 'Thanjavur',
    address: 'No.4 & 5, Sai Ram Complex, Kamala Avenue, Alagammal Nagar, Thanjavur - 613 005',
    phone: '8056041921',
    email: ['sales@ssaircons.com', 'tnj@ssaircons.com'],
  },
  {
    city: 'Trichy',
    address: 'No.14, Jaya Nagar, 2nd Street, RMS Colony, Karumandapam, Trichy - 620 001',
    phone: '8056041921',
    email: ['sales@ssaircons.com', 'tnj@ssaircons.com'],
  },
]

// ─── Clients / Partners ───────────────────────────────────────────────────────
export const partners = [
  'Blue Star Limited',
  'Symphony Industrial Air Coolers',
  'Vertiv Energy Pvt Ltd',
  'Trane – Ingersoll-Rand',
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
