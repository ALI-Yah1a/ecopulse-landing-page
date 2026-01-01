import { Target, Recycle, Eye } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "High Accuracy",
    description:
      "99% SpO2 accuracy and 97.9% Heart Rate accuracy tested against commercial devices.",
    highlight: "99%",
    highlightLabel: "SpO2 Accuracy",
  },
  {
    icon: Recycle,
    title: "Recycled Innovation",
    description:
      "Built using upcycled IR LEDs and Phototransistors from old remotes and mice.",
    highlight: "100%",
    highlightLabel: "E-waste Components",
  },
  {
    icon: Eye,
    title: "Transparent Design",
    description:
      "See-through housing allows biology students to visualize the internal sensor technology.",
    highlight: "Educational",
    highlightLabel: "Design Focus",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Why ECOPULSE?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Features that <span className="text-gradient">matter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining medical-grade precision with sustainable innovation for the next generation of healthcare.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Highlight Stat */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">{feature.highlight}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {feature.highlightLabel}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-primary/0 group-hover:bg-primary rounded-full transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
