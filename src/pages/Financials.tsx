import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Financials = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Button
        onClick={() => navigate(-1)}
        variant="outline"
        className="fixed top-16 right-4 z-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
      <div className="container mx-auto px-6 py-12 space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-4">For Communities</h2>
          <p className="text-muted-foreground">
            It's free for communities to sign up, and the MicroGrid will be provided for free with support from
            UNDP and philanthropist investors. SolarVillage will collect fees and ensure that the loans are repaid.
            After that is completed then communities actually get to keep the fees and can decide themselves how to
            invest it.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">For Individuals</h2>
          <p className="text-muted-foreground">
            Users pay 1000 Naira per day plus 20 per kWh when the sun is shining and 100 per kWh at night. We charge
            pre-paid.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Platform Fees</h2>
          <p className="text-muted-foreground">
            SolarVillage charges a 2% platform fee on all user electricity payments, plus 100,000 Naira per month
            from each community.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Financials;
