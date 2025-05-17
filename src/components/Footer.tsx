
import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Dhruv Daberao</h2>
            <p className="mt-2 text-primary-foreground/70">
              IT Student | React Developer | ML Enthusiast
            </p>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://linkedin.com/in/dhruvdaberao" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
            </a>
            <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Github className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/70">
          <p>© {currentYear} Dhruv Daberao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
