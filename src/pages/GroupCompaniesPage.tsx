import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

const companies = [
  {
    name: 'Sunanda Eternity LLP',
    descriptor: 'Waterproofing',
    capabilities: ['Basement Waterproofing', 'Terrace Systems', 'Wet Areas', 'Swimming Pools', 'Expansion Joints'],
    coreServices: [
      'Basement & Underground Waterproofing',
      'Terrace & Podium Systems',
      'Toilet & Wet Area Waterproofing',
      'Swimming Pool Waterproofing',
      'Expansion Joint Treatment'
    ],
    projectTypes: [
      'High-Rise Residential Buildings',
      'Commercial Complexes',
      'Shopping Malls',
      'Educational Institutions',
      'Healthcare Facilities'
    ]
  },
  {
    name: 'Sunanda EngTech Pvt Ltd',
    descriptor: 'Infrastructure & Metro Waterproofing',
    capabilities: ['Metro Waterproofing', 'TBM Tunnels', 'Bridges & Decks', 'Retaining Walls', 'Underground Structures'],
    coreServices: [
      'Metro Station Waterproofing',
      'TBM Tunnel Waterproofing',
      'Bridge & Bridge Deck Systems',
      'Underground Structure Protection',
      'Retaining Wall Waterproofing',
      'Curtain Grouting'
    ],
    projectTypes: [
      'Metro Rail Projects',
      'Highway & Expressway Infrastructure',
      'Water Treatment Plants',
      'Industrial Containment Structures',
      'Port & Marine Structures'
    ]
  },
  {
    name: 'Sunanda Enterprises',
    descriptor: 'Repair & Rehabilitation, Floor Coatings and Grouting',
    capabilities: ['RCC Jacketing', 'FRP / CFRP Wrapping', 'Structural Rehabilitation', 'Industrial Flooring', 'Epoxy & Grouting'],
    coreServices: [
      'RCC Jacketing & Column Strengthening',
      'FRP/CFRP Wrapping Systems',
      'Epoxy & Cementitious Grouting',
      'Concrete Repair & Rehabilitation',
      'Industrial Flooring Systems'
    ],
    projectTypes: [
      'Aged Building Rehabilitation',
      'Industrial Plant Repairs',
      'Pharma Clean Room Flooring',
      'Parking Ramp Flooring',
      'Sports Facility Flooring'
    ]
  }
];

export default function GroupCompaniesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Group Companies - Sunanda Eternity LLP, EngTech, Enterprises | Mumbai"
        description="Sunanda Group comprises three specialized entities: Sunanda Eternity LLP, Sunanda EngTech Pvt Ltd, and Sunanda Enterprises. Expert waterproofing and structural repair solutions across India."
        keywords="sunanda enterprises, sunanda eternity llp, sunanda engtech, waterproofing companies mumbai, group companies"
        canonical="https://sunandagroup.com/group-companies"
      />

      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Group Companies</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Three specialized entities united by engineering excellence and execution mastery
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Expertise, Unified Quality</h2>
              <p className="text-xl text-gray-600">
                Each group entity delivers focused expertise while adhering to consistent execution and quality standards.
              </p>
            </div>

            <div className="space-y-8">
              {companies.map((company, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-8 transition-all"
                  >
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {company.name}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {company.descriptor}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.capabilities.map((capability, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700 transition-colors"
                    >
                      {isExpanded ? 'Hide Details' : 'View Details'}
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Core Services</h4>
                          <ul className="space-y-2 text-gray-700">
                            {company.coreServices.map((service, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Project Types</h4>
                          <ul className="space-y-2 text-gray-700">
                            {company.projectTypes.map((type, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-blue-900 mr-2">•</span>
                                <span>{type}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">United by Common Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-brand-blue font-bold text-2xl mb-2">Quality First</div>
                <p className="text-gray-600">Uncompromising standards across all entities</p>
              </div>
              <div className="text-center">
                <div className="text-brand-blue font-bold text-2xl mb-2">Technical Authority</div>
                <p className="text-gray-600">Engineering-led decision making, not sales-driven</p>
              </div>
              <div className="text-center">
                <div className="text-brand-blue font-bold text-2xl mb-2">Client Partnership</div>
                <p className="text-gray-600">Long-term relationships built on trust and delivery</p>
              </div>
              <div className="text-center">
                <div className="text-brand-blue font-bold text-2xl mb-2">Safety</div>
                <p className="text-gray-600">Safety-first culture ensuring protection of people, assets, and project environments across all operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
