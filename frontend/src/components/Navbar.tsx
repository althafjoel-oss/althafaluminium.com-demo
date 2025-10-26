import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/IMG-20251018-WA0008.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5"
          : "bg-gradient-to-b from-background/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <img
              src={logo}
              alt="Althaf Aluminium Logo"
              className="w-12 h-12 object-contain group-hover:rotate-3 transition-transform duration-300"
            />
            <span className="text-2xl font-heading font-bold text-gradient-metallic">
              Althaf Aluminium
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-foreground/90 hover:text-accent font-medium transition-all duration-300 relative group hover:scale-110"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
                <span className="absolute inset-0 bg-accent/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </a>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/917358403185?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services', '_blank')}
              className="bg-[#25D366] hover:bg-[#20BA59] text-white border-none hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2" size={18} />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-90 p-2 rounded-lg hover:bg-accent/10 backdrop-blur-sm"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/80 backdrop-blur-xl rounded-xl shadow-strong border border-white/10 mt-2 py-4 animate-fade-in overflow-hidden">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-3 text-foreground/90 hover:text-accent hover:bg-accent/10 hover:backdrop-blur-lg transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => window.open('https://wa.me/917358403185?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services', '_blank')}
                className="w-full bg-[#25D366] hover:bg-[#20BA59] text-white border-none hover:shadow-glow transition-all duration-300"
              >
                <MessageCircle className="mr-2" size={18} />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
