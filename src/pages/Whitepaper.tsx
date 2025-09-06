import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";
import whitepaperPDF from "@/assets/SolarVillage-Nigeria.pdf";

const Whitepaper = () => {
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.userAgent.includes("jsdom")) {
      return;
    }
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingBackButton />
      <div className="container mx-auto px-6 py-8">
        <iframe
          src={whitepaperPDF}
          className="w-full h-screen"
          title="SolarVillage Whitepaper"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Whitepaper;
