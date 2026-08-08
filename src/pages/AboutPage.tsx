import { Building2, Users, Award, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Sunanda Group - 13+ Years of Waterproofing Excellence | Mumbai"
        description="Sunanda Group is India's leading waterproofing contractor with 13+ years of experience. 150+ projects completed, 50L sq ft executed. Expert in structural repairs and industrial flooring."
        keywords="about sunanda group, waterproofing company mumbai, structural repair experts, turnkey waterproofing contractors"
        canonical="https://sunandagroup.com/about-us"
      />

      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Sunanda Group</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            When Quality & Consistency Matters – We Are Your Waterproofers
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2013 and headquartered in Vashi, Navi Mumbai, Sunanda Group has established itself
                as India's premier provider of specialized turnkey waterproofing solutions, structural repairs,
                and industrial flooring systems.
              </p>
              <p>
                With over 13 years of engineering-led execution excellence, we have successfully delivered
                150+ complex projects spanning 50 lakh square feet across residential, commercial, infrastructure,
                grouting and industrial segments.
              </p>
              <p>
                Our foundation is built on technical authority, not sales-heavy approaches. Every project begins
                with engineering assessment, precise system design, and compliance-driven execution. This methodology
                has earned us an 80% repeat client rate from India's most demanding organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Turnkey Expertise</h3>
              <p className="text-gray-600">
                Complete end-to-end solutions from assessment to warranty, executed by in-house technical teams.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Leadership</h3>
              <p className="text-gray-600">
                25+ years of combined leadership experience in waterproofing and structural engineering domains.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturer Partnerships</h3>
              <p className="text-gray-600">
                Authorized applicators for leading global waterproofing systems with technical certifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pan-India Presence</h3>
              <p className="text-gray-600">
                Nationwide execution capability with local teams and centralized quality management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Approach</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Engineering-First Methodology:</strong> We begin every engagement
                with structural assessment and system engineering, not product sales. Our technical teams analyze
                substrate conditions, identify root causes, and design fit-for-purpose solutions.
              </p>
              <p>
                <strong className="text-gray-900">Compliance & Documentation:</strong> Every project follows documented
                method statements, quality checklists, and safety protocols. We maintain complete traceability from
                material procurement to application and testing.
              </p>
              <p>
                <strong className="text-gray-900">Long-Term Partnership:</strong> Our repeat client rate speaks to our
                commitment beyond project completion. We provide technical support, warranty servicing, and maintenance
                guidance for the lifecycle of installed systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2013</div>
              <div className="text-blue-200">Year Founded</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50L+</div>
              <div className="text-blue-200">Sq Ft Executed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">80%</div>
              <div className="text-blue-200">Repeat Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To build lasting legacy through passion and integrity by providing innovative, high-quality
              waterproofing and structural repair services powered by modern technology, skilled execution,
              and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
