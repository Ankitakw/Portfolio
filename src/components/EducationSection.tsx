import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <SectionWrapper id="education" className="py-32">
      <div className="container mx-auto px-6">
        {/* Centered Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label mb-6">
              <GraduationCap className="w-3 h-3" />
              Education
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Academic <span className="text-gradient">Background</span>
            </h2>
          </div>

          {/* Education Cards - Stacked */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-panel-hover p-8 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                      <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mt-1">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
