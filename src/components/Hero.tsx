
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-24 pb-16 relative overflow-hidden">
      {/* Sleek Fading Chessboard Checkered Background Pattern */}
      <div 
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_65%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-80 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, hsl(var(--foreground) / 0.04) 25%, transparent 25%, transparent 75%, hsl(var(--foreground) / 0.04) 75%),
            linear-gradient(45deg, hsl(var(--foreground) / 0.04) 25%, transparent 25%, transparent 75%, hsl(var(--foreground) / 0.04) 75%),
            linear-gradient(to right, hsl(var(--border) / 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px, 48px 48px, 24px 24px, 24px 24px',
          backgroundPosition: '0 0, 24px 24px, 0 0, 0 0'
        }}
      ></div>
      {/* Subtle Ambient Theme Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Profile Avatar */}
          <div className="mb-6">
            <div className="h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden border-2 border-border shadow-sm bg-muted">
              <img
                src="/LinkedIn-PP2.jpg"
                alt="Dhruv Daberao"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Role Badges / Subtitle */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 mt-3">
            <span className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
              Full-Stack Engineer
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
              AI/ML Researcher
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
              4th Year IT @ PICT Pune
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Hi, I'm <span className="text-accent">Dhruv Daberao</span>
          </h1>
          
          <p className="mt-4 text-lg md:text-xl font-medium text-muted-foreground">
            Building scalable full-stack applications & applied machine learning systems.
          </p>
          
          <p className="mt-4 text-sm md:text-base text-muted-foreground/80 max-w-xl leading-relaxed">
            Co-author of 2 peer-reviewed AI research papers (IEEE & IJIRT). Passionate about clean architecture, real-time systems, and creating impactful developer experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button 
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/90 text-white px-7 py-5 rounded-md shadow-sm font-medium text-sm transition-all"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-border hover:bg-secondary px-7 py-5 rounded-md font-medium text-sm transition-all"
              onClick={() => window.open("/DhruvDaberao_Resume_Placements.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>

          <div className="mt-8 flex space-x-4">
            <a href="https://www.linkedin.com/in/dhruvdaberao/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
              <Github size={18} />
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm text-center">
              <div className="text-2xl font-bold text-foreground">14+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Projects Shipped</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm text-center">
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Research Papers</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm text-center">
              <div className="text-2xl font-bold text-foreground">9.02</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Latest SGPA @ PICT</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm text-center">
              <div className="text-2xl font-bold text-foreground">5+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Certifications</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-full text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;