
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 pt-20 pb-16 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Avatar with Glowing Ring */}
          <div className="animate-in mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src="/LinkedIn-PP2.jpg"
                alt="Dhruv Daberao"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full border-2 border-background shadow flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              Open to Work
            </div>
          </div>

          {/* Role Badges */}
          <div className="animate-in flex flex-wrap justify-center gap-2.5 mb-4">
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm shadow-sm">
              ⚡ Full-Stack Engineer
            </span>
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 backdrop-blur-sm shadow-sm">
              🤖 AI/ML Researcher
            </span>
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 backdrop-blur-sm shadow-sm">
              🎓 4th Year IT @ PICT Pune
            </span>
          </div>

          <h1 className="animate-in text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block mt-2 bg-gradient-to-r from-accent via-purple-500 to-cyan-500 bg-clip-text text-transparent">Dhruv Daberao</span>
          </h1>
          
          <p className="animate-in animate-delay-200 mt-4 text-xl md:text-2xl font-medium text-muted-foreground">
            Building scalable full-stack applications & applied machine learning systems.
          </p>
          
          <p className="animate-in animate-delay-300 mt-4 text-base md:text-lg text-muted-foreground/80 max-w-2xl">
            Co-author of 2 peer-reviewed AI research papers (IEEE & IJIRT). Passionate about clean architecture, real-time systems, and creating impactful developer experiences.
          </p>

          <div className="animate-in animate-delay-400 mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-accent to-purple-600 hover:opacity-90 text-white px-8 py-6 rounded-xl shadow-lg shadow-accent/25 font-semibold text-base transition-all hover:scale-105"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:border-accent hover:bg-accent/5 px-8 py-6 rounded-xl font-semibold text-base transition-all hover:scale-105"
              onClick={() => window.open("/DhruvDaberao_Resume_Placements.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5 text-accent" /> Download Resume
            </Button>
          </div>

          <div className="animate-in animate-delay-500 mt-8 flex space-x-5">
            <a href="https://www.linkedin.com/in/dhruvdaberao/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/80 border border-border/50 shadow-sm hover:text-accent hover:border-accent hover:shadow-md transition-all">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/80 border border-border/50 shadow-sm hover:text-accent hover:border-accent hover:shadow-md transition-all">
              <Github size={22} />
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="animate-in animate-delay-500 mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
            <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-extrabold text-accent">14+</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Projects Shipped</div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-extrabold text-purple-500">2</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">IEEE & IJIRT Papers</div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-500">9.02</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">Latest SGPA @ PICT</div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all hover:-translate-y-1">
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-500">5+</div>
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
          className="animate-bounce rounded-full hover:bg-accent/10"
        >
          <ArrowDown className="h-6 w-6 text-accent" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;