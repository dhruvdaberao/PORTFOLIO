import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, CheckCircle2, Award, BookOpen } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlight: string;
  coursework: string[];
  achievements: string[];
}

export const Education = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const educationList: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Savitribai Phule Pune University (SPPU) / Affiliated Engineering College",
      location: "Pune, India",
      period: "2022 - Present",
      grade: "9.02 / 10.0 SGPA",
      highlight: "Academic Honors & First-Class Distinction",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems & System Programming",
        "Database Management Systems (SQL & NoSQL)",
        "Artificial Intelligence & Deep Learning",
        "Computer Networks & Distributed Systems",
        "Software Engineering & Agile Methodologies",
      ],
      achievements: [
        "Achieved an outstanding 9.02 / 10 SGPA across consecutive academic semesters.",
        "Published peer-reviewed first-author medical AI research in IJIRT during undergraduate studies.",
        "Architected enterprise-grade monorepos and microservices for senior academic capstone projects.",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC) – Science Stream",
      institution: "Recognized Junior College of Science",
      location: "Maharashtra, India",
      period: "2020 - 2022",
      grade: "First Class Distinction",
      highlight: "Excellence in Mathematics & Physics",
      coursework: [
        "Advanced Calculus & Linear Algebra",
        "Applied Physics & Mechanics",
        "Inorganic & Physical Chemistry",
        "Foundational Computer Science",
      ],
      achievements: [
        "Demonstrated top academic rigor in analytical reasoning and mathematical modeling.",
        "Built first experimental programming scripts and interactive web applications.",
      ],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="py-28 bg-background relative overflow-hidden border-t border-border/40">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
            Education &amp; <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Academic Rigor</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            Click any academic node below to inspect coursework, GPA distinctions, and scholarly milestones.
          </p>
        </div>

        {/* 🌟 Interactive Glowing Vertical Timeline */}
        <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {educationList.map((item, idx) => {
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
                  <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4" />
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
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        {item.grade}
                      </span>
                      <span className="hidden md:inline-block text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-secondary text-accent border border-border">
                        {item.highlight}
                      </span>
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

                  {/* Title & Institution */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold font-display text-foreground group-hover:text-accent transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground">{item.institution}</p>
                    </div>

                    <div className="p-2 rounded-full bg-secondary border border-border text-muted-foreground group-hover:text-foreground">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Expandable Coursework & Achievements */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 border-t border-border/60 space-y-6"
                      >
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block mb-2.5 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-accent" /> Academic Milestones:
                          </span>
                          <ul className="space-y-2 text-xs md:text-sm text-muted-foreground font-sans">
                            {item.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                <span className="text-foreground/90 leading-relaxed font-medium">{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block mb-2.5 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Core Coursework Mastered:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.coursework.map((course, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono font-medium border border-border/80"
                              >
                                {course}
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