import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const StickyCallButton: React.FC = () => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handler = (e: Event) => {
      try {
        // CustomEvent detail contains { open: boolean }
        const evt = e as CustomEvent<{ open: boolean }>;
        const open = !!(evt.detail && evt.detail.open);
        setVisible(!open);
      } catch {
        // ignore
      }
    };

    window.addEventListener('mobile-menu-toggle', handler as EventListener);
    return () => window.removeEventListener('mobile-menu-toggle', handler as EventListener);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-6 right-4 z-50" aria-hidden={!visible}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="shadow-xl"
      >
        <a
          href="https://calendly.com/davidscottpratt/30min"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a Call"
          title="Book a Call"
        >
          <MagneticButton
            variant="primary"
            size="sm"
            className="flex items-center gap-2 rounded-full px-4 py-2"
            onClick={() => undefined}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Book a Call</span>
            <ArrowRight className="w-3 h-3" />
          </MagneticButton>
        </a>
      </motion.div>
    </div>
  );
};

export default StickyCallButton;