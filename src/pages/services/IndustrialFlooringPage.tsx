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
  features?: string[];
}

export default function IndustrialFlooringPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const services: AccordionItem[] = [
    {
      id: 'epoxy',
      title: 'Epoxy Flooring Systems',
      purpose: 'Seamless, durable epoxy resin flooring for chemical resistance and long-term performance',
      keywords: ['Self-Leveling Epoxy', 'Epoxy Mortar', 'ESD Epoxy', 'Epoxy Terrazzo'],
      systems: [
        { name: 'Self-Leveling Epoxy', description: 'Smooth, seamless finish for clean environments' },
        { name: 'Epoxy Mortar Flooring', description: 'Heavy-duty system for industrial loads' },
        { name: 'Anti-Static (ESD) Epoxy', description: 'Conductive flooring for electronics facilities' },
        { name: 'High-Build Epoxy Coating', description: 'Thick film protective coating' },
        { name: 'Epoxy Terrazzo', description: 'Decorative seamless flooring' }
      ],
      applications: [
        'Pharma manufacturing',
        'Food processing plants',
        'Chemical industries',
        'Warehouses & logistics',
        'Clean room facilities'
      ],
      features: [
        'Chemical resistant',
        'Seamless finish',
        'Easy to clean',
        'Dust-free surface',
        '10+ year lifespan'
      ]
    },
    {
      id: 'pu',
      title: 'Polyurethane (PU) Flooring',
      purpose: 'Flexible, impact-resistant flooring ideal for thermal shock environments',
      keywords: ['Thermal Shock Resistance', 'Impact Resistance', 'UV Stability', 'Flexible Systems'],
      systems: [
        { name: 'PU Mortar System', description: 'Heavy-duty polyurethane flooring' },
        { name: 'Self-Leveling PU', description: 'Smooth finish with flexibility' },
        { name: 'PU Coating', description: 'Protective coating for existing floors' },
        { name: 'Outdoor PU System', description: 'UV-stable polyurethane for exposed areas' }
      ],
      applications: [
        'Commercial kitchens',
        'Cold storage facilities',
        'Beverage industries',
        'Pharmaceutical production',
        'Outdoor decking'
      ],
      features: [
        'Superior flexibility',
        'Thermal shock resistance',
        'Impact resistance',
        'UV stability',
        'Low odor application'
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Flooring Applications',
      purpose: 'Purpose-built flooring systems for specific industry requirements',
      keywords: ['Clean Rooms', 'ESD Flooring', 'Parking Ramps', 'Sports Flooring'],
      systems: [
        { name: 'Pharma Clean Rooms', description: 'GMP-compliant, coved flooring with seamless wall transitions' },
        { name: 'ESD Flooring', description: 'Anti-static flooring for electronics & semiconductor facilities' },
        { name: 'Parking Ramps', description: 'Slip-resistant, durable coating for vehicle traffic areas' },
        { name: 'Sports Flooring', description: 'Acrylic coatings for badminton & multi-purpose courts' }
      ],
      applications: [
        'Pharmaceutical clean rooms (EU GMP compliant)',
        'Electronics manufacturing facilities',
        'Multi-level parking structures',
        'Indoor sports courts',
        'Semiconductor clean rooms'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Industrial & Pharma Flooring - Epoxy, PU, ESD Flooring | Sunanda Group"
        description="Expert industrial flooring contractors. Epoxy flooring, PU flooring, pharma clean room floors, ESD flooring, parking ramp floors. 13+ years experience in Mumbai."
        keywords="industrial flooring, epoxy flooring, polyurethane flooring, pharma flooring, clean room flooring, ESD flooring, parking ramp flooring"
        canonical="https://sunandagroup.com/services/industrial-flooring"
      />

      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Industrial & Commercial Flooring</h1>
          <div className="w-16 h-1 bg-brand-orange mb-6"></div>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            High-performance flooring systems for specialized industrial environments
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
                  <li>Epoxy Flooring Systems</li>
                  <li>Polyurethane (PU) Flooring</li>
                  <li>Pharma Clean Room Flooring</li>
                  <li>ESD & Anti-Static Flooring</li>
                  <li>Parking Ramp Flooring</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">How We Do It</h2>
                <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>Substrate moisture and contamination testing</li>
                  <li>System selection based on load and chemical exposure</li>
                  <li>Surface preparation and primer application</li>
                  <li>Quality control and cure time management</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Service Details</h2>
              <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service.id} className={`border border-gray-200 ${service.id === 'specialized' ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}>
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      className={`w-full px-8 py-6 flex items-start hover:bg-gray-50 transition-colors ${
                        service.id === 'specialized' ? 'justify-center relative' : 'justify-between'
                      }`}
                    >
                      <div className={`flex-1 ${service.id === 'specialized' ? 'text-center' : 'text-left'}`}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{service.purpose}</p>
                        <div className={`flex flex-wrap gap-2 ${service.id === 'specialized' ? 'justify-center' : ''}`}>
                          {service.keywords.map((keyword, idx) => (
                            <span key={idx} className="text-sm text-gray-500">
                              {keyword}
                              {idx < service.keywords.length - 1 && ' · '}
                            </span>
                          ))}
                        </div>
                      </div>
                      {service.id !== 'specialized' && (
                        <ChevronDown
                          className={`flex-shrink-0 ml-4 text-gray-400 transition-transform ${
                            openAccordion === service.id ? 'rotate-180' : ''
                          }`}
                          size={24}
                        />
                      )}
                      {service.id === 'specialized' && (
                        <ChevronDown
                          className={`absolute right-8 text-gray-400 transition-transform ${
                            openAccordion === service.id ? 'rotate-180' : ''
                          }`}
                          size={24}
                        />
                      )}
                    </button>
                    {openAccordion === service.id && (
                      <div className="px-8 pb-8 pt-4 border-t border-gray-200 bg-gray-50">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 text-lg">System Types</h4>
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
                            {service.features && (
                              <>
                                <h4 className="font-bold text-gray-900 mb-4 text-lg mt-6">Key Features</h4>
                                <ul className="space-y-2 text-gray-700">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx}>• {feature}</li>
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
          <h2 className="text-4xl font-bold mb-6">Need Industrial Flooring Solutions?</h2>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Get customized flooring systems designed for your specific industrial requirements
          </p>
          <Link
            to="/contact"
            className="inline-block btn-primary px-8 py-4 text-lg inline-block"
          >
            Request Flooring Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
