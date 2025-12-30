import * as React from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "David and the Talent Solutions team delivered enterprise-grade sales leadership quickly — we hired a VP of Sales who immediately impacted pipeline growth.",
    name: "Alex Johnson",
    title: "Executive Sponsor",
    company: "Fortune 500 Enterprise",
    image: "https://i.pravatar.cc/120?img=32",
  },
  {
    quote:
      "They understood our needs and culture, and sent candidates who were the right fit both technically and culturally.",
    name: "Marissa Lee",
    title: "Head of Revenue",
    company: "AI Startups Inc.",
    image: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote:
      "A fast, professional process — we scaled our sales team with strong performers within 6 weeks.",
    name: "K. Patel",
    title: "Head of Sales",
    company: "SaaS Scale",
    // no image; AvatarFallback will show
  },
];

export const TestimonialsSection: React.FC = () => {
  // Embla carousel for small screens
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      // ensure cleanup returns void (avoid returning emblaApi.off result)
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <ScrollReveal>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider">
              Client Feedback
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-3 text-foreground">
              Trusted by Companies & Candidates
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Real outcomes from the companies and candidates we've partnered with.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              className="bg-surface/60 p-6 rounded-2xl shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-200"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              aria-labelledby={`testimonial-${i}-name`}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <Avatar className="h-12 w-12 md:h-14 md:w-14">
                    {t.image ? (
                      <AvatarImage src={t.image} alt={t.name} />
                    ) : (
                      <AvatarFallback>{t.name.split(" ").map(n => n[0]).slice(0,2).join("")}</AvatarFallback>
                    )}
                  </Avatar>
                </div>
                <div className="flex-1">
                  <blockquote className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">“{t.quote}”</blockquote>

                  <div className="flex items-center justify-between md:justify-start gap-4">
                    <div>
                      <div id={`testimonial-${i}-name`} className="text-sm md:text-base font-semibold text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">{t.title} • {t.company}</div>
                    </div>

                    {/* Small rating for visual polish */}
                    <div className="hidden sm:flex items-center gap-1 ml-auto">
                      <Star className="w-4 h-4 text-amber-400" />
                      <Star className="w-4 h-4 text-amber-400" />
                      <Star className="w-4 h-4 text-amber-400" />
                      <Star className="w-4 h-4 text-amber-400" />
                      <Star className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div ref={emblaRef} className="embla overflow-hidden relative">
              <div className="embla__container flex gap-4">
                {testimonials.map((t, i) => (
                  <div key={t.name} className="embla__slide min-w-[80%] px-1">
                    <motion.article
                      className="bg-surface/60 p-5 rounded-2xl shadow-md border border-border/50"
                      initial={{ opacity: 0.6, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35 }}
                      aria-labelledby={`testimonial-mobile-${i}-name`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Avatar className="h-10 w-10">
                            {t.image ? (
                              <AvatarImage src={t.image} alt={t.name} />
                            ) : (
                              <AvatarFallback>{t.name.split(" ").map(n => n[0]).slice(0,2).join("")}</AvatarFallback>
                            )}
                          </Avatar>
                        </div>
                        <div>
                          <blockquote className="text-sm text-muted-foreground mb-3 leading-relaxed">“{t.quote}”</blockquote>
                          <div className="text-sm font-semibold text-foreground" id={`testimonial-mobile-${i}-name`}>{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.title} • {t.company}</div>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                ))}
              </div>
            </div>

            {/* controls */}
            <div className="flex items-center justify-between mt-4 gap-2 px-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="p-2 rounded-md bg-background/60 border border-border hover:bg-background"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2 mx-auto">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => emblaApi?.scrollTo(idx)}
                    className={`w-2 h-2 rounded-full ${selectedIndex === idx ? "bg-primary" : "bg-muted/40"}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="p-2 rounded-md bg-background/60 border border-border hover:bg-background"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <ScrollReveal delay={0.2}>
            <a href="#contact" className="text-primary font-medium hover:underline">
              Ready to talk? Get in touch →
            </a>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .embla__container { padding-left: 0.5rem; padding-right: 0.5rem; }
        .embla__slide { scroll-snap-align: center; }
      `}</style>
    </section>
  );
};
