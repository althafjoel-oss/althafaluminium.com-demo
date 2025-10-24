import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/917358403185?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services', '_blank');
  };
  return <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get In <span className="text-gradient-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Contact us for a free consultation
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Phone Card */}
          <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up border border-border/50">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3 text-center">Call Us</h3>
            <p className="text-muted-foreground text-center mb-4 text-sm">Available Mon-Sat, 9AM-6PM</p>
            <a 
              href="tel:+917358403185" 
              className="text-accent hover:text-accent/80 transition-colors font-medium text-center block"
            >
              +91 7358403185
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up border border-border/50" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3 text-center">Email Us</h3>
            <p className="text-muted-foreground text-center mb-4 text-sm">We'll respond within 24 hours</p>
            <a 
              href="mailto:meeranm062@gmail.com" 
              className="text-accent hover:text-accent/80 transition-colors font-medium text-center block break-all"
            >
              meeranm062@gmail.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 animate-slide-up border border-border/50" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3 text-center">Visit Us</h3>
            <p className="text-muted-foreground text-center mb-4 text-sm">Our office location</p>
            <p className="text-foreground/80 text-center text-sm leading-relaxed">
              123 Industrial Area<br />
              City Name, State - 123456, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-strong border border-border/50 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-accent hover:bg-accent/90 text-white py-6 text-lg"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
                <Button 
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA59] text-white py-6 text-lg"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;