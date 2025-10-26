import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, Factory, Briefcase, Frame, Settings, Sparkles } from "lucide-react";
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
import recentPhoto1 from "@/assets/IMG-20251021-WA0030.jpg";
import recentPhoto3 from "@/assets/IMG-20251021-WA0041.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PortfolioShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
      image: portfolio1,
      icon: Building2
    },
    {
      id: 2,
      title: "Factory False Ceiling",
      category: "Industrial Ceilings",
      description: "Heavy-duty false ceiling installation for manufacturing facility",
      image: portfolio2,
      icon: Factory
    },
    {
      id: 3,
      title: "Executive Cabin Design",
      category: "Office Cabins",
      description: "Premium glass and aluminum executive cabin solution",
      image: portfolio3,
      icon: Briefcase
    },
    {
      id: 4,
      title: "Glass Partition System",
      category: "Glass Partitions",
      description: "Frameless glass partition with aluminum channels",
      image: portfolio4,
      icon: Settings
    },
    {
      id: 5,
      title: "Butterfly Louver Design",
      category: "Custom Designs",
      description: "Decorative louver partition for modern interiors",
      image: recentPhoto1,
      icon: Frame
    },
    {
      id: 6,
      title: "Commercial Space Division",
      category: "Aluminum Partitions",
      description: "Multi-zone office partition system with acoustic panels",
      image: newPhoto1,
      icon: Building2
    },
    {
      id: 7,
      title: "Industrial Ceiling Solution",
      category: "Industrial Ceilings",
      description: "Complete false ceiling system for warehouse facility",
      image: newPhoto2,
      icon: Factory
    },
    {
      id: 8,
      title: "Bespoke Office Interior",
      category: "Custom Designs",
      description: "Fully customized aluminum interior design solution",
      image: newPhoto3,
      icon: Sparkles
    },
    {
      id: 9,
      title: "Conference Room Partition",
      category: "Office Cabins",
      description: "Soundproof partition system for meeting rooms",
      image: portfolio5,
      icon: Briefcase
    },
    {
      id: 10,
      title: "Contemporary Glass Walls",
      category: "Glass Partitions",
      description: "Floor-to-ceiling glass partition with minimal frames",
      image: portfolio6,
      icon: Settings
    },
    {
      id: 11,
      title: "Open Office Layout",
      category: "Aluminum Partitions",
      description: "Flexible partition system for collaborative workspaces",
      image: newPhoto4,
      icon: Building2
    },
    {
      id: 12,
      title: "High-Bay Ceiling System",
      category: "Industrial Ceilings",
      description: "Specialized false ceiling for high-ceiling industrial spaces",
      image: newPhoto5,
      icon: Factory
    },
    {
      id: 13,
      title: "Modular Office Cabin",
      category: "Office Cabins",
      description: "Pre-fabricated aluminum cabin for quick installation",
      image: portfolio7,
      icon: Briefcase
    },
    {
      id: 14,
      title: "Privacy Glass Solution",
      category: "Glass Partitions",
      description: "Smart glass partition with privacy control",
      image: recentPhoto3,
      icon: Settings
    },
    {
      id: 15,
      title: "Architectural Feature Wall",
      category: "Custom Designs",
      description: "Designer aluminum feature wall with custom patterns",
      image: newPhoto6,
      icon: Sparkles
    },
    {
      id: 16,
      title: "Corporate Headquarters",
      category: "Aluminum Partitions",
      description: "Complete aluminum partition system for HQ building",
      image: portfolio8,
      icon: Building2
    },
    {
      id: 17,
      title: "Clean Room Ceiling",
      category: "Industrial Ceilings",
      description: "Hygienic false ceiling for pharmaceutical facility",
      image: portfolio9,
      icon: Factory
    },
    {
      id: 18,
      title: "Executive Suite",
      category: "Office Cabins",
      description: "Luxury cabin design with premium finishes",
      image: portfolio10,
      icon: Briefcase
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
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
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
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        className="relative"
      >
        <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer h-full">
          <div className="relative h-80 overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute inset-0 p-6 flex flex-col justify-end"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div
                className="bg-accent/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center mb-4"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "rgba(var(--accent), 0.3)"
                }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-7 h-7 text-accent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="text-white text-2xl font-heading font-bold mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

              <motion.div
                className="mt-4 w-12 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.div>
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
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Our Recent <span className="text-gradient-accent">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Discover our portfolio of aluminum partition systems, false ceiling installations,
            glass partitions, and custom office solutions delivered across diverse industries
          </motion.p>
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
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-lg text-muted-foreground mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Want to see more of our work?
          </motion.p>

          <motion.a
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full shadow-strong transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
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
