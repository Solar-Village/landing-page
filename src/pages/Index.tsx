import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Impact />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Index;
