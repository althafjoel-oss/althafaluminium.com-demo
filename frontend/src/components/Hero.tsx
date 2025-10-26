import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroBackground = "https://images.unsplash.com/photo-1637665759389-41818b867562";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundAttachment: "fixed"
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
            Transforming Spaces with
            <span className="block mt-2 text-gradient-accent">
              Aluminum Elegance
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Premium aluminum partitions, false ceilings, and glass works for modern homes and offices
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group">
              Get a Free Quote
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            
            <Button onClick={scrollToContact} size="lg" variant="outline" className="bg-white/10 border-2 border-white/50 text-white hover:bg-white/20 hover:border-white text-lg px-8 py-6 backdrop-blur-md transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-colors" aria-label="Scroll to next section">
            
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;