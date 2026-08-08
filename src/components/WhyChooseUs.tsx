const reasons = [
  {
    title: '13+ Years Experience',
    highlight: '13+',
    description: 'Over a decade of execution experience across basements, terraces, and infrastructure structures.'
  },
  {
    title: 'Quality Execution',
    highlight: null,
    description: 'Engineering-led site execution with robust supervision and strict conformance to approved method statements.'
  },
  {
    title: 'Expert Team',
    highlight: null,
    description: 'A highly experienced leadership and supervision team with 25+ years of industry experience, delivering deep technical and execution expertise.'
  },
  {
    title: 'Prestigious Clients',
    highlight: null,
    description: 'Trusted by leading developers, infrastructure contractors, and pharmaceutical companies.'
  },
  {
    title: 'Technical Excellence',
    highlight: null,
    description: 'Backed by strong technical support from reputed domestic and international manufacturers.'
  },
  {
    title: '80% Repeat Clients',
    highlight: '80%',
    description: 'High client retention driven by reliability, performance, and delivery discipline.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Choose Sunanda Group
              </h2>
              <p className="text-2xl font-semibold text-white mb-6 leading-snug">
                Engineering-led waterproofing with proven execution consistency
              </p>
              <p className="text-lg text-white leading-relaxed mb-8">
                Sunanda Group combines technical depth, site execution discipline, and long-term system reliability to deliver waterproofing and structural repair solutions that perform under real-world conditions.
              </p>
              <a
                href="/projects"
                className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition"
              >
                Explore Our Projects
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-white/20 hover:border-white/40 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {reason.highlight ? (
                      <>
                        <span className="font-extrabold" style={{ color: '#0F172A' }}>{reason.highlight}</span>
                        {reason.title.replace(reason.highlight, '')}
                      </>
                    ) : (
                      reason.title
                    )}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
