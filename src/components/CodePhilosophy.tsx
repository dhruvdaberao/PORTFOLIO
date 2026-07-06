import { motion } from "framer-motion";
import { Quote, Sparkles, Terminal, ShieldCheck, Zap, Heart } from "lucide-react";

export const CodePhilosophy = () => {
  const principles = [
    {
      quote: "Simplicity is the prerequisite for reliability.",
      author: "Edsger W. Dijkstra",
      takeaway: "Clean, self-documenting code over clever complexity.",
      icon: ShieldCheck,
      color: "from-cyan-500/10 to-transparent",
    },
    {
      quote: "Make it work, make it right, make it fast.",
      author: "Kent Beck",
      takeaway: "Rapid prototyping followed by rigorous refactoring and 60 FPS optimization.",
      icon: Zap,
      color: "from-purple-500/10 to-transparent",
    },
    {
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      takeaway: "Building products that delight users at every touchpoint and micro-animation.",
      icon: Heart,
      color: "from-pink-500/10 to-transparent",
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
            <Quote className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
            How I <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Think &amp; Build</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className={`glass p-8 rounded-2xl border border-border/80 shadow-lg hover:border-accent/40 transition-all bg-gradient-to-br ${item.color} flex flex-col justify-between relative group`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  
                  <p className="text-base md:text-lg font-display font-semibold text-foreground italic mb-4 leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                  <span className="text-xs font-mono text-accent font-bold block mb-6">
                    — {item.author}
                  </span>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest block mb-1">
                    My Takeaway
                  </span>
                  <p className="text-xs text-foreground/90 leading-normal font-medium">
                    {item.takeaway}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
