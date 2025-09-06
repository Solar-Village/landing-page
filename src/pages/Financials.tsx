import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBackButton from "@/components/FloatingBackButton";

const Financials = () => {
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
      <main>
        <section className="w-full py-24 text-center bg-muted">
          <h1 className="text-4xl font-bold mb-2">Financials</h1>
          <p className="text-muted-foreground">
            A transparent look at costs for every participant.
          </p>
        </section>
        <section className="w-full py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">For Communities</h2>
            <p className="text-muted-foreground">
              Joining SolarVillage is free. Each participating community receives a MicroGrid installation funded
              through UNDP support and philanthropic or impact investors. SolarVillage manages the collection of user
              fees and ensures that the loans are repaid. Once the repayment cycle is complete, all ongoing revenues
              stay within the community, empowering local leaders to reinvest in new priorities such as schools,
              clinics, or additional infrastructure.
            </p>
          </div>
        </section>
        <section className="w-full py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">For Individuals</h2>
            <p className="text-muted-foreground">
              Households and businesses pay only for the power they use, through a simple prepaid system. The base rate
              is ₦1,000 per day, plus ₦20 per kWh when the sun is shining and ₦100 per kWh at night. Payments are
              topped up directly via mobile phone, making access as easy as recharging airtime. This approach ensures
              affordability, predictability, and flexibility for end users.
            </p>
          </div>
        </section>
        <section className="w-full py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">For Impact Investors</h2>
            <p className="text-muted-foreground">
              SolarVillage offers a unique opportunity for mission-driven capital. Each investment is tied to a specific
              village, with transparent repayment flows recorded from day one. Over time, repayments from user fees flow
              back to investors. Typically, capital is fully repaid within 8–10 years, with a modest interest return.
              Investors may choose to redeem their principal plus interest, or continuously reinvest their repayments
              into the next village project, compounding both impact and financial return. This model ensures that
              every dollar not only builds sustainable infrastructure but also delivers measurable, enduring social
              impact.
            </p>
          </div>
        </section>
        <section className="w-full py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Platform Fees</h2>
            <p className="text-muted-foreground">
              To cover ongoing operations and ensure sustainability, SolarVillage charges a 2% fee on all user
              electricity payments. In addition, each community contributes ₦100,000 per month as a flat service fee.
              These funds maintain the platform, pay for monitoring, and ensure reliable long-term operations.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Financials;
