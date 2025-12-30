import * as React from "react";

export const DisableEditing: React.FC = () => {
  React.useEffect(() => {
    // Turn off designMode if enabled
    try {
      if (typeof document !== "undefined") {
        if ((document as any).designMode) {
          (document as any).designMode = "off";
        }
      }
    } catch (e) {
      // ignore
    }

    // Helper to remove contenteditable attributes and disable them
    const clean = (node: Node) => {
      try {
        if (node instanceof HTMLElement) {
          if (node.hasAttribute("contenteditable")) {
            node.setAttribute("contenteditable", "false");
          }
        }
      } catch (e) {
        // ignore
      }
    };

    // Clean existing elements
    try {
      document.querySelectorAll("[contenteditable]").forEach((el) => {
        try {
          (el as HTMLElement).setAttribute("contenteditable", "false");
        } catch (e) {}
      });
    } catch (e) {}

    // Observe for future nodes or attribute changes
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes") {
          clean(m.target);
        }
        if (m.type === "childList") {
          m.addedNodes.forEach((n) => clean(n));
        }
      }
    });

    try {
      observer.observe(document.documentElement || document, {
        attributes: true,
        attributeFilter: ["contenteditable"],
        childList: true,
        subtree: true
      });
    } catch (e) {
      // ignore
    }

    // Clean up on unmount
    return () => {
      try {
        observer.disconnect();
      } catch (e) {}
    };
  }, []);

  return null;
};

export default DisableEditing;