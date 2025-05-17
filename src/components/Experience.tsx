
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
      certificate: "#" // Replace with actual certificate link
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
      certificate: "#" // Replace with actual certificate link
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
      certificate: "#" // Replace with actual certificate link
    }
  ];

  const achievements = [
    "Participated and won in Firodiya Karandak theater competition (9 prizes, worked in set & UV art)",
    "Completed 100km cycling challenge",
    "Published \"Resume Insight\" as a smart ML project under PICT"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experienceList.map((item, index) => (
              <div 
                key={index} 
                className="animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card>
                  <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{item.position}</CardTitle>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                      {item.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 font-medium">{item.company}</div>
                    <p className="mb-4 text-muted-foreground">{item.description}</p>
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    {item.certificate && (
                      <div className="mt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            View Certificate
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Achievements</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
