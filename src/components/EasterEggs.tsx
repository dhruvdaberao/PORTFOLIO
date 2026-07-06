import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Sparkles, Send, Cpu, Zap } from "lucide-react";
import confetti from "canvas-confetti";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const EasterEggs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="text-accent space-y-1">
          <p>⚡ Welcome to Dhruv&apos;s Interactive Developer Terminal &amp; Chuk AI!</p>
          <p className="text-muted-foreground text-xs">Type <span className="text-foreground font-mono font-bold">&quot;help&quot;</span> to see all available hacker commands.</p>
        </div>
      ),
    },
  ]);
  const [hackerMode, setHackerMode] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);

  // Konami Code sequence
  const KONAMI_CODE = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal with Ctrl+K or Cmd+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Check Konami Code
      setKonamiSequence((prev) => {
        const nextSequence = [...prev, e.key];
        if (nextSequence.length > KONAMI_CODE.length) {
          nextSequence.shift();
        }
        if (nextSequence.join(",") === KONAMI_CODE.join(",")) {
          triggerKonamiEgg();
          return [];
        }
        return nextSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerKonamiEgg = () => {
    setHackerMode(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#00F0FF", "#8A2BE2", "#FF007F", "#00FF66"],
    });
    setHistory((prev) => [
      ...prev,
      {
        command: "KONAMI CODE ACTIVATED",
        output: (
          <div className="p-3 bg-accent/20 border border-accent rounded text-accent font-mono text-xs animate-pulse">
            🚀 ACCESS GRANTED: CYBERPUNK HACKER MODE UNLOCKED! You found the secret retro Easter egg!
          </div>
        ),
      },
    ]);
    setIsOpen(true);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-muted-foreground font-mono">
            <p><strong className="text-accent">skills</strong> - Display Dhruv&apos;s full-stack &amp; AI tech stack</p>
            <p><strong className="text-accent">projects</strong> - List featured products &amp; systems</p>
            <p><strong className="text-accent">experience</strong> - Summarize engineering roles &amp; internships</p>
            <p><strong className="text-accent">coffee</strong> - Check Dhruv&apos;s current caffeine intake level</p>
            <p><strong className="text-accent">pokemon</strong> - Reveal Dhruv&apos;s wild developer stats</p>
            <p><strong className="text-accent">hire</strong> / <strong className="text-accent">sudo</strong> - Grant instant recruiter hiring access</p>
            <p><strong className="text-accent">clear</strong> - Clear terminal history</p>
          </div>
        );
        break;
      case "skills":
        outputNode = (
          <div className="text-xs text-foreground font-mono space-y-1">
            <p>⚡ <strong className="text-accent">Frontend:</strong> React, TypeScript, TailwindCSS, Next.js, Vite</p>
            <p>⚡ <strong className="text-accent">Backend:</strong> Node.js, NestJS, Express, Socket.IO, REST APIs</p>
            <p>⚡ <strong className="text-accent">AI / ML:</strong> Python, TensorFlow, Keras, OpenCV, Deep Learning</p>
            <p>⚡ <strong className="text-accent">Databases:</strong> MongoDB, SQL, Cloudinary, Vercel Cron</p>
          </div>
        );
        break;
      case "projects":
        outputNode = (
          <div className="text-xs font-mono space-y-1">
            <p>🎨 <strong className="text-foreground">Froodle:</strong> Real-time collaborative whiteboard (Socket.IO, Monorepo)</p>
            <p>⛅ <strong className="text-foreground">WeatherGuard:</strong> Enterprise weather notification platform (NestJS, RBAC)</p>
            <p>💬 <strong className="text-foreground">Tribe-Social:</strong> Realtime MERN social media app with AI Chuk assistant</p>
            <p>⏱️ <strong className="text-foreground">Counto:</strong> Scrapbook-style countdown app for couples</p>
          </div>
        );
        break;
      case "experience":
        outputNode = (
          <div className="text-xs font-mono text-muted-foreground">
            <p>💼 Full-Stack Engineer &amp; AI Researcher with proven internships and peer-reviewed IEEE/IJIRT publications in medical AI.</p>
          </div>
        );
        break;
      case "coffee":
        outputNode = (
          <div className="text-xs font-mono text-amber-400">
            ☕ Pouring cup #1,337... Dhruv&apos;s code runs on 99% caffeine and 1% pure engineering willpower!
          </div>
        );
        break;
      case "pokemon":
        outputNode = (
          <div className="p-2 bg-secondary border border-border rounded text-xs font-mono">
            <p className="text-accent font-bold">⚡ Wild DHRUV appeared!</p>
            <p>Type: <span className="text-purple-400">Full-Stack / AI Researcher</span></p>
            <p>HP: 1000/1000 | Mana: Infinite</p>
            <p>Special Attack: <span className="text-emerald-400">Zero-Bug Production Deployment!</span></p>
          </div>
        );
        break;
      case "hire":
      case "sudo":
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
        outputNode = (
          <div className="p-2 bg-emerald-500/20 border border-emerald-500 rounded text-xs font-mono text-emerald-300 font-bold animate-bounce">
            🚀 ACCESS GRANTED! Dhruv is ready to join your engineering team! Email: dhruvdaberao@gmail.com | Phone: +91 9423695289
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        outputNode = (
          <div className="text-xs font-mono text-destructive">
            Command not recognized: &quot;{cmd}&quot;. Type <strong className="text-foreground">&quot;help&quot;</strong> for a list of valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Terminal Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[980] bg-card/85 backdrop-blur-xl border border-accent/50 px-4 py-2.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-xs font-mono font-bold text-foreground hover:border-accent shadow-[0_0_20px_rgba(0,240,255,0.15)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <TerminalIcon className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform" />
        <span>Chuk AI / Terminal</span>
        <span className="hidden md:inline-block px-1.5 py-0.5 bg-secondary text-[10px] rounded text-muted-foreground border border-border">⌘K</span>
      </motion.button>

      {/* Cyberpunk Hacker Mode Ambient Border */}
      {hackerMode && (
        <div className="fixed inset-0 pointer-events-none z-[970] border-4 border-accent/40 animate-pulse shadow-[inset_0_0_50px_rgba(0,240,255,0.2)]" />
      )}

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-2xl bg-card border border-border/80 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] glass backdrop-blur-2xl"
            >
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-secondary/80 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={() => setHackerMode(!hackerMode)} />
                  <span className="ml-2 text-xs font-mono font-semibold text-foreground flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-accent" />
                    dhruv@portfolio:~ (Chuk AI v2.6)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHackerMode(!hackerMode)}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                      hackerMode ? "bg-accent text-background font-bold border-accent" : "bg-secondary text-muted-foreground border-border"
                    }`}
                  >
                    <Zap className="w-3 h-3 inline mr-1" /> Hacker Mode
                  </button>
                  <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 overflow-y-auto flex-1 font-mono text-xs space-y-3 bg-background/50">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-accent font-bold">dhruv@portfolio:~$</span>
                      <span className="text-foreground">{item.command}</span>
                    </div>
                    <div className="pl-4 border-l-2 border-border/60">{item.output}</div>
                  </div>
                ))}
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleCommand} className="p-3 bg-secondary/60 border-t border-border flex items-center gap-2">
                <span className="text-accent font-mono font-bold text-xs pl-1">&gt;</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a command (e.g. 'skills', 'projects', 'hire', 'coffee', 'help')..."
                  className="flex-1 bg-transparent border-none outline-none text-xs font-mono text-foreground placeholder:text-muted-foreground/60"
                  autoFocus
                />
                <button type="submit" className="p-1.5 rounded bg-accent/20 text-accent hover:bg-accent hover:text-background transition-colors">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
