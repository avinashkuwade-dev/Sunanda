import HeroSlider from '../components/HeroSlider';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import WhyWaterproofing from '../components/WhyWaterproofing';
import SEO from '../components/SEO';
import ClientCarousel from '../components/ClientCarousel';
import { clients } from '../data/clients';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Sunanda Group - Leading Waterproofing Contractors Mumbai | 13+ Years Experience"
        description="Top waterproofing contractors in Mumbai. 150+ projects, 50L sq ft executed. Expert in building, infrastructure, structural repair & industrial flooring. Trusted by Birla, L&T, Lodha."
        keywords="waterproofing contractors Mumbai, basement waterproofing, terrace waterproofing, structural repair, industrial flooring, RCC jacketing"
        canonical="https://sunandagroup.com"
      />

      <HeroSlider />
      <StatsSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Sunanda Group
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Committed to build the legacy with passion and integrity by providing innovative,
                high-quality services with Modern Technology in 'Waterproofing and Structure Repairs' since 2013
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Headquartered in Vashi, Navi Mumbai, Sunanda Group comprises three specialized entities:
                Sunanda Eternity LLP, Sunanda EngTech Pvt Ltd, and Sunanda Enterprises. With over 13 years
                of experience, we have successfully completed 150+ projects covering 50 lakh square feet
                across India.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-neutral-100 rounded-lg border border-neutral-200">
                <h3 className="font-bold text-xl text-brand-blue mb-2">Sunanda Eternity LLP</h3>
                <p className="text-neutral-700">Waterproofing</p>
              </div>
              <div className="text-center p-6 bg-neutral-100 rounded-lg border border-neutral-200">
                <h3 className="font-bold text-xl text-brand-blue mb-2">Sunanda EngTech Pvt Ltd</h3>
                <p className="text-neutral-700">Infrastructure & Metro Waterproofing</p>
              </div>
              <div className="text-center p-6 bg-neutral-100 rounded-lg border border-neutral-200">
                <h3 className="font-bold text-xl text-brand-blue mb-2">Sunanda Enterprises</h3>
                <p className="text-neutral-700">Repair & Rehabilitation, Floor Coatings and Grouting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ServicesSection />
      <WhyWaterproofing />

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Prestigious Clients
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by India's leading organizations across industries
            </p>
          </div>

          <ClientCarousel clients={clients} />

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-brand-orange mb-2">80% Repeat Client Rate</p>
            <p className="text-neutral-700">Building lasting partnerships through quality and consistency</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Waterproofing Needs?
          </h2>
          <p className="text-xl mb-8 text-white">
            Get a free consultation and quote from India's leading waterproofing experts
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="btn-primary px-8 py-4 text-lg inline-block"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
