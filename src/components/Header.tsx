
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40"
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
            className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("publications")}
            className="text-sm font-semibold text-foreground/80 hover:text-accent transition-colors"
          >
            Publications
          </button>
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="rounded-full h-9 w-9"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-white font-semibold text-xs h-9 px-4 shadow-none"
          >
            Contact Me
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden rounded-lg h-9 w-9 border border-border bg-card shadow-sm"
            aria-label="Open mobile menu"
          >
            <Menu className="h-4 w-4 text-foreground" />
          </Button>
        </div>
      </div>

      {/* Mobile Backdrop & Slide-out Sidebar Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="relative w-72 max-w-[80vw] h-screen bg-card border-l border-border shadow-2xl flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-border/60">
                <span className="text-base font-bold text-foreground">
                  <span className="text-accent">Dhruv</span> Daberao
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4 text-foreground" />
                </Button>
              </div>
              <nav className="flex flex-col gap-3 mt-6">
                {[
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "education", label: "Education" },
                  { id: "experience", label: "Experience" },
                  { id: "publications", label: "Publications" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToSection(item.id);
                    }}
                    className="text-left text-sm font-semibold text-foreground/90 hover:text-accent transition-colors py-2.5 px-3 rounded-md hover:bg-secondary border border-transparent hover:border-border/40 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("contact");
                }} 
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-xs h-9 shadow-none"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline"
                asChild
                className="w-full border-border hover:bg-secondary font-semibold text-xs h-9"
              >
                <a href="/Dhruv_Daberao_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                  <Download className="h-3.5 w-3.5 text-foreground" />
                  Download Resume
                </a>
              </Button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
