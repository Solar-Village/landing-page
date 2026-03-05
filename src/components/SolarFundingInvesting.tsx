import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const managedServiceSchema = z.object({
  mode: z.literal("managed_service"),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  organization: z.string().min(1, "Organization is required"),
  geography: z.string().min(1, "Geographic focus is required"),
  investmentPreference: z.enum(["individual_projects", "solar_bond", "both"]),
  ticketSize: z.string().min(1, "Please share your expected ticket size"),
  notes: z.string().optional(),
});

const waitlistSchema = z.object({
  mode: z.literal("solar_bond_waitlist"),
  email: z.string().email("Please enter a valid email"),
});

const investorSchema = z.discriminatedUnion("mode", [managedServiceSchema, waitlistSchema]);

type InvestorFormValues = z.infer<typeof investorSchema>;

type InvestorMode = InvestorFormValues["mode"];

const modeTitle: Record<InvestorMode, string> = {
  managed_service: "Show your interest as an investor",
  solar_bond_waitlist: "Add me to the waitlist",
};

const modeDescription: Record<InvestorMode, string> = {
  managed_service:
    "Tell us your investment preferences so we can match you with villages and project managers.",
  solar_bond_waitlist:
    "Join the Solar Bond waitlist to receive updates as we design diversified portfolio access.",
};

const SolarFundingInvesting = () => {
  const [openMode, setOpenMode] = useState<InvestorMode | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InvestorFormValues>({
    resolver: zodResolver(investorSchema),
    defaultValues: { mode: "managed_service", investmentPreference: "both", notes: "" } as InvestorFormValues,
  });

  const currentMode = watch("mode");
  const investmentPreference = watch("investmentPreference") ?? "both";

  const openDialog = (mode: InvestorMode) => {
    setValue("mode", mode, { shouldValidate: true });
    if (mode === "managed_service") {
      setValue("investmentPreference", "both", { shouldValidate: true });
    }
    setOpenMode(mode);
  };

  const onSubmit = async (values: InvestorFormValues) => {
    const payload = {
      signup_type: values.mode,
      email: values.email,
      full_name: values.mode === "managed_service" ? values.fullName : null,
      organization: values.mode === "managed_service" ? values.organization : null,
      geographic_area: values.mode === "managed_service" ? values.geography : null,
      investment_preference: values.mode === "managed_service" ? values.investmentPreference : "solar_bond",
      ticket_size: values.mode === "managed_service" ? values.ticketSize : null,
      notes: values.mode === "managed_service" ? values.notes || null : "Solar Bond waitlist",
    };

    const supabase = createClient();
    const { error } = await supabase.from("investor_signups").insert(payload);

    if (error) {
      toast({
        description: `Unable to submit your interest right now. Please try again later. ${error.message}`,
      });
      return;
    }

    toast({
      description:
        values.mode === "managed_service"
          ? "Thanks, your investor profile has been received. We will reach out as matchmaking opportunities open."
          : "You are on the Solar Bond waitlist. We will share updates as soon as this product evolves.",
    });

    reset(
      values.mode === "managed_service"
        ? ({ mode: "managed_service", investmentPreference: "both", notes: "" } as InvestorFormValues)
        : ({ mode: "solar_bond_waitlist", email: "" } as InvestorFormValues)
    );
    setOpenMode(null);
  };

  return (
    <section id="investing" className="py-20 bg-muted/40">
      <div className="container mx-auto px-6">
        <Card className="border-primary/20">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl md:text-4xl">Solar Funding and Investing (Future Feature)</CardTitle>
            <p className="text-muted-foreground text-lg">
              Solar Village is evolving into an investment-enabled platform. We are starting with a managed
              service that matches investors, villages, and project managers for evidence-backed deployments.
              Next, we plan to launch a Solar Bond that increases investor exposure across multiple projects to
              significantly de-risk portfolios.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Dialog open={openMode === "managed_service"} onOpenChange={(open) => setOpenMode(open ? "managed_service" : null)}>
                <DialogTrigger asChild>
                  <Button size="lg" onClick={() => openDialog("managed_service")}>
                    Show your interest as an investor
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-background border-2 border-border shadow-xl">
                  <DialogHeader>
                    <DialogTitle>{modeTitle.managed_service}</DialogTitle>
                    <DialogDescription>{modeDescription.managed_service}</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input type="hidden" {...register("mode")} />
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full name</Label>
                      <Input id="fullName" className="bg-background border-2 border-input" {...register("fullName")} />
                      {currentMode === "managed_service" && errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="bg-background border-2 border-input" {...register("email")} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" className="bg-background border-2 border-input" {...register("organization")} />
                      {currentMode === "managed_service" && errors.organization && <p className="text-sm text-destructive">{errors.organization.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="geography">Geographic area of interest</Label>
                      <Input id="geography" className="bg-background border-2 border-input" placeholder="e.g. Nigeria, East Africa, West Africa" {...register("geography")} />
                      {currentMode === "managed_service" && errors.geography && <p className="text-sm text-destructive">{errors.geography.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Investment preference</Label>
                      <RadioGroup
                        value={currentMode === "managed_service" ? investmentPreference : "both"}
                        onValueChange={(value) => setValue("investmentPreference", value as "individual_projects" | "solar_bond" | "both")}
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem id="individual_projects" value="individual_projects" />
                          <Label htmlFor="individual_projects">Individual projects</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem id="solar_bond" value="solar_bond" />
                          <Label htmlFor="solar_bond">Solar Bond</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem id="both" value="both" />
                          <Label htmlFor="both">Both</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ticketSize">Estimated ticket size</Label>
                      <Input id="ticketSize" className="bg-background border-2 border-input" placeholder="e.g. $50,000 - $150,000" {...register("ticketSize")} />
                      {currentMode === "managed_service" && errors.ticketSize && <p className="text-sm text-destructive">{errors.ticketSize.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Anything else we should know? (optional)</Label>
                      <Textarea id="notes" rows={3} className="bg-background border-2 border-input" {...register("notes")} />
                    </div>
                    <Button type="submit" className="w-full">Submit investor profile</Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog open={openMode === "solar_bond_waitlist"} onOpenChange={(open) => setOpenMode(open ? "solar_bond_waitlist" : null)}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" onClick={() => openDialog("solar_bond_waitlist")}>
                    Add me to the waitlist
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-background border-2 border-border shadow-xl">
                  <DialogHeader>
                    <DialogTitle>{modeTitle.solar_bond_waitlist}</DialogTitle>
                    <DialogDescription>{modeDescription.solar_bond_waitlist}</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input type="hidden" {...register("mode")} />
                    <div className="space-y-2">
                      <Label htmlFor="waitlistEmail">Email</Label>
                      <Input id="waitlistEmail" type="email" className="bg-background border-2 border-input" {...register("email")} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                    <Button type="submit" className="w-full">Join Solar Bond waitlist</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SolarFundingInvesting;
