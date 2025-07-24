
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
      title: "Therapy-Cat",
      description: "A mental wellness assistant using calming cat animations and AI-driven affirmation suggestions. Helps users relax using guided interactions.",
      image: "/1747499228183.jpg",
      tags: ["React", "JavaScript", "Animation", "Mental Health", "AI"],
      githubUrl: "https://github.com/dhruvdaberao/therapy-cat",
      liveUrl: "https://therapy-cat-dbl1.onrender.com/" // Replace with actual live URL when available
    },
    {
      id: 2,
      title: "AgriGains",
      description: "ML-based crop yield and suggestion system using user input. Helps farmers optimize their agricultural practices with data-driven insights.",
      image: "/1728845924768.jpg",
      tags: ["Python", "Machine Learning", "React", "Agricultural Tech"],
      githubUrl: "https://github.com/dhruvdaberao/agrigains",
      liveUrl: "https://agrigains.onrender.com" // Replace with actual live URL when available
    },
    {
      id: 3,
      title: "Resume Insight",
      description: "Resume analyzer with intelligent scoring and feedback. An automated tool that provides insights to improve job application success.",
      image: "/1745746187888.jpg",
      tags: ["Node.js", "Express.js", "MongoDB", "Text Analytics"],
      githubUrl: "https://github.com/dhruvdaberao/resume-insight",
      liveUrl: "https://resume-insight.vercel.app/" // Replace with actual live URL when available
    },
    {
      id: 4,
      title: "Dopa Track",
      description: "A dopamine-based productivity tracker that helps users monitor activities that impact dopamine levels and optimize their productivity patterns.",
      image: "/1745747227381.jpg",
      tags: ["React", "MongoDB", "Health Tech", "Productivity"],
      githubUrl: "https://github.com/dhruvdaberao/dopa-track",
      liveUrl: "https://dopa-track.vercel.app/" // Replace with actual live URL when available
    },
    
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
