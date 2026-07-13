
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
import { User, Book, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">About Me</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Background, approach, and professional focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="h-full bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                <User className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">Who I Am</h3>
              <p className="text-foreground/80 text-xs md:text-sm leading-relaxed font-normal">
                A 4th-year IT undergraduate at PICT Pune (2022-2026), specializing in full-stack development and machine learning. With hands-on experience in Python, JavaScript, and TypeScript, I’ve built scalable web applications and data-driven solutions during internships and personal projects.
              </p>
            </CardContent>
          </Card>
          
          <Card className="h-full bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                <Book className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">My Approach</h3>
              <p className="text-foreground/80 text-xs md:text-sm leading-relaxed font-normal">
                I prioritize clean, efficient code and user-centric design, leveraging modern frameworks like React, NestJS, and Node.js. My methodical approach, honed through certifications from Startup India and upGrad, ensures high-quality deliverables and continuous skill enhancement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="h-full bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">My Goals</h3>
              <p className="text-foreground/80 text-xs md:text-sm leading-relaxed font-normal">
                I aim to contribute to innovative tech solutions in software engineering or AI, while pursuing advanced studies to deepen my expertise in computer science. My goal is to deliver impactful projects that combine technical excellence with real-world value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;