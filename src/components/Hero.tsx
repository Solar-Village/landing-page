import { Button } from "@/components/ui/button";
import { Zap, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-solar-village.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Solar panels powering African village homes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-village/80 to-village/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-primary-glow" />
            <span className="text-white text-sm font-medium">Metering-first, evidence-ready microgrids</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bringing <span className="text-transparent bg-gradient-sunrise bg-clip-text">Transparent Power</span> to Every Village
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Start with verified metering and immutable reporting. Layer in carbon credit readiness and community payments as optional modules—so every kilowatt is trusted, reportable, and financeable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-sunrise hover:shadow-glow text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Deploy trusted metering
              </Button>
              <Button size="lg" className="bg-white text-village hover:bg-white/90 text-lg px-8 py-6" asChild>
                <Link to="/pitch">See the modular stack</Link>
              </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                <Users className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Sites monitored in pilot</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                <Zap className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-white">10k+</div>
              <div className="text-white/80 text-sm">Metered household events</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                <TrendingUp className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-white/80 text-sm">Data completeness on-chain</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
