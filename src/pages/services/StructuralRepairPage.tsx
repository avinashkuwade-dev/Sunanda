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
  benefits?: string[];
}

export default function StructuralRepairPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [selectedGrouting, setSelectedGrouting] = useState<string>('epoxy');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const services: AccordionItem[] = [
    {
      id: 'jacketing',
      title: 'RCC Jacketing & Column Strengthening',
      purpose: 'Increases load-bearing capacity and provides structural support to columns, beams, and elements',
      keywords: ['RCC Jacketing', 'Micro-Concrete', 'Ferrocement', 'Steel Plate Bonding'],
      systems: [
        { name: 'Conventional RCC Jacketing', description: 'Traditional reinforced concrete jacketing with additional reinforcement' },
        { name: 'Micro-Concrete Jacketing', description: 'High-strength micro-concrete overlay system' },
        { name: 'Ferrocement Jacketing', description: 'Thin cement mortar reinforced with mesh layers' },
        { name: 'Steel Plate Bonding', description: 'Epoxy-bonded steel plate strengthening' }
      ],
      applications: [
        'Column load enhancement',
        'Beam strengthening',
        'Slab load redistribution',
        'Seismic retrofitting'
      ],
      benefits: [
        'Increased load capacity',
        'Corrosion protection',
        'Enhanced durability',
        'Cost-effective solution'
      ]
    },
    {
      id: 'frp',
      title: 'FRP/CFRP Wrapping Systems',
      purpose: 'High-strength, lightweight structural strengthening with minimal dead load addition',
      keywords: ['CFRP Wrapping', 'GFRP Systems', 'AFRP Systems', 'Hybrid Solutions'],
      systems: [
        { name: 'CFRP Wrapping', description: 'High tensile strength carbon fiber, corrosion-resistant' },
        { name: 'GFRP Systems', description: 'Glass fiber reinforced polymer for moderate strengthening' },
        { name: 'AFRP Systems', description: 'Aramid fiber for impact resistance and flexibility' },
        { name: 'Hybrid Systems', description: 'Combined FRP solutions for complex requirements' }
      ],
      applications: [
        'Column confinement wrapping',
        'Beam flexural strengthening',
        'Shear wall reinforcement',
        'Seismic upgrades'
      ]
    }
  ];

  const groutingOptions = [
    {
      id: 'epoxy',
      name: 'Epoxy Grouting',
      description: 'High-strength structural crack bonding system providing permanent load transfer restoration. Ideal for dormant structural cracks requiring strength restoration and monolithic behavior.'
    },
    {
      id: 'pu',
      name: 'PU Injection',
      description: 'Hydrophilic polyurethane injection for active water leak sealing. Forms flexible expanding foam that effectively seals dynamic cracks and construction joints under water pressure.'
    },
    {
      id: 'cementitious',
      name: 'Cementitious Grouting',
      description: 'Micro-fine cement grouts for void filling, mass concrete crack injection, and soil stabilization. Used in foundation underpinning and curtain grouting applications.'
    },
    {
      id: 'acrylic',
      name: 'Acrylic Injection',
      description: 'Low-viscosity acrylic gel for sealing fine hairline cracks and water cut-off applications. Forms flexible water-resistant seal suitable for non-structural treatment.'
    }
  ];

  return (
    <>
      <SEO
        title="Structural Repair & RCC Strengthening Services | Sunanda Group Mumbai"
        description="Expert structural repair services: RCC jacketing, FRP wrapping, epoxy grouting, concrete rehabilitation. 13+ years experience in structural strengthening across India."
        keywords="structural repair, RCC jacketing, FRP wrapping, concrete repair, structural strengthening, epoxy grouting, building rehabilitation"
        canonical="https://sunandagroup.com/services/structural-repair"
      />

      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Structural Repair & RCC Strengthening</h1>
          <div className="w-16 h-1 bg-brand-orange mb-6"></div>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Diagnostic-first approach to structural rehabilitation and concrete protection
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
                  <li>RCC Jacketing & Column Strengthening</li>
                  <li>FRP/CFRP Wrapping Systems</li>
                  <li>Grouting & Crack Injection</li>
                  <li>Concrete Rehabilitation</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">How We Do It</h2>
                <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>Structural diagnosis & NDT assessment</li>
                  <li>Repair scheme engineering and design</li>
                  <li>Surface treatment & substrate preparation</li>
                  <li>Precision application and load testing verification</li>
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
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">Techniques & Systems</h4>
                            <ul className="space-y-3 text-gray-700">
                              {service.systems.map((system, idx) => (
                                <li key={idx}>
                                  <strong className="text-gray-900">{system.name}:</strong> {system.description}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">Applications</h4>
                            <ul className="space-y-2 text-gray-700">
                              {service.applications.map((app, idx) => (
                                <li key={idx}>• {app}</li>
                              ))}
                            </ul>
                            {service.benefits && (
                              <>
                                <h4 className="font-bold text-gray-900 mb-4 text-lg mt-6">Benefits</h4>
                                <ul className="space-y-2 text-gray-700">
                                  {service.benefits.map((benefit, idx) => (
                                    <li key={idx}>• {benefit}</li>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Grouting & Crack Injection</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Specialized injection grouting for crack repair, void filling, and structural consolidation
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500">Epoxy Grouting · </span>
                    <span className="text-sm text-gray-500">PU Injection · </span>
                    <span className="text-sm text-gray-500">Cementitious Grouting · </span>
                    <span className="text-sm text-gray-500">Acrylic Injection</span>
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
          <h2 className="text-4xl font-bold mb-6">Need Structural Repair Services?</h2>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Get expert structural assessment and rehabilitation solutions
          </p>
          <Link
            to="/contact"
            className="inline-block btn-primary px-8 py-4 text-lg inline-block"
          >
            Request Structural Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
