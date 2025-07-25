
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-in text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="block mt-2 text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Dhruv Daberao</span>
          </h1>
          <p className="animate-in animate-delay-200 mt-4 text-xl md:text-2xl font-medium text-muted-foreground">
            IT Student | React Developer | ML Enthusiast
          </p>
          <p className="animate-in animate-delay-300 mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl">
            Crafting solutions with code, creativity, and curiosity.
          </p>
          <div className="animate-in animate-delay-400 mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/80 text-white px-8 py-6 rounded-md"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/80 text-white px-8 py-6 rounded-md"
              onClick={() => window.open("/DhruvDaberao-Resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
          <div className="animate-in animate-delay-500 mt-8 flex space-x-4">
            <a href="https://www.linkedin.com/in/dhruv-daberao-30976b25a/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-accent" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;