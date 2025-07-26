import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-foreground">Dhruv Daberao</h2>
            <p className="mt-2 text-muted-foreground">
              IT Student | React Developer | ML Enthusiast
            </p>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/in/dhruv-daberao-30976b25a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="h-10 w-10 rounded-full bg-accent border border-accent flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </div>
            </a>
            <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <div className="h-10 w-10 rounded-full bg-accent border border-accent flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Github className="h-5 w-5 text-white" />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-accent/20 pt-6 text-center text-muted-foreground">
          <p>© {currentYear} Dhruv Daberao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;