
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { User, Book, Award } from "lucide-react";

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold">About Me</h2>
//           <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           <div className="animate-in animate-delay-100">
//             <Card className="h-full hover-lift">
//               <CardContent className="flex flex-col items-center text-center p-6">
//                 <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
//                   <User className="h-6 w-6 text-accent" />
//                 </div>
//                 <h3 className="text-xl font-medium mb-2">Who I Am</h3>
//                 <p className="text-muted-foreground">
//                   An IT undergraduate at PICT Pune (2022-2025) with a passion for frontend development and machine learning. I love solving problems and creating impactful solutions.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
          
//           <div className="animate-in animate-delay-200">
//             <Card className="h-full hover-lift">
//               <CardContent className="flex flex-col items-center text-center p-6">
//                 <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
//                   <Book className="h-6 w-6 text-accent" />
//                 </div>
//                 <h3 className="text-xl font-medium mb-2">My Approach</h3>
//                 <p className="text-muted-foreground">
//                   I believe in continuous learning and staying updated with the latest technologies. I'm methodical in my work, prioritizing clean code and excellent user experiences.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
          
//           <div className="animate-in animate-delay-300">
//             <Card className="h-full hover-lift">
//               <CardContent className="flex flex-col items-center text-center p-6">
//                 <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
//                   <Award className="h-6 w-6 text-accent" />
//                 </div>
//                 <h3 className="text-xl font-medium mb-2">My Goals</h3>
//                 <p className="text-muted-foreground">
//                   I'm seeking opportunities to grow professionally, contribute to impactful projects, and pursue advanced education to further refine my skills in React and AI.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
        
//         <div className="mt-16 max-w-3xl mx-auto text-center">
//           <p className="text-lg text-muted-foreground">
//             I'm a passionate IT undergraduate driven by problem-solving and innovation. With experience in frontend development and machine learning, I've built several impactful projects, and I'm currently focused on refining my skills in React and AI to contribute meaningfully in tech-driven roles.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Book, Award, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">About Me</h2>
          <div className="mt-3 h-1 w-24 bg-accent mx-auto"></div>
        </div>

        {/* Recruiter Highlight Box - Why Hire Me */}
        <div className="mb-16 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent/10 via-purple-500/10 to-cyan-500/10 border border-accent/25 backdrop-blur-md shadow-xl relative overflow-hidden group hover:border-accent/40 transition-all duration-300">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 shadow-inner border border-accent/30 group-hover:scale-105 transition-transform">
              <Award className="h-8 w-8 md:h-10 md:w-10 text-accent" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-extrabold text-foreground">
                  Why Hire Me?
                </h3>
                <span className="text-xs px-3 py-0.5 rounded-full bg-gradient-to-r from-accent to-purple-600 text-white font-bold shadow-sm">
                  ⚡ Recruiter Highlights
                </span>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                I combine academic excellence (<strong className="text-foreground font-semibold">9.02 SGPA at PICT Pune</strong>) with enterprise-grade engineering execution. As an undergraduate, I have already <strong className="text-foreground font-semibold">published 2 peer-reviewed AI/ML research papers (IEEE & IJIRT)</strong>, shipped scalable full-stack architectures like <strong className="text-foreground font-semibold">WeatherGuard</strong> (NestJS, RBAC, Telegram Bot API) and <strong className="text-foreground font-semibold">Tribe-Social</strong> (MERN, Socket.IO, AI Assistant), and earned certifications from <strong className="text-foreground font-semibold">Startup India</strong> and upGrad. I thrive at building clean, robust backend APIs and intuitive web interfaces.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-border/40 text-xs font-semibold text-foreground/90">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> PICT Pune IT Undergrad (2026)</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> 2x Published AI Author</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-purple-500" /> Full-Stack & ML Specialist</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="animate-in animate-delay-100">
            <Card className="h-full hover-lift bg-card/80 backdrop-blur-md border border-border/60 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <User className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A 4th-year IT undergraduate at PICT Pune (2022-2026), specializing in full-stack development and machine learning. With hands-on experience in Python, JavaScript, and TypeScript, I’ve built scalable web applications and data-driven solutions during internships and personal projects.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-in animate-delay-200">
            <Card className="h-full hover-lift bg-card/80 backdrop-blur-md border border-border/60 shadow-lg hover:shadow-xl hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-14 w-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                  <Book className="h-7 w-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">My Approach</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I prioritize clean, efficient code and user-centric design, leveraging modern frameworks like React, NestJS, and Node.js. My methodical approach, honed through certifications from Startup India and upGrad, ensures high-quality deliverables and continuous skill enhancement.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-in animate-delay-300">
            <Card className="h-full hover-lift bg-card/80 backdrop-blur-md border border-border/60 shadow-lg hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-14 w-14 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">My Goals</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I aim to contribute to innovative tech solutions in software engineering or AI, while pursuing advanced studies to deepen my expertise in computer science. My goal is to deliver impactful projects that combine technical excellence with real-world value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a dedicated 4th-year IT undergraduate at PICT Pune, I’m passionate about crafting robust full-stack applications and exploring AI-driven solutions. With professional experience from internships, certifications in software development, and a strong foundation in Python, JavaScript, and TypeScript, I’m committed to delivering impactful projects. I’m eager to advance my career through challenging roles and graduate studies in computer science, focusing on scalable systems and machine learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;