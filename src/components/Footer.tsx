import { Sun, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { showConceptToast } from "@/lib/conceptToast";

const Footer = () => {
  return (
    <footer className="bg-village text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-sunrise rounded-full flex items-center justify-center">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SolarVillage</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Bringing clean, affordable solar energy to remote communities across Africa. 
              Empowering villages, one home at a time.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-primary-glow cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-primary-glow cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-primary-glow cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-white/60 hover:text-primary-glow cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li>
                  <a href="/#home" className="text-white/80 hover:text-primary-glow transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#features" className="text-white/80 hover:text-primary-glow transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#impact" className="text-white/80 hover:text-primary-glow transition-colors">
                    Impact
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="text-white/80 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Payment Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Technical Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Contact Local Team
                  </a>
                </li>
              </ul>
            </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <span className="text-white/80">+254 700 DEMOSITE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <span className="text-white/80">solarvillage@firebelly.xyz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-glow flex-shrink-0" />
                <span className="text-white/80">Abuja, Nigeria & Regional Offices</span>
              </div>
            </div>
            
            <div className="mt-6 bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Emergency Support</h4>
              <p className="text-sm text-white/80">24/7 technical assistance available via SMS or call</p>
              <p className="text-primary-glow font-medium">+254 700 HELP (4357)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 SolarVillage. All rights reserved. Powering Africa's future.
            </div>
            <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:space-x-6">
              <div className="flex space-x-6 text-sm">
                  <a
                    href="#"
                    className="text-white/60 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-white/60 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-white/60 hover:text-primary-glow transition-colors"
                    onClick={showConceptToast}
                  >
                    Cookie Policy
                  </a>
                </div>
                <div className="text-white/60">
                  Website by{" "}
                  <a
                    href="https://www.firebelly.xyz/"
                    className="font-bold text-orange-600 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-200 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Firebelly
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
