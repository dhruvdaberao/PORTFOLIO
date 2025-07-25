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
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
          <div className="mt-3 h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationList.map((item, index) => (
              <div 
                key={index} 
                className="animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                        {index === 0 ? (
                          <GraduationCap className="h-6 w-6 text-accent" />
                        ) : (
                          <Book className="h-6 w-6 text-accent" />
                        )}
                      </div>
                      <CardTitle className="text-xl font-semibold">{item.degree}</CardTitle>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                      {item.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 font-medium">{item.institution}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    {item.achievements && (
                      <ul className="mt-4 text-sm text-muted-foreground list-disc list-inside">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;