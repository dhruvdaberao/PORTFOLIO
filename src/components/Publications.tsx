
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  venue: string;
  date: string;
  description: string;
  link?: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificate?: string;
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Resume Insight",
      venue: "PICT",
      date: "April 2024",
      description: "Presented Resume Insight as a smart ML project that helps evaluate and improve resumes for better job application outcomes.",
      link: "#" // Replace with actual link when available
    }
  ];

  const certifications: Certification[] = [
    {
      title: "AI/ML Virtual Internship Certificate",
      issuer: "EduSkills/Google",
      date: "2024",
      description: "Completed a comprehensive internship program focused on practical machine learning and AI applications.",
      certificate: "#" // Replace with actual certificate link
    },
    {
      title: "Frontend Development",
      issuer: "Online Platform",
      date: "2023",
      description: "Completed coursework in modern frontend development techniques and frameworks.",
      certificate: "#" // Replace with actual certificate link
    },
    {
      title: "IPR Course",
      issuer: "Alison",
      date: "2023",
      description: "Completed a course on Intellectual Property Rights and their applications in the tech industry.",
      certificate: "#" // Replace with actual certificate link
    }
  ];

  return (
    <section id="publications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Publications & Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Publications</h3>
              <div className="space-y-8">
                {publications.map((item, index) => (
                  <div 
                    key={index} 
                    className="animate-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card>
                      <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                            <FileText className="h-5 w-5 text-accent" />
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </div>
                        <div className="mt-2 md:mt-0 text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                          {item.date}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-2 font-medium">{item.venue}</div>
                        <p className="mb-4 text-muted-foreground">{item.description}</p>
                        {item.link && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              <ExternalLink className="h-4 w-4" />
                              View Publication
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
              <div className="space-y-8">
                {certifications.map((item, index) => (
                  <div 
                    key={index} 
                    className="animate-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card>
                      <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                            <Award className="h-5 w-5 text-accent" />
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </div>
                        <div className="mt-2 md:mt-0 text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                          {item.date}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-2 font-medium">{item.issuer}</div>
                        <p className="mb-4 text-muted-foreground">{item.description}</p>
                        {item.certificate && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              <Download className="h-4 w-4" />
                              View Certificate
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
