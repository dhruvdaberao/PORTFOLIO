import React, { useEffect } from "react";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecruiterFacts } from "@/components/RecruiterFacts";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { About } from "@/components/About";
import { TechArsenal } from "@/components/TechArsenal";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { DeveloperJourney } from "@/components/DeveloperJourney";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";
import { CodePhilosophy } from "@/components/CodePhilosophy";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingNav } from "@/components/FloatingNav";
import { EasterEggs } from "@/components/EasterEggs";

const Index = () => {
  // Scroll restoration and initial dark theme setup
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    document.documentElement.classList.add('dark');
    
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative selection:bg-accent/30 selection:text-accent">
      {/* 🌟 Custom GPU Spotlight Cursor & Floating Glass Nav */}
      <CustomCursor />
      <FloatingNav />
      <EasterEggs />

      {/* 🌟 Main Layout Navigation & Sections */}
      <Header />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <RecruiterFacts />
        <CurrentlyBuilding />
        <About />
        <TechArsenal />
        <Skills />
        <Projects />
        <DeveloperJourney />
        <Experience />
        <Publications />
        <CodePhilosophy />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
