import * as React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.jpeg" alt="Talent Solutions logo" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <span className="font-display font-semibold text-lg text-foreground">Talent Solutions</span>
                <span className="block text-xs text-muted-foreground">at LSG</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              The sales engine for high-growth tech companies. A specialized division 
              of <a href="http://lsgadvisors.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Life Solutions Group</a>.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://lsgadvisors.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <img src="/partner.png" alt="Partner: Life Solutions Group" className="h-8 object-contain" />
                <span className="text-sm text-muted-foreground">Proud to be partnered with <strong className="text-foreground">Life Solutions Group (LSG)</strong></span>
              </a>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <motion.a
                href="https://www.linkedin.com/in/davidscottpratt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:david.pratt@lsgadvisor.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Process", href: "#process" },
                { label: "Services", href: "#services" },
                { label: "For Candidates", href: "#candidates" },
                { label: "About LSG", href: "#about" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:david.pratt@lsgadvisor.com" className="hover:text-primary transition-colors">
                  david.pratt@lsgadvisor.com
                </a>
              </li>
              <li>Denvers, MA</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Talent Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};