import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ExternalLink, FileText, Award, Star, Sparkles, ChevronDown, ChevronUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export const Publications = () => {
  const [isAbstractOpen, setIsAbstractOpen] = useState(true);

  const keywords = [
    "Medical AI",
    "Deep Learning",
    "Plantar Thermal Imaging",
    "Convolutional Neural Networks (CNN)",
    "Diabetic Foot Complications",
    "Risk Stratification",
    "Computer Vision",
    "Python",
    "TensorFlow & Keras",
    "OpenCV",
  ];

  return (
    <section id="publications" className="py-28 bg-background relative overflow-hidden border-t border-border/40">
      {/* Ambient aurora lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>IEEE / ACM DIGITAL LIBRARY PORTAL</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground font-display">
            Peer-Reviewed <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Research &amp; Publications</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-mono">
            First-author academic research advancing preventive healthcare and medical artificial intelligence.
          </p>
        </div>

        {/* 🌟 Elite IEEE / ACM Portal Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12 rounded-3xl border border-border/80 shadow-2xl bg-card/80 backdrop-blur-2xl relative overflow-hidden group hover:border-accent/50 transition-all duration-500"
        >
          {/* Top Portal Badges Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-border/60 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <ShieldCheck className="w-3.5 h-3.5" /> PEER-REVIEWED JOURNAL
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> FIRST AUTHOR ✍️
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-emerald-400" /> CITATIONS: 4 ⭐
              </span>
            </div>

            <div className="text-muted-foreground font-semibold">
              <span>Published: <strong className="text-foreground">May 2026</strong></span>
              <span className="mx-2">•</span>
              <span>Paper ID: <strong className="text-foreground">IJIRT202021</strong></span>
            </div>
          </div>

          {/* Research Title & Journal */}
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl md:text-4xl font-extrabold font-display text-foreground leading-tight group-hover:text-accent transition-colors">
              Diabetes Detection Using Thermal Footprints: An AI-Driven Framework for Early Risk Stratification of Diabetic Foot Complications
            </h3>
            <p className="text-base md:text-lg font-semibold text-muted-foreground flex items-center gap-2 font-mono">
              <BookOpen className="w-5 h-5 text-accent shrink-0" />
              <span>International Journal of Innovative Research in Technology (IJIRT)</span>
            </p>
          </div>

          {/* Abstract Accordion */}
          <div className="p-6 rounded-2xl bg-secondary/60 border border-border space-y-4 mb-8">
            <div
              onClick={() => setIsAbstractOpen(!isAbstractOpen)}
              className="flex items-center justify-between cursor-pointer select-none text-xs font-mono font-bold text-foreground uppercase tracking-wider"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent" /> ABSTRACT &amp; METHODOLOGY SUMMARY
              </span>
              <div className="p-1 rounded bg-card border border-border text-muted-foreground">
                {isAbstractOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </div>

            <AnimatePresence>
              {isAbstractOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-muted-foreground leading-relaxed font-sans space-y-3 pt-2 border-t border-border/40"
                >
                  <p>
                    Published a peer-reviewed research paper proposing an AI-powered framework for the early detection of diabetic foot complications using plantar thermal imaging. The work leverages deep learning-based image classification to analyze thermal footprints for non-invasive diabetic risk assessment.
                  </p>
                  <p>
                    The framework integrates automated image preprocessing, Convolutional Neural Network (CNN) prediction pipelines, automated risk reporting, and clinical workflow support to enable scalable preventive healthcare. Experimental validation demonstrated significant improvements in early complication screening sensitivity compared to conventional diagnostic methods.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Indexed Keywords */}
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block mb-3">
              Indexed Keywords &amp; Technologies:
            </span>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-card text-foreground border border-border/80 hover:border-accent/40 transition-colors shadow-sm"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Portal Action Buttons */}
          <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Text Manuscript Available Online</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 px-6 rounded-full bg-gradient-to-r from-accent via-cyan-500 to-blue-600 text-background font-mono text-xs font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all"
              >
                <a href="https://ijirt.org/article?manuscript=202021" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Published Paper (IJIRT Portal)</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 rounded-full border-2 border-border bg-card/60 text-foreground font-mono text-xs font-bold hover:border-accent hover:text-accent transition-all"
              >
                <a href="/IJIRT_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Download Certificate.pdf</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
