import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const OrderSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    quantity: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24-48 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="order" className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground">
              Your quote request has been submitted. Our team will contact you within 24-48 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 lg:py-28 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to bring <span className="text-gradient">ECOPULSE</span> to your school?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fill out the form and we'll send you a customized quote based on your needs. 
                Bulk orders for schools and organizations receive special pricing.
              </p>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📦</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Bulk Pricing Available</div>
                  <div className="text-sm text-muted-foreground">
                    Special rates for orders of 10+ units
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Request a Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">School / Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Enter your school or organization name"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity Needed</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    placeholder="How many units do you need?"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Request Quote
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
