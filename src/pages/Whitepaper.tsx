import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import whitepaperPDF from "@/assets/SolarVillage-Nigeria.pdf";

const Whitepaper = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Button
        onClick={() => navigate(-1)}
        variant="outline"
        className="fixed top-16 left-4 z-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
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
