import { Button } from "@/components/ui/button";
import { Heart, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Sustainable Medical Technology
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Medical-Grade Monitoring.{" "}
              <span className="text-gradient">Student-Grade Price.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              The low-cost heart rate and oxygen sensor made from recycled electronic waste. 
              Accurate, sustainable, and transparent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#order">
                  Get ECOPULSE - Under 200 EGP
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span>99% SpO2 Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>97.9% HR Accuracy</span>
              </div>
            </div>
          </div>

          {/* Product Visual */}
          <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
              
              {/* Product Illustration */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-card shadow-elevated border border-border/50 flex flex-col items-center justify-center p-8 animate-float">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="w-12 h-12 text-primary animate-pulse-soft" />
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-foreground mb-1">98</div>
                    <div className="text-sm text-muted-foreground">SpO2 %</div>
                  </div>
                  <div className="w-full h-px bg-border my-4" />
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-semibold text-foreground">72 BPM</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-0 px-4 py-2 rounded-xl bg-card shadow-card border border-border/50 animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-medium text-primary">♻️ Recycled</span>
              </div>
              <div className="absolute bottom-12 left-0 px-4 py-2 rounded-xl bg-card shadow-card border border-border/50 animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-sm font-medium text-foreground">&lt; 200 EGP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
