import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const processSteps = [
  {
    number: "01",
    title: "Kickoff & Context",
    description: "Deep dive into your company culture, growth stage, and specific hiring needs."
  },
  {
    number: "02",
    title: "Role Definition",
    description: "Craft precise job requirements that attract the right candidates."
  },
  {
    number: "03",
    title: "Compensation Calibration",
    description: "Market analysis to ensure competitive and attractive offers."
  },
  {
    number: "04",
    title: "Hiring Plan & SLAs",
    description: "Set clear timelines, milestones, and success metrics."
  },
  {
    number: "05",
    title: "Sourcing Strategy",
    description: "Multi-channel approach targeting passive and active talent."
  },
  {
    number: "06",
    title: "Branded Outbound",
    description: "Personalized outreach that represents your employer brand."
  },
  {
    number: "07",
    title: "First-Pass Screening",
    description: "Rigorous vetting for skills, experience, and cultural fit."
  },
  {
    number: "08",
    title: "Structured Interviews",
    description: "Standardized evaluation process for objective comparison."
  },
  {
    number: "09",
    title: "Client Interviews",
    description: "Coordinate and debrief on candidate meetings."
  },
  {
    number: "10",
    title: "Offer Strategy",
    description: "Negotiate terms that work for both parties."
  },
  {
    number: "11",
    title: "Pre-Start & Onboarding",
    description: "Ensure smooth transition and day-one readiness."
  },
  {
    number: "12",
    title: "Post-Hire Check-ins",
    description: "90-day support to ensure long-term success and retention."
  }
];

export const ProcessSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
              The Process Pulse
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Our 12-Step Process
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers exceptional talent, every time.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-emerald"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={0.05 * index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Content */}
                  <div className={`flex-1 pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}>
                    <motion.div
                      className="glass-card p-6 inline-block hover-lift"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-primary font-mono text-sm font-bold">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-primary glow"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring" }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};