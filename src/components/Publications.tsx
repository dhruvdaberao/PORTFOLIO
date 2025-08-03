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
  skills?: string[];
  credentialId?: string;
  certificate?: string;
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "ResumeInsight: An AI-Driven Framework for Semantic Resume–Job Matching and Skill-Gap Analysis",
      venue: "IEEE GITCON 2025",
      date: "Accepted July 2025",
      description:
        "Presented an NLP/ML framework using spaCy, regex, and Levenshtein distance for semantic resume-job matching, achieving 89.3\% F1-score for skill tagging and 75\% accuracy in fit prediction with Random Forest, XGBoost, and ANN. Accepted for oral presentation at IEEE GITCON 2025 (Paper ID: 703) and published on IEEE Xplore.",
      link: "https://github.com/dhruvdaberao/resume-insight" // GitHub link from resume
    },
    {
      title: "Optimizing Federated Learning for Non-IID Data and Edge Devices",
      venue: "In Progress",
      date: "Ongoing",
      description:
        "Researching federated learning techniques to enable optimized, privacy-preserving machine learning on decentralized datasets. Exploring optimization algorithms, model aggregation, and secure communication protocols to enhance scalability and robustness in real-world applications.",
      link: "#" // Replace with actual link when available
    },
  ];

  const certifications: Certification[] = [
    {
      title: "Startup India Learning Program",
      issuer: "Startup India",
      date: "Oct 2024",
      description:
        "Completed the Startup India Learning Program, gaining insights into entrepreneurship, business planning, fundraising, and startup growth strategies. Developed knowledge of key aspects of building and scaling a successful startup.",
      certificate: "/certificates/Certificate_upGrad.pdf",
      skills: [
        "Startup Ecosystems",
        "Market Analysis",
        "Business Planning",
        "Investor Pitching",
      ],
      credentialId: "671233dc21538e175099f418",
    },
    {
      title: "Fundamentals of Cloud Computing",
      issuer: "upGrad",
      date: "Oct 2024",
      description:
        "Completed the Fundamentals of Cloud Computing course from upGrad, gaining a deep understanding of cloud architecture, service models (IaaS, PaaS, SaaS), and deployment models (public, private, hybrid). The course also covered cloud security, virtualization, and how cloud computing drives scalability and cost-efficiency for businesses.",
      certificate: "/CloudComputing.pdf",
      skills: [
        "Cloud Architecture",
        "Virtualization",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
        "Cloud Security",
      ],
      credentialId: "badf7556-37f2-40e9-929b-3f11544d35ca",
    },
    {
      title: "Fundamentals of Deep Learning of Neural Networks",
      issuer: "upGrad",
      date: "Oct 2024",
      description:
        "Completed a course on Deep Learning fundamentals, covering neural networks, backpropagation, and model optimization. Gained practical experience in building and training deep learning models, with a focus on real-world applications in AI and data analysis.",
      certificate: "/DeepLearning.pdf",
      skills: [
        "Neural Networks",
        "Deep Learning Algorithms",
        "Backpropagation",
        "Model Optimization",
        "Hyperparameter Tuning",
        "Data Preprocessing",
        "TensorFlow/PyTorch Proficiency",
      ],
      credentialId: "593a38eb-b23e-438a-858f-7367588e93d5",
    },
    {
      title: "Introduction to Cryptocurrency",
      issuer: "upGrad",
      date: "Oct 2024",
      description:
        "Completed a short course on cryptocurrency, gaining a foundational understanding of blockchain technology, digital assets, and decentralized finance. Covered key concepts such as cryptocurrency trading, mining, security, and regulatory challenges, providing insights into the rapidly evolving digital currency landscape.",
      certificate: "/Cryptocurrency.pdf",
      skills: ["Blockchain Basics", "Cryptocurrency Trading"],
      credentialId: "05e1f905-879a-4ce9-aec9-9dc5e85927d9",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "upGrad",
      date: "Oct 2024",
      description:
        "Completed a course on Generative AI, gaining hands-on experience with AI models, prompt engineering, and content generation. Developed a solid understanding of ethical considerations and real-world applications using tools like OpenAI and Hugging Face.",
      certificate: "/GenAI.pdf",
      skills: [
        "AI Model Training",
        "Generative Models",
        "Prompt Engineering",
        "AI Tools Proficiency",
      ],
      credentialId: "bc0c8204-47ec-4a89-bc7e-1a832afde2ad",
    },
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
                              Yet To Be Published
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