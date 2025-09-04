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
              Bring Solar Power to Your Village
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with us to electrify your entire community. Zero upfront costs, community ownership after payoff.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">1. Register Village Interest</h3>
                  <p className="opacity-80">Propose a solar site in or near your village for assessment.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">2. Assessment & Approval</h3>
                  <p className="opacity-80">Our team evaluates your site and secures investment funding.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">3. Build & Connect</h3>
                  <p className="opacity-80">We build the solar site and connect every household in your village.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">3 months</div>
                <div className="text-sm opacity-80">Setup After Approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">₦0</div>
                <div className="text-sm opacity-80">Upfront Cost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow">100%</div>
                <div className="text-sm opacity-80">Village Coverage</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm opacity-90 text-center">
                <strong>In partnership with UNDP</strong> - Supporting sustainable development across Africa
              </p>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Register Your Village
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Village representatives: start the process to bring solar power to your community
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Contact First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Contact Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Your Role in the Community</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chief">Village Chief/Elder</SelectItem>
                    <SelectItem value="council">Council Member</SelectItem>
                    <SelectItem value="leader">Community Leader</SelectItem>
                    <SelectItem value="representative">Community Representative</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="villageName">Village Name</Label>
                <Input id="villageName" placeholder="Enter your village name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State/Region</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                    <SelectItem value="oyo">Oyo</SelectItem>
                    <SelectItem value="rivers">Rivers</SelectItem>
                    <SelectItem value="kaduna">Kaduna</SelectItem>
                    <SelectItem value="ogun">Ogun</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="householdCount">Estimated Number of Households</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Households in village" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-25">10-25 households</SelectItem>
                    <SelectItem value="26-50">26-50 households</SelectItem>
                    <SelectItem value="51-100">51-100 households</SelectItem>
                    <SelectItem value="100+">More than 100</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">Village benefits:</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Complete village solar microgrid installation</li>
                  <li>• Every household gets connected to clean energy</li>
                  <li>• ₦1,000/day + ₦10/kWh (sun) + ₦100/kWh (no sun)</li>
                  <li>• Community ownership after investment payoff</li>
                  <li>• Mobile payment and usage monitoring app</li>
                  <li>• Technical support and maintenance</li>
                </ul>
              </div>

              <Button 
                className="w-full bg-gradient-sunrise hover:shadow-glow text-lg py-6 transition-all duration-300"
                size="lg"
              >
                Register Village Interest
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By registering, you indicate interest in solar development for your village. 
                Our team will assess feasibility and contact you about next steps.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUp;