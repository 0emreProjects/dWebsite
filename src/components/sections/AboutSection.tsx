import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
              Our Partnership
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              A Specialized Division of{" "}
              <a 
                href="http://lsgadvisors.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gradient-text hover:opacity-80 transition-opacity"
              >
                Life Solutions Group
              </a>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Talent Solutions brings together the expertise of Life Solutions Group with 
              a laser focus on tech sales talent. Our partnership means you get specialized 
              recruitment backed by enterprise-level resources and methodology.
            </p>
          </ScrollReveal>

          {/* Trust indicators */}
          <ScrollReveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Trusted Expertise",
                  description: "Backed by LSG's 20+ years of recruitment excellence"
                },
                {
                  icon: Zap,
                  title: "Startup Speed",
                  description: "Agile processes designed for high-growth companies"
                },
                {
                  icon: Globe,
                  title: "National Reach",
                  description: "Access to talent across all major tech hubs"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};