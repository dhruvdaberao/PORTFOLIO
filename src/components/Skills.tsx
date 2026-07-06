






// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
// import { ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface Skill {
//   name: string;
//   level: number; // 1-5 scale (1: Beginner, 5: Expert)
//   description?: string;
// }

// interface SkillCategory {
//   name: string;
//   skills: Skill[];
// }

// const Skills = () => {
//   const skillCategories: SkillCategory[] = [
//     {
//       name: "Programming Languages",
//       skills: [
//         { name: "Python", level: 5, description: "Web development, data processing, ML pipelines" },
//         { name: "JavaScript", level: 4, description: "ES6+, async programming, client-side scripting" },
//         { name: "TypeScript", level: 4, description: "Type-safe JavaScript, React development" },
//         { name: "C++", level: 4, description: "Algorithms, data structures, performance-critical code" },
//         { name: "Java", level: 3, description: "OOP, Android development basics" },
//         { name: "SQL", level: 3, description: "Database queries, schema design" },
//       ],
//     },
//     {
//       name: "Frontend Development",
//       skills: [
//         { name: "HTML", level: 5, description: "Semantic markup, SEO optimization" },
//         { name: "CSS", level: 5, description: "Responsive design, animations, Tailwind CSS" },
//         { name: "React.js", level: 4, description: "Hooks, state management, component architecture" },
//         { name: "Tailwind CSS", level: 4, description: "Utility-first styling, rapid prototyping" },
//         { name: "Next.js", level: 3, description: "Server-side rendering, static site generation" },
//       ],
//     },
//     {
//       name: "Backend & Databases",
//       skills: [
//         { name: "Node.js", level: 4, description: "API development, server-side logic" },
//         { name: "Express.js", level: 4, description: "RESTful APIs, middleware" },
//         { name: "Flask", level: 4, description: "Python web apps, Therapy-Cat backend" },
//         { name: "MongoDB", level: 3, description: "NoSQL, document-based databases" },
//         { name: "Firebase", level: 3, description: "Authentication, real-time databases" },
//         { name: "PostgreSQL", level: 3, description: "Relational database management" },
//       ],
//     },
//     {
//       name: "Machine Learning / Data Science",
//       skills: [
//         { name: "scikit-learn", level: 4, description: "Machine learning models, hyperparameter tuning" },
//         { name: "pandas", level: 4, description: "Data analysis, manipulation" },
//         { name: "NumPy", level: 4, description: "Numerical computations, array operations" },
//         { name: "TensorFlow", level: 3, description: "Neural networks, deep learning basics" },
//         { name: "Matplotlib", level: 3, description: "Data visualization, plotting" },
//         { name: "Seaborn", level: 3, description: "Statistical data visualization" },
//       ],
//     },
//     {
//       name: "Tools & Platforms",
//       skills: [
//         { name: "Git", level: 4, description: "Version control, branching, GitHub workflows" },
//         { name: "GitHub", level: 4, description: "CI/CD, repository management" },
//         { name: "VS Code", level: 5, description: "Development environment, extensions" },
//         { name: "Docker", level: 3, description: "Containerization, deployment" },
//         { name: "Vercel", level: 3, description: "Frontend deployment, serverless functions" },
//         { name: "AWS", level: 2, description: "Cloud basics, S3, EC2" },
//       ],
//     },
//     {
//       name: "Soft Skills",
//       skills: [
//         { name: "Communication", level: 5, description: "Technical writing, presentations" },
//         { name: "Teamwork", level: 5, description: "Collaboration, agile methodologies" },
//         { name: "Problem-Solving", level: 5, description: "Analytical thinking, debugging" },
//         { name: "Time Management", level: 4, description: "Project planning, prioritization" },
//         { name: "Leadership", level: 4, description: "Team coordination, mentorship" },
//       ],
//     },
//   ];

//   const getLevelLabel = (level: number): string => {
//     switch (level) {
//       case 1: return "Beginner";
//       case 2: return "Elementary";
//       case 3: return "Intermediate";
//       case 4: return "Advanced";
//       case 5: return "Expert";
//       default: return "Intermediate";
//     }
//   };

//   return (
//     <section id="skills" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-foreground">🛠 My Tech Stack & Strengths</h2>
//           <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
//           <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
//             A comprehensive set of skills honed through academic projects, internships, and real-world applications
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
//           {skillCategories.map((category, categoryIndex) => (
//             <Card key={categoryIndex} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
//               <Collapsible defaultOpen={true}>
//                 <CollapsibleTrigger className="w-full">
//                   <CardHeader className="flex flex-row items-center justify-between pb-2">
//                     <CardTitle className="text-xl text-foreground">{category.name}</CardTitle>
//                     <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
//                   </CardHeader>
//                 </CollapsibleTrigger>
                
//                 <CollapsibleContent>
//                   <CardContent className="pt-2">
//                     <div className="flex flex-wrap gap-2">
//                       {category.skills.map((skill, skillIndex) => (
//                         <div
//                           key={skillIndex}
//                           className="px-3 py-1.5 text-sm bg-accent text-white rounded-full hover:bg-accent/80 transition-colors duration-200"
//                         >
//                           <span className="font-medium">{skill.name}</span>
//                           <span className="text-xs text-white/70 ml-2">({getLevelLabel(skill.level)})</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </CollapsibleContent>
//               </Collapsible>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-12 max-w-3xl mx-auto text-center">
//           <p className="text-lg text-muted-foreground">
//             Continuously learning and adapting to new technologies to build impactful solutions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;






// Updated Skills component with additional skills
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  description?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 5, description: "Web development, data processing, ML pipelines" },
        { name: "JavaScript (ES6+)", level: 5, description: "Async programming, closures, DOM manipulation" },
        { name: "TypeScript", level: 4, description: "Type-safe JavaScript, interface design, generics" },
        { name: "C++", level: 4, description: "Algorithms, data structures, performance-critical code" },
        { name: "SQL", level: 4, description: "Complex queries, database indexing, joins" },
        { name: "Java", level: 3, description: "OOP concepts, enterprise architecture basics" },
        { name: "Bash / Shell Scripting", level: 3, description: "Linux automation, CI/CD scripting" },
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML5 & CSS3", level: 5, description: "Semantic HTML, modern CSS animations, Flexbox/Grid" },
        { name: "React.js", level: 5, description: "Hooks, Context API, Component-Based Architecture" },
        { name: "Next.js", level: 4, description: "SSR, SSG, App Router, SEO optimization" },
        { name: "Vite", level: 5, description: "Ultra-fast bundler, React ecosystem setup" },
        { name: "Tailwind CSS & Bootstrap", level: 5, description: "Utility-first styling, responsive web design" },
        { name: "React Router & State Management", level: 4, description: "Redux Toolkit, Context, State Synchronization" },
        { name: "Progressive Web Apps (PWA)", level: 4, description: "Lazy loading, code splitting, image optimization" },
        { name: "Framer Motion", level: 3, description: "Fluid UI transitions and micro-animations" },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js & Express.js", level: 5, description: "RESTful Architecture, middleware, error handling" },
        { name: "NestJS", level: 4, description: "Enterprise TypeScript framework, modular architecture" },
        { name: "MongoDB & Atlas", level: 4, description: "NoSQL schema design, aggregation pipelines" },
        { name: "PostgreSQL & SQL", level: 4, description: "Relational DBMS, query optimization, indexing" },
        { name: "Supabase & Firestore", level: 4, description: "Real-time BaaS, row-level security, auth integration" },
        { name: "Authentication & Security", level: 4, description: "JWT, OAuth 2.0, Google/GitHub OAuth, RBAC, Cookies" },
        { name: "Socket.IO & WebSockets", level: 4, description: "Real-time bidirectional event-driven systems" },
        { name: "API Integration & Security", level: 4, description: "Input validation, REST APIs, Session Management" },
      ],
    },
    {
      name: "AI, ML & NLP",
      skills: [
        { name: "Python ML Stack", level: 5, description: "Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn" },
        { name: "NLP & spaCy", level: 4, description: "Text processing, named entity recognition, tokenization" },
        { name: "LLM Integration & Prompts", level: 4, description: "Prompt engineering, OpenAI API, AI app development" },
        { name: "Semantic Search & RAG", level: 4, description: "Vector embeddings, intelligent information retrieval" },
        { name: "Resume Parsing & Matching", level: 4, description: "Applied ML systems for automated screening" },
        { name: "Feature Engineering & Preprocessing", level: 4, description: "Data cleaning, model evaluation, metrics" },
        { name: "TensorFlow & OpenCV", level: 3, description: "Deep learning basics, computer vision pipelines" },
      ],
    },
    {
      name: "CS Fundamentals & Engineering",
      skills: [
        { name: "Data Structures & Algorithms", level: 5, description: "Problem-solving, time/space complexity optimization" },
        { name: "OOP & System Architecture", level: 4, description: "Object-oriented programming, clean code design" },
        { name: "DBMS & Operating Systems", level: 4, description: "ACID properties, process management, memory" },
        { name: "Computer Networks", level: 4, description: "HTTP/HTTPS, TCP/IP, OSI model, latency reduction" },
        { name: "Software Engineering & SDLC", level: 4, description: "Agile methodologies, debugging, documentation" },
        { name: "Performance Optimization", level: 4, description: "Profiling, memory leak detection, fast rendering" },
      ],
    },
    {
      name: "Cloud, DevOps & Tools",
      skills: [
        { name: "Git, GitHub & Actions", level: 5, description: "Version control, CI/CD pipelines, collaboration" },
        { name: "Docker & Linux", level: 4, description: "Containerization, bash commands, server setup" },
        { name: "Vercel & Render", level: 4, description: "Cloud hosting, automated deployments, domain routing" },
        { name: "Postman & API Testing", level: 5, description: "Endpoint verification, automated request suites" },
        { name: "npm & pnpm", level: 5, description: "Fast package management, workspace dependency control" },
        { name: "Third-Party APIs", level: 4, description: "Telegram Bot API, Twilio API, Resend API, Cloudinary" },
        { name: "AI Dev Assistants", level: 5, description: "GitHub Copilot, ChatGPT, Claude, Gemini, Cursor AI" },
      ],
    },
    {
      name: "Full-Stack Application Systems",
      skills: [
        { name: "E-Commerce Systems", level: 4, description: "Shopping cart development, wishlist & order management" },
        { name: "Admin Dashboards", level: 4, description: "Analytics panels, role-based access control, CRUD ops" },
        { name: "Real-Time Chat & Notifications", level: 4, description: "Live messaging, instant alert broadcasts" },
        { name: "Pagination & State Sync", level: 4, description: "Efficient data loading, synchronized client-server state" },
      ],
    },
  ];

  const getLevelLabel = (level: number): string => {
    switch (level) {
      case 1: return "Beginner";
      case 2: return "Elementary";
      case 3: return "Intermediate";
      case 4: return "Advanced";
      case 5: return "Expert";
      default: return "Intermediate";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Technical Skills & Strengths</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-sm">
            A comprehensive set of skills honed through academic projects, internships, and real-world engineering applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
              <Collapsible defaultOpen={true}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="flex flex-row items-center justify-between pb-3 pt-5 px-6">
                    <CardTitle className="text-base font-bold text-foreground">{category.name}</CardTitle>
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6 px-6">
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-3 py-1.5 text-xs bg-accent/10 border border-accent/40 rounded-md font-semibold shadow-sm hover:bg-accent/20 hover:border-accent transition-all duration-200 flex items-center"
                        >
                          <span className="text-foreground font-bold">{skill.name}</span>
                          <span className="text-[10px] text-accent font-semibold ml-1.5">({getLevelLabel(skill.level)})</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-medium">
            Continuously learning and adapting to new technologies to build scalable, impactful software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
