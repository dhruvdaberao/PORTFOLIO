import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, CheckCircle2, Award, ExternalLink, Code2 } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  highlight?: string;
  logoUrl?: string;
}

export const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Full-Stack Engineer & AI Researcher",
      company: "Independent & Open Source Engineering",
      location: "India (Remote)",
      period: "2025 - Present",
      type: "Production Architecture",
      highlight: "Published IEEE/IJIRT Author & Shipped 15+ Full-Stack Systems",
      description: [
        "Architected and shipped enterprise-grade web platforms including WeatherGuard (NestJS, OAuth, RBAC, Telegram Bot API) and Froodle (Socket.IO real-time collaborative whiteboard monorepo).",
        "Conducted first-author medical AI research on early risk stratification of diabetic foot complications using deep learning plantar thermal imaging (published in IJIRT, May 2026).",
        "Engineered low-latency real-time synchronization pipelines and custom LLM AI companions (Chuk AI) across modern React and Node.js codebases.",
      ],
      skills: ["React 18", "NestJS", "Socket.IO", "TypeScript", "MongoDB", "Python", "TensorFlow", "Vercel Cron"],
    },
    {
      id: 2,
      role: "Software Engineering & Web Dev Fellow",
      company: "University Academic Projects & Hackathons",
      location: "Pune, India",
      period: "2023 - 2025",
      type: "Academic Rigor (9.02 SGPA)",
      highlight: "Top Academic Performance in Computer Engineering",
      description: [
        "Developed AgriGains, an ML-powered agricultural recommendation engine predicting crop yield and optimal fertilizer usage with 88%+ accuracy.",
        "Built Resume Insight, an intelligent NLP text analytics platform scoring resumes and generating actionable recruiter feedback.",
        "Collaborated in Agile student developer teams, managing Git version control workflows, database modeling, and REST API deployment.",
      ],
      skills: ["Python", "Machine Learning", "Node.js", "Express", "React", "MongoDB", "TailwindCSS"],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-28 bg-background relative overflow-hidden border-t border-border/40">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
            Engineering <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience &amp; Impact</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            Click any career node below to expand detailed architectural contributions and tech stack deployments.
          </p>
        </div>

        {/* 🌟 Interactive Glowing Vertical Timeline */}
        <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {experiences.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Glowing Timeline Node Dot */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isExpanded
                      ? "bg-accent border-accent text-background shadow-[0_0_20px_rgba(0,240,255,0.8)] scale-110"
                      : "bg-card border-border text-muted-foreground group-hover:border-accent group-hover:text-accent"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>

                {/* Card Container */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`glass p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? "border-accent/60 shadow-2xl bg-card/85 backdrop-blur-xl"
                      : "border-border/80 shadow-md hover:border-accent/40 hover:shadow-lg bg-card/50"
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-secondary border border-border text-accent">
                        {item.type}
                      </span>
                      {item.highlight && (
                        <span className="hidden md:inline-block text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" /> {item.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Title & Company */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold font-display text-foreground group-hover:text-accent transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground">{item.company}</p>
                    </div>

                    <div className="p-2 rounded-full bg-secondary border border-border text-muted-foreground group-hover:text-foreground">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Expandable Description & Skills */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 border-t border-border/60 space-y-6"
                      >
                        <ul className="space-y-3 text-xs md:text-sm text-muted-foreground font-sans">
                          {item.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                              <span className="text-foreground/90 leading-relaxed">{desc}</span>
                            </li>
                          ))}
                        </ul>

                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block mb-2.5">
                            Technologies &amp; Architecture Deployed:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono font-medium border border-border/80"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};