import SEO from '../components/SEO';

const functionalAreas = [
  {
    title: 'Engineering & Technical Leadership',
    responsibilities: [
      'Waterproofing system design',
      'Structural repair methodology',
      'Material selection and detailing'
    ]
  },
  {
    title: 'Project Execution & Site Management',
    responsibilities: [
      'Site supervision and planning',
      'Method statement implementation',
      'Coordination with contractors and consultants'
    ]
  },
  {
    title: 'Quality Assurance & Safety',
    responsibilities: [
      'Quality control checks',
      'Testing and inspection protocols',
      'Safety compliance and training'
    ]
  },
  {
    title: 'Commercial & Client Coordination',
    responsibilities: [
      'Project coordination',
      'Billing and documentation',
      'Client communication'
    ]
  }
];

const leadershipProfiles = [
  {
    name: 'Mr. Kailas Ambekar',
    designation: 'Managing Director',
    description: 'Provides overall leadership and strategic direction. Oversees technical decision-making, execution strategy, and long-term business growth.'
  },
  {
    name: 'Mr. Raju Chavan',
    designation: 'Managing Associate',
    description: 'Leads project execution and site coordination. Manages site operations and ensures adherence to methodologies and quality standards.'
  }
];

const metrics = [
  { value: '13+', label: 'Years of industry experience' },
  { value: '150+', label: 'Projects executed' },
  { value: 'Pan-India', label: 'Execution capability' },
  { value: 'Multi-segment', label: 'Expertise' }
];

export default function TeamPage() {
  return (
    <>
      <SEO
        title="Core Team | Sunanda Group"
        description="Sunanda Group's core team brings together experienced professionals across engineering, project execution, quality control, and site management."
      />

      <div className="bg-brand-blue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
              Our Core Team
            </h1>
            <p className="text-2xl md:text-3xl leading-snug" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Experienced professionals across engineering, execution, quality control, and site management.
            </p>
          </div>
        </div>
      </div>

      <section className="pt-9 pb-9 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
              Leadership Team
            </h2>
            <div className="h-0.5 mb-10" style={{ width: '50px', backgroundColor: '#1E5B9C' }}></div>

            <div className="space-y-10">
              {leadershipProfiles.map((profile, index) => (
                <div key={index} className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-1" style={{ color: '#0F172A' }}>
                      {profile.name}
                    </h3>
                    <p className="text-lg" style={{ color: '#1E5B9C' }}>
                      {profile.designation}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                      {profile.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
              Leadership & Execution Philosophy
            </h2>
            <div className="h-0.5 mb-8" style={{ width: '50px', backgroundColor: '#1E5B9C' }}></div>
            <p className="text-xl leading-relaxed" style={{ color: '#374151', lineHeight: '1.75' }}>
              Our leadership approach is rooted in technical understanding, practical site experience, and accountability at every stage of execution. The core team actively oversees project planning, system selection, execution methodology, and quality assurance to ensure reliable performance across all projects.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
              Core Team Structure
            </h2>
            <div className="h-0.5 mb-10" style={{ width: '50px', backgroundColor: '#1E5B9C' }}></div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {functionalAreas.map((area, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {area.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ backgroundColor: '#1E5B9C' }}></span>
                        <span className="text-lg leading-normal" style={{ color: '#374151' }}>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-9 pb-9" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
              Experience & Credibility
            </h2>
            <div className="h-0.5 mb-10" style={{ width: '50px', backgroundColor: '#1E5B9C' }}></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#1E5B9C' }}>
                    {metric.value}
                  </div>
                  <div className="text-sm" style={{ color: '#6B7280' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#0F172A' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-white italic" style={{ letterSpacing: '0.02em' }}>
              "The strength of Sunanda Group lies in its people, processes, and execution discipline—working together to deliver dependable outcomes across diverse project requirements."
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
