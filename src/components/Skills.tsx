import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code2, Database, Cpu, Layers, Flame, CheckCircle2, Star, ExternalLink } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  category: string;
  experience: string;
  confidence: number;
  level: string;
  projects: string[];
  description: string;
  orbitRadius: number;
  orbitDuration: number;
  angle: number;
  color: string;
}

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);

  const skills: SkillNode[] = [
    {
      id: "react",
      name: "React 18",
      category: "Frontend Core",
      experience: "3+ Years",
      confidence: 98,
      level: "Expert",
      projects: ["Froodle", "WeatherGuard", "Tribe-Social", "Counto"],
      description: "Building responsive, highly interactive SPAs and monorepos with custom Hooks, Context API, and state management.",
      orbitRadius: 130,
      orbitDuration: 18,
      angle: 0,
      color: "#00F0FF",
    },
    {
      id: "ts",
      name: "TypeScript",
      category: "Language",
      experience: "2.5+ Years",
      confidence: 94,
      level: "Expert",
      projects: ["Froodle", "WeatherGuard", "AI Cert Verifier"],
      description: "Enforcing strict type safety, interfaces, and generics across enterprise frontend and backend codebases.",
      orbitRadius: 130,
      orbitDuration: 18,
      angle: 120,
      color: "#3178C6",
    },
    {
      id: "node",
      name: "Node.js",
      category: "Backend Core",
      experience: "3+ Years",
      confidence: 95,
      level: "Expert",
      projects: ["Froodle", "Tribe-Social", "Resume Insight"],
      description: "Architecting asynchronous event-driven backend services, REST APIs, and microservices.",
      orbitRadius: 130,
      orbitDuration: 18,
      angle: 240,
      color: "#539E43",
    },
    {
      id: "nestjs",
      name: "NestJS",
      category: "Enterprise Backend",
      experience: "2+ Years",
      confidence: 90,
      level: "Advanced",
      projects: ["WeatherGuard"],
      description: "Developing scalable, modular backend architectures using decorators, dependency injection, and strict validation.",
      orbitRadius: 220,
      orbitDuration: 26,
      angle: 45,
      color: "#E0234E",
    },
    {
      id: "python",
      name: "Python 3",
      category: "AI & ML",
      experience: "3+ Years",
      confidence: 95,
      level: "Expert",
      projects: ["AgriGains", "Diabetic Foot Research", "BrandPulse"],
      description: "Scientific computing, predictive machine learning pipelines, data processing, and automation scripting.",
      orbitRadius: 220,
      orbitDuration: 26,
      angle: 135,
      color: "#FFD43B",
    },
    {
      id: "tensorflow",
      name: "TensorFlow & Keras",
      category: "Deep Learning",
      experience: "2+ Years",
      confidence: 88,
      level: "Advanced",
      projects: ["Diabetic Foot Complications Paper (IEEE/IJIRT)", "AgriGains"],
      description: "Training and evaluating deep Convolutional Neural Networks (CNNs) for medical image classification.",
      orbitRadius: 220,
      orbitDuration: 26,
      angle: 225,
      color: "#FF6F00",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Database",
      experience: "3+ Years",
      confidence: 92,
      level: "Expert",
      projects: ["Froodle", "WeatherGuard", "Tribe-Social", "Counto"],
      description: "Designing high-throughput NoSQL schemas, aggregation pipelines, and cloud database indexing on Atlas.",
      orbitRadius: 220,
      orbitDuration: 26,
      angle: 315,
      color: "#47A248",
    },
    {
      id: "socketio",
      name: "Socket.IO",
      category: "Realtime Sync",
      experience: "2+ Years",
      confidence: 92,
      level: "Expert",
      projects: ["Froodle", "Tribe-Social", "Counto"],
      description: "Implementing bi-directional WebSocket communication for live collaborative whiteboards and chat systems.",
      orbitRadius: 300,
      orbitDuration: 34,
      angle: 20,
      color: "#010101",
    },
    {
      id: "tailwind",
      name: "TailwindCSS",
      category: "UI & Styling",
      experience: "3+ Years",
      confidence: 98,
      level: "Master",
      projects: ["Portfolio", "WeatherGuard", "Counto"],
      description: "Crafting bespoke, award-winning glassmorphism interfaces, aurora gradients, and responsive layouts.",
      orbitRadius: 300,
      orbitDuration: 34,
      angle: 110,
      color: "#38B2AC",
    },
    {
      id: "opencv",
      name: "OpenCV",
      category: "Computer Vision",
      experience: "2+ Years",
      confidence: 85,
      level: "Advanced",
      projects: ["Diabetic Foot Complications Paper (IEEE/IJIRT)"],
      description: "Processing thermal plantar foot images, feature extraction, and noise filtering for clinical AI diagnosis.",
      orbitRadius: 300,
      orbitDuration: 34,
      angle: 200,
      color: "#5C2D91",
    },
    {
      id: "nextjs",
      name: "Next.js & Vite",
      category: "Modern Tooling",
      experience: "2.5+ Years",
      confidence: 90,
      level: "Advanced",
      projects: ["Portfolio", "Froodle"],
      description: "Optimizing bundle splitting, server-side rendering, and ultra-fast hot module replacement.",
      orbitRadius: 300,
      orbitDuration: 34,
      angle: 290,
      color: "#000000",
    },
  ];

  return (
    <section id="skills" className="py-28 bg-background relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-accent/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE PLANETARY CONSTELLATION</span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-foreground font-display">
            The <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Orbital Skills System</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            Click any orbiting planetary skill node below to inspect real-world production experience and codebase metrics.
          </p>
        </div>

        {/* 🌟 Animated Orbital Constellation Canvas */}
        <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center my-10 overflow-hidden bg-card/20 rounded-3xl border border-border/60 backdrop-blur-md shadow-inner">
          {/* Orbital Rings */}
          <div className="absolute w-[260px] h-[260px] rounded-full border border-border/60 border-dashed animate-spin" style={{ animationDuration: "60s" }} />
          <div className="absolute w-[440px] h-[440px] rounded-full border border-border/50 border-dashed animate-spin" style={{ animationDuration: "90s", animationDirection: "reverse" }} />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-border/40 border-dashed animate-spin" style={{ animationDuration: "120s" }} />

          {/* Central Glowing Core */}
          <motion.div
            className="relative z-20 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-accent via-purple-600 to-pink-500 p-1 shadow-[0_0_50px_rgba(0,240,255,0.4)] flex items-center justify-center text-center cursor-pointer group"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => setSelectedSkill(null)}
          >
            <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center p-3">
              <Cpu className="w-7 h-7 text-accent mb-1 group-hover:rotate-12 transition-transform" />
              <span className="text-[11px] font-display font-extrabold text-foreground leading-tight">DHRUV&apos;S CORE</span>
              <span className="text-[9px] font-mono text-accent">Full Stack + AI</span>
            </div>
          </motion.div>

          {/* Orbiting Planetary Nodes */}
          {skills.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            return (
              <motion.div
                key={skill.id}
                className="absolute z-30 cursor-pointer group"
                initial={{
                  x: Math.cos((skill.angle * Math.PI) / 180) * (window.innerWidth < 768 ? skill.orbitRadius * 0.65 : skill.orbitRadius),
                  y: Math.sin((skill.angle * Math.PI) / 180) * (window.innerWidth < 768 ? skill.orbitRadius * 0.65 : skill.orbitRadius),
                }}
                animate={{
                  x: Math.cos((skill.angle * Math.PI) / 180) * (window.innerWidth < 768 ? skill.orbitRadius * 0.65 : skill.orbitRadius),
                  y: Math.sin((skill.angle * Math.PI) / 180) * (window.innerWidth < 768 ? skill.orbitRadius * 0.65 : skill.orbitRadius),
                  scale: isSelected ? 1.3 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={() => setSelectedSkill(skill)}
                whileHover={{ scale: 1.2, zIndex: 50 }}
              >
                <div
                  className={`px-3 py-1.5 rounded-full backdrop-blur-xl border flex items-center gap-1.5 shadow-lg transition-all duration-300 ${
                    isSelected
                      ? "bg-accent text-background font-bold border-accent shadow-[0_0_20px_rgba(0,240,255,0.8)] scale-110"
                      : "bg-card/90 text-foreground border-border/80 hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                  <span className="text-xs font-mono font-bold whitespace-nowrap">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🌟 Selected Skill Inspector Box (Or Default Prompt) */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass p-8 rounded-3xl border border-accent/60 shadow-2xl bg-card/80 backdrop-blur-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-bl-full pointer-events-none -z-10 blur-2xl" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-accent font-bold border border-border">
                        {selectedSkill.category}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground font-semibold">
                        Experience: {selectedSkill.experience}
                      </span>
                    </div>

                    <h3 className="text-3xl font-extrabold font-display text-foreground flex items-center gap-3">
                      <span>{selectedSkill.name}</span>
                      <span className="text-sm font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {selectedSkill.level} ({selectedSkill.confidence}%)
                      </span>
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div className="md:col-span-6 bg-secondary/60 p-6 rounded-2xl border border-border space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-foreground font-bold border-b border-border/60 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-orange-400" /> Shipped Production Projects:
                      </span>
                      <span className="text-accent">{selectedSkill.projects.length} Built</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.projects.map((proj, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-card border border-border text-xs font-mono font-semibold text-foreground flex items-center gap-1.5 shadow-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                          <span>{proj}</span>
                        </span>
                      ))}
                    </div>

                    <div className="w-full bg-background h-2 rounded-full overflow-hidden border border-border/40 mt-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.confidence}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass p-8 rounded-3xl border border-border/80 shadow-md text-center bg-card/40 flex flex-col items-center justify-center space-y-3"
              >
                <Cpu className="w-10 h-10 text-accent animate-pulse" />
                <h3 className="text-xl font-bold font-display text-foreground">
                  Select a Skill Node above to Inspect Telemetry
                </h3>
                <p className="text-xs font-mono text-muted-foreground max-w-md">
                  Explore my 10+ core technologies spanning frontend frameworks, enterprise backend systems, NoSQL databases, and deep learning AI models.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
