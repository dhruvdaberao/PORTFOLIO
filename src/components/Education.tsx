import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Education = () => {
  const educationList: Education[] = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "SCTR's Pune Institute of Computer Technology (PICT), Pune",
      period: "2022 - 2026",
      description: "Currently in 4th year, specializing in full-stack development, algorithms, and machine learning. Actively contributing to research projects and technical competitions.",
      achievements: [
        "CGPA: 7.12 (up to 6th semester)",
        "SGPA: 9.021 (latest semester)",
        "Published research paper on ResumeInsight for IEEE submission",
        "Developed full-stack projects using React, Node.js, and Python"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shri R.L.T. College of Science, Akola",
      period: "2020 - 2022",
      description: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, building a strong foundation for technical studies.",
      achievements: ["Percentage: 72%"]
    },
    {
      degree: "Secondary School Certificate (SSC, CBSE)",
      institution: "Emerald Heights School, Akola",
      period: "2013 - 2020",
      description: "Completed primary and secondary education with a strong emphasis on STEM subjects, fostering problem-solving and analytical skills.",
      achievements: ["Percentage: 88%"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Education</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-sm">
            Academic background and technical qualifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {educationList.map((item, index) => (
              <Card key={index} className="bg-card border border-border shadow-sm hover:border-foreground/30 transition-all duration-200">
                <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center pb-3 pt-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                      {index === 0 ? (
                        <GraduationCap className="h-5 w-5 text-foreground" />
                      ) : (
                        <Book className="h-5 w-5 text-foreground" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-foreground">{item.degree}</CardTitle>
                      <div className="text-xs font-medium text-muted-foreground mt-0.5">{item.institution}</div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 text-xs font-medium text-muted-foreground px-2.5 py-1 bg-secondary rounded border border-border shrink-0">
                    {item.period}
                  </div>
                </CardHeader>
                <CardContent className="pt-1 pb-5 px-6">
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  {item.achievements && (
                    <ul className="mt-4 text-xs text-muted-foreground list-disc list-inside space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}><strong className="text-foreground font-medium">{achievement}</strong></li>
                      ))}
                    </ul>
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

export default Education;