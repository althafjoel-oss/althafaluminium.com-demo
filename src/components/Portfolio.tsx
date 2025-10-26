/**
 * PORTFOLIO COMPONENT - Optimized for Scroll Animations & Responsive Design
 *
 * KEY IMPROVEMENTS:
 * 1. Larger photo containers (500px height) - prevents image cropping
 * 2. Smooth scroll-triggered animations with Framer Motion
 * 3. Fully responsive across mobile, tablet, and desktop
 * 4. Performance optimized with lazy loading and GPU acceleration
 * 5. Interactive hover effects and parallax scrolling
 *
 * CUSTOMIZATION GUIDE:
 *
 * Photo Container Size (Line 239):
 * - Current: imageHeight="h-[500px]" (500px tall containers)
 * - Smaller: imageHeight="h-96" (384px)
 * - Larger: imageHeight="h-[600px]" (600px)
 * - Extra Large: imageHeight="h-[700px]" (700px)
 *
 * Spacing Between Photos (Line 240):
 * - Current: gap="gap-10" (40px spacing)
 * - Less space: gap="gap-6" (24px)
 * - More space: gap="gap-12" (48px)
 *
 * Animation Speed:
 * - Edit src/components/ui/parallax-scroll.tsx lines 47-49
 * - Slower: [0, -100], [0, 100], [0, -50]
 * - Faster: [0, -300], [0, 300], [0, -150]
 *
 * Scroll Trigger Point:
 * - Edit src/components/ui/parallax-scroll.tsx line 44
 * - Start earlier: ["start end", "end start"]
 * - Start later: ["start center", "end start"]
 *
 * DEPENDENCIES:
 * - framer-motion (already installed)
 * - tailwindcss (already configured)
 * - No additional packages needed
 */

import { motion } from "framer-motion";
import { Building2, Factory, Briefcase, Frame, Settings, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import serviceCabin from "@/assets/service-cabin.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceGlass from "@/assets/service-glass.jpg";
import servicePartitions from "@/assets/service-partitions.jpg";
import factoryCeiling from "@/assets/IMG-20251018-WA0076.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/office-partition-modern.png";
import project3 from "@/assets/project-3.jpg";
import aboutOfficePartition from "@/assets/about-office-partition.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import newPhoto1 from "@/assets/IMG-20251018-WA0083.jpg";
import newPhoto2 from "@/assets/IMG-20251018-WA0085.jpg";
import newPhoto3 from "@/assets/IMG-20251018-WA0088.jpg";
import newPhoto4 from "@/assets/IMG-20251018-WA0086.jpg";
import newPhoto5 from "@/assets/IMG-20251018-WA0087.jpg";
import newPhoto6 from "@/assets/IMG-20251018-WA0089.jpg";
import newPhoto7 from "@/assets/IMG-20251018-WA0084.jpg";
import newPhoto8 from "@/assets/WhatsApp Image 2025-10-18 at 22.23.58_f144f512.jpg";
import newPhoto9 from "@/assets/IMG-20251018-WA0015.jpg";
import newPhoto10 from "@/assets/IMG-20251020-WA0019.jpg";
import newPhoto11 from "@/assets/IMG-20251020-WA0020.jpg";
import newPhoto12 from "@/assets/IMG-20251020-WA0024.jpg";
import newPhoto13 from "@/assets/IMG-20251020-WA0025.jpg";
import newPhoto14 from "@/assets/IMG-20251020-WA0031.jpg";
import newPhoto15 from "@/assets/IMG-20251020-WA0032.jpg";
import newPhoto16 from "@/assets/IMG-20251020-WA0034.jpg";
import newPhoto17 from "@/assets/IMG-20251020-WA0044.jpg";
import newPhoto18 from "@/assets/IMG-20251018-WA0003.jpg";
import newPhoto19 from "@/assets/IMG-20251018-WA0008.jpg";
import recentPhoto1 from "@/assets/IMG-20251021-WA0030.jpg";
import recentPhoto3 from "@/assets/IMG-20251021-WA0041.jpg";
import recentPhoto4 from "@/assets/IMG-20251021-WA0042.jpg";
import recentPhoto5 from "@/assets/IMG-20251021-WA0044.jpg";
import butterflyLouver from "@/assets/IMG-20251021-WA0030 copy.jpg";
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
              Complete <span className="text-gradient-accent">Photo Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our extensive collection of completed projects and installations
            </p>
          </motion.div>

          <ParallaxScroll
            images={galleryImages}
            imageHeight="h-[500px]"
            gap="gap-10"
          />

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