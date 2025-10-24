import { Shield, Zap, Palette, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Durability",
      description: "Premium quality materials that last for years with minimal maintenance",
    },
    {
      icon: Zap,
      title: "Precision",
      description: "Expert craftsmanship with attention to every detail and perfect finishing",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Contemporary aesthetics that enhance your space's visual appeal",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality or service",
    },
  ];

  return (
    <section className="py-20 bg-gradient-blue relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Why Choose <span className="text-gradient-metallic">Althaf Aluminium</span>
          </h2>
          <div className="w-20 h-1 bg-white/50 rounded-full mx-auto mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Excellence in every aspect of our service
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:shadow-glow">
                    <Icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Decorative Circle */}
                  <div className="absolute -inset-2 border-2 border-white/20 rounded-2xl group-hover:border-white/40 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
