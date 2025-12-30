import { ArrowDown, Mail, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Asymmetric Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full animate-rotate-slow" />
      
      {/* Morphing Shape */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 animate-morph hidden lg:block" />

      {/* Content - Asymmetric Layout */}
      <div className="container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full py-32">
          {/* Left Content - Takes 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>

            {/* Name - Large Typography */}
            <div className="space-y-2 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-foreground">{personal.firstName}</span>
                <br />
                <span className="text-gradient">{personal.lastName}</span>
              </h1>
            </div>

            {/* Title */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <p className="text-xl md:text-2xl font-display font-medium text-muted-foreground">
                {personal.title}
              </p>
            </div>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
                <span className="text-primary font-semibold">3+</span> Years Experience
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="magnetic-btn px-8 py-6 rounded-full bg-primary text-primary-foreground font-medium shadow-glow hover:shadow-soft transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 rounded-full border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                asChild
              >
                 <a href="/Ankita_Waghmare_Resume.pdf" download="Ankita_Waghmare_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 animate-fade-up" style={{ animationDelay: "500ms" }}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Concentric Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-primary/10 animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-accent/20" />
              </div>
              
              {/* Center Element */}
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 via-card to-accent/20 flex items-center justify-center shadow-glow">
                <span className="font-display text-8xl font-bold text-gradient">
                  {personal.firstName[0]}{personal.lastName[0]}
                </span>
              </div>

              {/* Floating Labels */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium shadow-card animate-float">
                Angular • React
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-glow animate-float" style={{ animationDelay: "-2s" }}>
                Node.js
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </button>
    </section>
  );
}
