import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, MapPin, Globe, Calendar, Briefcase, Award, Copy, Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const RecruiterFacts = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dhruvdaberao@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <Briefcase className="w-3.5 h-3.5" />
            <span>TALENT ACQUISITION BRIEFING</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
            What <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Recruiters Need to Know</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            Executive summary designed for engineering hiring managers at high-growth tech companies.
          </p>
        </div>

        {/* 🌟 Recruiter Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Fast Facts & Academic Record (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass p-8 rounded-2xl border border-border/80 shadow-xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent mb-6">
                <Award className="w-4 h-4" />
                <span>EXECUTIVE FAST FACTS</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-foreground mb-4">
                Proven Technical Rigor &amp; Shipping Velocity
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs text-muted-foreground">
                <div className="p-4 rounded-xl bg-card/80 border border-border space-y-1">
                  <span className="text-foreground font-bold font-mono text-base block">9.02 / 10 SGPA</span>
                  <span>Computer Engineering academic honors with strong foundational mathematics &amp; algorithms.</span>
                </div>
                <div className="p-4 rounded-xl bg-card/80 border border-border space-y-1">
                  <span className="text-foreground font-bold font-mono text-base block">15+ Full-Stack Systems</span>
                  <span>Shipped real-time monorepos, OAuth microservices, and automated cron pipelines.</span>
                </div>
                <div className="p-4 rounded-xl bg-card/80 border border-border space-y-1">
                  <span className="text-foreground font-bold font-mono text-base block">2 IEEE / IJIRT Papers</span>
                  <span>First-author medical AI research on deep learning thermal image classification.</span>
                </div>
                <div className="p-4 rounded-xl bg-card/80 border border-border space-y-1">
                  <span className="text-foreground font-bold font-mono text-base block">Zero-Onboarding Friction</span>
                  <span>Comfortable in fast-paced Agile sprint teams with git workflows and CI/CD pipelines.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/40 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Background Verified
              </span>
              <span>•</span>
              <span>No Visa Sponsorship Required (India)</span>
              <span>•</span>
              <span>Immediate Joining Available</span>
            </div>
          </motion.div>

          {/* Card 2: Remote / Relocation & Availability (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-border/80 shadow-xl bg-card/80 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent">
                <Globe className="w-4 h-4" />
                <span>LOCATION &amp; WORKFLOW</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary border border-border mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Current Location</span>
                    <span className="text-xs text-muted-foreground">India (IST / UTC+5:30)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary border border-border mt-0.5">
                    <Globe className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Remote &amp; Relocation</span>
                    <span className="text-xs text-muted-foreground">Open to global remote roles &amp; relocation for high-impact engineering teams.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary border border-border mt-0.5">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Notice Period</span>
                    <span className="text-xs text-emerald-400 font-mono font-bold">Immediate Joining</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 space-y-3">
              <Button
                asChild
                className="w-full h-11 bg-accent text-background font-bold font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all"
              >
                <a href="/Dhruv_Daberao_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" /> Download Resume.pdf
                </a>
              </Button>

              <Button
                variant="outline"
                onClick={copyEmail}
                className="w-full h-10 border-border text-foreground hover:border-accent font-mono text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-2 text-emerald-400" /> Email Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-2" /> Copy Email Address
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
