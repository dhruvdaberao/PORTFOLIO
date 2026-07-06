import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle2, Copy, Check, Sparkles, Rocket, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSending(true);

    // Trigger celebratory paper airplane & confetti animation
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00F0FF", "#8A2BE2", "#FF007F", "#00FF66"],
      });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dhruvdaberao@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-background relative overflow-hidden border-t border-border/40">
      {/* Ambient aurora lighting */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-accent/5 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-accent mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT &amp; COLLABORATE</span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-foreground font-display">
            Let&apos;s Build <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">Something Awesome</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-mono">
            Whether you are recruiting for a world-class engineering team or innovating on cutting-edge AI products, my inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Schedule Call (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass p-8 rounded-3xl border border-border/80 shadow-xl bg-card/80 backdrop-blur-2xl space-y-8">
              <div>
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
                  AVAILABILITY STATUS
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Full-Time &amp; Remote Roles</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-secondary border border-border text-accent shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">Direct Email</span>
                    <div className="flex items-center gap-2">
                      <a href="mailto:dhruvdaberao@gmail.com" className="text-sm md:text-base font-bold font-mono text-foreground hover:text-accent transition-colors">
                        dhruvdaberao@gmail.com
                      </a>
                      <button
                        onClick={copyEmail}
                        className="p-1 rounded bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                        title="Copy Email"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-secondary border border-border text-purple-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">Phone / WhatsApp</span>
                    <a href="tel:+919423695289" className="text-sm md:text-base font-bold font-mono text-foreground hover:text-accent transition-colors">
                      +91 9423695289
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-secondary border border-border text-pink-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">Location</span>
                    <span className="text-sm md:text-base font-bold text-foreground">India</span>
                    <span className="text-xs text-muted-foreground block">Open to Global Remote &amp; Worldwide Relocation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 space-y-3">
                <Button
                  asChild
                  className="w-full h-12 bg-gradient-to-r from-accent via-cyan-500 to-blue-600 text-background font-mono text-xs font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all"
                >
                  <a href="mailto:dhruvdaberao@gmail.com?subject=Interview%20Invitation%20/%20Project%20Inquiry" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" /> Schedule Interview / Call
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Paper Airplane Form (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 md:p-10 rounded-3xl border border-border/80 shadow-2xl bg-card/80 backdrop-blur-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
                      Message Launched Across Cyberspace! 🚀
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-foreground">{name}</strong>! I have received your message and will respond to your inbox within <strong className="text-accent">24 hours</strong>.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSent(false);
                        setName("");
                        setEmail("");
                        setMessage("");
                      }}
                      variant="outline"
                      className="mt-6 border-border font-mono text-xs"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSend}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Doe / Recruiter"
                          className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
                          Your Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
                        Message / Project Brief *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi Dhruv, we love your interactive portfolio and would like to schedule an interview for our engineering team..."
                        className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSending}
                        className="w-full h-12 rounded-xl bg-accent text-background font-mono text-sm font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                      >
                        {isSending ? (
                          <motion.div
                            animate={{ x: [0, 300, -300, 0], y: [0, -200, 200, 0] }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="flex items-center gap-2 text-background"
                          >
                            <Send className="w-5 h-5 animate-spin" />
                            <span>Launching Airplane... ✈️</span>
                          </motion.div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            <span>Send Interactive Message 🚀</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
