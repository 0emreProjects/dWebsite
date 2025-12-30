import * as React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award, TrendingUp, Briefcase } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: Users,
    title: "SDR & BDR",
    description: "Entry-level sales talent ready to build your pipeline and qualify leads. Focused on outreach, qualification, and setting high-quality meetings.",
    color: "primary"
  },
  {
    icon: Target,
    title: "Account Executives",
    description: "Closers who understand complex B2B sales cycles and enterprise deals. They drive pipeline to closed revenue and manage deal cycles end-to-end.",
    color: "emerald"
  },
  {
    icon: Rocket,
    title: "Sales Managers",
    description: "Leaders who can build, coach, and scale high-performing teams. Experienced in hiring, coaching, and creating repeatable processes.",
    color: "primary"
  },
  {
    icon: Award,
    title: "VP of Sales",
    description: "Strategic executives to architect your go-to-market motion. They set vision, hire leadership, and align GTM strategy to growth goals.",
    color: "emerald"
  },
  {
    icon: TrendingUp,
    title: "Revenue Operations",
    description: "Specialists to optimize your sales processes and tech stack. They implement data-driven processes, tooling, and reporting to increase efficiency.",
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Customer Success",
    description: "Talent focused on retention, expansion, and customer advocacy. They onboard, nurture, and grow customer relationships to drive lifetime value.",
    color: "emerald"
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
              The Tech Partner Focus
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Sales Roles We Fill
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground">
              Speed, Precision, and Alignment for companies with tight timelines and limited resources.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="glass-card p-8 h-full hover-lift group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.color === "emerald" 
                    ? "bg-emerald/10 group-hover:bg-emerald/20" 
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.color === "emerald" ? "text-emerald" : "text-primary"
                  }`} />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>


              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};