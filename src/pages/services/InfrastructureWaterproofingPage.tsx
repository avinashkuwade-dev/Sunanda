import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

interface AccordionItem {
  id: string;
  title: string;
  purpose: string;
  keywords: string[];
  systems: { name: string; description: string }[];
  applications: string[];
  performance?: string[];
}

export default function InfrastructureWaterproofingPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const services: AccordionItem[] = [
    {
      id: 'metro',
      title: 'Metro & Underground Station Waterproofing',
      purpose: 'Comprehensive waterproofing for high water tables, hydrostatic pressure, and long-term underground durability',
      keywords: ['HDPE Geomembrane', 'PVC Membranes', 'Crystalline Systems', 'Bentonite Clay'],
      systems: [
        { name: 'HDPE Geomembrane', description: 'Positive side protection for station boxes' },
        { name: 'PVC Waterproofing Membranes', description: 'Flexible sheet membrane systems' },
        { name: 'Crystalline Waterproofing', description: 'Integral concrete protection' },
        { name: 'Bentonite Clay Waterproofing', description: 'Self-healing clay barrier systems' },
        { name: 'Polyurethane Injection Grouting', description: 'Joint and leak sealing' }
      ],
      applications: [
        'Station box waterproofing',
        'Cut & cover tunnels',
        'Ventilation shafts',
        'Ramp & access areas',
        'Construction joints treatment'
      ]
    },
    {
      id: 'tbm',
      title: 'TBM Tunnel Waterproofing',
      purpose: 'Specialized lining systems for segmental construction and high groundwater pressure',
      keywords: ['PVC-P Geomembrane', 'HDPE Sheet', 'EVA Membranes', 'Hydrophilic Gaskets'],
      systems: [
        { name: 'PVC-P Geomembrane', description: 'Plasticized PVC for tunnel linings' },
        { name: 'HDPE Sheet Membrane', description: 'High-density polyethylene protection' },
        { name: 'EVA-based Membranes', description: 'Ethylene vinyl acetate systems' },
        { name: 'Composite Drainage Systems', description: 'Integrated drainage and waterproofing' }
      ],
      applications: [
        'Hydrophilic gaskets',
        'PU/Epoxy injection',
        'Waterstop installation',
        'Segment gasket repair'
      ],
      performance: [
        '6 bar pressure resistance',
        'Chemical resistance',
        '50+ year design life',
        'Fire safety compliance'
      ]
    },
    {
      id: 'bridge',
      title: 'Bridge & Flyover Structures',
      purpose: 'Protective waterproofing to prevent chloride ingress, steel corrosion, and premature deterioration',
      keywords: ['APP/SBS Membranes', 'Spray PU', 'Elastomeric Coatings', 'Integral Admixtures'],
      systems: [
        { name: 'APP/SBS Modified Bitumen', description: 'Torch-applied membrane systems' },
        { name: 'Spray-Applied Polyurethane', description: 'Seamless spray coating' },
        { name: 'Elastomeric Coating Systems', description: 'Flexible protective coatings' },
        { name: 'Integral Waterproofing Admixtures', description: 'Concrete densification' }
      ],
      applications: [
        'Deck slab waterproofing',
        'Expansion joint treatment',
        'Drainage interface detailing',
        'Pier cap protection'
      ]
    },
    {
      id: 'basement',
      title: 'Basement & Retaining Structures',
      purpose: 'Robust waterproofing for long-term seepage control and hydrostatic pressure protection',
      keywords: ['HDPE Geomembrane', 'Bentonite Clay', 'Crystalline Systems', 'PU Injection'],
      systems: [
        { name: 'HDPE Geomembrane Systems', description: 'Sheet membrane for positive side protection' },
        { name: 'Bentonite Clay Waterproofing', description: 'Self-sealing clay barrier' },
        { name: 'Crystalline Waterproofing', description: 'Integral concrete treatment' },
        { name: 'Polyurethane Injection Grouting', description: 'Active leak repair and sealing' }
      ],
      applications: [
        'Large-area infrastructure basements',
        'Box-type waterproofing systems',
        'Long-term seepage control',
        'High water table protection'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Infrastructure Waterproofing - Tunnels, Metro, Bridges | Sunanda Group"
        description="Specialized waterproofing solutions for tunnels, metro structures, bridges, and large infrastructure projects."
        keywords="infrastructure waterproofing, metro waterproofing, tunnel waterproofing, bridge deck waterproofing, TBM tunnel, underground waterproofing"
        canonical="https://sunandagroup.com/services/infrastructure-waterproofing"
      />

      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Infrastructure Waterproofing</h1>
          <div className="w-16 h-1 bg-brand-orange mb-6"></div>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Heavy-duty waterproofing for critical infrastructure projects
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What We Do</h2>
                <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>Metro & Underground Station Waterproofing</li>
                  <li>TBM Tunnel Waterproofing</li>
                  <li>Bridge & Flyover Structures</li>
                  <li>Basement & Retaining Structures</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">How We Do It</h2>
                <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>Substrate assessment and exposure analysis</li>
                  <li>System selection based on project requirements</li>
                  <li>Approved application per manufacturer specifications</li>
                  <li>Comprehensive testing at each execution stage</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Details</h2>
              <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service.id} className="border border-gray-200">
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      className="w-full px-8 py-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-left flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{service.purpose}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.keywords.map((keyword, idx) => (
                            <span key={idx} className="text-sm text-gray-500">
                              {keyword}
                              {idx < service.keywords.length - 1 && ' · '}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronDown
                        className={`flex-shrink-0 ml-4 text-gray-400 transition-transform ${
                          openAccordion === service.id ? 'rotate-180' : ''
                        }`}
                        size={24}
                      />
                    </button>
                    {openAccordion === service.id && (
                      <div className="px-8 pb-8 pt-4 border-t border-gray-200 bg-gray-50">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">Systems & Methods</h4>
                            <ul className="space-y-3 text-gray-700">
                              {service.systems.map((system, idx) => (
                                <li key={idx}>
                                  <strong className="text-gray-900">{system.name}:</strong> {system.description}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">
                              {service.id === 'tbm' ? 'Joint Sealing' : 'Application Areas'}
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              {service.applications.map((app, idx) => (
                                <li key={idx}>• {app}</li>
                              ))}
                            </ul>
                            {service.performance && (
                              <>
                                <h4 className="font-bold text-gray-900 mb-4 text-lg mt-6">Performance Criteria</h4>
                                <ul className="space-y-2 text-gray-700">
                                  {service.performance.map((perf, idx) => (
                                    <li key={idx}>• {perf}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Infrastructure Waterproofing Project?</h2>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Get specialized engineering solutions for your infrastructure waterproofing needs
          </p>
          <Link
            to="/contact"
            className="btn-primary px-8 py-4 text-lg inline-block"
          >
            Request Infrastructure Waterproofing Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
