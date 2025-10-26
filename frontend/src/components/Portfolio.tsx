import { motion } from "framer-motion";
import { Building2, Factory, Briefcase, Frame, Settings, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

// Professional stock images
const serviceCabin = "https://images.unsplash.com/photo-1715593949273-09009558300a";
const serviceCeiling = "https://images.unsplash.com/photo-1482731215275-a1f151646268";
const serviceGlass = "https://images.unsplash.com/photo-1600421857173-26a9c994d27c";
const servicePartitions = "https://images.unsplash.com/photo-1497366754035-f200968a6e72";
const factoryCeiling = "https://images.pexels.com/photos/15811686/pexels-photo-15811686.jpeg";
const project1 = "https://images.unsplash.com/photo-1559458049-9d62fceeb52b";
const project2 = "https://images.unsplash.com/photo-1549791084-5f78368b208b";
const project3 = "https://images.unsplash.com/photo-1578803203370-8b000b589edd";
const aboutOfficePartition = "https://images.unsplash.com/photo-1495576775051-8af0d10f19b1";
const butterflyLouver = "https://images.unsplash.com/photo-1497366811353-6870744d04b2";

// Portfolio images
const portfolio1 = "https://images.unsplash.com/photo-1497366811353-6870744d04b2";
const portfolio2 = "https://images.unsplash.com/photo-1559458049-9d62fceeb52b";
const portfolio3 = "https://images.unsplash.com/photo-1600508773950-d522f5bb7606";
const portfolio4 = "https://images.unsplash.com/photo-1662098963427-fe6b7724d998";
const portfolio5 = "https://images.pexels.com/photos/4090093/pexels-photo-4090093.jpeg";
const portfolio6 = "https://images.unsplash.com/photo-1549791084-5f78368b208b";
const portfolio7 = "https://images.unsplash.com/photo-1578803203370-8b000b589edd";
const portfolio8 = "https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg";
const portfolio9 = "https://images.unsplash.com/photo-1698241099502-309e17808bd0";
const portfolio10 = "https://images.pexels.com/photos/15811686/pexels-photo-15811686.jpeg";

// Placeholder for user's own images (blank spaces for them to add later)
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23E5E7EB' width='800' height='600'/%3E%3Ctext fill='%236B7280' font-family='Arial, sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EAdd Your Image Here%3C/text%3E%3C/svg%3E";
const Portfolio = () => {
  const categories = [{
    title: "Aluminum Partitions",
    description: "Modern aluminum partition systems for offices and commercial spaces",
    image: servicePartitions,
    icon: Building2
  }, {
    title: "Factory False Ceilings",
    description: "Industrial-grade false ceiling solutions for manufacturing facilities",
    image: factoryCeiling,
    icon: Factory
  }, {
    title: "Office Partitions",
    description: "Professional workspace divisions with soundproof and glass options",
    image: serviceCabin,
    icon: Briefcase
  }, {
    title: "Butterfly Louver Partition",
    description: "Decorative room divider with horizontal louvers for light flow and stylish separation",
    image: butterflyLouver,
    icon: Frame
  }, {
    title: "Glass Partition",
    description: "Premium tempered glass partitions with sleek aluminum frames for modern offices",
    image: serviceGlass,
    icon: Settings
  }, {
    title: "Custom Designs",
    description: "Bespoke aluminum solutions tailored to your unique requirements",
    image: servicePartitions,
    icon: Sparkles
  }];
  const galleryImages = [
    recentPhoto1,
    recentPhoto3,
    recentPhoto4,
    recentPhoto5,
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    portfolio9,
    portfolio10,
    newPhoto1,
    newPhoto2,
    newPhoto3,
    newPhoto4,
    newPhoto5,
    newPhoto6,
    newPhoto7,
    newPhoto8,
    newPhoto9,
    newPhoto10,
    newPhoto11,
    newPhoto12,
    newPhoto13,
    newPhoto14,
    newPhoto15,
    newPhoto16,
    newPhoto17,
    newPhoto18,
    newPhoto19,
    project1,
    project2,
    project3,
    aboutOfficePartition,
    serviceCabin,
    serviceCeiling,
    serviceGlass,
    servicePartitions,
    factoryCeiling
  ];
  const handleWhatsApp = () => {
    window.open('https://wa.me/917358403185?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services', '_blank');
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our Work & <span className="text-gradient-accent">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Explore our aluminum partitions and false ceiling designs for modern spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Project <span className="text-gradient-accent">Categories</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions across diverse sectors and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
            const Icon = category.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer h-full">
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                        <div className="bg-accent/20 backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-4 h-4 md:w-6 md:h-6 text-accent" />
                        </div>
                        <h3 className="text-white text-sm md:text-xl font-heading font-semibold mb-1 md:mb-3 leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-white/90 text-[10px] md:text-sm leading-snug md:leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          

          <ParallaxScroll images={galleryImages} />

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full shadow-soft hover:shadow-strong hover:scale-105 transition-all duration-300">
              View Full Photo Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Start Your <span className="text-gradient-accent">Project?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Get in touch with us today and let's bring your vision to life with premium aluminum solutions
            </p>
            <Button onClick={handleWhatsApp} size="lg" className="text-lg px-8 py-6 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-strong hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:rotate-1 hover:-translate-y-1">
              Contact Us on WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Portfolio;