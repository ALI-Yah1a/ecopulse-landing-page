import { ArrowRight, TrendingDown } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Schools in Egypt lack practical equipment.{" "}
            <span className="text-gradient">We turned e-waste into a solution.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Access to medical monitoring devices shouldn't be a privilege. 
            We're making healthcare technology accessible to everyone.
          </p>

          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {/* Commercial Device */}
            <div className="relative p-8 rounded-2xl bg-card border border-border shadow-card">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                Commercial Device
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                2,500 <span className="text-xl font-normal text-muted-foreground">EGP</span>
              </div>
              <p className="text-muted-foreground">Imported medical oximeter</p>
              <div className="mt-4 text-sm text-muted-foreground">
                ❌ Expensive for schools<br />
                ❌ Not educational<br />
                ❌ Non-transparent design
              </div>
            </div>

            {/* ECOPULSE */}
            <div className="relative p-8 rounded-2xl bg-primary/5 border-2 border-primary shadow-elevated">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                ECOPULSE
              </div>
              <div className="flex items-end gap-2">
                <TrendingDown className="w-8 h-8 text-primary mb-2" />
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  &lt;200 <span className="text-xl font-normal text-eco-dark">EGP</span>
                </div>
              </div>
              <p className="text-foreground font-medium">Made from recycled e-waste</p>
              <div className="mt-4 text-sm text-foreground">
                ✓ Affordable for all schools<br />
                ✓ Educational & transparent<br />
                ✓ Sustainable innovation
              </div>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold">
            <ArrowRight className="w-5 h-5" />
            Save over 90% compared to commercial alternatives
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
