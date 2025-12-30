import { User } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function AboutSection() {
  const { personal } = portfolioData;

  // Split summary into paragraphs for better readability
  const summaryParts = personal.summary.split(". ").reduce((acc: string[][], sentence, index) => {
    const groupIndex = Math.floor(index / 2);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(sentence + (sentence.endsWith(".") ? "" : "."));
    return acc;
  }, []).map(group => group.join(" "));

  return (
    <SectionWrapper id="about" className="py-32">
      <div className="container mx-auto px-6">
        {/* Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Section Title (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="section-label mb-6">
              <User className="w-3 h-3" />
              About
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Who I <span className="text-gradient">Am</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              A passionate engineer building scalable solutions
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-panel p-5 text-center">
                <span className="text-3xl font-display font-bold text-primary">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="glass-panel p-5 text-center">
                <span className="text-3xl font-display font-bold text-accent">9+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-8 space-y-8">
            {summaryParts.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl leading-relaxed text-muted-foreground"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}

            {/* Highlight Cards */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {[
                { label: "Frontend", value: "Angular, React, TypeScript" },
                { label: "Backend", value: "Node.js, Express, REST APIs" },
                { label: "Databases", value: "PostgreSQL, MongoDB, MySQL" },
                { label: "DevOps", value: "Docker, CI/CD, Linux" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="glass-panel-hover p-5 group"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.label}
                  </span>
                  <p className="text-foreground font-medium mt-1 group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
