import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles, Terminal, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const ROLES = [
  "Full Stack Engineer",
  "AI Researcher",
  "ML Engineer",
  "Open Source Builder",
  "Problem Solver",
];

const STORY_STEPS = [
  "Building products people actually enjoy using.",
  "From AI research papers...",
  "to full-stack systems...",
  "to weird fun experiments...",
  "I build everything.",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);

    const storyTimer = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % STORY_STEPS.length);
    }, 3200);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinates (-1 to 1) for 3D parallax tilt
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(roleTimer);
      clearInterval(storyTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-28 pb-20 relative overflow-hidden">
      {/* 🌟 Cinematic Aurora Background & Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-accent/15 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-aurora-1 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-gradient-to-bl from-cyan-500/15 via-pink-500/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-aurora-2 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* 🌟 Sleek Fading Checkered Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] opacity-60 pointer-events-none -z-10" />

      {/* 🌟 Floating Glowing Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-accent pointer-events-none -z-10 shadow-[0_0_8px_#00F0FF]"
          style={{
            top: `${15 + ((i * 17) % 70)}%`,
            left: `${10 + ((i * 23) % 80)}%`,
            opacity: 0.2 + ((i % 5) * 0.1),
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (i % 2 === 0 ? 20 : -20), 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* 🌟 Profile Avatar with 3D Mouse Parallax & Gradient Border Glow */}
          <motion.div
            className="mb-8 relative group cursor-pointer"
            animate={{
              x: mousePos.x * 12,
              y: mousePos.y * 12,
              rotateX: -mousePos.y * 10,
              rotateY: mousePos.x * 10,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-accent via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(0,240,255,0.25)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] transition-all duration-500">
              <div className="h-36 w-36 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-background bg-muted">
                <img
                  src="/LinkedIn-PP2.jpg"
                  alt="Dhruv Daberao"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 bg-card border border-border px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-mono font-bold text-accent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
              <span>AI + Full Stack</span>
            </motion.div>
          </motion.div>

          {/* 🌟 Word-by-Word Name Reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4 font-display flex flex-wrap justify-center gap-x-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Dhruv
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Daberao
            </motion.span>
          </h1>

          {/* 🌟 Cycling Role Ticker */}
          <div className="h-10 md:h-12 flex items-center justify-center mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-lg sm:text-2xl md:text-3xl font-bold font-mono text-muted-foreground flex items-center gap-2"
              >
                <Terminal className="w-5 h-5 text-accent shrink-0" />
                <span>{ROLES[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 🌟 Storytelling Personality Sequence */}
          <div className="min-h-[50px] flex items-center justify-center max-w-2xl mx-auto mb-10 px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={storyIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-xl font-medium text-foreground/90 italic bg-card/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-border/80 shadow-inner"
              >
                &quot;{STORY_STEPS[storyIndex]}&quot;
              </motion.p>
            </AnimatePresence>
          </div>

          {/* 🌟 Glowing Magnetic Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="h-12 px-8 rounded-full bg-gradient-to-r from-accent via-cyan-500 to-blue-600 text-background font-bold text-sm shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300 border-0 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Explore My Products</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="h-12 px-8 rounded-full border-2 border-border bg-card/60 backdrop-blur-md text-foreground font-semibold text-sm hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <span>Let&apos;s Build Together</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* 🌟 Social & Resume Links with Hover Glow */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="https://github.com/dhruvdaberao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/dhruv-daberao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:dhruvdaberao@gmail.com"
              aria-label="Email Dhruv"
              className="p-3.5 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/Dhruv_Daberao_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="px-5 py-3 rounded-full bg-card border border-border text-foreground text-xs font-mono font-bold flex items-center gap-2 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Resume.pdf</span>
            </a>
          </motion.div>

          {/* 🌟 Animated Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Scroll to Experience</span>
            <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1 bg-card/40">
              <motion.div
                className="w-1.5 h-3 bg-accent rounded-full"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};