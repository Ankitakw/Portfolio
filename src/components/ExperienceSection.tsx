import { Briefcase, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience" className="py-32">
      <div className="container mx-auto px-6">
        {/* Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left - Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="section-label mb-6">
              <Briefcase className="w-3 h-3" />
              Career
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              My professional journey in software development
            </p>

            {/* Quick Stats */}
            <div className="mt-8 p-6 glass-panel">
              <div className="text-center">
                <span className="text-4xl font-display font-bold text-primary">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Years of Professional Experience</p>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              {/* Experience Cards */}
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-16"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-8 timeline-dot" />

                    {/* Card */}
                    <div className="glass-panel-hover p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium text-lg">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5 mt-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3 mt-6">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
