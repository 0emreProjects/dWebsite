import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Dev-only: filter noisy library warnings about React Router future flags and Framer Motion container positioning
if (import.meta.env.DEV) {
  const origWarn = console.warn.bind(console);
  console.warn = (...args: any[]) => {
    try {
      const msg = typeof args[0] === "string" ? args[0] : String(args[0]);
      if (msg.includes("React Router Future Flag Warning") || msg.includes("Please ensure that the container has a non-static position")) {
        return;
      }
    } catch (e) {
      // ignore
    }
    origWarn(...args);
  };
}

createRoot(document.getElementById("root")!).render(<App />);
