import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Play, Code2, Database, Cpu, Layers, Sparkles, Check } from "lucide-react";

export const TechArsenal = () => {
  const [activeCommand, setActiveCommand] = useState("all");

  const categories = [
    { id: "all", label: "cat stack.json", icon: TerminalIcon },
    { id: "frontend", label: "npm list --frontend", icon: Code2 },
    { id: "backend", label: "docker ps --backend", icon: Database },
    { id: "ai", label: "python3 -m ai_models", icon: Cpu },
  ];

  const techData = {
    frontend: [
      { name: "React 18", desc: "Component Architecture & Hooks", level: "95%", badge: "Core" },
      { name: "TypeScript", desc: "Type-Safe Enterprise Scale", level: "90%", badge: "Core" },
      { name: "TailwindCSS", desc: "Modern UI & Design Systems", level: "98%", badge: "Expert" },
      { name: "Next.js & Vite", desc: "Server-Side Rendering & Bundling", level: "88%", badge: "Prod" },
      { name: "Framer Motion", desc: "60 FPS Spring Physics & Animations", level: "85%", badge: "UI/UX" },
    ],
    backend: [
      { name: "Node.js & Express", desc: "High-Throughput REST APIs", level: "92%", badge: "Core" },
      { name: "NestJS", desc: "Enterprise Modular Architecture", level: "88%", badge: "Enterprise" },
      { name: "Socket.IO", desc: "Real-Time Low-Latency Sync", level: "90%", badge: "Realtime" },
      { name: "MongoDB & SQL", desc: "NoSQL & Relational Data Modeling", level: "88%", badge: "Data" },
      { name: "OAuth & JWT", desc: "Secure Auth & RBAC Access Control", level: "90%", badge: "Security" },
    ],
    ai: [
      { name: "Python 3", desc: "Scientific Computing & Scripting", level: "94%", badge: "Core" },
      { name: "TensorFlow & Keras", desc: "Deep Learning & CNN Architectures", level: "88%", badge: "AI/ML" },
      { name: "OpenCV", desc: "Computer Vision & Thermal Processing", level: "85%", badge: "Vision" },
      { name: "Scikit-Learn", desc: "Predictive Modeling & Analytics", level: "88%", badge: "ML" },
      { name: "LLM Integration", desc: "Custom AI Assistants & Prompt Eng.", level: "86%", badge: "GenAI" },
    ],
  };

  const displayedTech =
    activeCommand === "all"
      ? [...techData.frontend, ...techData.backend, ...techData.ai]
      : techData[activeCommand as keyof typeof techData];

  return (
    <section className="py-24 bg-secondary/15 relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE TECH ARSENAL</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
            The <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Engineering Stack</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            Execute a terminal command below to inspect my technical proficiencies and architecture tools.
          </p>
        </div>

        {/* 🌟 Interactive Terminal Command Bar */}
        <div className="glass p-3 rounded-2xl border border-border/80 shadow-2xl mb-8 flex flex-wrap items-center justify-center gap-2 bg-card/80 backdrop-blur-xl">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCommand === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCommand(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-accent text-background shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>$ {cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 🌟 Terminal Output Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {displayedTech.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              key={item.name}
              whileHover={{ y: -4, borderColor: "rgba(0, 240, 255, 0.6)" }}
              className="glass p-5 rounded-xl border border-border/80 shadow-sm hover:shadow-lg transition-all bg-card/60 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded border border-accent/30">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground font-semibold">
                    {item.level}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-foreground group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full bg-secondary h-1.5 rounded-full overflow-hidden border border-border/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: item.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
