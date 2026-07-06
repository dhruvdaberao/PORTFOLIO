import { motion } from "framer-motion";
import { Cpu, BookOpen, Flame, Sparkles, Activity, Globe, ArrowUpRight } from "lucide-react";

export const CurrentlyBuilding = () => {
  const items = [
    {
      title: "Active Side Project",
      name: "Chuk AI v2.0 & Froodle Whiteboard Engine",
      description: "Optimizing low-latency drawing synchronization and integrating custom LLM agents for real-time collaborative ideation.",
      icon: Flame,
      badge: "In Development ⚡",
      color: "from-orange-500/20 via-amber-500/10 to-transparent",
      borderColor: "border-orange-500/30 hover:border-orange-500",
      link: "https://github.com/dhruvdaberao/froodle",
    },
    {
      title: "Current Research",
      name: "Non-Invasive Diagnostic Medical AI",
      description: "Expanding upon plantar thermal imaging deep learning models to predict vascular anomalies with higher sensitivity and lower inference time.",
      icon: Cpu,
      badge: "IEEE / IJIRT Follow-up 🔬",
      color: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderColor: "border-cyan-500/30 hover:border-cyan-500",
      link: "https://ijirt.org/article?manuscript=202021",
    },
    {
      title: "Learning & Exploring Now",
      name: "Rust & High-Performance Distributed Systems",
      description: "Diving deep into memory-safe systems programming, WebAssembly (Wasm), and high-throughput microservices architecture.",
      icon: BookOpen,
      badge: "Reading & Coding 📚",
      color: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "border-purple-500/30 hover:border-purple-500",
      link: "https://github.com/dhruvdaberao",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
            >
              <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>LIVE LAB STATUS</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
              What I&apos;m <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Building Right Now</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Online &amp; Pushing Code</span>
          </div>
        </div>

        {/* 🌟 Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.02, y: -6 }}
                className={`glass p-8 rounded-2xl border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br ${item.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-secondary/80 border border-border text-foreground">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-2">
                    {item.title}
                  </span>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3 group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Explore Repository / Paper</span>
                  <Globe className="w-3.5 h-3.5 text-accent" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
