import { Button } from "@/components/ui/button";

const MinigridSurveyCTA = () => {
  return (
    <section
      id="minigrid-survey"
      className="py-16 bg-muted/40 border-y border-border/60"
      aria-labelledby="minigrid-survey-heading"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">For minigrid owners & operators</p>
          <h2 id="minigrid-survey-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Help shape deployments and get pre-qualified
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tell us about your sites, metering posture, and appetite for payments or carbon credits. This quick survey helps us
            prioritize operators ready for transparent reporting and optional revenue add-ons.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Evidence-grade metering and immutable data trails</li>
            <li>Optional settlement flows and carbon credit readiness</li>
            <li>Technical support for mixed-connectivity environments</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="bg-card border border-border rounded-2xl shadow-card p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Pre-qualification survey</p>
              <p className="text-xl font-bold text-foreground">Tell us about your minigrid portfolio</p>
              <p className="text-muted-foreground">
                Share details on capacity, metering maturity, and financing needs so we can align the right modules for you.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-sunrise hover:shadow-glow text-lg py-6"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeXXJFUOdMid1l6LTno-3jzfVcTxHcxYoH6w2-_Jf9qzK_Rw/viewform?usp=dialog"
                target="_blank"
                rel="noreferrer"
              >
                Fill out the minigrid survey
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              We will review submissions on a rolling basis to match you with pilots where transparent metering is required first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinigridSurveyCTA;
