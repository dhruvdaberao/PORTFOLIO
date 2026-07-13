import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
          Dhruv <span className="text-accent">Daberao</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-muted-foreground font-medium max-w-md mx-auto">
          Full-Stack Developer & AI/ML Engineer specializing in NestJS, React, and Applied Machine Learning.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-3 mt-6">
          <a
            href="https://www.linkedin.com/in/dhruv-daberao-30976b25a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 rounded-md bg-card border border-accent/40 text-accent hover:bg-accent hover:text-white hover:border-accent flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/dhruvdaberao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 rounded-md bg-card border border-accent/40 text-accent hover:bg-accent hover:text-white hover:border-accent flex items-center justify-center transition-all duration-200 shadow-sm"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        {/* Tech Stack Credit */}
        <div className="mt-8 pt-6 border-t border-border/40 text-[10px] md:text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4 font-medium">
          <p>© {currentYear} Dhruv Daberao. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-1.5">
            Built with 
            <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 text-[9px] font-semibold">React</span>
            •
            <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 text-[9px] font-semibold">TypeScript</span>
            •
            <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 text-[9px] font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;