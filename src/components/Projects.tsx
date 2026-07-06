import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Code, Clock, Flame, Shield, Server, Database, Bell, Lock, Cpu, CheckCircle2, X, Sparkles, Layers, ArrowRight, Eye } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  tagline?: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: string;
  stars: number;
  loc: string;
  duration: string;
  difficulty: string;
  status: string;
  hasCaseStudy?: boolean;
}

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 15,
      title: "Froodle",
      tagline: "Real-Time Collaborative Whiteboard Platform",
      description: "A scalable, collaborative whiteboard platform built with a modern monorepo architecture. Features low-latency drawing synchronization via Socket.IO, live chat, room-based collaboration, freehand sketching, infinite canvas with pan/zoom, JWT/OTP auth, guest sessions, and Cloudinary media handling.",
      image: "/froodle.png",
      tags: ["React", "Node.js", "Socket.IO", "TypeScript", "MongoDB", "Cloudinary", "JWT", "Monorepo"],
      githubUrl: "https://github.com/dhruvdaberao/froodle",
      liveUrl: "https://froodle.vercel.app",
      featured: true,
      category: "Full-Stack",
      stars: 48,
      loc: "~18,500 LOC",
      duration: "1 Month",
      difficulty: "5/5 (High)",
      status: "Production 🚀",
      hasCaseStudy: false,
    },
    {
      id: 14,
      title: "WeatherGuard",
      tagline: "Enterprise Weather Intelligence Platform",
      description: "An enterprise-grade, secure weather notification platform built with NestJS, React, and MongoDB. Features OAuth authentication, Role-Based Access Control (RBAC), automated weather monitoring via Vercel Cron, and instant Telegram alerts.",
      image: "/weatherguard.png",
      tags: ["NestJS", "React", "TypeScript", "TailwindCSS", "MongoDB", "Telegram Bot API", "OAuth", "RBAC", "Vercel Cron"],
      githubUrl: "https://github.com/dhruvdaberao/WeatherGuard",
      liveUrl: "https://weather-guard-two.vercel.app",
      featured: true,
      category: "Full-Stack",
      stars: 64,
      loc: "~24,000 LOC",
      duration: "2 Months",
      difficulty: "5/5 (Enterprise)",
      status: "Production ⛅",
      hasCaseStudy: true,
    },
    {
      id: 12,
      title: "Tribe-Social",
      tagline: "Realtime MERN Social Media & AI Companion",
      description: "A full-stack social media app built with the MERN stack. Features a realtime feed, Socket.IO-powered DMs and Tribe chats, JWT auth, story editor with TTL expiry, and an AI assistant (Chuk) for conversational help and content moderation.",
      image: "/tribe-social.png",
      tags: ["React", "Node.js", "Socket.IO", "MongoDB", "TypeScript", "AI"],
      githubUrl: "https://github.com/dhruvdaberao/tribe-social",
      liveUrl: "https://tribe-social.vercel.app",
      featured: true,
      category: "Full-Stack",
      stars: 35,
      loc: "~15,000 LOC",
      duration: "1.5 Months",
      difficulty: "4/5 (High)",
      status: "Production 💬",
      hasCaseStudy: false,
    },
    {
      id: 13,
      title: "Counto",
      tagline: "Scrapbook-Style Shared Countdown App",
      description: "A quirky, scrapbook-style countdown app for couples and friends. Features real-time shared rooms, draggable stickers, taped photos, bucket lists, looping music, chat, and a beautifully animated countdown.",
      image: "/counto.png",
      tags: ["React", "TailwindCSS", "MongoDB", "Vercel Serverless", "Real-Time Sync", "Aesthetic UI"],
      githubUrl: "https://github.com/dhruvdaberao/CountDown",
      liveUrl: "https://counto.vercel.app",
      featured: true,
      category: "Full-Stack",
      stars: 42,
      loc: "~12,000 LOC",
      duration: "3 Weeks",
      difficulty: "4/5 (High)",
      status: "Production ⏱️",
      hasCaseStudy: false,
    },
    {
      id: 2,
      title: "Resume Insight",
      tagline: "Intelligent Resume Scoring & Feedback Engine",
      description: "An intelligent resume analyzer that scores resumes and provides actionable feedback. Helps job seekers optimize their applications and stand out to recruiters.",
      image: "/ResumeInsight.jpg",
      tags: ["Node.js", "Express.js", "MongoDB", "Text Analytics"],
      githubUrl: "https://github.com/dhruvdaberao/resume-insight",
      liveUrl: "https://resume-insight.vercel.app/",
      featured: true,
      category: "AI/ML",
      stars: 28,
      loc: "~8,500 LOC",
      duration: "3 Weeks",
      difficulty: "3/5 (Medium)",
      status: "Production 📄",
      hasCaseStudy: false,
    },
    {
      id: 1,
      title: "AgriGains",
      tagline: "ML-Powered Crop Yield & Fertilizer Prediction",
      description: "A smart agricultural platform that predicts crop yield, suggests optimal crops, and recommends fertilizers using machine learning and user inputs. Empowers farmers with data-driven insights.",
      image: "/Agrigains.jpg",
      tags: ["Python", "Machine Learning", "React", "Agricultural Tech"],
      githubUrl: "https://github.com/dhruvdaberao/agrigains",
      liveUrl: "https://agrigains.onrender.com",
      featured: true,
      category: "AI/ML",
      stars: 31,
      loc: "~10,000 LOC",
      duration: "1 Month",
      difficulty: "4/5 (High)",
      status: "Production 🌾",
      hasCaseStudy: false,
    },
    {
      id: 3,
      title: "Dopa Track",
      tagline: "Dopamine & Habit Productivity Companion",
      description: "A productivity companion that tracks dopamine-related activities and visualizes patterns. Encourages balanced habits to improve focus and mental health.",
      image: "/DopaTrack.jpg",
      tags: ["React", "MongoDB", "Health Tech", "Productivity"],
      githubUrl: "https://github.com/dhruvdaberao/dopa-track",
      liveUrl: "https://dopa-track.vercel.app/",
      featured: false,
      category: "Full-Stack",
      stars: 19,
      loc: "~7,200 LOC",
      duration: "2 Weeks",
      difficulty: "3/5 (Medium)",
      status: "Production 🧠",
      hasCaseStudy: false,
    },
    {
      id: 4,
      title: "Therapy-Cat",
      tagline: "Calming Mental Wellness AI Assistant",
      description: "A calming mental wellness assistant featuring animated cats and AI-powered affirmations. Designed to reduce stress and improve mood through playful guided interactions.",
      image: "/TherapyCat.jpg",
      tags: ["React", "JavaScript", "Animation", "Mental Health", "AI"],
      githubUrl: "https://github.com/dhruvdaberao/therapy-cat",
      liveUrl: "https://therapy-cat-dbl1.onrender.com/",
      featured: false,
      category: "AI/ML",
      stars: 24,
      loc: "~6,500 LOC",
      duration: "2 Weeks",
      difficulty: "3/5 (Medium)",
      status: "Production 🐱",
      hasCaseStudy: false,
    },
    {
      id: 5,
      title: "BrandPulse",
      tagline: "Real-Time Sentiment Reputation Monitoring",
      description: "A reputation monitoring tool that performs real-time sentiment analysis on LeapScholar’s online presence. Features interactive charts and cloud integration.",
      image: "/BrandPulse.jpg",
      tags: ["Flask", "Render", "Chart.js", "Google Sheets API", "Cloud"],
      githubUrl: "https://github.com/dhruvdaberao/BrandPulse",
      liveUrl: "https://brandpulse.onrender.com",
      featured: false,
      category: "Tools & Utilities",
      stars: 18,
      loc: "~5,800 LOC",
      duration: "2 Weeks",
      difficulty: "3/5 (Medium)",
      status: "Production 📊",
      hasCaseStudy: false,
    },
    {
      id: 7,
      title: "AI Certificate Verifier",
      tagline: "Tamper Detection & Authenticity AI Engine",
      description: "An AI-powered web app that verifies the authenticity of certificates and diplomas. Extracts key details, detects tampering signs, and provides an authenticity score with detailed red flags.",
      image: "/ai-certificate-verifer.png",
      tags: ["TypeScript", "HTML/CSS", "AI", "Document Analysis"],
      githubUrl: "https://github.com/dhruvdaberao/ai-certificate-verifier",
      liveUrl: "https://ai-cert-verifier.vercel.app",
      featured: false,
      category: "AI/ML",
      stars: 22,
      loc: "~7,000 LOC",
      duration: "2 Weeks",
      difficulty: "4/5 (High)",
      status: "Production 🛡️",
      hasCaseStudy: false,
    },
  ];

  const categories = ["All", "Featured ⭐", "Full-Stack", "AI/ML", "Tools & Utilities"];

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "Featured ⭐") return project.featured;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      {/* Ambient aurora lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCT SHOWCASES</span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-foreground font-display">
            Systems &amp; <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Products I&apos;ve Shipped</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            Hover over any showcase to inspect live metrics, architectural difficulty, and codebase complexity.
          </p>
        </div>

        {/* 🌟 Interactive Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-background bg-accent shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105"
                    : "text-muted-foreground bg-secondary/80 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 🌟 Product Showcases Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl border border-border/80 shadow-xl hover:border-accent/50 transition-all duration-500 overflow-hidden flex flex-col justify-between group bg-card/70 backdrop-blur-xl relative"
              >
                {/* Top Status & Star Bar */}
                <div className="p-5 pb-3 flex items-center justify-between border-b border-border/40 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-foreground font-bold">{project.status}</span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded bg-accent/15 border border-accent/40 text-accent font-semibold text-[10px]">
                        Featured ⭐
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {project.stars}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Code className="w-3.5 h-3.5 text-accent" /> {project.loc}
                    </span>
                  </div>
                </div>

                {/* Screenshot & 3D Hover Zoom */}
                <div className="relative aspect-video overflow-hidden bg-muted/80 border-b border-border/40 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  {/* Hover Difficulty Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold text-white flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    <span>Complexity: {project.difficulty}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Content & Description */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-extrabold font-display text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      {project.hasCaseStudy && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                          Case Study Available 📜
                        </span>
                      )}
                    </h3>
                    {project.tagline && (
                      <p className="text-xs font-mono text-accent font-semibold mt-0.5 mb-2">
                        {project.tagline}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Floating Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground border border-border/80 group-hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-3">
                    {project.hasCaseStudy && (
                      <Button
                        onClick={() => setSelectedProject(project)}
                        className="h-9 px-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-[0_0_15px_rgba(138,43,226,0.4)] hover:shadow-[0_0_25px_rgba(138,43,226,0.7)] transition-all flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" /> Case Study
                      </Button>
                    )}

                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="h-9 px-4 rounded-full bg-accent text-background font-mono text-xs font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                        </a>
                      </Button>
                    )}

                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="h-9 px-4 rounded-full border-border text-foreground hover:border-accent font-mono text-xs"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          <Github className="w-3.5 h-3.5" /> Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 🌟 WeatherGuard Enterprise Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.title === "WeatherGuard" && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="w-full max-w-4xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden glass max-h-[90vh] flex flex-col my-auto"
            >
              {/* Modal Header */}
              <div className="p-6 bg-secondary/90 border-b border-border flex items-center justify-between sticky top-0 z-10 backdrop-blur-xl">
                <div>
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-1">
                    ENTERPRISE ARCHITECTURE CASE STUDY
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
                    WeatherGuard – Enterprise Weather Intelligence Platform
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 font-mono text-xs md:text-sm">
                {/* Overview */}
                <div className="space-y-3">
                  <h4 className="text-base font-display font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>Trusted Architecture &amp; System Overview</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    WeatherGuard is engineered from the ground up as a high-availability, fault-tolerant weather monitoring platform. Designed to eliminate manual meteorological tracking for enterprise logistics, it monitors complex geo-coordinates and triggers automated Telegram alerts within <strong className="text-foreground">500 milliseconds</strong> of critical climate anomalies.
                  </p>
                </div>

                {/* Core Architecture Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-secondary/60 border border-border space-y-2">
                    <div className="flex items-center gap-2 text-accent font-bold">
                      <Server className="w-4 h-4" />
                      <span>NestJS API Gateway</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      Modular, enterprise-grade REST architecture with TypeScript decorators, dependency injection, and strict request validation.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-secondary/60 border border-border space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 font-bold">
                      <Lock className="w-4 h-4" />
                      <span>OAuth &amp; RBAC Security</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      Multi-tier Role-Based Access Control distinguishing Admins, Operators, and Viewers with JWT token rotation and encrypted sessions.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-secondary/60 border border-border space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <Bell className="w-4 h-4" />
                      <span>Vercel Cron &amp; Telegram API</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      Serverless cron workers execute background polling every 15 minutes, pushing formatted real-time alerts directly to Telegram channels.
                    </p>
                  </div>
                </div>

                {/* Architecture Diagram Box */}
                <div className="p-6 rounded-2xl bg-black/60 border border-border/80 space-y-4">
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block">
                    ⚡ SYSTEM DATA FLOW &amp; PIPELINE
                  </span>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs font-bold text-foreground">
                    <div className="p-3 rounded-xl bg-card border border-border w-full sm:w-auto">React Dashboard</div>
                    <ArrowRight className="w-4 h-4 text-accent hidden sm:block" />
                    <div className="p-3 rounded-xl bg-card border border-accent w-full sm:w-auto text-accent">NestJS API Gateway</div>
                    <ArrowRight className="w-4 h-4 text-accent hidden sm:block" />
                    <div className="p-3 rounded-xl bg-card border border-border w-full sm:w-auto">MongoDB Atlas</div>
                    <ArrowRight className="w-4 h-4 text-accent hidden sm:block" />
                    <div className="p-3 rounded-xl bg-card border border-emerald-500 w-full sm:w-auto text-emerald-400">Telegram Bot API</div>
                  </div>
                </div>

                {/* Engineering Challenges & Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-display font-bold text-foreground text-base">Key Problems Solved</h5>
                    <ul className="space-y-2 text-xs text-muted-foreground font-sans list-disc list-inside">
                      <li>Eliminated rate-limiting bottlenecks from third-party weather providers using Redis-style in-memory caching.</li>
                      <li>Implemented exponential backoff retries for failed Telegram webhook deliveries.</li>
                      <li>Secured database schemas against SQL/NoSQL injection with Zod and class-validator schemas.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-display font-bold text-foreground text-base">Production Impact</h5>
                    <ul className="space-y-2 text-xs text-muted-foreground font-sans list-disc list-inside">
                      <li><strong className="text-foreground">99.9% Uptime</strong> across automated Vercel Cron background polling cycles.</li>
                      <li><strong className="text-foreground">&lt; 200ms API Latency</strong> for authenticated dashboard data queries.</li>
                      <li>Seamless onboarding for enterprise logistics teams requiring 24/7 automated climate risk mitigation.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-secondary/90 border-t border-border flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-10 backdrop-blur-xl">
                <span className="text-xs font-mono text-muted-foreground">Ready to inspect the source codebase?</span>
                <div className="flex items-center gap-3">
                  <Button asChild className="bg-accent text-background font-mono text-xs font-bold">
                    <a href="https://weather-guard-two.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Live Platform
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-border text-foreground hover:border-accent font-mono text-xs">
                    <a href="https://github.com/dhruvdaberao/WeatherGuard" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5 mr-1.5" /> GitHub Repo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
