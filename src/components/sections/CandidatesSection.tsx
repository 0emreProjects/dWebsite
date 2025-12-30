import * as React from "react";
import { motion } from "framer-motion";
import { Compass, Heart, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

const benefits = [
  {
    icon: Compass,
    title: "Career Alignment",
    description: "We take time to understand your goals, values, and ideal work environment."
  },
  {
    icon: Heart,
    title: "Culture Matching",
    description: "Find companies where you'll thrive, not just survive."
  },
  {
    icon: Sparkles,
    title: "Growth Opportunities",
    description: "Access exclusive roles at high-growth startups ready to invest in you."
  }
];

export const CandidatesSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="candidates" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
                For Job Seekers
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                Beyond Job Postings
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                We're not just filling roles—we're building careers. Our approach focuses on 
                personal career alignment, matching candidates with environments where they will thrive.
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <motion.div
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.5}>
              <div className="mt-10">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={scrollToContact}
                >
                  <span className="flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative">
              <motion.div
                className="glass-card p-8 lg:p-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Recent Placements</span>
                    <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm rounded-full font-medium">
                      50+ This Year
                    </span>
                  </div>

                  {[
                    { role: "Senior Account Executive", type: "Series B SaaS", result: "Closed $2M Q1" },
                    { role: "SDR Team Lead", type: "AI Startup", result: "Built team of 8" },
                    { role: "VP of Sales", type: "Fintech Scale-up", result: "3x revenue growth" }
                  ].map((placement, index) => (
                    <motion.div
                      key={placement.role}
                      className="p-4 bg-muted/30 rounded-lg border border-border/50 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <h4 className="font-semibold text-foreground">
                        {placement.role}
                      </h4>
                      <div className="flex items-center justify-between mt-2 text-sm">
                        <span className="text-muted-foreground">{placement.type}</span>
                        <span className="text-emerald font-medium">{placement.result}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald/10 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};