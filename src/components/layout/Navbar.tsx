import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const menuItems = {
  companies: {
    label: "Companies",
    items: [
      { label: "Our Process", href: "#process" },
      { label: "Sales Roles We Fill", href: "#services" },
      { label: "Success Stories", href: "#testimonials" }
    ]
  },
  candidates: {
    label: "Candidates",
    items: [
      { label: "Why Work With Us", href: "#candidates" }
    ]
  }
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    const wasOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);
    if (wasOpen) {
      try {
        window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { open: false } }));
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass py-3" : "py-5 bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection("body"); }}
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/logo.jpeg" alt="Talent Solutions logo" className="w-10 h-10 rounded-lg object-cover" />
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-lg text-foreground">Talent Solutions</span>
              <span className="block text-xs text-muted-foreground">at LSG</span>
            </div>
          </motion.a>

          {/* Desktop Navigation (inline) */}
          <div className="hidden lg:flex items-center divide-x divide-border/10">
            <div className="flex items-center space-x-2 pr-6">
              {[
                { label: "Our Process", href: "#process" },
                { label: "Sales Roles We Fill", href: "#services" },
                { label: "Success Stories", href: "#testimonials" },
                { label: "Why Work With Us", href: "#candidates" }
              ].map((item) => (
                <div key={item.label} className="px-2">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/10 transform-gpu hover:scale-105 transition duration-200"
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>

            <div className="pl-6 flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("#about")}
                className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/10 transform-gpu hover:scale-105 transition duration-200"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="text-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/10 transform-gpu hover:scale-105 transition duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <MagneticButton
              variant="primary"
              size="md"
              onClick={() => window.open("https://calendly.com/davidscottpratt/30min", "_blank")}
            >
              Book a Call
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => {
              const newOpen = !isMobileMenuOpen;
              setIsMobileMenuOpen(newOpen);
              // Notify any listeners (e.g., sticky buttons) that mobile menu opened/closed
              try {
                window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { open: newOpen } }));
              } catch (e) {
                // ignore in environments where CustomEvent may be restricted
              }
            }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl">
              <div className="container mx-auto px-6 pt-24 pb-8">
                <nav className="flex flex-col space-y-6">
                  <motion.button
                    onClick={() => scrollToSection("body")}
                    className="block text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    Home
                  </motion.button>

                  {Object.entries(menuItems).map(([key, menu]) => (
                    <div key={key} className="space-y-3">
                      {menu.items.map((item) => (
                        <motion.button
                          key={item.label}
                          onClick={() => scrollToSection(item.href)}
                          className="block text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                          whileHover={{ x: 10 }}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </div>
                  ))}
                  
                  <motion.button
                    onClick={() => scrollToSection("#about")}
                    className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors text-left"
                    whileHover={{ x: 10 }}
                  >
                    About
                  </motion.button>

                  <motion.button
                    onClick={() => scrollToSection("#contact")}
                    className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors text-left"
                    whileHover={{ x: 10 }}
                  >
                    Contact Us
                  </motion.button>

                  <div className="pt-6">
                    <MagneticButton
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={() => window.open("https://calendly.com/davidscottpratt/30min", "_blank")}
                    >
                      Book a Call
                    </MagneticButton>
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};