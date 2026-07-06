import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Award, Code, BookOpen, Coffee, GitCommit, CheckCircle2, ArrowRight, TrendingUp, Cpu } from "lucide-react";
import confetti from "canvas-confetti";
import { Card, CardContent } from "./ui/card";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
  description: string;
  color: string;
}

export const About = () => {
  const [activeTab, setActiveTab] = useState<string>("journey");
  const [typedText, setTypedText] = useState("");
  const fullStory = "I don't just write lines of code; I architect end-to-end digital experiences that solve real-world problems. My passion lies at the intersection of scalable cloud engineering, modern UI design, and cutting-edge artificial intelligence.";

  const stats: StatItem[] = [
    { label: "GitHub Commits", value: 1240, suffix: "+", icon: GitCommit, description: "Consistent daily engineering & open-source contributions", color: "from-cyan-500 to-blue-500" },
    { label: "Production Products", value: 15, suffix: "+", icon: Code, description: "Full-stack apps, AI platforms, and real-time systems", color: "from-purple-500 to-pink-500" },
    { label: "Research Papers", value: 2, suffix: "", icon: BookOpen, description: "Peer-reviewed medical AI publications (IEEE & IJIRT)", color: "from-emerald-400 to-teal-500" },
    { label: "Repositories Built", value: 28, suffix: "+", icon: Cpu, description: "Experiments, monorepos, microservices & tooling", color: "from-amber-400 to-orange-500" },
    { label: "Coffee Consumed", value: 1337, suffix: " ☕", icon: Coffee, description: "Fueling 60 FPS animations and zero-bug deployments", color: "from-rose-500 to-red-600" },
  ];

  const milestones = [
    { year: "2026", title: "IEEE & IJIRT Medical AI Publications", description: "Published peer-reviewed research on early diabetic foot complication risk stratification using thermal imaging and deep learning." },
    { year: "2025 - 2026", title: "Scalable Full-Stack Systems & Monorepos", description: "Architected enterprise platforms like WeatherGuard (NestJS/RBAC) and Froodle (Socket.IO real-time whiteboard monorepo)." },
    { year: "2024", title: "AI & Machine Learning Deep Dive", description: "Developed predictive agricultural ML models (AgriGains), NLP document analyzers, and intelligent chatbots." },
    { year: "2023", title: "The Engineering Foundation", description: "Started programming in C++, Python, and JavaScript. Fell in love with solving complex algorithms and building interactive web UIs." },
  ];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullStory.length) {
        setTypedText(fullStory.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, []);

  const handleStatClick = (label: string, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x, y },
      colors: ["#00F0FF", "#8A2BE2", "#FF007F", "#00FF66"],
    });
  };

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE DEVELOPER STORY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display"
          >
            More Than Just <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Lines of Code</span>
          </motion.h2>
        </div>

        {/* 🌟 Storytelling Layout: Left Image/Callout | Right Milestones & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Large Glass Portrait Card & Recruiter Highlights (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass p-6 rounded-2xl border border-border/80 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border/80 mb-6 bg-muted relative">
                  <img
                    src="/LinkedIn-PP2.jpg"
                    alt="Dhruv Daberao Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Dhruv Daberao</h3>
                      <p className="text-xs font-mono text-accent">Full-Stack Engineer &amp; AI Researcher</p>
                    </div>
                  </div>
                </div>

                {/* Recruiter Executive Summary */}
                <div className="p-4 rounded-xl bg-secondary/80 border border-border space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <Award className="w-4 h-4 text-accent shrink-0" />
                    <span>Why Top Engineering Teams Hire Me:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">9.02 SGPA</strong> in Computer Engineering with academic honors.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">Full-Stack Monorepos</strong> with NestJS, Socket.IO, and React.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">Peer-Reviewed Medical AI</strong> author published in IEEE &amp; IJIRT.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story Typing & Interactive Milestones (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Live Typing Story Box */}
            <div className="glass p-8 rounded-2xl border border-border/80 shadow-xl relative overflow-hidden bg-card/60">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-muted-foreground border-b border-border/60 pb-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>dhruv_manifesto.md</span>
              </div>
              <p className="text-base md:text-lg font-mono text-foreground/90 leading-relaxed min-h-[80px]">
                {typedText}
                <span className="inline-block w-2 h-5 bg-accent ml-1 animate-pulse" />
              </p>
            </div>

            {/* Interactive Timeline Milestones */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span>The Engineering Evolution</span>
              </h3>
              
              <div className="space-y-3">
                {milestones.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    className="p-5 rounded-xl bg-card border border-border/80 shadow-sm hover:border-accent/40 transition-all group cursor-default relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-secondary text-accent border border-border w-fit">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🌟 Exploding Bento Statistics Counters */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
              Click Any Card to Celebrate 🎉
            </h3>
            <p className="text-xl font-bold font-display text-foreground">By The Numbers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  onClick={(e) => handleStatClick(stat.label, e)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass p-6 rounded-2xl border border-border/80 shadow-md hover:border-accent/50 transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-5 group-hover:opacity-20 transition-opacity rounded-bl-full pointer-events-none -z-10" />
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:border-accent/40 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-display text-foreground mb-1 tracking-tight">
                      <span>{stat.value}</span>
                      <span className="text-accent">{stat.suffix}</span>
                    </div>
                    <div className="text-xs font-bold text-foreground/90 mb-1">{stat.label}</div>
                  </div>
                  
                  <p className="text-[11px] text-muted-foreground leading-snug mt-2 pt-2 border-t border-border/40">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};