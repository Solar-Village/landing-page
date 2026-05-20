import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Home, UserCog, Zap, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";

type UserRole = "consumer" | "agent" | "operator" | "investor";

const NewUser = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState<UserRole[]>([]);
  
  // Role-specific fields
  const [selectedGrid, setSelectedGrid] = useState("");
  const [community, setCommunity] = useState("");
  const [operatorChoice, setOperatorChoice] = useState<"existing" | "new" | null>(null);
  const [existingCommunity, setExistingCommunity] = useState("");
  const [newCommunityName, setNewCommunityName] = useState("");
  const [newCommunityDetails, setNewCommunityDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [microgridTypes, setMicrogridTypes] = useState("");
  const [expectedReturns, setExpectedReturns] = useState("");
  const [timeline, setTimeline] = useState("");
  const [investmentType, setInvestmentType] = useState("");

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const toggleRole = (role: UserRole) => {
    setRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const handleComplete = () => {
    // Store selected roles in localStorage and mark new user flow as complete
    localStorage.setItem('selectedRoles', JSON.stringify(roles));
    localStorage.setItem('hideNewUserAndPlatform', 'true');
    
    // Navigate to the leftmost selected role
    const roleOrder: UserRole[] = ["consumer", "agent", "operator", "investor"];
    const firstRole = roleOrder.find(r => roles.includes(r));
    
    switch (firstRole) {
      case "consumer":
        navigate("/consumer");
        break;
      case "agent":
        navigate("/agent");
        break;
      case "operator":
        navigate("/operator");
        break;
      case "investor":
        navigate("/investor");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        {step === 1 && (
          <>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl">Welcome to SolarVillage</CardTitle>
              <CardDescription className="text-lg mt-2">
                Let's get you started on your journey to sustainable energy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground">
                SolarVillage connects remote communities with clean, reliable solar energy through innovative microgrid solutions.
              </p>
              <Button onClick={handleNext} className="w-full" size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle>About SolarVillage</CardTitle>
              <CardDescription>Understanding our mission</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-foreground">
                  SolarVillage manages photovoltaic microgrids for remote villages that are not connected to the main power grid.
                </p>
                <p className="text-muted-foreground">
                  Our platform enables:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Communities to access clean, affordable energy</li>
                  <li>Local agents to manage consumer relationships</li>
                  <li>Operators to maintain and optimize microgrids</li>
                  <li>Investors to fund sustainable energy projects</li>
                </ul>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleBack} variant="outline">
                  <ArrowLeft className="mr-2" /> Back
                </Button>
                <Button onClick={handleNext} className="flex-1">
                  Continue <ArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>What should we call you?</CardTitle>
              <CardDescription>Choose a nickname or preferred name</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nickname">Nickname</Label>
                <Input
                  id="nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Enter your preferred name"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleBack} variant="outline">
                  <ArrowLeft className="mr-2" /> Back
                </Button>
                <Button onClick={handleNext} className="flex-1" disabled={!nickname}>
                  Continue <ArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {step === 4 && (
          <>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Tell us a bit about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  rows={3}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleBack} variant="outline">
                  <ArrowLeft className="mr-2" /> Back
                </Button>
                <Button onClick={handleNext} className="flex-1" disabled={!fullName || !email}>
                  Continue <ArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {step === 5 && (
          <>
            <CardHeader>
              <CardTitle>Choose Your Role(s)</CardTitle>
              <CardDescription>Select all categories that describe you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div 
                  className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50"
                >
                  <Checkbox 
                    id="consumer" 
                    checked={roles.includes("consumer")}
                    onCheckedChange={() => toggleRole("consumer")}
                  />
                  <div className="flex-1 cursor-pointer" onClick={() => toggleRole("consumer")}>
                    <Label htmlFor="consumer" className="cursor-pointer flex items-center gap-2 font-semibold">
                      <Home className="w-5 h-5 text-primary" />
                      Consumer
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I use energy from a microgrid in my community
                    </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50"
                >
                  <Checkbox 
                    id="agent" 
                    checked={roles.includes("agent")}
                    onCheckedChange={() => toggleRole("agent")}
                  />
                  <div className="flex-1 cursor-pointer" onClick={() => toggleRole("agent")}>
                    <Label htmlFor="agent" className="cursor-pointer flex items-center gap-2 font-semibold">
                      <UserCog className="w-5 h-5 text-primary" />
                      Agent
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I help sign up and manage payments for multiple consumers
                    </p>
                  </div>
                </div>

                <div 
                  className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50"
                >
                  <Checkbox 
                    id="operator" 
                    checked={roles.includes("operator")}
                    onCheckedChange={() => toggleRole("operator")}
                  />
                  <div className="flex-1 cursor-pointer" onClick={() => toggleRole("operator")}>
                    <Label htmlFor="operator" className="cursor-pointer flex items-center gap-2 font-semibold">
                      <Zap className="w-5 h-5 text-primary" />
                      Operator
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I operate and maintain microgrid infrastructure
                    </p>
                  </div>
                </div>

                <div 
                  className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50"
                >
                  <Checkbox 
                    id="investor" 
                    checked={roles.includes("investor")}
                    onCheckedChange={() => toggleRole("investor")}
                  />
                  <div className="flex-1 cursor-pointer" onClick={() => toggleRole("investor")}>
                    <Label htmlFor="investor" className="cursor-pointer flex items-center gap-2 font-semibold">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Investor
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I want to invest in sustainable energy projects
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleBack} variant="outline">
                  <ArrowLeft className="mr-2" /> Back
                </Button>
                <Button onClick={handleNext} className="flex-1" disabled={roles.length === 0}>
                  Continue <ArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {/* Role-specific questions */}
        {step === 6 && (
          <>
            <CardHeader>
              <CardTitle>
                {roles.includes("consumer") && roles.includes("agent") && roles.includes("operator") 
                  ? "Which grid are you connected to?"
                  : roles.includes("consumer") && !roles.includes("agent") && !roles.includes("operator")
                  ? "Which grid are you connected to?"
                  : roles.includes("agent") && !roles.includes("consumer") && !roles.includes("operator")
                  ? "Which community do you serve?"
                  : roles.includes("operator") && !roles.includes("consumer") && !roles.includes("agent") && !operatorChoice
                  ? "Join a Community"
                  : roles.includes("operator") && operatorChoice === "existing"
                  ? "Select Existing Community"
                  : roles.includes("operator") && operatorChoice === "new"
                  ? "Propose New Community"
                  : roles.includes("investor")
                  ? "Investment Details"
                  : "Your Information"}
              </CardTitle>
              <CardDescription>
                {roles.includes("consumer") && roles.includes("agent") && roles.includes("operator") 
                  ? "Select your microgrid"
                  : roles.includes("consumer") && !roles.includes("agent") && !roles.includes("operator")
                  ? "Select your microgrid"
                  : roles.includes("agent") && !roles.includes("consumer") && !roles.includes("operator")
                  ? "Select your community"
                  : roles.includes("operator") && !roles.includes("consumer") && !roles.includes("agent") && !operatorChoice
                  ? "Select an existing community or propose a new one"
                  : roles.includes("operator") && operatorChoice === "existing"
                  ? "You'll need approval from current operators"
                  : roles.includes("operator") && operatorChoice === "new"
                  ? "Tell us about your community"
                  : roles.includes("investor")
                  ? "Tell us about your investment preferences"
                  : "Complete your profile"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Consumer section - show only if consumer is selected and not all three (consumer/agent/operator) */}
              {/* OR show if all three are selected (consumer/agent/operator) */}
              {roles.includes("consumer") && (
                <div className="space-y-4">
                  {!roles.includes("agent") && !roles.includes("operator") && (
                    <h3 className="font-semibold">Grid Connection</h3>
                  )}
                  <RadioGroup value={selectedGrid} onValueChange={setSelectedGrid}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-alpha" id="village-alpha" />
                        <Label htmlFor="village-alpha" className="cursor-pointer flex-1">Village Alpha - 50 kW</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-beta" id="village-beta" />
                        <Label htmlFor="village-beta" className="cursor-pointer flex-1">Village Beta - 75 kW</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-gamma" id="village-gamma" />
                        <Label htmlFor="village-gamma" className="cursor-pointer flex-1">Village Gamma - 100 kW</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Agent section - only show if consumer/agent/operator are NOT all selected */}
              {roles.includes("agent") && !(roles.includes("consumer") && roles.includes("operator")) && (
                <div className="space-y-4">
                  {roles.includes("consumer") && <h3 className="font-semibold">Community Service</h3>}
                  <RadioGroup value={community} onValueChange={setCommunity}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-alpha" id="agent-alpha" />
                        <Label htmlFor="agent-alpha" className="cursor-pointer flex-1">Village Alpha - 50 kW</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-beta" id="agent-beta" />
                        <Label htmlFor="agent-beta" className="cursor-pointer flex-1">Village Beta - 75 kW</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-gamma" id="agent-gamma" />
                        <Label htmlFor="agent-gamma" className="cursor-pointer flex-1">Village Gamma - 100 kW</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Operator section - only show if consumer/agent/operator are NOT all selected */}
              {roles.includes("operator") && !(roles.includes("consumer") && roles.includes("agent")) && !operatorChoice && (
                <div className="space-y-4">
                  {(roles.includes("consumer") || roles.includes("agent")) && <h3 className="font-semibold">Operator Role</h3>}
                  <div className="grid gap-3">
                    <Button
                      variant="outline"
                      className="h-auto p-4 justify-start text-left"
                      onClick={() => setOperatorChoice("existing")}
                    >
                      <div>
                        <div className="font-semibold">Join Existing Community</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Select a community and wait for approval from existing operators
                        </p>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto p-4 justify-start text-left"
                      onClick={() => setOperatorChoice("new")}
                    >
                      <div>
                        <div className="font-semibold">Propose New Community</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Add a new community to the SolarVillage network
                        </p>
                      </div>
                    </Button>
                  </div>
                </div>
              )}

              {/* Operator - existing community */}
              {roles.includes("operator") && !(roles.includes("consumer") && roles.includes("agent")) && operatorChoice === "existing" && (
                <div className="space-y-4">
                  <RadioGroup value={existingCommunity} onValueChange={setExistingCommunity}>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-alpha" id="op-alpha" />
                        <Label htmlFor="op-alpha" className="cursor-pointer flex-1">Village Alpha - 50 kW</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-beta" id="op-beta" />
                        <Label htmlFor="op-beta" className="cursor-pointer flex-1">Village Beta - 75 kW</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="village-gamma" id="op-gamma" />
                        <Label htmlFor="op-gamma" className="cursor-pointer flex-1">Village Gamma - 100 kW</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Operator - new community */}
              {roles.includes("operator") && !(roles.includes("consumer") && roles.includes("agent")) && operatorChoice === "new" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newCommunityName">Community Name</Label>
                    <Input
                      id="newCommunityName"
                      value={newCommunityName}
                      onChange={(e) => setNewCommunityName(e.target.value)}
                      placeholder="Enter community name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newCommunityDetails">Community Details</Label>
                    <Textarea
                      id="newCommunityDetails"
                      value={newCommunityDetails}
                      onChange={(e) => setNewCommunityDetails(e.target.value)}
                      placeholder="Location, population, energy needs, infrastructure details, etc."
                      rows={5}
                    />
                  </div>
                </div>
              )}

              {/* Investor section */}
              {roles.includes("investor") && (
                <div className="space-y-4">
                  {(roles.includes("consumer") || roles.includes("agent") || roles.includes("operator")) && (
                    <h3 className="font-semibold">Investment Preferences</h3>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="budget">Investment Budget</Label>
                    <Input
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="e.g., $50,000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="microgridTypes">Microgrid Types of Interest</Label>
                    <Input
                      id="microgridTypes"
                      value={microgridTypes}
                      onChange={(e) => setMicrogridTypes(e.target.value)}
                      placeholder="e.g., Rural villages, island communities"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedReturns">Expected Returns (%)</Label>
                    <Input
                      id="expectedReturns"
                      value={expectedReturns}
                      onChange={(e) => setExpectedReturns(e.target.value)}
                      placeholder="e.g., 8-12%"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Investment Timeline</Label>
                    <Input
                      id="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      placeholder="e.g., 3-5 years"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investmentType">Investment Type</Label>
                    <RadioGroup value={investmentType} onValueChange={setInvestmentType}>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="named" id="named" />
                          <Label htmlFor="named" className="cursor-pointer flex-1">Named Community</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="fund" id="fund" />
                          <Label htmlFor="fund" className="cursor-pointer flex-1">Next Fund</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                          <RadioGroupItem value="basket" id="basket" />
                          <Label htmlFor="basket" className="cursor-pointer flex-1">Basket of Communities</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Single set of buttons at the bottom */}
              <div className="flex gap-2 pt-4">
                <Button 
                  onClick={() => {
                    if (roles.includes("operator") && operatorChoice) {
                      setOperatorChoice(null);
                    } else {
                      handleBack();
                    }
                  }} 
                  variant="outline"
                >
                  <ArrowLeft className="mr-2" /> Back
                </Button>
                <Button 
                  onClick={handleNext} 
                  className="flex-1" 
                  disabled={
                    (roles.includes("consumer") && !selectedGrid) ||
                    (roles.includes("agent") && !(roles.includes("consumer") && roles.includes("operator")) && !community) ||
                    (roles.includes("operator") && !(roles.includes("consumer") && roles.includes("agent")) && !operatorChoice) ||
                    (roles.includes("operator") && !(roles.includes("consumer") && roles.includes("agent")) && operatorChoice === "existing" && !existingCommunity) ||
                    (roles.includes("operator") && !(roles.includes("consumer") && roles.includes("agent")) && operatorChoice === "new" && (!newCommunityName || !newCommunityDetails)) ||
                    (roles.includes("investor") && (!budget || !investmentType))
                  }
                >
                  Continue <ArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {/* Thank you page */}
        {step === 7 && (
          <>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl">Thank You, {nickname}!</CardTitle>
              <CardDescription className="text-lg mt-2">
                Welcome to SolarVillage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground">
                Your account has been set up successfully. Let's take you to your dashboard.
              </p>
              <Button onClick={handleComplete} className="w-full" size="lg">
                Go to Dashboard <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default NewUser;
