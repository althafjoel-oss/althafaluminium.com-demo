import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917358403185?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-heading font-bold mb-4 text-gradient-metallic">
              Althaf Aluminium
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming spaces with premium aluminum partitions, false ceilings, and glass works for industrial and commercial excellence.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/')} 
                  className="text-white/80 hover:text-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/portfolio')} 
                  className="text-white/80 hover:text-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Aluminum Partitions
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Factory False Ceilings
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Office Partitions
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Gypsum Ceilings
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href="tel:+917358403185" 
                className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">Call Us</p>
                  <p className="text-white/90">+91 7358403185</p>
                </div>
              </a>

              <a 
                href="mailto:meeranm062@gmail.com" 
                className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">Email Us</p>
                  <p className="text-white/90">meeranm062@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/60 mb-1">Location</p>
                  <p className="text-white/90">
                    16/2 Perumal Kovil 2nd Street,<br />
                    Virugambakkam, Chennai-92
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Ready to Transform Your Space?</h3>
              <p className="text-white/80">Get a free consultation and quote for your project</p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA59] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              Contact on WhatsApp
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} Althaf Aluminium. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;