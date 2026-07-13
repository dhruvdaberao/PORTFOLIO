import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Publication {
  title: string;
  venue: string;
  date: string;
  description: string;
  link?: string;
  certificate?: string;
  badge?: string;
  badgeColor?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills?: string[];
  credentialId?: string;
  certificate?: string;
}

export const publicationsData: Publication[] = [
  {
    title: "Diabetes Detection Using Thermal Footprints: An AI-Driven Framework for Early Risk Stratification of Diabetic Foot Complications",
    venue: "International Journal of Innovative Research in Technology (IJIRT)",
    date: "Published May 2026 (Paper ID: IJIRT202021)",
    description:
      "Published a peer-reviewed research paper proposing an AI-powered framework for the early detection of diabetic foot complications using plantar thermal imaging. Leverages deep learning-based CNN image classification, automated risk reporting, and clinical workflow support to enable scalable non-invasive preventive healthcare.",
    link: "https://ijirt.org/article?manuscript=202021",
    certificate: "/documents/certificates/IJIRT_Diabetes_Detection_Paper_Certificate.pdf",
    badge: "IJIRT Certified",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
  },
  {
    title: "ResumeInsight: An AI-Driven Framework for Semantic Resume–Job Matching and Skill-Gap Analysis",
    venue: "IEEE GITCON 2025",
    date: "Accepted July 2025 (Paper ID: 703)",
    description:
      "Presented an NLP/ML framework using spaCy, regex, and Levenshtein distance for semantic resume-job matching, achieving 89.3% F1-score for skill tagging and 75% accuracy in fit prediction with Random Forest, XGBoost, and ANN. Accepted for oral presentation at IEEE GITCON 2025 and published on IEEE Xplore.",
    link: "https://ieeexplore.ieee.org/document/11377312",
    certificate: "/documents/certificates/IEEE_GITCON_2025_ResumeInsight_Paper_Certificate.pdf",
    badge: "IEEE Xplore Accepted",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/30"
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Startup India Learning Program",
    issuer: "Startup India",
    date: "Oct 2024",
    description:
      "Completed the Startup India Learning Program, gaining insights into entrepreneurship, business planning, fundraising, and startup growth strategies. Developed knowledge of key aspects of building and scaling a successful startup.",
    certificate: "/documents/certificates/Startup_India_Learning_Program_Certificate.jpg",
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
    certificate: "https://upgrad.certificate.givemycertificate.com/c/badf7556-37f2-40e9-929b-3f11544d35ca",
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
    certificate: "https://upgrad.certificate.givemycertificate.com/c/593a38eb-b23e-438a-858f-7367588e93d5",
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
    certificate: "https://upgrad.certificate.givemycertificate.com/c/05e1f905-879a-4ce9-aec9-9dc5e85927d9",
    skills: ["Blockchain Basics", "Cryptocurrency Trading"],
    credentialId: "05e1f905-879a-4ce9-aec9-9dc5e85927d9",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "upGrad",
    date: "Oct 2024",
    description:
      "Completed a course on Generative AI, gaining hands-on experience with AI models, prompt engineering, and content generation. Developed a solid understanding of ethical considerations and real-world applications using tools like OpenAI and Hugging Face.",
    certificate: "https://upgrad.certificate.givemycertificate.com/c/bc0c8204-47ec-4a89-bc7e-1a832afde2ad",
    skills: [
      "AI Model Training",
      "Generative Models",
      "Prompt Engineering",
      "AI Tools Proficiency",
    ],
    credentialId: "bc0c8204-47ec-4a89-bc7e-1a832afde2ad",
  },
];

const Publications = () => {
  const publications = publicationsData;
  const certifications = certificationsData;

  return (
    <section id="publications" className="py-20 bg-secondary/20 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Publications & Certifications</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-sm">
            Peer-reviewed academic research published in international medical AI & NLP journals, accompanied by professional industry certifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.length > 0 && (
            <div className="mb-14">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">Peer-Reviewed Research</h3>
              <div className="space-y-4">
                {publications.map((item, index) => (
                  <Card key={index} className="bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                    <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-3 pt-5 px-6">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mt-0.5">
                          <FileText className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-bold leading-snug text-foreground">{item.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-2 mt-1.5">
                            {item.badge && (
                              <span className="inline-block px-2 py-0.5 text-[11px] font-semibold rounded bg-accent/10 text-accent border border-accent/20">
                                {item.badge}
                              </span>
                            )}
                            <span className="text-xs font-medium text-muted-foreground">{item.venue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-accent px-2.5 py-1 bg-accent/10 rounded border border-accent/20 shrink-0">
                        {item.date}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 pb-5 px-6">
                      <p className="mb-5 text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.link && (
                          <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-white font-medium text-xs h-8 shadow-none" asChild>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                              <ExternalLink className="h-3.5 w-3.5" />
                              View Publication
                            </a>
                          </Button>
                        )}
                        {item.certificate && (
                          <Button variant="outline" size="sm" className="border border-accent/40 hover:border-accent hover:bg-accent/10 hover:text-accent font-medium text-xs h-8" asChild>
                            <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                              <Download className="h-3.5 w-3.5 text-accent" />
                              View Certificate
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {certifications.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">Industry Certifications</h3>
              <div className="space-y-4">
                {certifications.map((item, index) => (
                  <Card key={index} className="bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                    <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-3 pt-5 px-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                          <Award className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-bold text-foreground">{item.title}</CardTitle>
                          <div className="text-xs font-medium text-muted-foreground mt-0.5">{item.issuer}</div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 text-xs font-semibold text-accent px-2.5 py-1 bg-accent/10 rounded border border-accent/20 shrink-0">
                        {item.date}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-1 pb-5 px-6">
                      <p className="mb-4 text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                      {item.certificate && (
                        <Button variant="outline" size="sm" className="border border-accent/40 hover:border-accent hover:bg-accent/10 hover:text-accent font-medium text-xs h-8" asChild>
                          <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                            <Download className="h-3.5 w-3.5 text-accent" />
                            View Certificate
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
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
