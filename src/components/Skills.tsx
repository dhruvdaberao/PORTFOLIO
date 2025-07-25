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
//     <section id="skills" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800">🛠 My Tech Stack & Strengths</h2>
//           <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             A comprehensive set of skills honed through academic projects, internships, and real-world applications
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
//           {skillCategories.map((category, categoryIndex) => (
//             <Card key={categoryIndex} className="bg-white border border-gray-200 shadow-sm">
//               <Collapsible defaultOpen={true}>
//                 <CollapsibleTrigger className="w-full">
//                   <CardHeader className="flex flex-row items-center justify-between pb-2">
//                     <CardTitle className="text-xl text-gray-800">{category.name}</CardTitle>
//                     <ChevronDown className="h-5 w-5 text-gray-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
//                   </CardHeader>
//                 </CollapsibleTrigger>
                
//                 <CollapsibleContent>
//                   <CardContent className="pt-2">
//                     <div className="flex flex-wrap gap-2">
//                       {category.skills.map((skill, skillIndex) => (
//                         <div
//                           key={skillIndex}
//                           className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-md text-gray-800"
//                         >
//                           <span className="font-medium">{skill.name}</span>
//                           <span className="text-xs text-gray-600 ml-2">({getLevelLabel(skill.level)})</span>
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
//           <p className="text-lg text-gray-600">
//             Continuously learning and adapting to new technologies to build impactful solutions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;











// import React from "react";
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
// import { ChevronDown, ChevronRight } from "lucide-react";
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
//         { name: "JavaScript", level: 4, description: "Modern ES6+, async patterns, functional programming" },
//         { name: "Python", level: 4, description: "Data processing, scripting, web development" },
//         { name: "Java", level: 3, description: "Core concepts, OOP principles" },
//         { name: "C++", level: 4, description: "Algorithm implementation, data structures" },
//         { name: "SQL", level: 3, description: "Query optimization, database design" },
//       ],
//     },
//     {
//       name: "Frontend Development",
//       skills: [
//         { name: "HTML", level: 5, description: "Semantic markup, accessibility practices" },
//         { name: "CSS", level: 5, description: "Modern layouts, animations, responsive design" },
//         { name: "React.js", level: 4, description: "Hooks, context, state management" },
//         { name: "Tailwind CSS", level: 4, description: "Utility-first styling, component design" },
//       ],
//     },
//     {
//       name: "Backend & Databases",
//       skills: [
//         { name: "Node.js", level: 4, description: "API development, middleware implementation" },
//         { name: "Express.js", level: 4, description: "RESTful API architecture, routing" },
//         { name: "MongoDB", level: 3, description: "Schema design, aggregation pipelines" },
//         { name: "Firebase", level: 3, description: "Authentication, Firestore, hosting" },
//       ],
//     },
//     {
//       name: "Machine Learning / Data Science",
//       skills: [
//         { name: "scikit-learn", level: 3, description: "Classification, regression models" },
//         { name: "pandas", level: 4, description: "Data manipulation, analysis" },
//         { name: "NumPy", level: 4, description: "Numerical computing, array operations" },
//         { name: "Matplotlib", level: 3, description: "Data visualization, plotting" },
//       ],
//     },
//     {
//       name: "Tools & Platforms",
//       skills: [
//         { name: "Git", level: 4, description: "Version control, branching strategies" },
//         { name: "GitHub", level: 4, description: "Collaborative workflows, CI/CD integration" },
//         { name: "VS Code", level: 5, description: "Extensions, shortcuts, customization" },
//         { name: "Docker", level: 3, description: "Containerization, basic orchestration" },
//       ],
//     },
//     {
//       name: "Soft Skills",
//       skills: [
//         { name: "Communication", level: 5, description: "Clear documentation, technical explanation" },
//         { name: "Teamwork", level: 5, description: "Collaborative problem-solving, pair programming" },
//         { name: "Problem-Solving", level: 5, description: "Analytical thinking, creative solutions" },
//         { name: "Time Management", level: 4, description: "Prioritization, deadline adherence" },
//         { name: "Creativity", level: 4, description: "Innovative approaches to technical challenges" },
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

//   const getSkillBadgeColor = (level: number): string => {
//     switch (level) {
//       case 1: return "bg-muted text-muted-foreground";
//       case 2: return "bg-muted/80 text-muted-foreground";
//       case 3: return "bg-secondary text-secondary-foreground";
//       case 4: return "bg-accent text-accent-foreground";
//       case 5: return "bg-primary text-primary-foreground";
//       default: return "bg-secondary text-secondary-foreground";
//     }
//   };

//   return (
//     <section id="skills" className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold">🛠 My Tech Stack & Strengths</h2>
//           <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
//           <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
//             Technologies and competencies I've developed throughout my academic journey and projects
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
//           {skillCategories.map((category, categoryIndex) => (
//             <Card key={categoryIndex} className="overflow-hidden hover-lift glass">
//               <Collapsible defaultOpen={true}>
//                 <CollapsibleTrigger className="w-full">
//                   <CardHeader className="flex flex-row items-center justify-between pb-2">
//                     <CardTitle className="text-xl">{category.name}</CardTitle>
//                     <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
//                   </CardHeader>
//                 </CollapsibleTrigger>
                
//                 <CollapsibleContent>
//                   <CardContent className="pt-2">
//                     <div className="flex flex-wrap gap-2">
//                       {category.skills.map((skill, skillIndex) => (
//                         <HoverCard key={skillIndex}>
//                           <HoverCardTrigger asChild>
//                             <Badge 
//                               variant="secondary"
//                               className={cn(
//                                 "px-3 py-1.5 text-sm cursor-pointer transition-all duration-300 hover:scale-105",
//                                 getSkillBadgeColor(skill.level)
//                               )}
//                             >
//                               {skill.name}
//                             </Badge>
//                           </HoverCardTrigger>
//                           <HoverCardContent className="w-80">
//                             <div className="flex flex-col space-y-2">
//                               <h4 className="font-semibold">{skill.name}</h4>
//                               <p className="text-sm text-muted-foreground">{skill.description}</p>
//                               <div className="flex items-center justify-between mt-2">
//                                 <span className="text-xs font-medium">{getLevelLabel(skill.level)}</span>
//                                 <div className="flex">
//                                   {[...Array(5)].map((_, i) => (
//                                     <div
//                                       key={i}
//                                       className={`w-2 h-2 rounded-full mx-0.5 ${
//                                         i < skill.level ? "bg-accent" : "bg-muted"
//                                       }`}
//                                     />
//                                   ))}
//                                 </div>
//                               </div>
//                             </div>
//                           </HoverCardContent>
//                         </HoverCard>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </CollapsibleContent>
//               </Collapsible>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-12 max-w-3xl mx-auto text-center animate-in" style={{ animationDelay: "300ms" }}>
//           <p className="text-lg text-muted-foreground">
//             I'm constantly expanding my skillset and experimenting with new technologies to stay at the forefront of development practices.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number; // 1-5 scale (1: Beginner, 5: Expert)
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
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML", level: 5, description: "Semantic markup, SEO optimization" },
        { name: "CSS", level: 5, description: "Responsive design, animations, Tailwind CSS" },
        { name: "React.js", level: 4, description: "Hooks, state management, component architecture" },
        { name: "Tailwind CSS", level: 4, description: "Utility-first styling, rapid prototyping" },
        { name: "Next.js", level: 3, description: "Server-side rendering, static site generation" },
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 4, description: "API development, server-side logic" },
        { name: "Express.js", level: 4, description: "RESTful APIs, middleware" },
        { name: "Flask", level: 4, description: "Python web apps, Therapy-Cat backend" },
        { name: "MongoDB", level: 3, description: "NoSQL, document-based databases" },
        { name: "Firebase", level: 3, description: "Authentication, real-time databases" },
        { name: "PostgreSQL", level: 3, description: "Relational database management" },
      ],
    },
    {
      name: "Machine Learning / Data Science",
      skills: [
        { name: "scikit-learn", level: 4, description: "Machine learning models, hyperparameter tuning" },
        { name: "pandas", level: 4, description: "Data analysis, manipulation" },
        { name: "NumPy", level: 4, description: "Numerical computations, array operations" },
        { name: "TensorFlow", level: 3, description: "Neural networks, deep learning basics" },
        { name: "Matplotlib", level: 3, description: "Data visualization, plotting" },
        { name: "Seaborn", level: 3, description: "Statistical data visualization" },
      ],
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git", level: 4, description: "Version control, branching, GitHub workflows" },
        { name: "GitHub", level: 4, description: "CI/CD, repository management" },
        { name: "VS Code", level: 5, description: "Development environment, extensions" },
        { name: "Docker", level: 3, description: "Containerization, deployment" },
        { name: "Vercel", level: 3, description: "Frontend deployment, serverless functions" },
        { name: "AWS", level: 2, description: "Cloud basics, S3, EC2" },
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Communication", level: 5, description: "Technical writing, presentations" },
        { name: "Teamwork", level: 5, description: "Collaboration, agile methodologies" },
        { name: "Problem-Solving", level: 5, description: "Analytical thinking, debugging" },
        { name: "Time Management", level: 4, description: "Project planning, prioritization" },
        { name: "Leadership", level: 4, description: "Team coordination, mentorship" },
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
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">🛠 My Tech Stack & Strengths</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive set of skills honed through academic projects, internships, and real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <Collapsible defaultOpen={true}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl text-gray-800 dark:text-gray-100">{category.name}</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-3 py-1.5 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-gray-800 dark:text-gray-200"
                        >
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">({getLevelLabel(skill.level)})</span>
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
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Continuously learning and adapting to new technologies to build impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;