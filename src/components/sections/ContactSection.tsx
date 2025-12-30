import * as React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Calendar, ArrowRight, Send } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { toast } from "@/hooks/use-toast";

const contactOptions = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    action: "View Profile",
    href: "https://www.linkedin.com/in/davidscottpratt/",
    color: "primary"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Direct inquiry",
    action: "Send Email",
    href: "mailto:david.pratt@lsgadvisor.com",
    color: "emerald"
  },
  {
    icon: Calendar,
    title: "Book a Call",
    description: "30-min discovery call",
    action: "Schedule Now",
    href: "https://calendly.com/davidscottpratt/30min",
    color: "primary"
  }
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:david.pratt@lsgadvisor.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with your message.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Ready to Scale Your Sales Team?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground">
              Choose your preferred way to connect. We typically respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
          {contactOptions.map((option) => (
            <StaggerItem key={option.title}>
              <motion.a
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block glass-card p-8 text-center hover-lift group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  option.color === "emerald"
                    ? "bg-emerald/10 group-hover:bg-emerald/20"
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <option.icon className={`w-8 h-8 ${
                    option.color === "emerald" ? "text-emerald" : "text-primary"
                  }`} />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {option.description}
                </p>

                <span className={`inline-flex items-center gap-2 font-medium ${
                  option.color === "emerald" ? "text-emerald" : "text-primary"
                }`}>
                  {option.action}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contact Form */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 max-w-2xl mx-auto">
            <div className="glass-card p-8 lg:p-12">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4 text-center">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Have a question or want to discuss your hiring needs? Drop us a message.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};