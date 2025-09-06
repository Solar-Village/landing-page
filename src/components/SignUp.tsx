import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, MapPin, Smartphone, Users } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase";

const roleOptions = [
  "Chief",
  "Council Member",
  "Leader",
  "Assigned Representative",
  "Other",
] as const;

const stateOptions = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
] as const;

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  role: z.enum(roleOptions, { required_error: "Role is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z
    .string()
    .email()
    .refine((val) => val.split("@")[1]?.includes("."), {
      message: "Please enter a valid email address (e.g., name@example.com)",
    }),
  villageName: z.string().min(1, { message: "Village name is required" }),
  state: z.enum(stateOptions, { required_error: "State is required" }),
  householdCount: z.coerce
    .number()
    .int()
    .gte(5, { message: "Household count must be at least 5" }),
});

type FormValues = z.infer<typeof formSchema>;

const SignUp = () => {
  const supabase = createClient();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const fetchIpAddresses = async (): Promise<string[]> => {
    try {
      const [ipv4, ipv6] = await Promise.all([
        fetch("https://api.ipify.org?format=json").then((r) => r.json()).catch(() => null),
        fetch("https://api64.ipify.org?format=json").then((r) => r.json()).catch(() => null),
      ]);
      const ips: string[] = [];
      if (ipv4?.ip) ips.push(ipv4.ip);
      if (ipv6?.ip && !ips.includes(ipv6.ip)) ips.push(ipv6.ip);
      return ips;
    } catch {
      return [];
    }
  };

  const onSubmit = async (values: FormValues) => {
    try {
      const ip_addresses = await fetchIpAddresses();
      const { error } = await supabase.from("solar_village_signups").insert({
        first_name: values.firstName,
        last_name: values.lastName,
        role: values.role,
        phone_number: values.phone,
        email: values.email,
        village_name: values.villageName,
        state: values.state,
        household_count: values.householdCount,
        ip_addresses,
      });

      if (error) {
        toast({
          description: `Error. We tried submitting but something went wrong. Please try again later. ${error.message}`,
        });
        return;
      }

      toast({
        description:
          "Successfully submitted. Thanks for your interest. Please note that this is still a concept in development, and it may take some time before we can get back to you.",
      });
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      toast({
        description: `Error. We tried submitting but something went wrong. Please try again later. ${message}`,
      });
    }
  };

  const onError = () => {
    toast({ description: "Form not filled in properly." });
  };

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
            <CardContent>
              <p className="text-xs text-muted-foreground text-center mb-4">
                All fields are required.
              </p>
              <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Contact First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Contact Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role in the Community</Label>
                  <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roleOptions.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.role && (
                    <p className="text-sm text-destructive">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="villageName">Village Name</Label>
                  <Input
                    id="villageName"
                    placeholder="Enter your village name"
                    {...register("villageName")}
                  />
                  {errors.villageName && (
                    <p className="text-sm text-destructive">
                      {errors.villageName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State/Region</Label>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          {stateOptions.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.state && (
                    <p className="text-sm text-destructive">
                      {errors.state.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="householdCount">
                    Estimated Number of Households
                  </Label>
                  <Input
                    id="householdCount"
                    type="number"
                    placeholder="Enter number of households"
                    {...register("householdCount", { valueAsNumber: true })}
                  />
                  {errors.householdCount && (
                    <p className="text-sm text-destructive">
                      {errors.householdCount.message}
                    </p>
                  )}
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
                  type="submit"
                >
                  Register Village Interest
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By registering, you indicate interest in solar development for your village.
                  Our team will assess feasibility and contact you about next steps.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
