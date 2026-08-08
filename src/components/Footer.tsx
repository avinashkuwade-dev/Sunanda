import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <img
              src="/untitled_(516_x_538_px).jpg"
              alt="Sunanda Group"
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm mb-4">
              When Quality & Consistency Matters - We are your Waterproofers!
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about-us" className="text-neutral-700 hover:text-brand-blue transition">About Us</a></li>
              <li><a href="/services" className="text-neutral-700 hover:text-brand-blue transition">Services</a></li>
              <li><a href="/careers" className="text-neutral-700 hover:text-brand-blue transition">Careers</a></li>
              <li><a href="/contact" className="text-neutral-700 hover:text-brand-blue transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/building-waterproofing" className="text-neutral-700 hover:text-brand-blue transition">Building Waterproofing</a></li>
              <li><a href="/services/infrastructure-waterproofing" className="text-neutral-700 hover:text-brand-blue transition">Infrastructure Waterproofing</a></li>
              <li><a href="/services/structural-repair" className="text-neutral-700 hover:text-brand-blue transition">Structural Repair</a></li>
              <li><a href="/services/industrial-flooring" className="text-neutral-700 hover:text-brand-blue transition">Industrial Flooring</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Segments</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/sectors" className="text-neutral-700 hover:text-brand-blue transition">Residential</a></li>
              <li><a href="/sectors" className="text-neutral-700 hover:text-brand-blue transition">Commercial</a></li>
              <li><a href="/sectors" className="text-neutral-700 hover:text-brand-blue transition">Industrial</a></li>
              <li><a href="/sectors" className="text-neutral-700 hover:text-brand-blue transition">Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Akshar Business Park, Ground Floor Y Wing, Sector 25, Plot 03, Vashi, Navi Mumbai, Maharashtra 400703</span>
              </li>
              <li className="flex gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919987425215" className="text-neutral-700 hover:text-brand-blue transition">+91 9987425215</a>
                  <a href="tel:+917400332409" className="text-neutral-700 hover:text-brand-blue transition">+91 7400332409</a>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:sunandaenterprises30@gmail.com" className="text-neutral-700 hover:text-brand-blue transition break-all">
                  sunandaenterprises30@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-neutral-700">&copy; 2025 Sunanda Group. All Rights Reserved</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-neutral-700 hover:text-brand-blue transition">Privacy Policy</a>
              <a href="/terms-conditions" className="text-neutral-700 hover:text-brand-blue transition">Terms & Conditions</a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-neutral-900">
            <p className="text-xs text-neutral-600">
              Crafted by <a href="https://www.propelomarketing.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition">Propelo Marketing</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
