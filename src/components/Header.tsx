
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Moon, Sun } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground">
          <span className="text-accent">Dhruv</span> Daberao
        </a>
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("publications")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Publications
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/80"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
