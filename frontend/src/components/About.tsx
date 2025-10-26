import { Award, Users, Clock, Target } from "lucide-react";
import aboutOfficePartition from "@/assets/about-office-partition.jpg";

const About = () => {
  const stats = [
    {
      icon: Clock,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: Target,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: Award,
      value: "100%",
      label: "Quality Assured",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={aboutOfficePartition}
                alt="Modern aluminum office partition installation by Althaf Aluminium"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-accent rounded-2xl opacity-20 blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                About <span className="text-gradient-accent">Althaf Aluminium</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-accent rounded-full mb-6" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                With over a decade of excellence in aluminum fabrication and interior solutions,
                <strong className="text-foreground"> Althaf Aluminium</strong> has become a trusted name
                in transforming residential and commercial spaces.
              </p>
              
              <p>
                We specialize in creating premium aluminum partitions, elegant false ceilings,
                sophisticated glass works, and custom office cabin fabrications that combine
                functionality with aesthetic appeal.
              </p>

              <p>
                Our commitment to precision engineering, modern design, and customer satisfaction
                has helped us deliver over 1000 successful projects across homes, offices, and
                commercial establishments.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-heading font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
