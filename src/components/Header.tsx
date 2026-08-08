import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`bg-brand-blue text-white py-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+919987425215" className="flex items-center gap-2 hover:text-brand-orange transition">
              <Phone size={16} />
              <span>+91 9987425215</span>
            </a>
            <a href="mailto:sunandaenterprises30@gmail.com" className="flex items-center gap-2 hover:text-brand-orange transition">
              <Mail size={16} />
              <span>sunandaenterprises30@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block text-xs">
            Mon-Sat: 9:00 AM - 6:00 PM
          </div>
        </div>
      </div>

      <nav className={`container mx-auto px-4 py-4 transition-all duration-300 ${isScrolled ? 'shadow-sm' : 'bg-white shadow-sm'}`} style={isScrolled ? { backgroundColor: 'rgba(255, 255, 255, 0.94)' } : {}}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <img
              src="/untitled_(516_x_538_px).jpg"
              alt="Sunanda Group Logo"
              className="h-14 w-auto"
            />
            <span className="text-xl font-semibold tracking-wide text-neutral-800">
              Sunanda Group
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="font-medium text-neutral-700 hover:text-brand-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-blue after:transition-all">Home</Link>

            <div className="relative group">
              <button className="font-medium text-neutral-700 hover:text-brand-blue transition-all duration-300 flex items-center gap-1 py-2">
                About <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white shadow-lg rounded-md py-2 border border-neutral-200">
                  <Link to="/about-us" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">About Us</Link>
                  <Link to="/group-companies" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">Group Companies</Link>
                  <Link to="/why-sunanda" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">Why Sunanda</Link>
                  <Link to="/team" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">Core Team</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link to="/services" className="font-medium text-neutral-700 hover:text-brand-blue transition-all duration-300 flex items-center gap-1 py-2">
                Services <ChevronDown size={16} />
              </Link>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white shadow-lg rounded-md py-2 border border-neutral-200">
                  <Link to="/services" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue font-semibold border-b border-neutral-200">All Services</Link>
                  <Link to="/services/building-waterproofing" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">Building Waterproofing</Link>
                  <Link to="/services/infrastructure-waterproofing" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">Infrastructure Waterproofing</Link>
                  <Link to="/services/structural-repair" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">Structural Repair & RCC</Link>
                  <Link to="/services/industrial-flooring" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-blue">Industrial & Pharma Flooring</Link>
                </div>
              </div>
            </div>

            <Link to="/sectors" className="font-medium text-neutral-700 hover:text-brand-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-blue after:transition-all">Segments & Clients</Link>
            <Link to="/contact" className="font-medium text-neutral-700 hover:text-brand-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-blue after:transition-all">Contact</Link>
          </div>

          <Link
            to="/contact"
            className="hidden lg:block btn-primary"
          >
            Get Quote
          </Link>

          <button
            className="lg:hidden text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 bg-white rounded-md shadow-lg -mx-4 px-4">
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-neutral-700 hover:text-brand-blue font-medium">Home</Link>

              <div>
                <button onClick={() => setIsAboutOpen(!isAboutOpen)} className="flex items-center justify-between w-full text-neutral-700 hover:text-brand-blue font-medium">
                  About <ChevronDown size={16} className={isAboutOpen ? 'rotate-180 transition' : 'transition'} />
                </button>
                {isAboutOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/about-us" className="block text-neutral-900 hover:text-brand-blue">About Us</Link>
                    <Link to="/group-companies" className="block text-neutral-900 hover:text-brand-blue">Group Companies</Link>
                    <Link to="/why-sunanda" className="block text-neutral-900 hover:text-brand-blue">Why Sunanda</Link>
                    <Link to="/team" className="block text-neutral-900 hover:text-brand-blue">Core Team</Link>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center justify-between w-full text-neutral-700 hover:text-brand-blue font-medium">
                  Services <ChevronDown size={16} className={isServicesOpen ? 'rotate-180 transition' : 'transition'} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/services" className="block text-neutral-900 hover:text-brand-blue font-semibold">All Services</Link>
                    <Link to="/services/building-waterproofing" className="block text-neutral-900 hover:text-brand-blue">Building Waterproofing</Link>
                    <Link to="/services/infrastructure-waterproofing" className="block text-neutral-900 hover:text-brand-blue">Infrastructure Waterproofing</Link>
                    <Link to="/services/structural-repair" className="block text-neutral-900 hover:text-brand-blue">Structural Repair & RCC</Link>
                    <Link to="/services/industrial-flooring" className="block text-neutral-900 hover:text-brand-blue">Industrial Flooring</Link>
                  </div>
                )}
              </div>

              <Link to="/sectors" className="text-neutral-700 hover:text-brand-blue font-medium">Segments & Clients</Link>
              <Link to="/contact" className="text-neutral-700 hover:text-brand-blue font-medium">Contact</Link>
              <Link to="/contact" className="btn-primary text-center">
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
