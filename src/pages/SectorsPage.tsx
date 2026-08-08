import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import ClientCarousel from '../components/ClientCarousel';
import { clients } from '../data/clients';

export default function SectorsPage() {
  const sectors = [
    {
      title: "Residential",
      description: "Comprehensive waterproofing solutions for residential buildings, high-rise apartments, and luxury villas.",
      services: [
        "Basement waterproofing",
        "Terrace & roof waterproofing",
        "Bathroom & wet area treatment",
        "Swimming pool waterproofing",
        "External wall protection",
        "Balcony waterproofing"
      ],
      clients: ["Lodha Group", "Oberoi Realty", "Bhumi World", "Rustomjee", "Birla Group"],
      projects: "50+ residential projects completed"
    },
    {
      title: "Commercial",
      description: "Professional waterproofing for commercial complexes, office buildings, hotels, and retail spaces.",
      services: [
        "Podium deck waterproofing",
        "Parking basement protection",
        "Facade waterproofing",
        "Plaza deck systems",
        "Green roof waterproofing",
        "Expansion joint treatment"
      ],
      clients: ["L&T", "Shapoorji Pallonji"],
      projects: "30+ commercial projects executed"
    },
    {
      title: "Industrial",
      description: "Specialized industrial waterproofing and flooring solutions for pharmaceutical, chemical, and manufacturing facilities.",
      services: [
        "Industrial epoxy flooring",
        "PU flooring systems",
        "Chemical resistant coatings",
        "Cleanroom floor systems",
        "Warehouse waterproofing",
        "Tank & containment lining"
      ],
      clients: ["Abbott India", "Cipla Ltd", "USV Ltd", "Lupin Pharmaceuticals"],
      projects: "25+ industrial facilities"
    },
    {
      title: "Infrastructure",
      description: "Heavy-duty waterproofing for metros, tunnels, bridges, and critical infrastructure projects.",
      services: [
        "Metro station waterproofing",
        "TBM tunnel systems",
        "Bridge deck protection",
        "Underground structure protection",
        "Retaining wall waterproofing",
        "Expansion joint sealing"
      ],
      clients: ["L&T", "Adani Group", "Tata Projects", "Afcons Infrastructure"],
      projects: "15+ infrastructure projects"
    }
  ];

  return (
    <>
      <SEO
        title="Industries & Clients - Sectors We Serve & Trusted Partners | Sunanda Group"
        description="Sunanda Group serves residential, commercial, industrial, and infrastructure sectors. Trusted by leading developers, infrastructure companies, and industrial clients across India."
        keywords="residential waterproofing, commercial waterproofing, industrial waterproofing, infrastructure waterproofing, sunanda clients"
        canonical="https://sunandagroup.com/sectors"
      />

      <div className="bg-brand-blue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
              Segments & Clients
            </h1>
            <p className="text-2xl md:text-3xl leading-snug" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Delivering specialized waterproofing and structural repair solutions across diverse sectors.
            </p>
            <div className="h-0.5 mt-8" style={{ width: '50px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></div>
          </div>
        </div>
      </div>

      <section className="pt-9 pb-9 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
              Segments We Serve
            </h2>
            <div className="h-0.5 mb-10" style={{ width: '50px', backgroundColor: '#1E5B9C' }}></div>

            <div className="space-y-12">
              {sectors.map((sector, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#1F2937' }}>
                    {sector.title}
                  </h3>
                  <div className="h-0.5 mb-6" style={{ width: '40px', backgroundColor: '#1E5B9C' }}></div>

                  <p className="text-lg leading-normal mb-8" style={{ color: '#374151' }}>
                    {sector.description}
                  </p>

                  <div className="bg-neutral-50 p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>
                          Overview
                        </h4>
                        <p className="text-lg font-semibold" style={{ color: '#1E5B9C' }}>
                          {sector.projects}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>
                          Services Offered
                        </h4>
                        <ul className="space-y-2">
                          {sector.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ backgroundColor: '#1E5B9C' }}></span>
                              <span className="text-lg leading-normal" style={{ color: '#374151' }}>
                                {service}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>
                          Key Clients
                        </h4>
                        <ul className="space-y-2">
                          {sector.clients.map((client, clientIndex) => (
                            <li key={clientIndex} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ backgroundColor: '#1E5B9C' }}></span>
                              <span className="text-lg leading-normal" style={{ color: '#374151' }}>
                                {client}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-center" style={{ color: '#0F172A' }}>
              Our Trusted Partners
            </h2>
            <div className="h-0.5 mb-10 mx-auto" style={{ width: '50px', backgroundColor: '#1E5B9C' }}></div>
            <ClientCarousel clients={clients} />
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
              Performance & Partnerships
            </h2>
            <div className="h-0.5 mb-10" style={{ width: '50px', backgroundColor: '#1E5B9C' }}></div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>
                  Client Trust & Long-Term Partnerships
                </h3>
                <p className="text-lg leading-normal mb-8" style={{ color: '#374151' }}>
                  Built on repeat engagement, execution reliability, and delivery consistency.
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1E5B9C' }}>80%</div>
                    <p className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Repeat Client Rate</p>
                    <p className="text-base" style={{ color: '#6B7280' }}>Long-term associations</p>
                  </div>

                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1E5B9C' }}>150+</div>
                    <p className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Projects Delivered</p>
                    <p className="text-base" style={{ color: '#6B7280' }}>Repeat orders across sectors</p>
                  </div>

                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1E5B9C' }}>13+</div>
                    <p className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Years of Trust</p>
                    <p className="text-base" style={{ color: '#6B7280' }}>Consultant-driven specifications</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>
                  Cross-Sector Execution Experience
                </h3>
                <p className="text-lg leading-normal mb-8" style={{ color: '#374151' }}>
                  Delivering proven solutions across residential, commercial, industrial, and infrastructure projects.
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1E5B9C' }}>150+</div>
                    <p className="text-lg font-semibold" style={{ color: '#1F2937' }}>Total Projects</p>
                  </div>

                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1E5B9C' }}>50L+</div>
                    <p className="text-lg font-semibold" style={{ color: '#1F2937' }}>Sq. Ft. Executed</p>
                  </div>

                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1E5B9C' }}>13+</div>
                    <p className="text-lg font-semibold" style={{ color: '#1F2937' }}>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0F172A' }}>
              Ready to Partner With Us?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-4 text-lg inline-block">
                Request Consultation
              </Link>
              <Link to="/projects" className="btn-secondary px-8 py-4 text-lg inline-block">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
