import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, Briefcase, BookOpen, Mail, Sparkles } from "lucide-react";

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Sparkles },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Research", href: "#publications", icon: BookOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Auto-hide/reveal navbar
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = currentScrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[990] w-[90%] max-w-xl"
        >
          <div className="glass rounded-full px-4 py-2.5 flex items-center justify-between border border-border/80 shadow-2xl relative overflow-hidden bg-card/75 backdrop-blur-xl">
            {/* Scroll Progress Indicator Line */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent via-purple-500 to-pink-500"
              style={{ width: `${scrollProgress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />

            <div className="flex items-center justify-between w-full">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-accent/15 rounded-full border border-accent/30 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
