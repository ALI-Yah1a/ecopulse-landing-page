import { Cpu, Battery, Monitor, Gauge, Zap } from "lucide-react";

const specs = [
  {
    icon: Gauge,
    label: "Sensor Type",
    value: "Transmissive Finger Clip",
  },
  {
    icon: Battery,
    label: "Power",
    value: "9V Battery (Portable)",
  },
  {
    icon: Monitor,
    label: "Display",
    value: "Real-time LCD",
  },
  {
    icon: Cpu,
    label: "Microcontroller",
    value: "ATmega328P",
  },
  {
    icon: Zap,
    label: "Measurement Bias",
    value: "-1.8 BPM",
  },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built with <span className="text-gradient">precision</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every component is carefully selected and tested to ensure 
              reliable, accurate readings in educational and clinical settings.
            </p>

            {/* Specs List */}
            <div className="space-y-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3" />
              
              {/* Main Card */}
              <div className="relative z-10 w-full h-full rounded-3xl bg-card border border-border shadow-elevated flex flex-col items-center justify-center p-8">
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Open Source</h3>
                <p className="text-muted-foreground text-center">
                  Fully documented design for educational purposes
                </p>
                
                <div className="mt-8 w-full space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accuracy</span>
                    <span className="font-semibold text-primary">Medical-Grade</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[99%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
