import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="text-lg font-bold">
                ECO<span className="text-primary">PULSE</span>
              </span>
            </div>
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Team 10205. All rights reserved.
            </p>
          </div>

          {/* School Credit */}
          <div className="text-center md:text-right">
            <p className="text-sm text-background/80 flex items-center gap-2 justify-center md:justify-end">
              Developed with <Heart className="w-4 h-4 text-primary fill-primary" /> at
            </p>
            <p className="text-sm font-medium text-background mt-1">
              STEM High School for Boys - 6th of October
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-background/50">
          <span>Sustainable Medical Technology for Everyone</span>
          <span className="hidden sm:inline">•</span>
          <span>Made in Egypt 🇪🇬</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
