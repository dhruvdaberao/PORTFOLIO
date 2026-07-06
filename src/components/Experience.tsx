import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  certificate?: string;
}

const Experience = () => {
  const experienceList: Experience[] = [
    {
      position: "AI/ML Virtual Internship",
      company: "EduSkills in collaboration with Google",
      period: "1 month",
      description: "Completed practical ML assignments with hands-on experience in Python, scikit-learn, and classification models.",
      achievements: [
        "Built machine learning models using scikit-learn",
        "Implemented classification algorithms for real-world data",
        "Completed practical assignments using Python ML ecosystem"
      ],
      certificate: "/Virtual_Internship_Eduskill.pdf" // Replace with actual certificate link
    },
    {
      position: "In-House Developer Intern",
      company: "Resume Insight at PICT",
      period: "Feb 2025 - Apr 2025",
      description: "Built a full-stack resume evaluation system using Node.js, Express.js, and MongoDB.",
      achievements: [
        "Created a resume evaluation tool using Node.js, Express.js, MongoDB",
        "Improved resume scoring model accuracy by 15%",
        "Implemented text analytics features to enhance evaluation capabilities"
      ],
      certificate: "/Inhouse-certificate.pdf" // Replace with actual certificate link
    },
    {
      position: "UI Developer Intern",
      company: "Crowdfunding Platform (Remote)",
      period: "Oct 2024 - Nov 2024",
      description: "Built UI for campaign modules using HTML/CSS/JavaScript.",
      achievements: [
        "Designed a UI module that boosted user engagement by 30%",
        "Collaborated with cross-functional teams to improve user experience",
        "Implemented responsive design principles for mobile and desktop users"
      ],
      certificate: "/Muskurahat-foundation.pdf" // Replace with actual certificate link
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Work Experience</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-sm">
            Professional internships and engineering roles across full-stack development, UI/UX, and machine learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {experienceList.map((item, index) => (
              <Card key={index} className="bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center pb-3 pt-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-foreground">{item.position}</CardTitle>
                      <div className="text-xs font-medium text-muted-foreground mt-0.5">{item.company}</div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 text-xs font-semibold text-accent px-2.5 py-1 bg-accent/10 rounded border border-accent/20 shrink-0">
                    {item.period}
                  </div>
                </CardHeader>
                <CardContent className="pt-1 pb-5 px-6">
                  <p className="mb-4 text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  <h4 className="text-xs font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  {item.certificate && (
                    <div className="mt-5 pt-4 border-t border-border/40">
                      <Button variant="outline" size="sm" className="border border-accent/40 hover:border-accent hover:bg-accent/10 hover:text-accent font-medium text-xs h-8" asChild>
                        <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          <FileText className="h-3.5 w-3.5 text-accent" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;