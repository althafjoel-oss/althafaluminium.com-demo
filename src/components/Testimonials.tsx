import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      company: "Tech Solutions Pvt Ltd",
      content: "Althaf Aluminium transformed our office with stunning glass partitions. Their attention to detail and professional approach exceeded our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Interior Designer",
      company: "Design Studio",
      content: "Working with Althaf Aluminium has been a pleasure. Their false ceiling work is impeccable, and they always deliver on time. A trusted partner for all our projects.",
      rating: 5,
    },
    {
      name: "Mohammed Ali",
      role: "Property Developer",
      company: "Urban Homes",
      content: "We've used their services for multiple residential projects. The quality of aluminum work and finishing is consistently excellent. Great value for money.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Client <span className="text-gradient-accent">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What our satisfied clients say about us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="p-8 md:p-12 shadow-medium border-0 animate-scale-in">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-accent fill-accent"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8 font-light italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="font-heading font-semibold text-lg text-foreground">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-muted-foreground">
                {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
