import { GraduationCap, Stethoscope } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Perfect for Public School Biology Labs",
    description:
      "Give students hands-on experience with real medical technology. The transparent design helps visualize how pulse oximetry actually works.",
    benefits: ["Interactive learning", "Visual demonstration", "Affordable for bulk orders"],
  },
  {
    icon: Stethoscope,
    title: "Ideal for Rural Healthcare & Mobile Clinics",
    description:
      "Portable, battery-powered design makes ECOPULSE perfect for healthcare workers in remote areas where access to expensive equipment is limited.",
    benefits: ["Portable 9V power", "Durable design", "Easy to operate"],
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Who It's For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Designed for <span className="text-gradient">impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From classrooms to clinics, ECOPULSE brings medical monitoring where it's needed most.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-card border border-border hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-soft transition-all duration-300">
                <audience.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {audience.description}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2">
                {audience.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Decorative Number */}
              <div className="absolute top-6 right-6 text-8xl font-bold text-primary/5">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
