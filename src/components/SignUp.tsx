import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, MapPin, Smartphone, Users } from "lucide-react";

const SignUp = () => {
  return (
    <section id="signup" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of families already enjoying clean energy. No complex paperwork, no long waits.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">1. Tell Us Your Location</h3>
                  <p className="opacity-80">We'll check if solar installation is available in your area.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">2. Schedule Assessment</h3>
                  <p className="opacity-80">Our local team visits to design your custom solar setup.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">3. Start Powering Up</h3>
                  <p className="opacity-80">Installation complete, app downloaded, power flowing!</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">24hrs</div>
                <div className="text-sm opacity-80">Average Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">$0</div>
                <div className="text-sm opacity-80">Upfront Cost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">24/7</div>
                <div className="text-sm opacity-80">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Get Solar Power Today
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+254 700 000 000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location/Village</Label>
                <Input id="location" placeholder="Enter your village or area" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="county">County/Region</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your county" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nairobi">Nairobi</SelectItem>
                    <SelectItem value="mombasa">Mombasa</SelectItem>
                    <SelectItem value="kisumu">Kisumu</SelectItem>
                    <SelectItem value="nakuru">Nakuru</SelectItem>
                    <SelectItem value="machakos">Machakos</SelectItem>
                    <SelectItem value="kilifi">Kilifi</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="householdSize">Household Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of people" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 people</SelectItem>
                    <SelectItem value="3-5">3-5 people</SelectItem>
                    <SelectItem value="6-10">6-10 people</SelectItem>
                    <SelectItem value="10+">More than 10</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">What's included:</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Free site assessment and consultation</li>
                  <li>• Custom solar system design</li>
                  <li>• Professional installation</li>
                  <li>• Mobile app for payment and monitoring</li>
                  <li>• 24/7 customer support</li>
                  <li>• 2-year warranty on all equipment</li>
                </ul>
              </div>

              <Button 
                className="w-full bg-gradient-sunrise hover:shadow-glow text-lg py-6 transition-all duration-300"
                size="lg"
              >
                Request Free Assessment
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By clicking "Request Free Assessment", you agree to our terms and privacy policy. 
                No upfront payment required.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUp;