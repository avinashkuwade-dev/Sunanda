export default function WhyWaterproofing() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/closeup-shot-worker-protective-gloves-painting-wooden-details.jpg)' }}
      />
      <div className="absolute inset-0 bg-blue-900/85" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Waterproofing is Crucial
          </h2>
          <p className="text-xl text-white">
            Understanding the importance of proper waterproofing in construction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90" width="192" height="192">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="20"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#EF4444"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray="502.4"
                    strokeDashoffset="492.352"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl font-bold">2%</span>
                  <span className="text-sm">of Total Cost</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Construction Costs</h3>
            <p className="text-white text-center">
              Waterproofing is only 2% of total construction costs, yet critical to building longevity
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90" width="192" height="192">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="20"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#10B981"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray="502.4"
                    strokeDashoffset="75.36"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl font-bold">85%</span>
                  <span className="text-sm">Water Related</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Building Defects</h3>
            <p className="text-white text-center">
              85% of building defects are related to water ingress if waterproofing is ignored
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-10 border-l-4 border-blue-400">
          <h4 className="text-2xl font-bold mb-4 text-white">
            Engineering Insight: Waterproofing & Structural Durability
          </h4>
          <p className="text-white leading-relaxed mb-4">
            Waterproofing performance depends as much on execution discipline as on material selection. Inadequate or improperly executed waterproofing results in progressive moisture ingress, leading to concrete deterioration, reinforcement corrosion, and reduced structural lifespan.
          </p>
          <p className="text-white leading-relaxed mb-4">
            Over time, this impacts safety, serviceability, and long-term maintenance costs. A well-designed waterproofing system is therefore an essential part of structural engineering—not a cosmetic add-on.
          </p>
          <p className="text-white font-semibold leading-relaxed">
            At Sunanda Group, waterproofing is approached as a long-term performance system, backed by technical design and execution discipline.
          </p>
        </div>
      </div>
    </section>
  );
}
