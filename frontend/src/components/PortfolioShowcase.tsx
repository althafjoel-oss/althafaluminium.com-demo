import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Factory, Briefcase, Frame, Settings, Sparkles } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PortfolioShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Modern Office Partition",
      category: "Aluminum Partitions",
      description: "Sleek aluminum partition system for corporate office spaces",
      icon: Building2
    },
    {
      id: 2,
      title: "Factory False Ceiling",
      category: "Industrial Ceilings",
      description: "Heavy-duty false ceiling installation for manufacturing facility",
      icon: Factory
    },
    {
      id: 3,
      title: "Executive Cabin Design",
      category: "Office Cabins",
      description: "Premium glass and aluminum executive cabin solution",
      icon: Briefcase
    },
    {
      id: 4,
      title: "Glass Partition System",
      category: "Glass Partitions",
      description: "Frameless glass partition with aluminum channels",
      icon: Settings
    },
    {
      id: 5,
      title: "Butterfly Louver Design",
      category: "Custom Designs",
      description: "Decorative louver partition for modern interiors",
      icon: Frame
    },
    {
      id: 6,
      title: "Commercial Space Division",
      category: "Aluminum Partitions",
      description: "Multi-zone office partition system with acoustic panels",
      icon: Building2
    },
    {
      id: 7,
      title: "Industrial Ceiling Solution",
      category: "Industrial Ceilings",
      description: "Complete false ceiling system for warehouse facility",
      icon: Factory
    },
    {
      id: 8,
      title: "Bespoke Office Interior",
      category: "Custom Designs",
      description: "Fully customized aluminum interior design solution",
      icon: Sparkles
    },
    {
      id: 9,
      title: "Conference Room Partition",
      category: "Office Cabins",
      description: "Soundproof partition system for meeting rooms",
      icon: Briefcase
    },
    {
      id: 10,
      title: "Contemporary Glass Walls",
      category: "Glass Partitions",
      description: "Floor-to-ceiling glass partition with minimal frames",
      icon: Settings
    },
    {
      id: 11,
      title: "Open Office Layout",
      category: "Aluminum Partitions",
      description: "Flexible partition system for collaborative workspaces",
      icon: Building2
    },
    {
      id: 12,
      title: "High-Bay Ceiling System",
      category: "Industrial Ceilings",
      description: "Specialized false ceiling for high-ceiling industrial spaces",
      icon: Factory
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });
    const Icon = item.icon;

    return (
      <motion.div
        ref={cardRef}
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 }
        }}
        className="relative"
      >
        <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-300 cursor-pointer h-full">
          <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20">
            {/* Icon Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-24 h-24 text-primary/40" />
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <motion.div
                className="bg-accent/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4"
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgba(var(--accent), 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-7 h-7 text-accent" />
              </motion.div>

              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="text-white text-2xl font-heading font-bold mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 w-12 h-1 bg-accent rounded-full" />
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Our Recent <span className="text-gradient-accent">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of aluminum partition systems, false ceiling installations,
            glass partitions, and custom office solutions delivered across diverse industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of our work?
          </p>

          <motion.a
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full shadow-strong transition-all duration-300"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
