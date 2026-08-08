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

export default function BuildingWaterproofingPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [selectedGrouting, setSelectedGrouting] = useState<string>('epoxy');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const services: AccordionItem[] = [
    {
      id: 'basement',
      title: 'Basement Waterproofing',
      purpose: 'Specialized systems for hydrostatic pressure resistance and long-term durability in below-grade applications',
      keywords: ['HDPE Membranes', 'PVC Membranes', 'Crystalline Systems', 'Injection Grouting'],
      systems: [
        { name: 'HDPE Membrane', description: 'High-density polyethylene for positive side protection' },
        { name: 'EPDM Membrane', description: 'Ethylene propylene diene monomer for flexibility' },
        { name: 'PVC Membrane', description: 'Polyvinyl chloride with heat-welded seams' },
        { name: 'Box Type System', description: 'Cementitious crystalline waterproofing' },
        { name: 'Liquid Applied Membrane', description: 'Seamless polyurethane/acrylic systems' }
      ],
      applications: [
        'Underground parking basements',
        'Residential building basements',
        'Commercial complex underground areas',
        'Lift pits & sumps',
        'Retaining walls (below grade)',
        'Water tanks (underground)'
      ]
    },
    {
      id: 'terrace',
      title: 'Terrace & Podium Waterproofing',
      purpose: 'UV-resistant, weatherproof systems for structural movement and thermal cycling',
      keywords: ['APP/SBS Membranes', 'PU Coating', 'Acrylic Coating', 'Green Roof Systems'],
      systems: [
        { name: 'APP/SBS Membrane', description: 'Torch-on bituminous systems' },
        { name: 'PU Coating', description: 'Polyurethane elastomeric coating' },
        { name: 'Acrylic Coating', description: 'UV-resistant acrylic membrane' },
        { name: 'Tile-on-Tile System', description: 'Over existing tile finishes' },
        { name: 'Green Roof System', description: 'Waterproofing for landscaped terraces' }
      ],
      applications: [
        'High elongation for crack bridging',
        'UV and weathering resistance',
        'Root resistance (for green roofs)',
        'Heat reflective options available',
        'Walkable and tile-able finishes',
        '10+ year proven performance'
      ]
    },
    {
      id: 'toilet',
      title: 'Toilet & Wet Area Waterproofing',
      purpose: 'Flexible, chemical-resistant membranes compatible with tile adhesives',
      keywords: ['Cementitious Membrane', 'Polyurethane Membrane', 'Acrylic Membrane', 'Sheet Membrane'],
      systems: [
        { name: 'Cementitious Membrane', description: 'Two-component flexible coating' },
        { name: 'Polyurethane Membrane', description: 'Liquid-applied seamless system' },
        { name: 'Acrylic Membrane', description: 'Fast-curing, tile-able system' },
        { name: 'Sheet Membrane', description: 'CPE/PVC sheet with overlaps' }
      ],
      applications: [
        'Toilet floors & walls (up to 1m height)',
        'Balconies & utility areas',
        'Kitchen wet areas',
        'Shower cubicles',
        'Planter boxes',
        'Sunken areas'
      ]
    },
    {
      id: 'pool',
      title: 'Swimming Pool Waterproofing',
      purpose: 'Systems resistant to continuous immersion, chemical treatment, and hydrostatic pressure',
      keywords: ['PU Membrane', 'Epoxy Coating', 'Crystalline Systems', 'Fiber Reinforced'],
      systems: [
        { name: 'PU Membrane', description: 'Two-component polyurethane system' },
        { name: 'Epoxy Coating', description: 'Chemical and abrasion resistant' },
        { name: 'Cementitious Crystalline', description: 'Self-healing concrete protection' },
        { name: 'Fiber Reinforced Membrane', description: 'Enhanced tensile strength' }
      ],
      applications: [
        'Expansion joint treatment',
        'Leak detection & repair',
        'Tile overlay waterproofing',
        'Equipment chamber waterproofing'
      ],
      performance: [
        'Chlorine resistance',
        'Crack bridging capability',
        'Pressure resistance (positive/negative)',
        'UV stability'
      ]
    }
  ];

  const groutingOptions = [
    {
      id: 'epoxy',
      name: 'Epoxy Grouting',
      description: 'High-strength structural crack repair system providing permanent bonding and load transfer across crack faces. Ideal for dormant structural cracks requiring strength restoration.'
    },
    {
      id: 'pu',
      name: 'PU Injection',
      description: 'Hydrophilic polyurethane injection for active water leak sealing. Reacts with water to form flexible foam, effectively sealing dynamic cracks and construction joints under pressure.'
    },
    {
      id: 'cementitious',
      name: 'Cementitious Grouting',
      description: 'Micro-fine cement grouts for void filling, soil stabilization, and mass concrete crack injection. Used in foundation underpinning and curtain grouting applications.'
    },
    {
      id: 'acrylic',
      name: 'Acrylic Gel Injection',
      description: 'Low-viscosity acrylic gel for sealing fine hairline cracks in concrete. Forms flexible, water-resistant seal suitable for non-structural crack treatment.'
    }
  ];

  return (
    <>
      <SEO
        title="Building Waterproofing Services - Basement, Terrace, Toilet | Sunanda Group"
        description="Expert building waterproofing contractors. Basement waterproofing with HDPE/EPDM/PVC systems, terrace waterproofing, toilet & wet area, swimming pools. 13+ years experience in Mumbai."
        keywords="building waterproofing, basement waterproofing, terrace waterproofing, toilet waterproofing, swimming pool waterproofing, HDPE waterproofing, EPDM waterproofing"
        canonical="https://sunandagroup.com/services/building-waterproofing"
      />

      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Building Segment Waterproofing</h1>
          <div className="w-16 h-1 bg-brand-orange mb-6"></div>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Turnkey waterproofing solutions from basement to terrace for lasting protection
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
                  <li>Basement Waterproofing</li>
                  <li>Terrace & Podium Waterproofing</li>
                  <li>Toilet & Wet Area Waterproofing</li>
                  <li>Swimming Pool Waterproofing</li>
                  <li>Grouting & Injection Systems</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">How We Do It</h2>
                <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>System selection based on exposure & substrate analysis</li>
                  <li>Execution sequencing & detailing discipline</li>
                  <li>Testing, inspection, and quality checkpoints</li>
                  <li>Long-term performance & warranty alignment</li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
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
                              {service.id === 'pool' ? 'Additional Services' : 'Applications / Scope'}
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

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Additional Services</h2>
              <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
              <div className="border border-gray-200">
                <button
                  onClick={() => toggleAccordion('grouting')}
                className="w-full px-8 py-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Grouting & Injection Systems</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Specialized solutions for crack repair, void filling, and negative-side waterproofing
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500">Epoxy Grouting · </span>
                    <span className="text-sm text-gray-500">PU Injection · </span>
                    <span className="text-sm text-gray-500">Cementitious Grouting · </span>
                    <span className="text-sm text-gray-500">Acrylic Gel</span>
                  </div>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 ml-4 text-gray-400 transition-transform ${
                    openAccordion === 'grouting' ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openAccordion === 'grouting' && (
                <div className="px-8 pb-8 pt-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {groutingOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedGrouting(option.id)}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                          selectedGrouting === option.id
                            ? 'bg-brand-blue text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-brand-blue'
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                  <div className="bg-white p-6 rounded border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {groutingOptions.find((opt) => opt.id === selectedGrouting)?.description}
                    </p>
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Building Waterproofing Solutions?</h2>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Get expert consultation and customized waterproofing solutions for your building project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block btn-primary px-8 py-4 text-lg inline-block"
            >
              Request Free Consultation
            </Link>
            <Link
              to="/projects"
              className="inline-block btn-secondary px-8 py-4 text-lg inline-block"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
