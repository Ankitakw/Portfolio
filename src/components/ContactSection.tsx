import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function ContactSection() {
  const { personal } = portfolioData;

  return (
    <SectionWrapper id="contact" className="py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-6">
            <Send className="w-3 h-3" />
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="glass-panel-hover p-8 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Email Me</h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                {personal.email}
              </p>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personal.phone}`}
              className="glass-panel-hover p-8 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Call Me</h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                {personal.phone}
              </p>
            </a>

            {/* Location Card */}
            <div className="glass-panel p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">
                {personal.location}
              </p>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel-hover p-8 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
