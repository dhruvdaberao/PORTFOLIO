
// import React from "react";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   liveUrl?: string;
//   githubUrl?: string;
// }

// const Projects = () => {
//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "Therapy-Cat",
//       description: "A mental wellness assistant using calming cat animations and AI-driven affirmation suggestions. Helps users relax using guided interactions.",
//       image: "/TherapyCat.jpg",
//       tags: ["React", "JavaScript", "Animation", "Mental Health", "AI"],
//       githubUrl: "https://github.com/dhruvdaberao/therapy-cat",
//       liveUrl: "https://therapy-cat-dbl1.onrender.com/" // Replace with actual live URL when available
//     },
//     {
//       id: 2,
//       title: "AgriGains",
//       description: "ML-based crop yield and suggestion system using user input. Helps farmers optimize their agricultural practices with data-driven insights.",
//       image: "/Agrigains.jpg",
//       tags: ["Python", "Machine Learning", "React", "Agricultural Tech"],
//       githubUrl: "https://github.com/dhruvdaberao/agrigains",
//       liveUrl: "https://agrigains.onrender.com" // Replace with actual live URL when available
//     },
//     {
//       id: 3,
//       title: "Resume Insight",
//       description: "Resume analyzer with intelligent scoring and feedback. An automated tool that provides insights to improve job application success.",
//       image: "/ResumeInsight.jpg",
//       tags: ["Node.js", "Express.js", "MongoDB", "Text Analytics"],
//       githubUrl: "https://github.com/dhruvdaberao/resume-insight",
//       liveUrl: "https://resume-insight.vercel.app/" // Replace with actual live URL when available
//     },
//     {
//       id: 4,
//       title: "Dopa Track",
//       description: "A dopamine-based productivity tracker that helps users monitor activities that impact dopamine levels and optimize their productivity patterns.",
//       image: "/DopaTrack.jpg",
//       tags: ["React", "MongoDB", "Health Tech", "Productivity"],
//       githubUrl: "https://github.com/dhruvdaberao/dopa-track",
//       liveUrl: "https://dopa-track.vercel.app/" // Replace with actual live URL when available
//     },
//         {
//       id: 5,
//       title: "BrandPulse",
//       description: "A cloud-based tool to monitor LeapScholar’s online reputation with real-time sentiment analysis and interactive charts.",
//       image: "/BrandPulse.jpg", // Replace with actual image path
//       tags: ["Flask", "Render", "Chart.js", "Google Sheets API", "Cloud"],
//       githubUrl: "https://github.com/dhruvdaberao/BrandPulse",
//       liveUrl: "https://brandpulse.onrender.com"
//     },
//     {
//       id: 6,
//       title: "Portfolio",
//       description: "An AI-driven resume builder and analyzer to optimize job applications with personalized feedback.",
//       image: "/Portfolio.jpg", // Replace with actual image path
//       tags: ["Python", "Flask", "NLP", "scikit-learn"],
//       githubUrl: "https://github.com/dhruvdaberao/resume-project", // Replace with actual GitHub URL
//       liveUrl: "https://dhruvdaberao.vercel.app" // Replace with actual live URL when available
//     },
    
//   ];

//   return (
//     <section id="projects" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold">My Projects</h2>
//           <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {projects.map((project, index) => (
//             <div 
//               key={project.id} 
//               className="animate-in hover-lift"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <Card className="h-full overflow-hidden">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex gap-2">
//                   {project.liveUrl && (
//                     <Button variant="outline" size="sm" asChild>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
//                         <ExternalLink className="h-4 w-4" />
//                         Live Demo
//                       </a>
//                     </Button>
//                   )}
//                   {project.githubUrl && (
//                     <Button variant="outline" size="sm" asChild>
//                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
//                         <Github className="h-4 w-4" />
//                         View Code
//                       </a>
//                     </Button>
//                   )}
//                 </CardFooter>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





// import React from "react";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   liveUrl?: string;
//   githubUrl?: string;
// }

// const Projects = () => {
//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "Therapy-Cat",
//       description: "A calming mental wellness assistant featuring animated cats and AI-powered affirmations. Designed to reduce stress and improve mood through playful guided interactions.",
//       image: "/TherapyCat.jpg",
//       tags: ["React", "JavaScript", "Animation", "Mental Health", "AI"],
//       githubUrl: "https://github.com/dhruvdaberao/therapy-cat",
//       liveUrl: "https://therapy-cat-dbl1.onrender.com/"
//     },
//     {
//       id: 2,
//       title: "AgriGains",
//       description: "A smart agricultural platform that predicts crop yield, suggests optimal crops, and recommends fertilizers using machine learning and user inputs. Empowers farmers with data-driven insights.",
//       image: "/Agrigains.jpg",
//       tags: ["Python", "Machine Learning", "React", "Agricultural Tech"],
//       githubUrl: "https://github.com/dhruvdaberao/agrigains",
//       liveUrl: "https://agrigains.onrender.com"
//     },
//     {
//       id: 3,
//       title: "Resume Insight",
//       description: "An intelligent resume analyzer that scores resumes and provides actionable feedback. Helps job seekers optimize their applications and stand out to recruiters.",
//       image: "/ResumeInsight.jpg",
//       tags: ["Node.js", "Express.js", "MongoDB", "Text Analytics"],
//       githubUrl: "https://github.com/dhruvdaberao/resume-insight",
//       liveUrl: "https://resume-insight.vercel.app/"
//     },
//     {
//       id: 4,
//       title: "Dopa Track",
//       description: "A productivity companion that tracks dopamine-related activities and visualizes patterns. Encourages balanced habits to improve focus and mental health.",
//       image: "/DopaTrack.jpg",
//       tags: ["React", "MongoDB", "Health Tech", "Productivity"],
//       githubUrl: "https://github.com/dhruvdaberao/dopa-track",
//       liveUrl: "https://dopa-track.vercel.app/"
//     },
//     {
//       id: 5,
//       title: "BrandPulse",
//       description: "A reputation monitoring tool that performs real-time sentiment analysis on LeapScholar’s online presence. Features interactive charts and cloud integration.",
//       image: "/BrandPulse.jpg",
//       tags: ["Flask", "Render", "Chart.js", "Google Sheets API", "Cloud"],
//       githubUrl: "https://github.com/dhruvdaberao/BrandPulse",
//       liveUrl: "https://brandpulse.onrender.com"
//     },
//     {
//       id: 6,
//       title: "Portfolio",
//       description: "My personal developer portfolio showcasing projects, skills, and achievements in a clean and responsive design.",
//       image: "/Portfolio.jpg",
//       tags: ["React", "TailwindCSS", "Vercel", "Frontend"],
//       githubUrl: "https://github.com/dhruvdaberao/resume-project",
//       liveUrl: "https://dhruvdaberao.vercel.app"
//     },
//     {
//       id: 7,
//       title: "AI Certificate Verifier",
//       description: "An AI-powered web app that verifies the authenticity of certificates and diplomas. Extracts key details, detects tampering signs, and provides an authenticity score with detailed red flags.",
//       image: "/ai-certificate-verifer.png",
//       tags: ["TypeScript", "HTML/CSS", "AI", "Document Analysis"],
//       githubUrl: "https://github.com/dhruvdaberao/ai-certificate-verifier",
//       liveUrl: "https://ai-cert-verifier.vercel.app"
//     },
//     {
//       id: 8,
//       title: "Culinary Lens",
//       description: "An AI-driven kitchen assistant that analyzes food freshness, generates recipes from ingredients, and estimates calories. Designed with a modern UI and seamless AI integration.",
//       image: "/culinary-lens.png",
//       tags: ["React", "TypeScript", "TailwindCSS", "AI"],
//       githubUrl: "https://github.com/dhruvdaberao/culinary-lens",
//       liveUrl: "https://culinary-lens.vercel.app"
//     },
//        {
//       id: 9,
//       title: "Intra-Quest",
//       description: "A personality insights platform that combines quizzes with AI-powered analysis. Provides detailed personality breakdowns, strengths, weaknesses, and lifestyle recommendations.",
//       image: "/intraquest.png",
//       tags: ["React", "TypeScript", "TailwindCSS", "AI"],
//       githubUrl: "https://github.com/dhruvdaberao/clarity",
//       liveUrl: "https://intra-quest.vercel.app"
//     },
//     {
//       id: 10,
//       title: "Raccoon Scan",
//       description: "A quirky text-scanning app that lets users scan text using their camera and instantly get answers. Great for solving homework, extracting code, and quick document understanding.",
//       image: "/raccoon-scan.png",
//       tags: ["React", "Camera API", "AI", "Utility"],
//       githubUrl: "https://github.com/dhruvdaberao/raccoon-scan",
//       liveUrl: "https://raccoon-scan.vercel.app"
//     },
//     {
//       id: 11,
//       title: "CROCO",
//       description: "A personalized AI chatbot pal designed to feel like a digital friend. Offers engaging, conversational interactions and adapts to user moods and preferences.",
//       image: "/croco.png",
//       tags: ["React", "Chatbot", "AI", "Companion"],
//       githubUrl: "https://github.com/dhruvdaberao/croco",
//       liveUrl: "https://croco-ai-pal.vercel.app"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold">My Projects</h2>
//           <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {projects.map((project, index) => (
//             <div 
//               key={project.id} 
//               className="animate-in hover-lift"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <Card className="h-full overflow-hidden">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex gap-2">
//                   {project.liveUrl && (
//                     <Button variant="outline" size="sm" asChild>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
//                         <ExternalLink className="h-4 w-4" />
//                         Live Demo
//                       </a>
//                     </Button>
//                   )}
//                   {project.githubUrl && (
//                     <Button variant="outline" size="sm" asChild>
//                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
//                         <Github className="h-4 w-4" />
//                         View Code
//                       </a>
//                     </Button>
//                   )}
//                 </CardFooter>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
        {
      id: 1,
      title: "AgriGains",
      description: "A smart agricultural platform that predicts crop yield, suggests optimal crops, and recommends fertilizers using machine learning and user inputs. Empowers farmers with data-driven insights.",
      image: "/Agrigains.jpg",
      tags: ["Python", "Machine Learning", "React", "Agricultural Tech"],
      githubUrl: "https://github.com/dhruvdaberao/agrigains",
      liveUrl: "https://agrigains.onrender.com"
    },

 
    {
      id: 2,
      title: "Resume Insight",
      description: "An intelligent resume analyzer that scores resumes and provides actionable feedback. Helps job seekers optimize their applications and stand out to recruiters.",
      image: "/ResumeInsight.jpg",
      tags: ["Node.js", "Express.js", "MongoDB", "Text Analytics"],
      githubUrl: "https://github.com/dhruvdaberao/resume-insight",
      liveUrl: "https://resume-insight.vercel.app/"
    },
    {
      id: 3,
      title: "Dopa Track",
      description: "A productivity companion that tracks dopamine-related activities and visualizes patterns. Encourages balanced habits to improve focus and mental health.",
      image: "/DopaTrack.jpg",
      tags: ["React", "MongoDB", "Health Tech", "Productivity"],
      githubUrl: "https://github.com/dhruvdaberao/dopa-track",
      liveUrl: "https://dopa-track.vercel.app/"
    },
          {
      id: 4,
      title: "Therapy-Cat",
      description: "A calming mental wellness assistant featuring animated cats and AI-powered affirmations. Designed to reduce stress and improve mood through playful guided interactions.",
      image: "/TherapyCat.jpg",
      tags: ["React", "JavaScript", "Animation", "Mental Health", "AI"],
      githubUrl: "https://github.com/dhruvdaberao/therapy-cat",
      liveUrl: "https://therapy-cat-dbl1.onrender.com/"
    },
    {
      id: 5,
      title: "BrandPulse",
      description: "A reputation monitoring tool that performs real-time sentiment analysis on LeapScholar’s online presence. Features interactive charts and cloud integration.",
      image: "/BrandPulse.jpg",
      tags: ["Flask", "Render", "Chart.js", "Google Sheets API", "Cloud"],
      githubUrl: "https://github.com/dhruvdaberao/BrandPulse",
      liveUrl: "https://brandpulse.onrender.com"
    },
    {
      id: 6,
      title: "Portfolio",
      description: "My personal developer portfolio showcasing projects, skills, and achievements in a clean and responsive design.",
      image: "/Portfolio.jpg",
      tags: ["React", "TailwindCSS", "Vercel", "Frontend"],
      githubUrl: "https://github.com/dhruvdaberao/resume-project",
      liveUrl: "https://dhruvdaberao.vercel.app"
    },
    {
      id: 7,
      title: "AI Certificate Verifier",
      description: "An AI-powered web app that verifies the authenticity of certificates and diplomas. Extracts key details, detects tampering signs, and provides an authenticity score with detailed red flags.",
      image: "/ai-certificate-verifer.png",
      tags: ["TypeScript", "HTML/CSS", "AI", "Document Analysis"],
      githubUrl: "https://github.com/dhruvdaberao/ai-certificate-verifier",
      liveUrl: "https://ai-cert-verifier.vercel.app"
    },
    {
      id: 8,
      title: "Culinary Lens",
      description: "An AI-driven kitchen assistant that analyzes food freshness, generates recipes from ingredients, and estimates calories. Designed with a modern UI and seamless AI integration.",
      image: "/culinary-lens.png",
      tags: ["React", "TypeScript", "TailwindCSS", "AI"],
      githubUrl: "https://github.com/dhruvdaberao/culinary-lens",
      liveUrl: "https://culinary-lens.vercel.app"
    },
    {
      id: 9,
      title: "Intra-Quest",
      description: "A personality insights platform that combines quizzes with AI-powered analysis. Provides detailed personality breakdowns, strengths, weaknesses, and lifestyle recommendations.",
      image: "/intraquest.png",
      tags: ["React", "TypeScript", "TailwindCSS", "AI"],
      githubUrl: "https://github.com/dhruvdaberao/clarity",
      liveUrl: "https://intra-quest.vercel.app"
    },
    {
      id: 10,
      title: "Raccoon Scan",
      description: "A quirky text-scanning app that lets users scan text using their camera and instantly get answers. Great for solving homework, extracting code, and quick document understanding.",
      image: "/raccoon-scan.png",
      tags: ["React", "Camera API", "AI", "Utility"],
      githubUrl: "https://github.com/dhruvdaberao/raccoon-scan",
      liveUrl: "https://raccoon-scan.vercel.app"
    },
    {
      id: 11,
      title: "CROCO",
      description: "A personalized AI chatbot pal designed to feel like a digital friend. Offers engaging, conversational interactions and adapts to user moods and preferences.",
      image: "/croco.png",
      tags: ["React", "Chatbot", "AI", "Companion"],
      githubUrl: "https://github.com/dhruvdaberao/croco",
      liveUrl: "https://croco-ai-pal.vercel.app"
    },
    // --- added Tribe-Social project (id: 12) ---
    {
      id: 12,
      title: "Tribe-Social",
      description: "A full-stack social media app built with the MERN stack. Features a realtime feed, Socket.IO-powered DMs and Tribe chats, JWT auth, story editor with TTL expiry, and an AI assistant (Chuk) for conversational help and content moderation. Optimized for pagination and lean queries to run on low-memory hosts.",
      image: "/tribe-social.png",
      tags: ["React", "Node.js", "Socket.IO", "MongoDB", "TypeScript", "AI"],
      githubUrl: "https://github.com/dhruvdaberao/tribe-social",
      liveUrl: "https://tribe-social.vercel.app"
    },
      // --- added Counto project (id: 13) ---
{
  id: 13,
  title: "Counto",
  description:
    "A quirky, scrapbook-style countdown app for couples and friends. Features real-time shared rooms, draggable stickers, taped photos, bucket lists, looping music, chat, and a beautifully animated countdown. Uses smart polling and sync-locking to enable real-time collaboration without WebSockets.",
  image: "/counto.png",
  tags: [
    "React",
    "TailwindCSS",
    "MongoDB",
    "Vercel Serverless",
    "Real-Time Sync",
    "Aesthetic UI"
  ],
  githubUrl: "https://github.com/dhruvdaberao/CountDown",
  liveUrl: "https://counto.vercel.app"
}

      
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
