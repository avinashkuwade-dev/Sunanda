import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    requirement: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      location: '',
      requirement: '',
      message: ''
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <>
      <SEO
        title="Contact Us - Get Waterproofing Consultation | Sunanda Group"
        description="Get in touch with Sunanda Group for waterproofing and structural repair consultations."
        keywords="contact sunanda group, waterproofing consultation, project enquiry"
        canonical="https://sunandagroup.com/contact"
      />

      <div className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl">
            For technical discussions, project enquiries, or consultation requests, connect with the Sunanda Group team.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-neutral-800 mb-8">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue text-white p-3 rounded-lg flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-neutral-800 mb-2">Registered Office</h3>
                        <p className="text-neutral-700 leading-relaxed">
                          Sunanda Group<br />
                          Akshar Business Park, Ground Floor Y Wing<br />
                          Sector 25, Plot 03, Vashi<br />
                          Navi Mumbai, Maharashtra 400703<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue text-white p-3 rounded-lg flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-neutral-800 mb-2">Phone</h3>
                        <div className="space-y-1">
                          <a href="tel:+919987425215" className="block text-brand-blue hover:text-brand-orange transition">
                            +91 9987425215
                          </a>
                          <a href="tel:+917400332409" className="block text-brand-blue hover:text-brand-orange transition">
                            +91 7400332409
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue text-white p-3 rounded-lg flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-neutral-800 mb-2">Email</h3>
                        <a href="mailto:sunandaenterprises30@gmail.com" className="text-brand-blue hover:text-brand-orange transition break-all">
                          sunandaenterprises30@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue text-white p-3 rounded-lg flex-shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-neutral-800 mb-2">Business Hours</h3>
                        <p className="text-neutral-700">
                          Monday - Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-neutral-100 p-8 rounded-lg border-2 border-neutral-200">
                  <h2 className="text-3xl font-bold text-neutral-800 mb-6">Send Enquiry</h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      Thank you! Your enquiry has been submitted successfully. We will get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:border-brand-blue focus:outline-none transition"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-neutral-800 mb-2">
                        Company / Project Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:border-brand-blue focus:outline-none transition"
                        placeholder="Company or project name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:border-brand-blue focus:outline-none transition"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-800 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:border-brand-blue focus:outline-none transition"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-neutral-800 mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:border-brand-blue focus:outline-none transition"
                        placeholder="City, State"
                      />
                    </div>

                    <div>
                      <label htmlFor="requirement" className="block text-sm font-semibold text-neutral-800 mb-2">
                        Nature of Requirement *
                      </label>
                      <select
                        id="requirement"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:border-brand-blue focus:outline-none transition bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="building-waterproofing">Building Waterproofing</option>
                        <option value="infrastructure-waterproofing">Infrastructure Waterproofing</option>
                        <option value="structural-repair">Structural Repair</option>
                        <option value="industrial-flooring">Industrial Flooring</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:border-brand-blue focus:outline-none transition resize-none"
                        placeholder="Additional details about your requirement..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>Submitting...</>
                      ) : (
                        <>
                          <Send size={20} />
                          Submit Enquiry
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
