import { Link } from 'react-router-dom';
import { Building2, Boxes, Construction, Factory } from 'lucide-react';
import SEO from '../components/SEO';

const services = [
  {
    icon: Building2,
    title: 'Building Waterproofing',
    description: 'Comprehensive waterproofing solutions for residential, commercial, and high-rise buildings including terrace, basement, external walls, and wet areas.',
    features: ['Terrace Waterproofing', 'Basement Waterproofing', 'External Wall Protection', 'Bathroom & Kitchen Areas'],
    link: '/services/building-waterproofing',
    image: '/basement_wp.jpg'
  },
  {
    icon: Boxes,
    title: 'Infrastructure Waterproofing',
    description: 'Specialized solutions for large-scale infrastructure projects including metro systems, tunnels, bridges, and coastal structures.',
    features: ['Metro Corridors & Stations', 'Tunnels & Underground', 'Bridges & Flyovers', 'Marine Structures'],
    link: '/services/infrastructure-waterproofing',
    image: '/the-invisible-city-indias-urban-infrastructure-projects-of-2025-that-deserve-attention_9.jpg'
  },
  {
    icon: Construction,
    title: 'Structural Repair & RCC',
    description: 'Expert structural restoration, concrete repair, and rehabilitation services to extend the life of existing structures.',
    features: ['Concrete Restoration', 'Crack Repair & Injection', 'Carbonation Treatment', 'Structural Strengthening'],
    link: '/services/structural-repair',
    image: '/files_8501074-1768901336853-structural-repair.jpg.jpg'
  },
  {
    icon: Factory,
    title: 'Industrial & Pharma Flooring',
    description: 'Clean room grade epoxy and PU flooring systems designed for pharmaceutical, chemical, and food processing industries.',
    features: ['Epoxy Flooring Systems', 'PU Flooring', 'Clean Room Grade', 'Chemical Resistant'],
    link: '/services/industrial-flooring',
    image: '/670d3f4a803f1161e161b331_industrial_floor_coatings_in_houston.png'
  }
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Professional Waterproofing Services - Sunanda Group"
        description="Complete waterproofing and structural repair services for buildings, infrastructure, and industrial facilities. Expert solutions backed by 13+ years of experience."
      />

      <div className="bg-gradient-to-br from-brand-blue to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive waterproofing, structural repair, and industrial flooring solutions delivered by experienced professionals
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg">
                    <Icon className="text-brand-blue" size={32} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">{service.title}</h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-neutral-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-orange transition group-hover:gap-2 gap-1"
                  >
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-neutral-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Need Expert Advice?</h2>
          <p className="text-lg text-neutral-600 mb-6">
            Our technical team is ready to help you choose the right solution for your project
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
