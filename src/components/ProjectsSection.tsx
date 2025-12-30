import { Rocket, Key, BarChart3, Train, ShieldCheck, LayoutDashboard, Server, Monitor, Building2, Zap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionWrapper } from "./SectionWrapper";

const projectIcons: Record<string, React.ElementType> = {
  "Key Management System": Key,
  "SLA Performance Monitoring Portal": BarChart3,
  "PAPIS Project - Indian Railways": Train,
  "Warranty Registration Portal": ShieldCheck,
  "Enterprise Dashboard": LayoutDashboard,
  "System Management Web Dashboard": Server,
  "Serial Integration with Xibo Player": Monitor,
  "MBOCWW Portal": Building2,
  "NinjaNet": Zap,
};

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects" className="py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-6">
            <Rocket className="w-3 h-3" />
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            A selection of projects I have worked on
          </p>
        </div>

        {/* Projects Grid - Masonry-like */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.title] || Rocket;
            return (
              <div
                key={index}
                className={`glass-panel-hover group overflow-hidden ${
                  index === 0 || index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index === 1 ? 'lg:row-span-2' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Visual */}
                <div className="relative h-40 bg-gradient-to-br from-primary/10 via-card to-accent/10 flex items-center justify-center overflow-hidden">
                  {/* Decorative Shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
