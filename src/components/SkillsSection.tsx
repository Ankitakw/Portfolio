import { Layers, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

const categoryConfig = [
  { key: "frontend", label: "Frontend", icon: Layers, color: "text-primary" },
  { key: "backend", label: "Backend", icon: Server, color: "text-accent" },
  { key: "databases", label: "Databases", icon: Database, color: "text-primary" },
  { key: "devops", label: "DevOps", icon: Cloud, color: "text-accent" },
  { key: "iot", label: "IoT & Protocols", icon: Cpu, color: "text-primary" },
  { key: "tools", label: "Tools", icon: Wrench, color: "text-accent" },
];

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" className="py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-6">
            <Layers className="w-3 h-3" />
            Tech Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid - Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryConfig.map(({ key, label, icon: Icon, color }, index) => (
            <div
              key={key}
              className={`glass-panel-hover p-6 ${index === 0 ? 'md:row-span-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-2xl bg-card border border-border ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{label}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {skills[key as keyof typeof skills].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
