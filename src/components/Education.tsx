
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Education = () => {
  const educationList: Education[] = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "SCTR's PICT, Pune",
      period: "2022 - 2025",
      description: "Currently in third year, focusing on software development, algorithms, and machine learning. Participating in technical competitions and research projects."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shri R.L.T. College of Science, Akola",
      period: "2020 - 2022",
      description: "Completed higher secondary education with focus on science and mathematics."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Emerald Heights School (CBSE), Akola",
      period: "2013 - 2020",
      description: "Completed primary and secondary education with strong foundation in STEM subjects."
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationList.map((item, index) => (
              <div 
                key={index} 
                className="animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card>
                  <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                        {index === 0 ? (
                          <GraduationCap className="h-5 w-5 text-accent" />
                        ) : (
                          <Book className="h-5 w-5 text-accent" />
                        )}
                      </div>
                      <CardTitle className="text-xl">{item.degree}</CardTitle>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                      {item.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 font-medium">{item.institution}</div>
                    <p className="text-muted-foreground">{item.description}</p>
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
