import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Contact from './pages/Contact'
import OurPartners from './pages/OurPartners'
import Clients from './pages/Clients'
import Bluestar from './pages/Bluestar'
import Vertiv from './pages/Vertiv'
import Symphony from './pages/Symphony'
import PrecisionAC from './pages/PrecisionAC'
import AirTesting from './pages/AirTesting'
import WaterBalancing from './pages/WaterBalancing'
import VrfVrv from './pages/VrfVrv'
import VentilationSystem from './pages/VentilationSystem'
import CentralizedHvac from './pages/CentralizedHvac'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/precision-ac" element={<PrecisionAC />} />
          <Route path="/products/bluestar" element={<Bluestar />} />
          <Route path="/products/symphony" element={<Symphony />} />
          <Route path="/products/vertiv" element={<Vertiv />} />
          <Route path="/products/air-testing" element={<AirTesting />} />
          <Route path="/products/water-balancing" element={<WaterBalancing />} />
          <Route path="/products/vrf-vrv" element={<VrfVrv />} />
          <Route path="/products/ventilation" element={<VentilationSystem />} />
          <Route path="/products/centralized-hvac" element={<CentralizedHvac />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
