import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GroupCompaniesPage from './pages/GroupCompaniesPage';
import WhySunandaPage from './pages/WhySunandaPage';
import ServicesPage from './pages/ServicesPage';
import BuildingWaterproofingPage from './pages/services/BuildingWaterproofingPage';
import InfrastructureWaterproofingPage from './pages/services/InfrastructureWaterproofingPage';
import StructuralRepairPage from './pages/services/StructuralRepairPage';
import IndustrialFlooringPage from './pages/services/IndustrialFlooringPage';
import SectorsPage from './pages/SectorsPage';
import MethodologyPage from './pages/MethodologyPage';
import QualityPage from './pages/QualityPage';
import TeamPage from './pages/TeamPage';
import KnowledgeHubPage from './pages/KnowledgeHubPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        <main className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/group-companies" element={<GroupCompaniesPage />} />
            <Route path="/why-sunanda" element={<WhySunandaPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/building-waterproofing" element={<BuildingWaterproofingPage />} />
            <Route path="/services/infrastructure-waterproofing" element={<InfrastructureWaterproofingPage />} />
            <Route path="/services/structural-repair" element={<StructuralRepairPage />} />
            <Route path="/services/industrial-flooring" element={<IndustrialFlooringPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/quality-safety" element={<QualityPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        <a
          href="tel:+919987425215"
          className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition z-50"
          aria-label="Call us"
        >
          <Phone size={32} />
        </a>
      </div>
    </Router>
  );
}

export default App;
