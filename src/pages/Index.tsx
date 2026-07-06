
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Add scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    
    // Check if URL has a hash fragment
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
