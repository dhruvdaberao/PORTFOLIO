import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase, Code2, Rocket, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export const DeveloperJourney = () => {
  const [activeStage, setActiveStage] = useState(2); // Default to Research / Current

  const stages = [
    {
      id: 0,
      title: "School & Roots",
      period: "2020 - 2022",
      icon: GraduationCap,
      subtitle: "The Mathematical Foundation",
      story: "Fell in love with logical reasoning, algebra, and physics. Built my very first experimental HTML/CSS webpages and discovered the thrill of bringing ideas to life on a computer screen.",
      highlights: ["Academic Excellence in Mathematics & Science", "First exposure to algorithmic thinking", "Explored basic web technologies"],
      color: "from-blue-500/20 to-transparent",
    },
    {
      id: 1,
      title: "College & Engineering",
      period: "2022 - Present",
      icon: BookOpen,
      subtitle: "B.E. Computer Engineering (9.02 SGPA)",
      story: "Immersed myself in core computer science disciplines: Data Structures, Algorithms, Operating Systems, and Database Architectures. Excelled academically while building hands-on software systems.",
      highlights: ["Achieved 9.02 / 10 SGPA with Academic Honors", "Mastered C++, Python, TypeScript & SQL", "Led student developer workshops & hackathon teams"],
      color: "from-cyan-500/20 to-transparent",
    },
    {
      id: 2,
      title: "AI Research & Pubs",
      period: "2024 - 2026",
      icon: Sparkles,
      subtitle: "Peer-Reviewed Medical AI Author",
      story: "Conducted pioneering research on non-invasive diabetic foot complication risk stratification using plantar thermal imaging. Published peer-reviewed research papers in IEEE & IJIRT.",
      highlights: ["Published first-author paper in IJIRT (May 2026)", "Trained deep learning CNN classification models", "Integrated AI predictions into clinical reporting workflows"],
      color: "from-purple-500/20 to-transparent",
    },
    {
      id: 3,
      title: "Full-Stack Internships",
      period: "2025 - 2026",
      icon: Briefcase,
      subtitle: "Shipping Production Architecture",
      story: "Transitioned research rigor into production software engineering. Worked across frontend, backend, and cloud deployments to build scalable tools, interactive dashboards, and real-time APIs.",
      highlights: ["Built enterprise platforms like WeatherGuard & BrandPulse", "Mastered NestJS, Socket.IO, MongoDB & OAuth RBAC", "Optimized CI/CD pipelines on Vercel and Render"],
      color: "from-pink-500/20 to-transparent",
    },
    {
      id: 4,
      title: "Open Source & Monorepos",
      period: "2026",
      icon: Code2,
      subtitle: "Collaborative Real-Time Platforms",
      story: "Architected modern monorepo systems like Froodle (collaborative whiteboard) and Tribe-Social. Focused on low-latency state synchronization, custom LLM agents, and delightful UI/UX.",
      highlights: ["Engineered low-latency Socket.IO canvas sync", "Integrated custom LLM assistants (Chuk AI)", "Designed linear/Vercel-inspired glassmorphism interfaces"],
      color: "from-amber-500/20 to-transparent",
    },
    {
      id: 5,
      title: "The Future Goal",
      period: "2026 & Beyond",
      icon: Rocket,
      subtitle: "Impactful Engineering at Scale",
      story: "Eager to join a world-class engineering team (Google, OpenAI, Stripe, Vercel, or a high-growth YC startup) where I can contribute to mission-critical systems and build products millions of people love.",
      highlights: ["Seeking full-time Software Engineer / AI Engineer roles", "Ready to tackle distributed systems & cloud scale", "Committed to lifelong learning and engineering excellence"],
      color: "from-emerald-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>THE ROADMAP</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
            The <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Developer Journey</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            Click any waypoint on the horizontal roadmap below to explore my technical evolution.
          </p>
        </div>

        {/* 🌟 Horizontal Roadmap Waypoint Bar */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary -translate-y-1/2 z-0 hidden md:block" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 -translate-y-1/2 z-0 hidden md:block transition-all duration-500"
            style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center text-center group cursor-pointer ${
                    isActive
                      ? "bg-card border-accent shadow-[0_0_25px_rgba(0,240,255,0.3)] scale-105 -translate-y-1"
                      : "bg-secondary/60 border-border hover:border-foreground/40 hover:bg-secondary"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                      isActive ? "bg-accent text-background" : "bg-card text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block mb-0.5">
                    {stage.period}
                  </span>
                  <span className={`text-xs font-bold font-display leading-tight ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 🌟 Active Stage Story Card */}
        <AnimatePresence mode="wait">
          {stages[activeStage] && (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className={`glass p-8 md:p-10 rounded-3xl border border-border/80 shadow-2xl bg-gradient-to-br ${stages[activeStage].color} relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs font-mono text-accent">
                    <span>WAYPOINT 0{activeStage + 1}</span>
                    <span>•</span>
                    <span>{stages[activeStage].period}</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold font-display text-foreground">
                    {stages[activeStage].title}: <span className="text-accent">{stages[activeStage].subtitle}</span>
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
                    {stages[activeStage].story}
                  </p>
                </div>

                <div className="md:col-span-5 bg-card/80 p-6 rounded-2xl border border-border/80 space-y-3 shadow-inner">
                  <h4 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5 border-b border-border/60 pb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Key Accomplishments &amp; Milestones</span>
                  </h4>
                  <ul className="space-y-2.5 pt-1">
                    {stages[activeStage].highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <ChevronRight className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground/90 font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
