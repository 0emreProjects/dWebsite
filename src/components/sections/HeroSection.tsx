import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-background mesh-bg" />
      
      {/* Hero Image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
        <motion.img
          src={heroImage}
          alt="Modern tech sales team collaborating"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-24 lg:pt-0">
        <div className="max-w-4xl">
          <ScrollReveal delay={0.2}>
            <motion.div
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              <a 
                href="http://lsgadvisors.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Proudly partnered with Life Solutions Group (LSG)
              </a>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Fueling Your Growth with </span>
              <span className="gradient-text">Top-Tier Sales Talent</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              We empower early-stage tech companies by connecting them with results-oriented 
              sales professionals, from SDRs to seasoned leaders.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("#services")}
              >
                <span className="flex items-center gap-2">
                  Find Your Next Hire
                  <ArrowRight className="w-5 h-5" />
                </span>
              </MagneticButton>
              
              <MagneticButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#candidates")}
              >
                <span className="flex items-center gap-2">
                  Find Your Next Role
                  <Play className="w-5 h-5" />
                </span>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.7}>
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
              {[
                { value: "500+", label: "Placements" },
                { value: "95%", label: "Retention Rate" },
                { value: "14", label: "Days Avg. Time to Hire" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center sm:text-left"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};