import { Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function FooterSection() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-display text-xl font-bold text-gradient">
            {personal.firstName} {personal.lastName}
          </span>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {year} • Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Pune
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
