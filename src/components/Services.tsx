import { Card } from "@/components/ui/card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import servicePartitions from "@/assets/service-partitions.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceGlass from "@/assets/service-glass.jpg";
import serviceCabin from "@/assets/service-cabin.jpg";

const Services = () => {
  const services = [
    {
      title: "Aluminium Partition Works",
      description: "Transform your workspace with premium aluminium partition systems. Our durable, modern partitions create flexible office layouts while maintaining professional aesthetics. Perfect for commercial spaces, factories, and offices requiring efficient space management.",
      image: servicePartitions,
      features: ["Superior Sound Insulation", "Customizable Designs", "Low Maintenance & Long-Lasting"],
    },
    {
      title: "False Ceiling Installation",
      description: "Elevate your interiors with expertly crafted false ceiling solutions. Our installations combine aesthetic appeal with functional benefits including improved acoustics, thermal insulation, and integrated lighting systems. Ideal for modern office environments and commercial spaces.",
      image: serviceCeiling,
      features: ["Energy-Efficient Designs", "Enhanced Acoustics", "Integrated LED Solutions"],
    },
    {
      title: "Glass Partitions & Framing",
      description: "Create stunning, light-filled spaces with our premium glass partition solutions. Featuring high-grade tempered glass and sleek aluminium frames, our installations deliver modern sophistication while maximizing natural light and maintaining privacy for offices and commercial buildings.",
      image: serviceGlass,
      features: ["Premium Tempered Glass", "Space Optimization", "Contemporary Aesthetics"],
    },
    {
      title: "Office Cabin Design & Fabrication",
      description: "Complete office cabin solutions tailored for factories and commercial spaces. Our expert fabrication combines glass and aluminium to create professional, functional workspaces. We deliver turnkey solutions with rapid installation and flexible layouts to meet your business needs.",
      image: serviceCabin,
      features: ["Turnkey Solutions", "On-Time Project Delivery", "Cost-Effective Designs"],
    },
  ];

  const stickyScrollContent = services.map((service) => ({
    title: service.title,
    description: service.description,
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-md">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  }));

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-accent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Althaf Aluminium delivers professional aluminium partition work, false ceiling contractors, glass partitions, and office cabin design for industrial interiors. We specialize in durable, cost-effective solutions with guaranteed on-time project delivery across all commercial and factory installations.
          </p>
        </div>

        {/* Sticky Scroll Animation */}
        <div className="mb-16">
          <StickyScroll content={stickyScrollContent} />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-500 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ul className="space-y-2 text-white">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-background rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert consultation and a free estimate for your aluminium partition, false ceiling, or glass installation project. Our team delivers modern aluminium solutions with guaranteed quality and timely completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full shadow-strong hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get a Free Estimate Today
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-background border-2 border-primary hover:bg-primary/5 rounded-full transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
