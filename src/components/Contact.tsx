import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
          <div className="mt-3 h-1 w-24 bg-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether you have a job opportunity, a project collaboration, or just want to connect, my inbox is always open!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="animate-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="h-24 bg-card/80 backdrop-blur-md border border-border/60 shadow-md hover:shadow-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-5 h-full">
                    <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-base text-foreground">Email</div>
                      <a href="mailto:dhruvdaberao@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors">
                        dhruvdaberao@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-24 bg-card/80 backdrop-blur-md border border-border/60 shadow-md hover:shadow-lg hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-5 h-full">
                    <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Linkedin className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-base text-foreground">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/dhruvdaberao/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-500 text-sm font-medium transition-colors">
                        linkedin.com/in/dhruvdaberao/
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-24 bg-card/80 backdrop-blur-md border border-border/60 shadow-md hover:shadow-lg hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-5 h-full">
                    <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <Github className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-base text-foreground">GitHub</div>
                      <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-500 text-sm font-medium transition-colors">
                        github.com/dhruvdaberao
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-24 bg-card/80 backdrop-blur-md border border-border/60 shadow-md hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center gap-4 p-5 h-full">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Download className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base text-foreground">Resume</div>
                      <a 
                        href="/DhruvDaberao_Resume_Placements.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-emerald-500 text-sm font-medium transition-colors inline-flex items-center gap-1"
                      >
                        Download Placement Resume
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-24 md:col-span-2 bg-card/80 backdrop-blur-md border border-border/60 shadow-md hover:shadow-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="flex items-center justify-center gap-4 p-5 h-full">
                    <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-base text-foreground">WhatsApp / Phone</div>
                      <a href="https://wa.me/+919322417984" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors">
                        +91 93224 17984
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
