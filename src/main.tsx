import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { handleInitialRedirect } from "./redirect";
import { initMonitoring } from "./lib/monitoring";

handleInitialRedirect();
initMonitoring();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
