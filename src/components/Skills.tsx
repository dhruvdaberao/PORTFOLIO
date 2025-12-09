






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
        { name: "JavaScript", level: 4, description: "ES6+, async programming, client-side scripting" },
        { name: "TypeScript", level: 4, description: "Type-safe JavaScript, React development" },
        { name: "C++", level: 4, description: "Algorithms, data structures, performance-critical code" },
        { name: "Java", level: 3, description: "OOP, Android development basics" },
        { name: "SQL", level: 3, description: "Database queries, schema design" },
        { name: "Bash / Shell Scripting", level: 3, description: "Automation, server management" },
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML", level: 5, description: "Semantic markup, SEO optimization" },
        { name: "CSS", level: 5, description: "Responsive design, animations, Tailwind CSS" },
        { name: "React.js", level: 4, description: "Hooks, component architecture" },
        { name: "Tailwind CSS", level: 4, description: "Utility-first styling, rapid prototyping" },
        { name: "Next.js", level: 3, description: "SSR, SSG, API routes" },
        { name: "Redux Toolkit", level: 3, description: "State management" },
        { name: "Framer Motion", level: 3, description: "Animations, UI transitions" },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 4, description: "API development, server-side logic" },
        { name: "Express.js", level: 4, description: "REST APIs, middleware" },
        { name: "Flask", level: 4, description: "Python backend, ML model serving" },
        { name: "MongoDB", level: 3, description: "NoSQL database" },
        { name: "Firebase", level: 3, description: "Auth, Firestore, hosting" },
        { name: "PostgreSQL", level: 3, description: "Relational DBMS" },
        { name: "WebSockets", level: 3, description: "Real-time communication" },
        { name: "REST API Design", level: 4, description: "Clean architecture, scalable endpoints" },
      ],
    },
    {
      name: "Machine Learning / Data Science",
      skills: [
        { name: "scikit-learn", level: 4, description: "ML models, training pipelines" },
        { name: "pandas", level: 4, description: "Data analysis" },
        { name: "NumPy", level: 4, description: "Numerical operations" },
        { name: "TensorFlow", level: 3, description: "Neural networks" },
        { name: "Matplotlib", level: 3, description: "Plotting" },
        { name: "Seaborn", level: 3, description: "Statistical visualization" },
        { name: "OpenCV", level: 3, description: "Computer vision basics" },
        { name: "Data Cleaning / Preprocessing", level: 4, description: "ETL operations" },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git", level: 4, description: "Version control" },
        { name: "GitHub", level: 4, description: "Repos, CI/CD" },
        { name: "VS Code", level: 5, description: "Extensions, debugging" },
        { name: "Docker", level: 3, description: "Containerization" },
        { name: "Vercel", level: 4, description: "Next.js deployment" },
        { name: "Render", level: 3, description: "Backend hosting" },
        { name: "Postman", level: 4, description: "API testing" },
        { name: "Jira", level: 3, description: "Agile project management" },
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Communication", level: 5, description: "Technical writing, clarity" },
        { name: "Teamwork", level: 5, description: "Collaboration" },
        { name: "Problem-Solving", level: 5, description: "Debugging, logical thinking" },
        { name: "Time Management", level: 4, description: "Planning, prioritizing" },
        { name: "Leadership", level: 4, description: "Team handling, guidance" },
        { name: "Adaptability", level: 5, description: "Learning new tech quickly" },
        { name: "Creativity", level: 4, description: "Design thinking, UI ideas" },
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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">🛠 My Tech Stack & Strengths</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills honed through academic projects, internships, and real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <Collapsible defaultOpen={true}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl text-foreground">{category.name}</CardTitle>
                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-3 py-1.5 text-sm bg-accent text-white rounded-full hover:bg-accent/80 transition-colors duration-200"
                        >
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-xs text-white/70 ml-2">({getLevelLabel(skill.level)})</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            Continuously learning and adapting to new technologies to build impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
